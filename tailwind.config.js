/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '1180px'
      }
    }
  },
  plugins: [],
}

