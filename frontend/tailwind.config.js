/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['mainFont', 'sans-serif'],
        mainFontL: ['mainFontL', 'sans-serif'],
        mainFontB: ['mainFontB', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#111111',
        tertiary: '#222222',
        textPrimary: '#ffffff',
        textSecondary: '#f1f1f1',
        textTertiary: '#C4A48F ',
        specialColor: '#C4A48F  '
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'md': {'max': '1023px'},
      'sm': {'max': '639px'}
    }
  },
  plugins: [],
}
