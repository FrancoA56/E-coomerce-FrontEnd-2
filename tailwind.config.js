/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blackL: "#5a5a5a",
        whiteL: "#f5e6cc",
        crema: "#fff4f4",
        rosita: "#F2D5D5",
        rosa: "#F2BDBD",
        gris: "#736668",
        grisOsc: "#404040"
        // bgc: "#F1EFEF",
        // bgce: "#F9DEC9",
        // txc: "#001524",
        // botc: "#176B87",
        // logo: "#5EC3BF",
      },
      fontSize: {
        parrafo: "0.8rem",
        etiqueta: "1.2rem",
        etique: "1.6rem",
        titulo: "2rem",
      },
      fontFamily: {
        custom: ['Georgia'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
