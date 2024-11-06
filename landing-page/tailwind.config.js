/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "logo-blue": "#6D95FC"
      },
      letterSpacing: {
        widest: '.30em'
      }
    },
  },
  plugins: [],
};
