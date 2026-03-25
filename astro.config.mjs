import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://whitecoatforge.com',
  adapter: cloudflare()
});