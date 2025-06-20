// /** @type {import('tailwindcss').Config} */

// module.exports =  {
//    content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#3a31c8',
//         'dark-blue': '#262085',
//         secondary: '#ffc940',
//       },
//     boxShadow: {
//         priceCard: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
//     }
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        tertiary: 'var(--tertiary)',
        secondary: 'var(--secondory)', // Fix spelling if needed
      },
    },
  },
  plugins: [],
}
