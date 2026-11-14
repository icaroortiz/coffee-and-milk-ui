export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--sui-canvas)",
        foreground: "var(--sui-ink)",
        primary: {
          DEFAULT: "var(--sui-primary)",
          foreground: "var(--sui-on-primary)",
        },
        secondary: {
          DEFAULT: "var(--sui-surface)",
          foreground: "var(--sui-ink)",
        },
        muted: { DEFAULT: "var(--sui-inset)", foreground: "var(--sui-muted)" },
        accent: {
          DEFAULT: "var(--sui-selected)",
          foreground: "var(--sui-on-selected)",
        },
        destructive: {
          DEFAULT: "var(--sui-danger)",
          foreground: "var(--sui-on-danger)",
        },
        border: "var(--sui-border)",
        input: "var(--sui-control-border)",
        ring: "var(--sui-focus)",
      },
    },
  },
  plugins: [],
};
