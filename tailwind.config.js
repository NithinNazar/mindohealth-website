/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mindo-blue': '#0d5496',      // Deep Blue - primary, clinical
        'mindo-green': '#89c83f',     // Green - wellness, fresh
        'mindo-teal': '#17ac80',      // Greenish Blue - accent
        'mindo-light-blue': '#06a3cd', // Light Blue - secondary accent
        'mindo-white': '#ffffff',
        'mindo-gray-50': '#f9fafb',
        'mindo-gray-100': '#f3f4f6',
        'mindo-gray-900': '#111827',
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2' }],
        'heading-lg': ['2rem', { lineHeight: '1.3' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section-y': '5rem',          // Vertical section padding (desktop)
        'section-y-mobile': '3rem',   // Vertical section padding (mobile)
        'section-x': '2rem',          // Horizontal section padding
        'card-gap': '2rem',           // Gap between cards
        'element-gap': '1rem',        // Gap between related elements
      },
      screens: {
        'sm': '640px',   // Mobile landscape
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop
        'xl': '1280px',  // Large desktop
        '2xl': '1536px', // Extra large desktop
      },
    },
  },
  plugins: [],
}
