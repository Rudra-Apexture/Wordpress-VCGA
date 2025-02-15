/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: { min: "320px" },
      },
      colors: {
        "primary": "#1B1D22",
        "blues": "#1756C5",
        "light-blue": "#1D49C3",
        "dark-black": "#020d0ab2",
        "gray-border": "#E4E6EC",
        "light-gray": "#5E6671"


      },
      boxShadow: {
        main: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -2px;",
      },
      fontSize: {
        xxs: "12px",
        xs: "14px",
        small: "16px",
        medium: "18px",
        base: "20px",
        basic: "24px",
        large: "30px",
        xlarge: "35px",
        largest: "60px",
      },
      borderRadius: {
        medium: "20px",
        large: "30px",
        box: "4px 0px 0px 4px",
        newbox: "12px 12px 0px 0px"
      },
      transitionTimingFunction: {
        'in-out-cubic': 'cubic-bezier(.68,-0.55,.27,1.55)', // Custom easing
      },
    },
  },
  plugins: [],
}