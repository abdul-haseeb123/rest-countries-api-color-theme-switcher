import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        elements: "hsl(var(--elements))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
