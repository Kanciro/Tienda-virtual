import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // <--- QUITA el "/serverless" de aquí

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(), // <--- Déjalo así, sin parámetros extra por ahora
});