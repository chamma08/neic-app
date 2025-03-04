/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      primary: "#294a57",
      secondary: "#1b3c45",
      accent: "#5cb874",
      text: "#333333",
      brown: "#5f2900",
      yellow: "#ffbb01",
      white: "#ffffff",
      teal: "#37B7C3",
      border: "#cccccc",
      "soft-gray": "#f4f4f4",
      "soft-green": "#EBF4F6",
      red: "#ff4545",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
