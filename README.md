# RideBooker Tizen Frontend

This workspace contains the Tizen web frontend (React + Vite) for the RideBooker app.

How to run (dev):
- cd tizen_frontend
- npm install
- npm run dev
- App will be available at http://localhost:5173 by default, but the container exposes port 3000; if your environment maps to 3000, use that port accordingly.

Build for Tizen:
- npm run build:tizen
- This builds the app to dist/.
- To package as a Tizen .wgt: npm run package:tizen (creates app.wgt at root of project)

Notes:
- No environment variables are required.
- No external services are integrated; data is mocked locally.
- Theme: Ocean Professional (blue primary, amber accents), modern style with rounded corners and subtle shadows.

Repository structure:
- tizen_frontend/src contains components, screens, router, and store.