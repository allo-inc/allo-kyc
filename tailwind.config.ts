import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blue: {
          "50": "#edf9ff",
          "100": "#d6efff",
          "200": "#b5e5ff",
          "300": "#83d7ff",
          "400": "#48bfff",
          "500": "#1e9eff",
          "600": "#067eff",
          "700": "#006aff",
          "800": "#0851c5",
          "900": "#0d489b",
          "950": "#0e2c5d",
        },
        rose: {
          "50": "#fff2fc",
          "100": "#ffe3fa",
          "200": "#ffc6f5",
          "300": "#ff99e9",
          "400": "#ff5dda",
          "500": "#ff21d5",
          "600": "#ff00de",
          "700": "#cf00af",
          "800": "#a9008e",
          "900": "#890671",
          "950": "#5e004e",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: {
          "50": "#f6f7f9",
          "100": "#ecedf2",
          "200": "#d4d7e3",
          "300": "#afb4ca",
          "400": "#838cad",
          "500": "#646e93",
          "600": "#4f577a",
          "700": "#414763",
          "800": "#383d54",
          "900": "#323648",
          "950": "#13141b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
