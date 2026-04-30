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
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Color Custom
        primary: "#00355F",           
        secondary: "#10B981",         
        accent: "#F59E0B",            
        danger: "#EF4444",            
        warning: "#FBBF24",           
        info: "#06B6D4",              
        success: "#10B981",
      },
    },
  },
  plugins: [],
};
export default config;
