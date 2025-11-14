import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// Vite config compatible with Node 18 (Vite v4) and with polyfills for 'crypto' usage
// PUBLIC_INTERFACE
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true,
      // Enable common polyfills including crypto
      include: ['buffer', 'process', 'util', 'events', 'stream', 'path', 'crypto'],
    }),
  ],
  define: {
    // Ensure process.env is defined for some dependencies that may access it
    'process.env': {},
    global: 'globalThis',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      // Explicit aliases for Node core modules often referenced by plugins
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
})
