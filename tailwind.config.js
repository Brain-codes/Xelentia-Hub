/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/line-clamp",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/aspect-ratio",
  ],
};
