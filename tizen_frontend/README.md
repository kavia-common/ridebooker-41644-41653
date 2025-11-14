# RideBooker Tizen Frontend (React + Vite)

Run (dev):
- npm install
- npm run dev
- Open the URL shown (commonly http://localhost:5173). In the tizen_frontend container this app is intended to be previewed on port 3000.

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
