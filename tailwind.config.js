/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fontubuntu: ['Ubuntu']
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '1180px'
      }
    },
    colors: {
      primery: '#4F9C2C',
      secondary: '#75758A',
    },
    boxShadow: {
      myShadow: '0px 2px 6px 0px #00000026',
      greenShadow: '0px 2px 6px 0px rgba(142, 233, 2, 1)'
    },
    backgroundImage: {
      myGradient: 'linear-gradient(180deg, #8EE902 0%, #4F9C2C 100%);'
    }
  },
  plugins: [],
}

