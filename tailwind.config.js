/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00C9A7',
          dark: '#00A88A',
          light: '#E0FAF5',
        },
        secondary: {
          DEFAULT: '#003D6B',
          dark: '#002749',
          light: '#E6EEF5',
        },
        accent: '#F5A623',
        danger: '#E03E3E',
        warning: '#F5A623',
        success: '#27AE60',
        info: '#2F80ED',
        gray: {
          900: '#1A1A2E',
          800: '#2D2D44',
          700: '#4A4A6A',
          500: '#8888AA',
          300: '#D0D5E8',
          100: '#F4F6FB',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      spacing: {
        s1: '4px',
        s2: '8px',
        s3: '12px',
        s4: '16px',
        s5: '20px',
        s6: '24px',
        s8: '32px',
        s10: '40px',
        s12: '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,.08)',
        md: '0 4px 12px rgba(0,0,0,.10)',
        lg: '0 8px 24px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [],
}
