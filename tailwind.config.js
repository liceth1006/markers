/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F35B04",
        secondary: "#4B4B4B",
        "background-light": "#FFFFFF",
        "background-dark": "#0D1B2A",
        "text-light": "#333333",
        "text-dark": "#E1E1E1",
        "text-secondary-light": "#666666",
        "text-secondary-dark": "#B3B3B3",
        "background-secondary-light": "#F0F0F0",
        "background-secondary-dark": "#1E3A56 ",
        accent: "#88C057",
      },
    },
  },

  plugins: [],
};
