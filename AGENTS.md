# AGENTS.md - TryQu Tech Development Guide

## Build & Run Commands

```bash
npm run dev         # Start Next.js dev server (localhost:3000)
npm run build       # Build for production
npm run start       # Run production build
npm lint            # Run ESLint
```

Note: No test runner configured. See tsconfig.json for strict type checking.

## Architecture & Structure

**Next.js 14 App Router** project with TypeScript. Organized as:
- `app/` - Page routes using App Router (layout.tsx, page.tsx per folder)
- `components/` - React components (client/server), split into sections (ui/, about/, services/, technologies/, training/)
- `lib/` - Utility functions, shared logic, and page context configuration
- `hooks/` - Custom React hooks including `use-page-context` for content segregation
- `styles/` - Global styles and Tailwind CSS
- `public/` - Static assets (images, icons, videos)

**Content Segregation System**: Each parent page displays only its core content using URL-based page detection via `usePageContext()` hook. See `CONTENT_SEGREGATION.md` for implementation details.

**Tech Stack**: React 18, Next.js 14, TypeScript, Tailwind CSS 4, Radix UI, Zod, React Hook Form

**Key Config**:
- Path alias: `@/*` maps to root directory (tsconfig.json)
- Images: Unoptimized, remote Unsplash images allowed (next.config.mjs)
- Vercel Analytics & Speed Insights integrated (app/layout.tsx)

## Code Style & Conventions

**Imports**: `type` prefix for TypeScript type imports; relative imports with `@/` alias. Organize: types, libraries, local components.

**Component Structure**: Functional components with `"use client"` directive for client-side. Props typed with inline or extracted interfaces. Use PascalCase for components.

**Styling**: Tailwind CSS only (no CSS modules). Use `clsx` or `cn()` helper for conditional classes.

**Naming**: camelCase for variables/functions, PascalCase for components/types. Descriptive names (e.g., `generateWhatsAppMessage`).

**Error Handling**: Basic try-catch where needed. Zod for form validation.

**Types**: Strict TypeScript enabled. Inline prop types preferred over separate interfaces for small components.

**Formatting**: ESLint enabled (ignored during builds). Consistent spacing, 2-space indentation implied.
