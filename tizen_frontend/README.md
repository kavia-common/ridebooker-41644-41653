# RideBooker Tizen Frontend (React + Vite)

Run (dev):
- npm install
- npm run dev
- Open http://localhost:3000 (the dev server binds to 0.0.0.0:3000 inside the container; strictPort is enabled so it will fail rather than choose another port)

Notes on tooling compatibility:
- This project pins Vite to v4.x and @vitejs/plugin-react to v4.1 to ensure compatibility with Node.js 18.
- Node core polyfills (including crypto) are provided via vite-plugin-node-polyfills to avoid runtime errors such as "TypeError: crypto.hash is not a function".
- Browser polyfill packages are installed and mapped via resolve.alias in vite.config.js: crypto-browserify, stream-browserify, buffer, process, util, events.

Build:
- npm run build
- Output in dist/
- Package for Tizen TV: npm run package:tizen (creates app.wgt at project root)

Features implemented:
- Home: Bike/Car toggle, pickup and drop-off inputs with icons, map placeholder with gradient, Request Ride button.
- Sidebar: Navigate to Ride History, Payment Methods, Settings.
- Tracking: Mock driver info, ETA countdown, status progression, cancel.
- Rating: 1–5 star rating and comments, updates mock history.
- History: Displays past rides with rating and fare.
- Theme: Ocean Professional (primary #2563EB, secondary #F59E0B), modern rounded UI and subtle shadows.
- Simple hash-based router and context store—no external dependencies or API keys.

No environment variables are required.
