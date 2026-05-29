import type { Config } from "tailwindcss";

// Tailwind v4 — most config lives in globals.css @theme block
// This file retained for any v3-compat tooling
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
