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
      primary: '#E9A18D',
      transparent: 'transparent',
    },
    backgroundColor: {
      secondary: '#1d1b22',
    },
    textColor: {
      white: '#fff',
      secondary: '#b3afc0',
    },
  },
  plugins: [require('tailwind-dracula')('dracula', true)],
}
