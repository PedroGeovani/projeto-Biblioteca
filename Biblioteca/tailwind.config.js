/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html",
            "./src/**/*.{html,vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')]
}

