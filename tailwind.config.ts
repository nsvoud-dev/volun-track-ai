import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Solana brand palette – purple & green
        solana: {
          purple: "#9945FF",
          "purple-dark": "#7B2CBF",
          "purple-light": "#B794F6",
          green: "#14F195",
          "green-dark": "#0EA56F",
          "green-light": "#5EEAD4",
        },
        // Dashboard dark theme accents
        dashboard: {
          bg: "#0D0D12",
          card: "#16161D",
          border: "#2A2A35",
          muted: "#71717A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
