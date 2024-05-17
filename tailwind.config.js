/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-img": "url(./Assect/banner_img.png)",
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
