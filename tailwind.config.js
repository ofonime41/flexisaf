/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'giving': "linear-gradient(rgba(7, 8, 82, 0.5), rgba(37, 76, 121, 0.9)),url('@/assets/images/giving-bg.png')",
        'contact': "linear-gradient(rgba(16, 17, 107, 0.8), rgba(16, 17, 107, 0.8)),url('@/assets/images/cta-box.svg')",
         
      }


    },
  },
  plugins: [],
};
