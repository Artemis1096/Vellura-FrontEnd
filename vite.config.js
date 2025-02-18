import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: "*",
    },    
    proxy: {
      '/api': {
        target: 'http://3.82.158.190:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});