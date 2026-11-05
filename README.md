# Turtle IP Holding — StampBy website

Static website with two pages:
- `index.html` — digital business card (narrow, centered card layout)
- `landing.html` — StampBy landing page (full-width, with mobile hamburger menu)
- `style.css` — shared responsive design
- `script.js` — language toggle (HE/EN), mobile menu, reveal animations

## Publish with GitHub Pages
1. Create a public repository.
2. Upload all four files to the repository root.
3. Settings → Pages → Deploy from a branch → `main` / `/(root)`.
4. Your site will be at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Notes
- `index.html` is capped at 480px and centered — looks like a phone card on desktop, full-width on mobile.
- `landing.html` is full-width with a hamburger menu under 640px.
- Language toggle persists via `localStorage`.
- Animations respect `prefers-reduced-motion`.