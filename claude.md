# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the BlueAlpha marketing website built with:
- **Astro 5.11.0** - Static site generator with React integration
- **React 19** - For interactive components
- **Tailwind CSS v4** - Styling framework with custom theme
- **TypeScript** - Type safety with strict configuration
- **Cloudflare Workers** - Edge deployment via Wrangler
- **Motion/Framer Motion** - Animation library

## Development Commands

```bash
# Development
pnpm dev              # Start Astro dev server (port 4321)
pnpm wrangler:dev     # Start Cloudflare Workers dev server

# Build & Deploy
pnpm build            # Build production bundle to ./dist
pnpm preview          # Preview production build
pnpm wrangler:deploy  # Deploy to Cloudflare Workers

# Code Quality (run these before committing)
pnpm check            # TypeScript type checking
pnpm lint             # ESLint linting
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format:check     # Check Prettier formatting
pnpm format:write     # Auto-format with Prettier

# Maintenance
pnpm clean            # Clean generated files
```

## Architecture & Code Organization

### Directory Structure
- `/src/pages/` - Astro pages (routes)
- `/src/components/` - Reusable UI components
  - `.astro` files for static content
  - `.tsx` files for interactive React components
- `/src/layouts/` - Page layouts
- `/src/stores/` - Global state with Nanostores
- `/src/utils/` - Utility functions and animations
- `/src/styles/` - Global CSS (base.css)
- `/src/assets/` - Static assets (fonts)

### Key Patterns

1. **Path Aliasing**: Use `#` prefix for src imports
   ```typescript
   import { Button } from '#/components/button'
   import { cn } from '#/utils/cn'
   ```

2. **Component Styling**: Use Tailwind Variants for component styles
   ```typescript
   import { tv } from 'tailwind-variants'
   const buttonVariants = tv({
     base: "...",
     variants: { ... }
   })
   ```

3. **State Management**: Use Nanostores for global state
   ```typescript
   import { atom } from 'nanostores'
   export const $showCta = atom(false)
   ```

4. **Animation Utils**: Reusable transitions in `src/utils/transitions.ts`

5. **Class Name Merging**: Use `cn()` utility (clsx + tailwind-merge)

### Component Guidelines

- **Astro Components** (`.astro`): For static content, page structure, SEO
- **React Components** (`.tsx`): For interactive elements, client-side logic
- Always use TypeScript for React components
- Keep components focused and reusable
- Use semantic HTML and ARIA attributes for accessibility

### Important Files

- `astro.config.ts` - Astro configuration with integrations
- `tailwind.config.cjs` - Tailwind theme customization
- `wrangler.jsonc` - Cloudflare Workers deployment config
- `src/styles/base.css` - Global styles and CSS variables

### Third-Party Integrations

- **Cal.com**: Scheduling integration (see `src/components/contact-cta.tsx`)
- **Analytics Platforms**: Components for Google, Meta, LinkedIn, Snapchat, TikTok integrations

### Performance Considerations

- Astro generates static HTML by default
- React components use `client:*` directives for hydration
- Images should be optimized and use appropriate formats
- Fonts are self-hosted for performance

### Testing

Currently, no testing framework is configured. When adding tests:
- Consider Vitest for unit tests (works well with Vite/Astro)
- Consider Playwright for E2E tests