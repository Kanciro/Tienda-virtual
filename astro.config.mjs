import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export const prerender = false;

export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // <--- AÑADE ESTA LÍNEA
});