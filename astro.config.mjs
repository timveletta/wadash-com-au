import { defineConfig } from "astro/config";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://wadash.com.au",
  integrations: [react(), mdx(), sitemap()],
  output: "static",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});