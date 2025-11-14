import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Buffer as NodeBuffer } from 'buffer'
import './index.css'
import App from './App.jsx'

// Lightweight shims to avoid crashes when some tooling expects Node globals.
// These are ignored by app logic but prevent runtime errors in certain envs.
// Avoid dynamic import to keep ESLint happy without extra plugins.
if (typeof globalThis.process === 'undefined') {
  globalThis.process = { env: {} }
}
if (typeof globalThis.Buffer === 'undefined' && typeof NodeBuffer !== 'undefined') {
  globalThis.Buffer = NodeBuffer
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
