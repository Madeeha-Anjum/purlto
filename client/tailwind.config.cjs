/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      // mobile(320) 54px and desktop(1920) of 81px
      'site-name': 'clamp(2.25rem, 1.6875rem + 2.8125vw, 4.0rem)',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    extend: {
      colors: {
        'indigo-purple': 'rgb(var(--indigo-purple) / <alpha-value>)',
        'indigo-blue': 'rgb(var(--indigo-blue) / <alpha-value>)',
        'steel-blue': 'rgb(var(--steel-blue) / <alpha-value>)',
        'cool-grey': 'rgb(var(--cool-grey) / <alpha-value>)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      animation: {
        push: 'push 2s cubic-bezier(0.2, 0.5, 0.3, 1)',
      },
      keyframes: {
        push: {
          '0%': { width: '25%' },
          '50%': { width: '100%' },
          '100%': { width: '25%' },
        },
      },
      gridTemplateRows: {
        // pancake stack layout
        // https://web.dev/patterns/layout/pancake-stack/
        pancake: 'auto 1fr auto',
      },
    },
    plugins: [],
  },
};
