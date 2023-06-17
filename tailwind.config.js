/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    fontFamily: {
      mono: ["Monoton","cursive"],
      spline: ["Spline Sans Mono","monospace"]
    },
    extend: {
      fontSize:{
      '400':'250px',
    },
      minHeight: {
        '70': '70vh',
        '40': '40vh',
      },
      maxWidth: {
        '1000': '1000px',
      },
      height:{
        '36':'36rem',
      },
      gridTemplateColumns: {
        '16': 'repeat(3,minmax(40px,1fr))',
      },
      gridTemplateRows: {
        '16': 'repeat(2,min-content)',
      },
      lineHeight:{
        'ln':'1.1',
      },
      padding:{
        '100':'100px',
      },
      gap: {
        '50': '50',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': '#1A535C',
      },
    },
  },
  plugins: [require("daisyui")],
}
