# PLAVI Studio — Next.js + Sanity

Premium web studio site. Next.js 15 App Router · Sanity v3 · Tailwind CSS · TypeScript · Framer Motion.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| CMS | Sanity v3 (embedded studio at `/studio`) |
| Styling | Tailwind CSS v3 + CSS variables |
| Language | TypeScript |
| Animation | Framer Motion |
| Hosting | Vercel (recommended) |
| Media CDN | Sanity CDN (`cdn.sanity.io`) |

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

Go to [sanity.io/manage](https://sanity.io/manage) → Create project → Copy the **Project ID**.

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site runs with fallback data even before Sanity is configured.

### 5. Open the Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

The studio is embedded in Next.js — no separate process needed.

---

## Content Model

### `project` — Case Studies

Each project has two sets of fields:

**Listing fields** (used on `/work` grid):
- `title`, `slug`, `tagline`, `category`, `bgTheme`, `tags`
- `isConfidential` — hides case study, shows card as non-clickable
- `isFeatured` — promotes to top/featured position

**Case study fields** (used on `/work/[slug]`):
- `clientType`, `scope`, `timeline`
- `stats[]` — value/suffix/label objects (e.g. `14` / `+` / `Countries served`)
- `overviewTitle`, `overviewBody`
- `challengeTitle/Body`, `solutionTitle/Body`
- `deliverables[]` — icon + title + description
- `timelinePhases[]` — for migration/rebuild projects
- `techStack[]` — string tags
- `nextProject` — reference to next project for case study nav

### `service` — Services

- `index` — "01", "02"…
- `order` — numeric sort order
- `title`, `tagline`, `description`
- `pillar` — design | build | scale
- `idealFor`, `tags[]`, `includes[]`

### `siteSettings` — Global Content (singleton)

- Hero headline/subtitle
- About statement + body paragraphs
- Contact info (email, Calendly, LinkedIn, Instagram)
- Stats (shown on homepage + about)

### `testimonial`

- `quote`, `author`, `role`, `company`
- `isWhiteLabel` — keeps testimonial private if true

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              ← Homepage
│   ├── layout.tsx            ← Root layout (Nav, Footer, Cursor)
│   ├── globals.css           ← Design tokens + global styles
│   ├── work/
│   │   ├── page.tsx          ← /work — project grid
│   │   └── [slug]/page.tsx   ← /work/[slug] — case study
│   ├── services/page.tsx     ← /services
│   ├── about/page.tsx        ← /about
│   ├── contact/
│   │   ├── page.tsx          ← /contact (Server Component)
│   │   └── ContactForm.tsx   ← Form (Client Component)
│   └── studio/[[...tool]]/   ← Embedded Sanity Studio
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx           ← Fixed nav with scroll detection
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── index.tsx         ← RevealWrapper, Eyebrow, Buttons, etc.
│   │   └── Cursor.tsx        ← Custom cursor (client)
│   └── sections/
│       └── HomeSections.tsx  ← All homepage sections
│
├── lib/
│   ├── sanity.ts             ← Sanity client + urlFor()
│   └── queries.ts            ← All GROQ queries
│
└── types/
    └── index.ts              ← TypeScript types for all Sanity docs

sanity/
├── schemas/
│   ├── project.ts            ← Project / case study schema
│   └── index.ts              ← Service, SiteSettings, Testimonial schemas
└── sanity.config.ts          ← Studio config + custom structure
```

---

## Deploying to Vercel

1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Set CORS origin in Sanity: `https://your-domain.vercel.app`

```bash
# Add your Vercel domain to Sanity CORS
npx sanity cors add https://your-domain.vercel.app --credentials
```

---

## Adding a New Case Study

1. Open `/studio`
2. Go to **Projects** → **New**
3. Fill in the listing fields (required for the grid)
4. Fill in case study fields (required for the full case study page)
5. Set `isConfidential: false` and publish
6. The new project appears on `/work` and `/work/[slug]` automatically

---

## Contact Form

The contact form currently calls `handleSubmit` client-side. Wire it to your preferred handler:

- **[Resend](https://resend.com)** — recommended for transactional email
- **[Formspree](https://formspree.io)** — quick no-backend option
- **Next.js Server Action** — keep it fully in-stack

Example with Resend (Server Action):

```ts
// src/app/contact/actions.ts
"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  await resend.emails.send({
    from: "plavi.studio <noreply@plavi.studio>",
    to: "hello@plavi.studio",
    subject: `New project inquiry — ${formData.get("company")}`,
    html: `...`,
  });
}
```
