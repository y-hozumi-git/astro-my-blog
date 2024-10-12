import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import dotenv from "dotenv";

// .envファイルを読み込む
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
