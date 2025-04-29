import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: './' ,
  plugins: [react()],
  define: {
    __DEFINES__: {}, // ✅ Fix "__DEFINES__ is not defined" error
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/global.scss";`, // ✅ If using SCSS
      },
    },
  },
});
