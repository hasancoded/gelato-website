# Miles Ice Tech -- Official Website

The official website for **Miles Ice Tech** (Hangzhou Gelato Tech Co., Ltd.), the world's largest manufacturer of commercial churning display freezers. This site showcases the Galaxy Pro product line, company services, and provides lead generation through integrated contact forms and an AI-powered chatbot.

**Live site:** [milestac.com](https://milestac.com)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [SEO](#seo)
- [Deployment](#deployment)
- [Maintenance Notes](#maintenance-notes)
- [License](#license)

---

## Tech Stack

| Layer      | Technology                   | Version |
| ---------- | ---------------------------- | ------- |
| Framework  | Next.js (App Router)         | 16.1.6  |
| Language   | TypeScript                   | 5.x     |
| UI Library | React                        | 19.2.3  |
| Styling    | Tailwind CSS + custom CSS    | 4.2.1   |
| Animations | Framer Motion                | 12.x    |
| Linting    | ESLint with Next.js config   | 9.x     |
| Deployment | Vercel                       | --      |

---

## Project Structure

```text
gelato-website/
  app/
    api/
      chat/
        route.ts                 # Chatbot webhook proxy (n8n)
      contact/
        route.ts                 # CRM contact form handler
    components/
      ChatbotWidget.tsx          # AI-powered chat assistant (n8n integration)
      Footer.tsx                 # Global footer with contact details and links
      Navbar.tsx                 # Site navigation with scroll-aware styling
      WhatsAppButton.tsx         # Floating WhatsApp contact button
      animations.ts             # Framer Motion animation presets
      index.ts                  # Barrel export
    lib/
      seo-data.ts               # Centralized SEO metadata and product catalog
      structured-data.tsx        # JSON-LD schema generators
    about-us/
      layout.tsx                 # SEO metadata and breadcrumb schema
      page.tsx                   # Company overview page
    contact/
      layout.tsx
      page.tsx                   # Lead capture form with CRM integration
    products/
      layout.tsx                 # Product listing metadata and product schemas
      page.tsx                   # Product catalog page
      galaxy-pro-v1/
        layout.tsx
        page.tsx
      pro-v1-cafe-speciality/
        layout.tsx
        page.tsx
      galaxy-pro-v2/
        layout.tsx
        page.tsx
      galaxy-pro-v4-a/
        layout.tsx
        page.tsx
      galaxy-pro-v4-b/
        layout.tsx
        page.tsx
      galaxy-pro-v6/
        layout.tsx
        page.tsx
      galaxy-pro-v8/
        layout.tsx
        page.tsx
      galaxy-ev/
        layout.tsx
        page.tsx
      galaxy-pro-v2c/
        layout.tsx
        page.tsx
      galaxy-pro-v4c/
        layout.tsx
        page.tsx
      gelato-panini/
        layout.tsx
        page.tsx
    services/
      layout.tsx
      page.tsx                   # Purchase, leasing, and catering services
    globals.css                  # Design system: CSS custom properties and component styles
    layout.tsx                   # Root layout with global metadata and structured data
    page.tsx                     # Homepage
    sitemap.ts                   # Dynamic XML sitemap generation
  public/
    images/                      # Product photography and page assets
    favicon.png
    robots.txt
  .env.example                   # Environment variable template
  .gitignore
  eslint.config.mjs              # ESLint configuration
  LICENSE
  next.config.ts                 # Next.js configuration (image optimization, security headers)
  package.json
  tsconfig.json                  # TypeScript compiler configuration
```

---

## Architecture Overview

### Routing

The site uses the Next.js App Router with file-based routing. Each route directory contains a `page.tsx` for the UI and a `layout.tsx` for route-specific metadata and structured data injection. All pages are statically generated at build time except the two API routes (`/api/chat` and `/api/contact`), which are server-rendered on demand.

### Product Pages

All 11 product pages follow a consistent pattern:

- `layout.tsx` defines SEO metadata (Open Graph, Twitter Cards, canonical URL) and injects JSON-LD Product and Breadcrumb schemas.
- `page.tsx` renders the product banner, feature list, technical specifications table, and a call-to-action section.
- Product SEO data is centralized in `app/lib/seo-data.ts` to maintain consistency across the sitemap, structured data, and page metadata.

### Integrations

| Integration  | Purpose                                  | Configuration     |
| ------------ | ---------------------------------------- | ----------------- |
| n8n Webhook  | AI chatbot backend for product inquiries | `N8N_WEBHOOK_URL` |
| External CRM | Contact form lead capture                | `CRM_FORM_TOKEN`  |
| WhatsApp API | Direct customer messaging                | Hardcoded in component |

### Styling

The design system is defined in `app/globals.css` using CSS custom properties. All color tokens, spacing scales, shadows, and typography are declared under `:root` and consumed by component-level class selectors. Tailwind CSS is used alongside custom CSS where utility classes are sufficient.

---

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm 9 or later

### Local Development

1. Clone the repository:

   ```bash
    git clone https://github.com/hasancoded/gelato-website.git
    cd gelato-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and fill in the required values. See [Environment Variables](#environment-variables) for details.

4. Start the development server:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`.

### Build and Production

```bash
npm run build    # Create an optimized production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

---

## Environment Variables

The following environment variables must be configured in the deployment environment. See `.env.example` for the template.

| Variable          | Description                             | Required |
| ----------------- | --------------------------------------- | -------- |
| `N8N_WEBHOOK_URL` | n8n webhook endpoint for the AI chatbot | Yes      |
| `CRM_FORM_TOKEN`  | Token for the external CRM contact form | Yes      |

---

## SEO

The site implements a comprehensive SEO strategy:

- **Structured data** -- JSON-LD schemas for Organization, WebSite, LocalBusiness, Product, FAQ, and Breadcrumbs are rendered server-side via `app/lib/structured-data.tsx`.
- **Dynamic sitemap** -- An XML sitemap covering all 21 routes is generated at build time via `app/sitemap.ts`.
- **Open Graph and Twitter Cards** -- Every page defines social sharing metadata in its `layout.tsx`.
- **Canonical URLs** -- All pages specify canonical URLs to prevent duplicate content indexing.
- **robots.txt** -- Located at `public/robots.txt` with directives for search engine crawlers.
- **Image optimization** -- Next.js Image component with AVIF and WebP format support configured in `next.config.ts`.
- **Security headers** -- X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy headers configured in `next.config.ts`.

---

## Deployment

The site is deployed on Vercel. Push to the main branch to trigger an automatic production deployment. Environment variables must be configured in the Vercel project dashboard.

### Docker (Self-Hosted)

A production-ready multi-stage Dockerfile and `docker-compose.yml` are included for self-hosted deployments.

1. Copy the environment template and configure it:

   ```bash
   cp .env.example .env
   ```

2. Build and start the container:

   ```bash
   docker compose up -d --build
   ```

3. Verify the container is healthy:

   ```bash
   docker compose ps
   ```

   The site will be available at `http://localhost:3000`.

The Docker configuration includes health checks, resource limits, non-root execution, read-only filesystem, and structured logging.

---

## Maintenance Notes

- **Favicon size**: `public/favicon.png` is 2.4 MB, which is significantly larger than necessary for a favicon. Consider compressing or replacing it with an optimized version (recommended size: under 100 KB).

---

## License

Copyright 2025 Hangzhou Gelato Tech Co., Ltd. All rights reserved. This software and its associated documentation are proprietary and confidential. See the [LICENSE](LICENSE) file for full terms.

For licensing inquiries, contact [info@milestac.com](mailto:info@milestac.com).
