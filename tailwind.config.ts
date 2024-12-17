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
        first: "#1a1f27",
        white: "#fafaff",
        dark: "#cbd9e2",
        text: "#f300b4",
      },
    },
  },
  fontFamily: {
    div: ["Montserrat", "sans-serif"],
  },
  fontSize: {
    big: "6.25rem",
    h2: "1.25rem",
    normal: "0.938rem",
    small: "0.813rem",
  },
  plugins: [],
} satisfies Config;
