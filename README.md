# Yash Manglekar Portfolio

Modern personal portfolio for Yash Prashant Manglekar, built with Vite, React, and plain CSS. The content is sourced from the provided resume and organized into recruiter-friendly sections: hero, about, skills, experience, projects, education, contact, and footer.

## Tech Stack

- Vite
- React
- JavaScript
- CSS
- GitHub Pages deployment support

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

## GitHub Pages Deployment

The project is configured for a repository named `yash-portfolio` through `vite.config.js`:

```js
base: process.env.NODE_ENV === 'production' ? '/yash-portfolio/' : '/'
```

If your GitHub repository has a different name, update the production base path before deploying.

Deploy with:

```bash
npm run deploy
```

Then in GitHub, open `Settings > Pages` and confirm the site is served from the `gh-pages` branch.

## Resume Download

The resume download button points to:

```text
public/Yash_Manglekar_Resume.pdf
```

Replace that file when the resume changes, keeping the same file name unless you also update `src/data/portfolio.js`.
