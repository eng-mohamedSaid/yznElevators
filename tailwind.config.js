/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b2541",
          dark: "#030a14",
          light: "#1a4a6b",
        },
        accent: {
          DEFAULT: "#f68a22",
          dark: "#d4771d",
          light: "#f89e4a",
        },
      },
    },
  },
};
