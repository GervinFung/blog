import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.gervinfungdaxuen.surge.sh',
    integrations: [vue(), sitemap(), tailwind()],
});
