import { defineField, defineType } from "sanity";

// ─── SERVICE ────────────────────────────────────────────────────────────────
export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "index",
      title: "Index Number",
      type: "string",
      description: "e.g. 01, 02, 03",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Sort order (1, 2, 3…)",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short italic subtitle",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "pillar",
      title: "Pillar",
      type: "string",
      options: {
        list: [
          { title: "Design", value: "design" },
          { title: "Build", value: "build" },
          { title: "Scale", value: "scale" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "idealFor",
      title: "Ideal For (label text)",
      type: "string",
      description: "e.g. Ideal for or Includes or Perfect for",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "includes",
      title: "Includes / Bullet Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text", type: "string", title: "Item" }),
          ],
          preview: { select: { title: "text" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "index" },
  },
});

// ─── SITE SETTINGS ──────────────────────────────────────────────────────────
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "studioName", title: "Studio Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero Headline", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    defineField({ name: "aboutStatement", title: "About Statement (blockquote)", type: "text", rows: 3 }),
    defineField({
      name: "aboutBody",
      title: "About Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "calendlyUrl", title: "Calendly URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "foundedYear", title: "Founded Year", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats (About page & homepage)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string", title: "Value" }),
            defineField({ name: "suffix", type: "string", title: "Suffix" }),
            defineField({ name: "label", type: "string", title: "Label" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
  ],
});

// ─── TESTIMONIAL ────────────────────────────────────────────────────────────
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({ name: "author", title: "Author Name", type: "string" }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({
      name: "isWhiteLabel",
      title: "White-label client (keep anonymous)",
      type: "boolean",
      initialValue: false,
      description: "If true, this testimonial won't be shown publicly",
    }),
  ],
  preview: {
    select: { title: "author", subtitle: "company" },
  },
});
