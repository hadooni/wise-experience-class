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
      backgroundImage: {
        "sign-up-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.63) 0%, rgba(148,202,255,0.27) 61.5%, rgba(255,255,255,0.27) 98%)",
        "sign-in-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(255, 255, 255, 0.46) 38.5%, rgba(148, 202, 255, 0.27) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
