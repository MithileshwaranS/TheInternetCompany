/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Primary colors
        primary: {
          background: "var(--primary-background)",
          'background-light': "var(--primary-background-light)",
          'background-overlay': "var(--primary-background-overlay)",
        },
        // Secondary colors
        secondary: {
          background: "var(--secondary-background)",
        },
        // Text colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          inverse: "var(--text-inverse)",
        },
        // Border colors
        border: {
          primary: "var(--border-primary)",
          light: "var(--border-light)",
        },
        // Component-specific colors - Header
        header: {
          text: "var(--header-text)",
          'item-bg': "var(--header-item-bg)",
        },
        // Component-specific colors - Button
        button: {
          'text-primary': "var(--button-text-primary)",
          'text-secondary': "var(--button-text-secondary)",
          'bg-primary': "var(--button-bg-primary)",
          'bg-secondary': "var(--button-bg-secondary)",
        },
      },
      // Typography - Font Sizes
      fontSize: {
        '2xs': 'var(--font-size-2xs)',
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      // Typography - Font Weights
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
      },
      // Typography - Line Heights
      lineHeight: {
        '2xs': 'var(--line-height-2xs)',
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
      },
      // Typography - Font Families
      fontFamily: {
        primary: 'var(--font-family-primary)',
        secondary: 'var(--font-family-secondary)',
        satoshi: ['Satoshi', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      // Spacing - Margin
      margin: {
        '3xs': 'var(--margin-3xs)',
        '2xs': 'var(--margin-2xs)',
        'xs': 'var(--margin-xs)',
        'sm': 'var(--margin-sm)',
        'md': 'var(--margin-md)',
        'lg': 'var(--margin-lg)',
        'xl': 'var(--margin-xl)',
        '2xl': 'var(--margin-2xl)',
        '3xl': 'var(--margin-3xl)',
        '4xl': 'var(--margin-4xl)',
        '5xl': 'var(--margin-5xl)',
        '6xl': 'var(--margin-6xl)',
        '7xl': 'var(--margin-7xl)',
      },
      // Spacing - Padding
      padding: {
        '3xs': 'var(--padding-3xs)',
        '2xs': 'var(--padding-2xs)',
        'xs': 'var(--padding-xs)',
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
        '3xl': 'var(--padding-3xl)',
        '4xl': 'var(--padding-4xl)',
        '5xl': 'var(--padding-5xl)',
        '6xl': 'var(--padding-6xl)',
        '7xl': 'var(--padding-7xl)',
        '8xl': 'var(--padding-8xl)',
        '9xl': 'var(--padding-9xl)',
        '10xl': 'var(--padding-10xl)',
        '11xl': 'var(--padding-11xl)',
      },
      // Spacing - Gap
      gap: {
        '3xs': 'var(--gap-3xs)',
        '2xs': 'var(--gap-2xs)',
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
        '6xl': 'var(--gap-6xl)',
      },
      // Border Radius
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'full': 'var(--radius-full)',
      },
      // Border Width
      borderWidth: {
        'thin': 'var(--border-width-thin)',
      },
      // Layout - Width
      width: {
        'container': 'var(--width-container)',
        'logo': 'var(--width-logo)',
        'icon': 'var(--width-icon)',
        'card': 'var(--width-card)',
        '32': 'var(--width-32)',
        '48': 'var(--width-48)',
        '60': 'var(--width-60)',
        '74': 'var(--width-74)',
        '78': 'var(--width-78)',
        '80': 'var(--width-80)',
        '90': 'var(--width-90)',
      },
    },
  },
  plugins: [],
}