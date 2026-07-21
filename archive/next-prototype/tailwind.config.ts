import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f2ec",
        ink: "#111111",
        mist: "#e8e4dd",
        stone: "#6d675f",
        sand: "#d9d2c7",
        panel: "#faf8f4",
        accent: "#b18a5a"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(17, 17, 17, 0.06)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"]
      },
      backgroundImage: {
        grid: "radial-gradient(circle at top, rgba(177, 138, 90, 0.12), transparent 32%), linear-gradient(to right, rgba(17,17,17,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.05) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "100% 100%, 36px 36px, 36px 36px"
      }
    }
  },
  plugins: []
};

export default config;
