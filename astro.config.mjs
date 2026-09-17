import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jitterbeancoffee.com',
  // Static by default. The wholesale endpoint opts out with
  // `export const prerender = false`, so it is the only thing that runs on a server.
  output: 'static',
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
