/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     patterns: {
        opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
        }
      },
    extend: {
      flexGrow: {
        2: '2'
      }
    },
    fontFamily: {
      'luckiest-guy': ["Luckiest Guy", "cursive"],
      'berkshire-swash': ["Berkshire Swash", "serif"],
      'roboto': ["Roboto", "sans"]
    }
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}