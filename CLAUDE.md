# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

건생병사 (Geongsaengbyeongsa) — a single-page Korean medicine educational website about cellular regeneration. Built for Korean-speaking traditional medicine practitioners. All UI text is in Korean.

## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint

# Docker
docker compose --profile dev up       # Dev with hot reload (port 3080)
docker compose up -d --build           # Production (port 3080)
```

No test framework is configured.

## Architecture

- **Next.js 14 App Router** with `output: 'standalone'` for Docker deployment
- **Single page**: `app/page.tsx` composes all section components in order
- **No backend/API routes** — purely static content site, all text is hardcoded in components
- **Section components** in `components/` each represent a full-page section (Hero, Acupuncture, Fermented, Principles, Challenges, Nutrients, Practice, Contact, Footer)
- **Navigation** uses anchor links (`#acupuncture`, `#principles`, etc.) with smooth scrolling

## Key Conventions

- All section components use `'use client'` for Framer Motion animations
- `components/useInView.ts` — custom IntersectionObserver hook used by sections for scroll-triggered fade-in animations
- **Tailwind custom colors**: `navy` (warm browns/beige), `gold` (amber tones), `forest` (green — primary brand color). Defined in `tailwind.config.ts`
- **Font**: Pretendard Variable loaded via CDN in `globals.css`, exposed as `--font-display` and `--font-body` CSS variables, mapped to Tailwind's `font-display` and `font-body`
- Icons from `lucide-react`; animations via `framer-motion`
- Global visual effects (grain texture overlay, custom scrollbar, section dividers) defined in `app/globals.css`
