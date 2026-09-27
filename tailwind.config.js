/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#8C1524",
          100: "#6E0E1A",
          200: "#4A0812",
          300: "#9E1B2C",
        },
        rose: {
          400: "#A6763A",
          500: "#C79A4B",
          600: "#D9B25C",
          700: "#E6C378",
        },
        ink: {
          800: "#EAD9B0",
          900: "#F3E7C9",
        },
        gilt: {
          400: "#E9CB84",
          500: "#D4AF37",
          600: "#B8860B",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      fontSize: {
        "fluid-eyebrow": [
          "clamp(0.65rem, 0.55rem + 0.3vw, 0.8rem)",
          { letterSpacing: "0.28em" },
        ],
        "fluid-body": ["clamp(0.95rem, 0.85rem + 0.3vw, 1.15rem)", { lineHeight: "1.6" }],
        "fluid-name": ["clamp(2.5rem, 1.7rem + 3.6vw, 5rem)", { lineHeight: "1.05" }],
        "fluid-script-lg": ["clamp(2.4rem, 1.8rem + 2.4vw, 3.8rem)", { lineHeight: "1.1" }],
        "fluid-script-md": ["clamp(1.6rem, 1.35rem + 1vw, 2.25rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "30rem",
      },
    },
  },
  plugins: [],
};
