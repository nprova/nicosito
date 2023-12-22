import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  // used to generate images
  output: 'server',
  adapter: vercel(),
  site:
    'https://nprova.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
