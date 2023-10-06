/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryFont: "#bfc7d2",
        blackPrimary: "#19262C"
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        code: ["Source Code Pro", "monospace"],
        des: ["Pacifico", "cursive"]
      },
    },
  },
  plugins: [],
}

