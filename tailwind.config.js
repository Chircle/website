import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", // Achte darauf, dass deine Templates und Typescript-Dateien einbezogen sind.
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mechuLight: {
          "color-scheme": "mechuLight",
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(95% 0 0)",
          "base-300": "oklch(95% 0 0)",
          "base-content": "oklch(20% 0 0)",
          primary: "#F4CFC7",
          "primary-content": "#5D4A47",
          secondary: "#FFC98B",
          "secondary-content": "#6B3D14",
          accent: "#FFBE98",
          "accent-content": "#5A2D19",
          neutral: "#D8CFC4",
          "neutral-content": "#3C3C3C",
          info: "#D4C2CD",
          "info-content": "#56394B",
          success: "#C6C09C",
          "success-content": "#3C3F2F",
          warning: "#FFD59A",
          "warning-content": "#5C341B",
          error: "#E79796",
          "error-content": "#5A2322",
          "radius-selector": "2rem",
          "radius-field": "1rem",
          "radius-box": "0.5rem",
          "size-selector": "0.25rem",
          "size-field": "0.25rem",
          border: "1px",
          depth: "0",
          noise: "0",
        },
      },
    ],
  },
};
