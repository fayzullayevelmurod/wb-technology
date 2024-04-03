/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "slider-img": "'./images/slider-img-1.png'",
        "intro-bg": "url(../images/intro-bg.png)",
        "intro-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 11.49%, rgba(0, 0, 0, 0.63) 77.39%)"
      },
      colors: {
        orange: "#D98910",
        blue: "#106BD9",
        gray: {
          100: "#818181",
          200: "#959596",
        },
      },
      fontSize: {
        "text-6.5xl": "64px",
      },
      lineHeight: {
        74: "74px",
      },
    },
  },
  plugins: [],
};
