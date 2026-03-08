import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "overview", title: "Overview" },
    { name: "casestudy", title: "Case Study" },
    { name: "meta", title: "Meta" },
  ],
  fields: [
    // ── Listing fields ────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      group: "overview",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "meta",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      title: "Short Tagline",
      type: "string",
      description: "One-liner shown on the work grid card",
      group: "overview",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "overview",
      options: {
        list: [
          { title: "Platform Architecture", value: "Platform Architecture" },
          { title: "Migration & Rebuild", value: "Migration & Rebuild" },
          { title: "LMS & Learning Platform", value: "LMS & Learning Platform" },
          { title: "White-Label", value: "White-Label" },
          { title: "UX Redesign", value: "UX Redesign" },
          { title: "E-Commerce", value: "E-Commerce" },
        ],
      },
    }),
    defineField({
      name: "bgTheme",
      title: "Card Background Theme",
      type: "string",
      group: "overview",
      options: {
        list: [
          { title: "Navy (blue-dark)", value: "navy" },
          { title: "Ember (warm brown)", value: "ember" },
          { title: "Forest (dark green)", value: "forest" },
          { title: "Slate (dark blue-purple)", value: "slate" },
          { title: "Rust (deep orange-brown)", value: "rust" },
        ],
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "overview",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "isConfidential",
      title: "White-label / Confidential",
      type: "boolean",
      description: "If true, no full case study will be shown",
      group: "meta",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on homepage",
      type: "boolean",
      group: "meta",
      initialValue: false,
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "overview",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text" }),
      ],
    }),

    // ── Case study header ─────────────────────────────────────────────────
    defineField({
      name: "clientType",
      title: "Client Type",
      type: "string",
      group: "casestudy",
      description: "e.g. International Foundation",
    }),
    defineField({
      name: "scope",
      title: "Scope (subtitle)",
      type: "string",
      group: "casestudy",
      description: "e.g. Platform Architecture · LMS · Multilingual",
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      group: "casestudy",
      description: "e.g. 6 months",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "casestudy",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string", title: "Value", description: "e.g. 14" }),
            defineField({ name: "suffix", type: "string", title: "Suffix", description: "e.g. + or K" }),
            defineField({ name: "label", type: "string", title: "Label", description: "e.g. Countries served" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),

    // ── Case study body ───────────────────────────────────────────────────
    defineField({
      name: "overviewTitle",
      title: "Overview Title",
      type: "string",
      group: "casestudy",
    }),
    defineField({
      name: "overviewBody",
      title: "Overview Body",
      type: "text",
      rows: 6,
      group: "casestudy",
    }),
    defineField({
      name: "challengeTitle",
      title: "Challenge Title",
      type: "string",
      group: "casestudy",
    }),
    defineField({
      name: "challengeBody",
      title: "Challenge Body",
      type: "text",
      rows: 6,
      group: "casestudy",
    }),
    defineField({
      name: "solutionTitle",
      title: "Solution Title",
      type: "string",
      group: "casestudy",
    }),
    defineField({
      name: "solutionBody",
      title: "Solution Body",
      type: "text",
      rows: 6,
      group: "casestudy",
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      group: "casestudy",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", type: "string", title: "Emoji Icon", description: "e.g. 🏗" }),
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "description", type: "text", title: "Description", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        },
      ],
    }),
    defineField({
      name: "timelinePhases",
      title: "Migration Timeline Phases",
      type: "array",
      group: "casestudy",
      description: "Optional — only for migration/rebuild projects",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "phase", type: "string", title: "Phase label", description: "e.g. Phase 01" }),
            defineField({ name: "title", type: "string", title: "Phase Title" }),
            defineField({ name: "description", type: "text", title: "Description", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "phase" } },
        },
      ],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      group: "casestudy",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "nextProject",
      title: "Next Project (for case study nav)",
      type: "reference",
      group: "meta",
      to: [{ type: "project" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
