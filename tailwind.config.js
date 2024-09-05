/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding:{
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        newsletter: 'url(/assets/newsletter/bg.png)',
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sans-serif'],
      },
      colors: {
        primary: '#06062a',
        secondary: '#151538',
        tertiary: '#242445',
        accent: {
          DEFAULT: '#7f1cfc',
          hover: '#6519c6',
          light: '#FFFF00',
          dark: '#0000FF',
        }
      }
    },
  },
  plugins: [],
};
