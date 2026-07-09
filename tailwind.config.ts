import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        gold: "#FCC900",
        ivory: "#FBF7EE",
        fog: "#9A9A94",
        card: "#1A1A18",
        edge: "#2A2A26",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(252, 201, 0, 0.25)",
        "glow-sm": "0 0 20px rgba(252, 201, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
