# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start Astro dev server at localhost:4321
pnpm build      # Build static site to ./dist/
pnpm preview    # Build then preview with Wrangler (Workers + assets)
pnpm deploy     # Build and deploy to Cloudflare Workers
```

## Architecture

This is an **Astro 5** static site for WA Dash Plumbing & Gas (wadash.com.au), deployed to **Cloudflare Workers** with Static Assets.

**Tech stack:**
- Astro (static output, served via Workers Static Assets)
- React (interactive islands via `client:load`)
- Tailwind CSS v4 (configured via `@tailwindcss/vite` Vite plugin, not PostCSS)
- MDX for content
- Resend for contact form emails (Cloudflare Worker at `/api/contact`)

**Key architectural patterns:**

- **Astro islands**: The `Navbar` and `ContactForm` are React components that hydrate on the client. Everything else is static `.astro` components.
- **Content collections**: Service pages are defined as MDX files in `/services/*.mdx` (not inside `src/`) and loaded via `src/content.config.js`. The collection schema requires a `title` field.
- **API route**: The contact form posts to `/api/contact`, handled by the Worker in `worker/index.js`. Wrangler routes `/api/*` to the Worker first (`run_worker_first`); everything else is served as static assets from `./dist`. It uses the `RESEND_API_KEY` secret.
- **Single-page layout**: The homepage (`src/pages/index.astro`) is the primary page, composed of `Hero`, `Byline`, `Services`, and `Contact` sections stacked vertically.

**Tailwind theme** (defined in `src/styles/global.css`):
- `primary`: `#46b455` (green)
- `primary-dark`: `#0c9f4b`
- `secondary`: `#4d4d4d`
- `tertiary`: `#253238`
- Fonts: Open Sans (default), Montserrat (headings, use class `text-montserrat`)
- Container: max-width 1024px, auto margins

**Adding a new service:** Create a new `.mdx` file in `/services/` with frontmatter `title: "..."`. It will appear in the Navbar's services dropdown (currently commented out). Add a `<ServiceSection>` in `src/components/Services.astro` to display it on the homepage.

**Environment variables / secrets:**
- Local: create `.dev.vars` with `RESEND_API_KEY=...` (gitignored)
- Production: `pnpm wrangler secret put RESEND_API_KEY`
