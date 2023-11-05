import mdx from '@astrojs/mdx';
import relativeLinks from 'astro-relative-links';
import { defineConfig } from 'astro/config';
import { watchModuleFiles } from './plugins/watch-module-files';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), relativeLinks(), watchModuleFiles()],
  markdown: {
    syntaxHighlight: 'prism',
  },
});
