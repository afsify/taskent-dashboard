/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Lobster Two"],
      },
      colors: {
        "main-theme": "#003135",
        "lite-theme": "#024950",
        "light-white": "rgba(255,255,255,0.17)",
        "light-red": "rgba(255, 102, 102, 0.17)",
        "light-green": "rgba(102 , 255, 102, 0.17)",
      },
    },
  },
  plugins: [],
};
