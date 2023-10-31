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
    extend: {
      colors: {
        atten: '#383a58',
        primary: '#E9A18D',
        transparent: 'transparent',
        inactive: '#565167',
      },
      backgroundColor: {
        page: '#0e0d11',
        secondary: '#1d1b22',
        alt: '#1b1b1f',
      },
      textColor: {
        white: '#fff',
        black: '#000',
        secondary: '#b3afc0',
        navlink: '#e4e2e9',
      },
      stroke: {
        white: '#fff',
        secondary: '#b3afc0',
      },
      transformOrigin: {
        letter: '0 50%',
      },
      keyframes: {
        am: {
          '0%': {
            opacity: '0',
            content: "'Web Developer'",
          },
          '3%': {
            opacity: '1',
            content: "'Web Developer'",
          },
          '19%': {
            opacity: '0',
            content: "'Web Developer'",
          },
          '20%': {
            opacity: '0',
            content: "'TypeScript Wizard'",
          },
          '23%': {
            opacity: '1',
            content: "'TypeScript Wizard'",
          },
          '30%': {
            opacity: '1',
            content: "'TypeScript Wizard'",
          },
          '39%': {
            opaicty: '0',
            content: "'TypeScript Wizard'",
          },
          '40%': {
            opacity: '0',
            content: "'Hacker'",
          },
          '43%': {
            opacity: '1',
            content: "'Hacker'",
          },
          '50%': {
            opacity: '1',
            content: "'Hacker'",
          },
          '59%': {
            opacity: '0',
            content: "'Hacker'",
          },
          '60%': {
            opacity: '0',
            content: "'Linux Enthusiast'",
          },
          '63%': {
            opacity: '1',
            content: "'Linux Enthusiast'",
          },
          '70%': {
            opacity: '1',
            content: "'Linux Enthusiast'",
          },
          '79%': {
            opacity: '0',
            content: "'Linux Enthusiast'",
          },
          '80%': {
            opacity: '0',
            content: "'Perpetual Learner'",
          },
          '83%': {
            opacity: '1',
            content: "'Perpetual Learner'",
          },
          '90%': {
            opacity: '1',
            content: "'Perpetual Learner'",
          },
          '100%': {
            opacity: '0',
            content: "'Perpetual Learner'",
          },
        },
        'am-bg': {
          '0%': {
            backgroundColor: '#bd93f9',
          },
          '19%': {
            backgroundColor: '#bd93f9',
          },
          '20%': {
            backgroundColor: '#67e1fb',
          },
          '35%': {
            backgroundColor: '#67e1fb',
          },
          '40%': {
            backgroundColor: '#ff5555',
          },
          '55%': {
            backgroundColor: '#ff5555',
          },
          '60%': {
            backgroundColor: '#f1fa8c',
          },
          '75%': {
            backgroundColor: '#f1fa8c',
          },
          '80%': {
            backgroundColor: '#50fa7b',
          },
          '95%': {
            backgroundColor: '#50fa7b',
          },
          '100%': {
            backgroundColor: '#bd93f9',
          },
        },
      },
      animation: {
        am: 'am 20s ease-in infinite',
        'am-bg': 'am-bg 20s ease-in infinite',
      },
    },
  },
  plugins: [require('tailwind-dracula')('dracula', true)],
}
