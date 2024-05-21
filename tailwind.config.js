/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-img": "url(./Assets/banner main image.png)",
        "button-image": "url(./Assets/Subtract.png)",
        carosalImage: "url(./Assets/slider baground.png)",
      },
      colors: {
        primary: "#ee0181",
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
