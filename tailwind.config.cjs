/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        dark: '#14232C',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      serif: ['serif'],
      header: ['"Fredoka"', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    maxWidth: {
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '5/10': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
    },
    maxHeight: {
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '5/10': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
    },
    flexBasis: {
      '1/8': '12.5%',
      '2/8': '25%',
      '3/8': '37.5%',
      '4/8': '50%',
      '5/8': '62.5%',
      '6/8': '75%',
      '7/8': '87.5%',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      peach: '#DE9873',
      sand: '#D9D3C0',
      blue: '#2D4550',
      darkblue: '#14232C',
      cream: '#F8F0E2',
    },
  },
}
