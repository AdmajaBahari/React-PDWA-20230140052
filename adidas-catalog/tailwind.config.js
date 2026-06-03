/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#4c4546",
        "surface-tint": "#5e5e5e",
        "on-surface": "#1b1b1b",
        "tertiary-fixed": "#ffdad6",
        "on-background": "#1b1b1b",
        "tertiary": "#000000",
        "on-error": "#ffffff",
        "surface": "#f9f9f9",
        "background": "#f9f9f9",
        "primary": "#000000",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f3",
        "surface-container-high": "#e8e8e8",
        "surface-variant": "#e2e2e2",
        "outline-variant": "#cfc4c5",
        "secondary": "#003ec7",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem"
      },
      spacing: {
        "base": "8px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "container-max": "1440px",
        "gutter": "24px"
      },
      fontFamily: {
        "body-md": ["Lexend", "sans-serif"],
        "body-lg": ["Lexend", "sans-serif"],
        "display-xl": ["Anton", "sans-serif"],
        "headline-lg": ["Anton", "sans-serif"],
        "headline-md": ["Anton", "sans-serif"],
        "label-sm": ["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
}