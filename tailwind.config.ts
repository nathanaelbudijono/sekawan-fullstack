/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "typography-50": "#fafafa",
        "typography-100": "#f5f5f5",
        "typography-200": "#e5e5e5",
        "typography-300": "#d4d4d4",
        "typography-400": "#a3a3a3",
        "typography-500": "#737373",
        "typography-600": "#525252",
        "typography-700": "#404040",
        "typography-800": "#262626",
        "typography-900": "#171717",
        "typography-950": "#0a0a0a",

        "ready-400": "#4ade80",
        "ready-500": "#22c55e",
        "ready-600": "#16a34a",

        "danger-400": "#f87171",
        "danger-500": "#ef4444",
        "danger-600": "#dc2626",
        "danger-700": "#b91c1c",

        "color-100": "#F9F7F7",

        "primary-100": "#ABE0FF",
        "primary-200": "#599FFF",
        "primary-300": "#1B80FF",
        "primary-400": "#0065DF",
        "primary-500": "#004CC0",
        "primary-600": "#0034A1",
        "primary-700": "#002084",

        "secondary-100": "#D0D0E4",
        "secondary-200": "#A4A5B7",
        "secondary-300": "#7B7B8D",
        "secondary-400": "#535465",
        "secondary-500": "#2F303F",
        "secondary-600": "#1C1D2B",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
