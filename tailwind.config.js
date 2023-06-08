/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'var(--font-archivo)'
      }
    },

    colors:{
      gray:{
        100: '#E5E7EB',
        200: '#D1D5DB',
        300: 'rgb(156 163 175)',
        500: '#25282D'
      },
      blue:{
        500: '#2563EB'
      }
    }
  },
  plugins: [],
}
