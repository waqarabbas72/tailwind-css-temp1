/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      'xs' : '360px',
       // => @media (min-width: 350px) { ... }
      '4xl': '1580px'
      // => @media (min-width: 1580px) { ... }

    },
  },
  plugins: [],
}
