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
        lightPurple: "#C1C9FF",
        colorYellow: "#E7C62F",
        Purple: "#C1C9FF",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
