/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: '0.9375rem',
      xl: '1.5rem',
      '3xl': '2.125rem',
      '4xl': '3rem',
      '5xl': '4rem'
    },
    colors: {
      primary: '#FCB72B',
      darkNavy: '#495567',
      dimGray: '#939CAA',
      lightGray: '#E5ECF4',
      snow: '#F2F5F9',
      lightYellow: '#FFF4DF'
      // white: '#FFFFFF'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1106px',
      '2xl': '1536px'
    },
    extend: {}
  },
  plugins: []
}
