/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: "#FF7F66",
          teal: "#20C5A5",
          navy: "#0E2B5C",
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.06)",
        softThick: "0 20px 50px rgba(15, 23, 42, 0.12)"
      },
      borderRadius: {
        'xl2': "1.25rem"
      }
    },
  },
  plugins: [],
};
