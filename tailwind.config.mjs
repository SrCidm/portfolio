/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a',
          50: '#171717',
          100: '#141414',
          200: '#121212',
          300: '#0f0f0f',
          400: '#0c0c0c',
          500: '#0a0a0a',
          600: '#080808',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },
        wine: {
          DEFAULT: '#722F37',
          50: '#f5e9ea',
          100: '#e6c7ca',
          200: '#d4a1a7',
          300: '#c27b84',
          400: '#b35e69',
          500: '#994047',
          600: '#8a3a41',
          700: '#722F37',
          800: '#5c262c',
          900: '#401b1f',
        },
        surface: {
          dark: '#0a0a0a',
          darker: '#050505',
          card: '#111111',
          border: '#1a1a1a',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a3a3a3',
          muted: '#737373',
        }
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(114, 47, 55, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(114, 47, 55, 0.6)' },
        }
      },
    },
  },
  plugins: [],
}
