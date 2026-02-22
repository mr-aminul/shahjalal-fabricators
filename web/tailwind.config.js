/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003087",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#009cde",
          foreground: "#ffffff",
        },
        background: "#fafbfc",
        foreground: "#0f172a",
        card: "#ffffff",
        "card-foreground": "#0f172a",
        muted: "#f1f5f9",
        "muted-foreground": "#64748b",
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 4s cubic-bezier(0.65, 0, 0.35, 1) infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scroll-bounce": {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0) scaleY(0.6)" },
          "50%": { opacity: "1", transform: "translateY(6px) scaleY(1)" },
        },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0, 48, 135, 0.08), 0 8px 48px -8px rgba(0, 48, 135, 0.06)",
        glow: "0 0 60px -12px rgba(0, 48, 135, 0.2)",
      },
    },
  },
  plugins: [],
};
