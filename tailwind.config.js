/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        shukkuPurple: "#2C225A"
      },
      backgroundImage: {
        romantic: "linear-gradient(135deg, #2C225A 0%, #6D28D9 50%, #EC4899 100%)"
      },
      boxShadow: {
        glow: "0 0 20px rgba(236,72,153,0.4)"
      }
    }
  },
  plugins: []
};
