/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto_400Regular"],
        notoSerif: ["NotoSerif_400Regular"],
        notoSerifBold: ["NotoSerif_700Bold"],
      },
    },
  },
  plugins: [],
};
