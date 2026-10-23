import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jitterbeancoffee.com',
  // Static by default. The wholesale endpoint opts out with
  // `export const prerender = false`, so it is the only thing that runs on a server.
  output: 'static',
  // Canonical tags, the sitemap and the old Wix URLs all go without a slash.
  trailingSlash: 'never',
  // Everything the Wix site had indexed that has no page of its own here.
  // The four product pages were the roasts, which now live on Sourcing; the
  // booking pages were unfilled Wix template placeholders.
  redirects: {
    '/shop': '/sourcing',
    '/product-page/house-blend': '/sourcing',
    '/product-page/sumatra': '/sourcing',
    '/product-page/espresso': '/sourcing',
    '/product-page/french': '/sourcing',
    '/book-online': '/',
    '/service-page/service-name': '/',
    '/service-page/service-name-1': '/',
    '/service-page/service-name-2': '/',
    '/blank': '/',
  },
  adapter: vercel({
    imageService: true,
  }),
  image: {
    // The client's photography is the only imagery on the site.
    domains: [],
  },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
