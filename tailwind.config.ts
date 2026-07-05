import type { Config } from "tailwindcss";

/**
 * Libertas brand palette, derived from the logo.
 *  - navy:  deep navy from the wordmark  (primary)
 *  - sky:   light blue from the bird icon (accent)
 *  - mist:  light grey section backgrounds
 * Replace/extend these if the brand guidelines are updated.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#d7e3f4",
          200: "#aec7e9",
          300: "#7ea3d6",
          400: "#4f7cbf",
          500: "#2f5aa0",
          600: "#1d4276",
          700: "#14315f", // primary brand navy
          800: "#0f2747",
          900: "#0b1d38",
          950: "#081428",
        },
        sky: {
          50: "#eef8fe",
          100: "#d6eefc",
          200: "#b0defa",
          300: "#7ac6f3",
          400: "#4dadea",
          500: "#2e9bdd", // primary accent (bird)
          600: "#1e7cc0",
          700: "#1a639b",
          800: "#1a5480",
          900: "#1b476a",
        },
        mist: "#f1f5fa",
      },
      fontFamily: {
        // Wired up via next/font in app/layout.tsx
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 39, 71, 0.08), 0 8px 24px -8px rgba(15, 39, 71, 0.10)",
        card: "0 1px 2px rgba(15, 39, 71, 0.06), 0 12px 32px -12px rgba(15, 39, 71, 0.16)",
        lift: "0 8px 20px -6px rgba(15, 39, 71, 0.14), 0 24px 48px -18px rgba(20, 49, 95, 0.28)",
        glow: "0 0 0 1px rgba(46, 155, 221, 0.35), 0 16px 40px -12px rgba(46, 155, 221, 0.35)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(20,49,95,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,49,95,0.05) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -20px) scale(1.05)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        "dash-flow": "dash-flow 20s linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
