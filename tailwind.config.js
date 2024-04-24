/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "text-sm": "",
        text2xl: "",
      },
      colors: {
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(212, 45%, 89%)",
          500: "hsl(220, 15%, 55%)",
          900: "hsl(218, 44%, 22%)",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
