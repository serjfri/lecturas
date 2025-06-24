import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

const BASE_URL = '/lecturas/';

export default defineConfig({
  base: BASE_URL,

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: BASE_URL + 'index.html',
      },

      workbox: {
        // Consolidated globPatterns - this should cover most assets
        globPatterns: [
            '**/*.{js,css,html}', // Main app files
            'assets/**/*.{ico,png,svg,webp,jpg,jpeg,gif}', // Common image formats in assets folder
            'manifest.json', // Ensure manifest is explicitly cached if not covered by globPatterns above
        ],
        // Removed specific icon paths from includeAssets to avoid conflicts
        // since they are covered by globPatterns and manifest icons array.
        // runtimeCaching is left as is, as it's not the primary source of previous 404s.
      },

      // IMPORTANT: Adjust includeAssets. Only list assets NOT covered by globPatterns
      // or that need specific handling, typically those directly in `public/` that aren't images.
      includeAssets: [
        'favicon.ico', // if it's directly in public/
        // 'apple-touch-icon.png', // if it's directly in public/
        // 'masked-icon.svg', // if it's directly in public/
        // NOTE: If your assets (icons) are in public/assets/, the globPatterns 'assets/**/*.{...}'
        // should pick them up automatically for precaching, avoiding the conflict.
        // Remove specific icon paths from here if they are already in the public/assets folder
        // and being picked up by globPatterns
      ],

      manifest: {
        name: "Guía de Oráculos", // Updated name
        short_name: "Oráculos", // Updated short name
        description: "Aplicación de guía para la consulta de Tarot, I Ching y Runas.", // Updated description
        theme_color: "#d97706",
        background_color: "#f97316",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: 'assets/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'assets/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ]
      }
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
