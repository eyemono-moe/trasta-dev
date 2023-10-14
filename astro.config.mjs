import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx()]
});