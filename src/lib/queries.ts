import { client } from "./sanity";
import type { Project, Service, SiteSettings, Testimonial } from "@/types";

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(isFeatured desc, _createdAt desc) {
      _id, title, slug, tagline, category, bgTheme,
      tags, isConfidential, isFeatured
    }
  `);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, tagline, category, bgTheme,
      tags, isConfidential, isFeatured, clientType, scope,
      stats, coverImage, timeline,
      overviewTitle, overviewBody,
      challengeTitle, challengeBody,
      solutionTitle, solutionBody,
      deliverables, timelinePhases, techStack,
      "nextProject": nextProject-> { title, slug, category }
    }
  `,
    { slug }
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project" && isFeatured == true] | order(_createdAt desc) [0...3] {
      _id, title, slug, tagline, category, bgTheme, tags, isConfidential
    }
  `);
}

// ─── SERVICES ───────────────────────────────────────────────────────────────

export async function getAllServices(): Promise<Service[]> {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id, index, title, tagline, description,
      idealFor, tags, includes, pillar, order
    }
  `);
}

export async function getServicesByPillar(
  pillar: "design" | "build" | "scale"
): Promise<Service[]> {
  return client.fetch(
    `
    *[_type == "service" && pillar == $pillar] | order(order asc) {
      _id, index, title, tagline, description, tags
    }
  `,
    { pillar }
  );
}

// ─── SITE SETTINGS ──────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings> {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      studioName, tagline, heroHeadline, heroSubtitle,
      aboutStatement, aboutBody, email, calendlyUrl,
      linkedinUrl, instagramUrl, foundedYear, location, stats
    }
  `);
}

// ─── TESTIMONIALS ───────────────────────────────────────────────────────────

export async function getPublicTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`
    *[_type == "testimonial" && isWhiteLabel == false] | order(_createdAt desc) {
      _id, quote, author, role, company
    }
  `);
}
