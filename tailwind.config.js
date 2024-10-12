// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
