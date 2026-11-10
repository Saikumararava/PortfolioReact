# Sai Kumar — Portfolio

A responsive React + Vite portfolio for **Arava Leela Naga Venkata Sai Kumar**, focused on full-stack engineering, cloud systems and applied machine learning.

## Pages

- `/` — professional overview, selected personal projects, technical stack, education and contact
- `/experience` — a separate, detailed SentraAuth work-experience page that clearly separates company product context from Sai's own contribution

## Design

- Dark security/engineering visual system with high-contrast lime accents
- Responsive desktop, tablet and mobile layouts
- Bespoke SVG architecture diagrams and project preview art
- Downloadable one-page CV at `/Sai-Kumar-Resume.pdf`
- GitHub, LinkedIn and email links

## Stack

- React 19
- Vite 6
- Plain CSS (responsive grid, design tokens, reduced-motion support)
- No runtime UI component library required

## Run locally

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Deployment

The repository is structured for Vercel static deployment:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` rewrites SPA routes to `index.html`

The existing Vercel domain should continue to be used if it is connected to this GitHub repository. A GitHub commit alone does not prove that Vercel has deployed the new build; verify the deployment dashboard after the push.

## Accuracy and confidentiality notes

- SentraAuth work is described at a public, high level. Internal repository paths, private model artifacts, raw biometric data, customer information and operational settings are intentionally excluded.
- Company product context and personal contribution are labelled separately.
- The HelpDesk project is personal work and is not described as a SentraAuth deliverable.
- Haven & Form is a fictional portfolio demo. Its repository documents browser-local persistence and no real backend, authentication or payments.
- The Chatbot repository README is still a Vite starter README and should be improved before relying on it for a detailed technical walkthrough.
- No live production demo is claimed for the featured projects.

## Contact

- GitHub: https://github.com/Saikumararava
- LinkedIn: https://linkedin.com/in/sai-kumar-arava-870505201
- Email: saikumararava23@gmail.com
