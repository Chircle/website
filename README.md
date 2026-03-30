# Mechu's Website

A personal website built with Angular 18, Tailwind CSS, and DaisyUI — featuring fully custom themes that automatically switch based on the time of day.

**Live:** https://chircle.github.io/website/

## Features

- **Time-based theming** — the UI adapts its color scheme depending on whether it's morning, noon, evening, or night
- **Custom DaisyUI themes** — hand-crafted palettes (`tag`, `nacht`, `scuro`, `morning`, `noon`, `evening`, `night`) with warm, soft colors
- **Manual theme switching** — buttons to override the active theme at any time
- **Magic word easter egg** — unlock extra controls by typing the right word

## Tech Stack

- [Angular 18](https://angular.dev) (standalone components)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI 5](https://daisyui.com)

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build
npm test         # unit tests
```

## Deployment

Pushes to `main` are automatically deployed to GitHub Pages via GitHub Actions.
