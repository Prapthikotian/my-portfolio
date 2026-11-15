# Prapthi – Portfolio
React + Vite + React Three Fiber + Framer Motion.

## Run
    npm install
    npm run dev

## Edit content
Everything lives in `src/data/portfolio.js` (text, project links, contact details).
Add real project links there (`github`, `demo`); buttons appear only when a link is set.

## Contact form
Copy `.env.example` to `.env`, create a free form at formspree.io, paste the ID.
For GitHub Pages add it as a repository secret named `VITE_FORMSPREE_ID`.
Without it the form shows an honest "not configured" notice with an email fallback.

## Deploy (GitHub Pages)
1. Push to a GitHub repo on branch `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. The included workflow builds and publishes on every push.
Resume: `public/Prapthi_Resume.pdf` (converted from your DOCX). Photo: `public/prapthi.jpg`.
