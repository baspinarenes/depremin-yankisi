/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      shake: {
        "0%": {
          transform: "translateX(0)"
        },
        "6.5%": {
          transform: "translateX(-5px)"
        },
        "18.5%": {
          transform: "translateX(5px)"
        },
        "31.5%": {
          transform: "translateX(-5px)"
        },
        "43.5%": {
          transform: "translateX(5px)"
        },
        "50%": {
          transform: "translateX(0)"
        },
      }
    },
    animation: {
      shake: "shake 2s 900"
    },
    screens: {
      xs: "375px",
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
