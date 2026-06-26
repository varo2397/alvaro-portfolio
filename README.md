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

- Custom domain: https://alvarocastro.dev
- Vercel: https://alvaro-portfolio-ten.vercel.app

Domain details:

- `alvarocastro.dev` is registered through Vercel.
- Expiration: June 26, 2027.
- Renewal price shown by Vercel: $13 USD.
- DNS verification: configured correctly for `alvaro-portfolio`.

## Automatic Deployments

Vercel is connected to `varo2397/alvaro-portfolio`.

Deployment behavior:

- Pushes to `main` deploy to production.
- Pull requests get preview deployments.
- Framework Preset: `Vite`
- Root Directory: `.`
- Build Command: `npm run build`
- Output Directory: `dist`

If a deployment needs to be forced manually, run `vercel --prod`.
