import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { project } from "./sanity/schemas/project";
import { service, siteSettings, testimonial } from "./sanity/schemas/index";

export default defineConfig({
  name: "default",
  title: "PLAVI Studio CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [project, service, siteSettings, testimonial],
  },
});