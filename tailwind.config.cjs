/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'base-150': '#f5f5f5',
        'base-250': '#e8e8e8',
        'base-275': '#e1e1e1',
        'base-350': '#B4E9D6',
      },
    },
  },
  daisyui: {
    themes: ['lemonade'],
  },
  plugins: [require('daisyui')],
}
