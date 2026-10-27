# Dev CircleX React Clone

React/Vite rebuild of the Dev CircleX HTML/CSS/JavaScript website.

## Run

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Routes

- `/` Home
- `/services` Services overview
- `/shopify-development` Shopify development
- `/seo` SEO
- `/about` About
- `/portfolio` Portfolio and filters
- `/case-study?case=alcami` Case study detail
- `/contact` Contact

## Structure

- `src/App.jsx` React Router setup and internal navigation bridge
- `src/AppContent.jsx` homepage content and interactions
- `src/Pages.jsx` shared inner-page shell and shared page sections
- `src/pages/` route-level JSX entry files
- `src/App.css` replicated Dev CircleX stylesheet
- `src/index.css` global stylesheet entry

The app uses React Router routes and contains no HTML page routes. The only HTML file is Vite's application entry document.
