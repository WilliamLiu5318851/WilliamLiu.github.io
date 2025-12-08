/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // 针对 1080p 全屏或更大
        '4xl': '2560px', // 针对 2K/4K
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '110rem',
      }
    },
  },
  plugins: [],
}