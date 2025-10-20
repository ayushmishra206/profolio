# Profolio

Modern single-page portfolio built with React, TypeScript, and Vite. The site highlights experience, projects, and contact details with a clean, responsive layout powered by Tailwind CSS.

## Features

- Polished landing experience with hero, skills, experience, and project sections
- Project spotlight cards that surface live deployments and source code when available
- Sticky navigation with smooth scrolling and mobile-friendly sheet menu
- Fully responsive UI using Tailwind CSS and a small set of reusable UI primitives
- Automated GitHub Pages deployment (build, SPA fallback, CNAME copy) via GitHub Actions

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Actions workflow)

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The dev server defaults to `http://localhost:5173`.

### Production Build & Preview

```bash
npm run build
npm run preview
```

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start Vite in development mode           |
| `npm run build` | Produce an optimized production build    |
| `npm run preview` | Preview the production build locally   |

## Project Structure

```
profolio/
├── client/
│   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── about-section.tsx
│       │   ├── contact-section.tsx
│       │   ├── experience-section.tsx
│       │   ├── hero-section.tsx
│       │   ├── navigation.tsx
│       │   ├── projects-section.tsx
│       │   ├── resume-section.tsx
│       │   ├── skills-section.tsx
│       │   └── ui/
│       │       └── ... (reusable UI primitives)
│       ├── hooks/
│       ├── lib/
│       └── pages/
├── public/
│   └── site.webmanifest
├── CNAME
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .github/workflows/deploy.yml
```

## Styling & Components

UI elements (buttons, cards, badges, etc.) live under `client/src/components/ui/`. Higher-level sections compose these primitives to keep styling consistent. Tailwind utility classes are configured in `tailwind.config.ts`.

## Deployment

The workflow in `.github/workflows/deploy.yml` automatically builds and deploys the site to GitHub Pages when changes land on `main` (or when triggered manually).

1. Enable **GitHub Pages** with the *GitHub Actions* source in repository settings.
2. The workflow runs `npm ci`, builds the site, copies `CNAME` into `dist/`, and publishes via `actions/deploy-pages@v4`.
3. Optional: expose a `VITE_PUBLIC_PATH` repository secret if you need to serve the site from a subdirectory. By default the app deploys at `/`.

The workflow also duplicates `index.html` as `404.html` to ensure client-side routing continues to work on GitHub Pages.

## Environment Variables

No environment variables are required for this portfolio. If you later introduce client-side configuration, remember to prefix keys with `VITE_` so Vite exposes them to the browser.

## Custom Domain

The root `CNAME` file contains `ayushmishra.com`. The deployment workflow automatically copies this into the published artifact so GitHub Pages respects the custom domain.

## License

[MIT](LICENSE)
