/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-img": "url(./Assets/banner main image.png)",
        "car-image": "url(./Assect/card-1.png)",
      },
      colors: {
        primary: "#ee0181",
      },
    },
  },
  safelist: ["container"],
  plugins: [],
};
