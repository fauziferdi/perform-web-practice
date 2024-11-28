import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },
  build: {
    minify: "esbuild",
  },
});
