/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy': '#09264A',
        'navy-deep': '#06182E',
        'silver': '#A7B0BC',
        'gray-light': '#E9EDF2',
        'warm-white': '#FAFAF8',
        'text-dark': '#243247',
        'accent-silver': '#C8D0DA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'subheading': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(9, 38, 74, 0.06), 0 4px 16px rgba(9, 38, 74, 0.04)',
        'card-hover': '0 4px 24px rgba(9, 38, 74, 0.12), 0 1px 6px rgba(9, 38, 74, 0.06)',
      },
      borderColor: {
        'silver-light': '#D4DAE2',
      },
    },
  },
  plugins: [],
}
