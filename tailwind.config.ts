import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        neutralLight: "var(--color-neutral-light)",
        dark: "var(--color-dark)"
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, var(--color-primary), var(--color-accent))"
      }
    }
  },
  plugins: []
};

export default config;
