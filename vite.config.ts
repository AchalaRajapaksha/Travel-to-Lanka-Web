import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Travel-to-Lanka-Web/", // <-- This is important!
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
