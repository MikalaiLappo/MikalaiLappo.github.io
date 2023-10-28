/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/minigames/**/*.{js,ts,jsx,tsx,mdx}',
    './src/leaderboard/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      atten: '#383a58',
      supp: '#1d1b22',
      white: '#fff',
      primary: '#E9A18D',
    },
  },
  plugins: [require('tailwind-dracula')('dracula', true)],
}
