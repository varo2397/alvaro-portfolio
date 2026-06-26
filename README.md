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

Vercel CLI deployment works, but the CLI Git connection failed because the Vercel GitHub app needs
access to `varo2397/alvaro-portfolio`.

To enable automatic deploys on every push:

1. Open GitHub: `Settings` -> `Applications` -> `Installed GitHub Apps` -> `Vercel` -> `Configure`.
2. Grant Vercel access to `varo2397/alvaro-portfolio`.
3. Open the Vercel dashboard project: `alvaro-portfolio`.
4. Go to `Settings` -> `Git` -> `Connect Git Repository`.
5. Select `varo2397/alvaro-portfolio`.
6. Keep these settings:
   - Framework Preset: `Vite`
   - Root Directory: `.`
   - Install Command: default
   - Build Command: `npm run build`
   - Output Directory: `dist`

After this, pushes to `main` deploy to production, and pull requests get preview deployments.
