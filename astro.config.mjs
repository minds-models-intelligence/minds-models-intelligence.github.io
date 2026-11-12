// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Hide Astro's floating developer toolbar so the local preview looks like the real site.
  devToolbar: { enabled: false },
});
