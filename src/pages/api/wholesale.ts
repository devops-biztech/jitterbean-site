import type { APIRoute } from 'astro';

// The only server-rendered route on the site.
export const prerender = false;

type Field = { key: string; label: string; required: boolean; max: number };

const FIELDS: Field[] = [
  { key: 'firstName', label: 'First name', required: true, max: 80 },
  { key: 'lastName', label: 'Last name', required: true, max: 80 },
  { key: 'email', label: 'Email', required: true, max: 160 },
  { key: 'interest', label: 'What are you interested in', required: true, max: 300 },
  { key: 'located', label: 'Where are you located', required: true, max: 200 },
  { key: 'message', label: 'Message', required: false, max: 4000 },
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function wantsJson(request: Request): boolean {
  return (request.headers.get('accept') ?? '').includes('application/json');
}

function respond(
  request: Request,
  url: URL,
  status: number,
  body: { ok: boolean; message: string; errors?: Record<string, string> },
) {
  if (wantsJson(request)) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json' },
    });
  }
  // No-JS path: bounce back to the form with a readable outcome.
  const target = new URL('/wholesale', url);
  target.searchParams.set(body.ok ? 'sent' : 'error', body.ok ? '1' : body.message);
  return new Response(null, { status: 303, headers: { location: target.toString() } });
}

export const POST: APIRoute = async ({ request, url }) => {
  let data: Record<string, string> = {};

  try {
    const type = request.headers.get('content-type') ?? '';
    if (type.includes('application/json')) {
      data = await request.json();
    } else {
      const form = await request.formData();
      for (const [k, v] of form.entries()) data[k] = typeof v === 'string' ? v : '';
    }
  } catch {
    return respond(request, url, 400, { ok: false, message: 'That submission could not be read. Please try again.' });
  }

  // Bots fill every field they find; people never see this one.
  if ((data.company ?? '').trim() !== '') {
    return respond(request, url, 200, { ok: true, message: 'Thanks — we got it.' });
  }

  const errors: Record<string, string> = {};
  const clean: Record<string, string> = {};

  for (const f of FIELDS) {
    const value = (data[f.key] ?? '').trim();
    if (f.required && !value) {
      errors[f.key] = `${f.label} is required.`;
      continue;
    }
    if (value.length > f.max) {
      errors[f.key] = `${f.label} must be under ${f.max} characters.`;
      continue;
    }
    clean[f.key] = value;
  }

  if (!errors.email && clean.email && !EMAIL.test(clean.email)) {
    errors.email = 'That email address does not look right.';
  }

  if (Object.keys(errors).length > 0) {
    return respond(request, url, 422, {
      ok: false,
      message: 'Please check the highlighted fields.',
      errors,
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.WHOLESALE_TO ?? 'administrator@jitterbeancoffee.com';
  const from = import.meta.env.WHOLESALE_FROM;

  // Without mail credentials the form must fail loudly rather than pretend.
  if (!apiKey || !from) {
    console.error('[wholesale] RESEND_API_KEY or WHOLESALE_FROM is not configured.');
    if (import.meta.env.DEV) {
      console.info('[wholesale] Submission (dev, not sent):', clean);
      return respond(request, url, 200, {
        ok: true,
        message: 'Thanks — we got it. (Dev mode: logged, not emailed.)',
      });
    }
    return respond(request, url, 500, {
      ok: false,
      message: `We could not send that just now. Please email ${to} directly.`,
    });
  }

  const lines = FIELDS.map((f) => `${f.label}: ${clean[f.key] || '—'}`).join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: clean.email,
        subject: `Wholesale inquiry — ${clean.firstName} ${clean.lastName}`,
        text: `New wholesale inquiry from jitterbeancoffee.com\n\n${lines}\n`,
      }),
    });

    if (!res.ok) {
      console.error('[wholesale] Resend rejected the send:', res.status, await res.text());
      return respond(request, url, 502, {
        ok: false,
        message: `We could not send that just now. Please email ${to} directly.`,
      });
    }
  } catch (err) {
    console.error('[wholesale] Send failed:', err);
    return respond(request, url, 502, {
      ok: false,
      message: `We could not send that just now. Please email ${to} directly.`,
    });
  }

  return respond(request, url, 200, {
    ok: true,
    message: "Thanks — we got it. We'll be in touch shortly.",
  });
};
