import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://aden.io",
  output: "static",
  redirects: {
    "/": "v1",
  },
  build: {
    assets: "assets",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), astroI18next()],
});
