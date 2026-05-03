import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        timber: {
          50: "#faf6f1",
          100: "#f1e9dd",
          200: "#e3d2b8",
          300: "#d2b48c",
          400: "#bf9266",
          500: "#a8784e",
          600: "#8a5e3d",
          700: "#6c4830",
          800: "#4a3122",
          900: "#2c1d14",
        },
        cream: "#f8f4ee",
        charcoal: {
          DEFAULT: "#1f1d1a",
          soft: "#2e2b27",
          muted: "#5a5752",
        },
        sage: {
          50: "#f1f4ee",
          100: "#dde5d4",
          200: "#bccaab",
          300: "#9aaf82",
          400: "#7a945f",
          500: "#5f7a48",
          600: "#4a6038",
          700: "#3a4a2c",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose2: "68ch",
      },
      letterSpacing: {
        wider2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
