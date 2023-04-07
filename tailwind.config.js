/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        bluePrimary: "#3C50E0",
        lightBlue: "#C1C9FF",
        colorYellow: "#E7C62F",
        Purple: "#C1C9FF",
        dark: "#3C50E0",
        stoke: "#3C50E0",
        lightYellow: "E7C62F",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
