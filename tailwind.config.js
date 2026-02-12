/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ananta: {
          bg: "#05120a", // Matches logo background exactly
          gold: "#caab65", // Extracted Muted Gold
          silver: "#C0C0C0",
          text: "#F5F5F5",
          muted: "#A3A3A3",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
