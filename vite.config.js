import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // automatically update service worker
      base: '/Dashboard/',        // ensures correct paths for assets
      includeAssets: ['favicon.ico', 'robots.txt'], // any extra static files
      manifest: {
        name: "Eden's Way – Dashboard",
        short_name: "Dashboard",
        start_url: "/Dashboard/",
        scope: "/Dashboard/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#DC0B5B",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  base: "/Dashboard"
});