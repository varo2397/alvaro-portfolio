# Alvaro Castro Portfolio

React, TypeScript, and Vite portfolio site built from the CV and selected product work.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

The portfolio is configured for Vercel through `vercel.json`.

- Vercel: import the project and keep the detected Vite settings, or run `vercel --prod`.

Current production deployment:

- Vercel: https://alvaro-portfolio-ten.vercel.app

Custom domain candidates checked through Vercel on June 26, 2026:

- `alvaro-castro.dev`: available, $9.99 purchase, $13 renewal.
- `alvarocastro.dev`: available, $9.99 purchase, $13 renewal.
- `alvaro-castro.io`: available, $37.99 purchase, $46 renewal.

Vercel created the project and deployed successfully, but automatic GitHub repository connection
failed during CLI deploy. If continuous Vercel deployments are desired, grant the Vercel GitHub app
access to `varo2397/alvaro-portfolio` in GitHub and reconnect the project from the Vercel dashboard.
