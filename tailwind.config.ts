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
        primary: "var(--primary)", // Add a primary color
        secondary: "var(--secondary)", // Add a secondary color
        accent: "var(--accent)", // Accent color for highlights
      },
      spacing: {
        "1": "4px", // Base spacing unit
        "2": "8px",
        "3": "16px",
        "4": "24px",
        "5": "32px",
        "6": "48px",
        "7": "64px",
        "8": "96px",
      },
      screens: {
        sm: "640px", // Small devices (mobile)
        md: "768px", // Medium devices (tablet)
        lg: "1024px", // Large devices (desktop)
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // For large screens
      },
      gridTemplateColumns: {
        // Common grid templates
        layout: "repeat(12, minmax(0, 1fr))", // 12-column grid
        card: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive card layout
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Generic sans-serif font
        serif: ["Merriweather", "serif"], // Generic serif font
        mono: ["Source Code Pro", "monospace"], // Generic monospace font
      },
    },
  },
  plugins: [],
} satisfies Config;
