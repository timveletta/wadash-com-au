# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Build for production (output to ./dist/)
pnpm preview    # Preview production build locally
```

## Architecture

This is an **Astro 5** static site for WA Dash Plumbing & Gas (wadash.com.au), deployed to Vercel.

**Tech stack:**
- Astro (static output, `@astrojs/vercel/static` adapter)
- React (interactive islands via `client:load`)
- Tailwind CSS v4 (configured via `@tailwindcss/vite` Vite plugin, not PostCSS)
- MDX for content
- Resend for contact form emails

**Key architectural patterns:**

- **Astro islands**: The `Navbar` and `ContactForm` are React components that hydrate on the client. Everything else is static `.astro` components.
- **Content collections**: Service pages are defined as MDX files in `/services/*.mdx` (not inside `src/`) and loaded via `src/content.config.js`. The collection schema requires a `title` field.
- **API route**: The contact form posts to `/api/contact`, which is a Vercel serverless function at `api/contact.js` (outside `src/`). It uses `RESEND_API_KEY` from environment variables.
- **Single-page layout**: The homepage (`src/pages/index.astro`) is the primary page, composed of `Hero`, `Byline`, `Services`, and `Contact` sections stacked vertically.

**Tailwind theme** (defined in `src/styles/global.css`):
- `primary`: `#46b455` (green)
- `primary-dark`: `#0c9f4b`
- `secondary`: `#4d4d4d`
- `tertiary`: `#253238`
- Fonts: Open Sans (default), Montserrat (headings, use class `text-montserrat`)
- Container: max-width 1024px, auto margins

**Adding a new service:** Create a new `.mdx` file in `/services/` with frontmatter `title: "..."`. It will appear in the Navbar's services dropdown (currently commented out). Add a `<ServiceSection>` in `src/components/Services.astro` to display it on the homepage.

**Environment variables:** `RESEND_API_KEY` is required for the contact form to send emails.
