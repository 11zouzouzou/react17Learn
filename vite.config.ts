import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
const path = require("path");
const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  root,
  // base: "./",
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        default: "/pages/default/default.html",
        main: "/pages/main/main.html",
      },
    },
    outDir: "../dist",
  },
});
