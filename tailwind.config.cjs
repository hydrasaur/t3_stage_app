/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation : {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0" : {opacity: 0},
          "100" : {opacity: 1}
        }
      },
      variants : {
        animation : ["motion-safe"]
      },
      colors : {
        alizarin : "#ec1c24",
        darkpink : "#a50d42",
        magenta : "#590059",
        cyan : "#22f5d8", 
        vividyellow : "#c4ff0e",
        pumpkin : "#ff7f27",
        deepskyblue : "#00A8f3"
      }
    },
  },
  plugins: [],
};
