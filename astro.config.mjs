import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://aden.io",
  base: "/v1",
  output: "static",

  build: {
    assets: "assets",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), astroI18next()],
});
