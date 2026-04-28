import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Se debió añadir esto

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',              // Esto ya lo teníamos
  adapter: vercel(),             // Esto es lo que soluciona el error
});