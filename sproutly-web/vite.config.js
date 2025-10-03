// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "CS491-Sproutly-webpage", // 👈 replace with your GitHub repo name
});
