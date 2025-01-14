import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "navy-custom": "#296CAD",
        "navy-light": "rgba(41, 108, 173, 0.11)",
        "gray-custom": "#AFAFAF",
        "gray-light": "rgba(175, 175, 175, 0.11)",
      },
    },
  },
  plugins: [],
} satisfies Config;
