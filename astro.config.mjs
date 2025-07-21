// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://proyektoz.github.io',
  base: 'izaje',
  integrations: [icon()]
});
