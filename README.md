# scFvGen — Companion Site

Writeup for **scFvGen**, an AI-designed anti-CD19 scFv pipeline for CAR-T therapy.

Live: https://fahad8389.github.io/scFvGen-site/

Pipeline code: https://github.com/Fahad8389/scFvGen

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

Note: `next.config.js` has `basePath: "/scFvGen-site"` for the GitHub Pages deploy. Local dev pages are still served from `/` but assets are prefixed.

## Build static export

```bash
npm run build
# output: out/
```

Stack: Next.js 15, Tailwind v3, framer-motion, react-parallax-tilt, lucide-react. Deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
