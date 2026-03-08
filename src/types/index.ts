// Sanity image reference
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

// ─── PROJECT / CASE STUDY ───────────────────────────────────────────────────
export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

export interface TimelinePhase {
  phase: string;
  title: string;
  description: string;
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: { current: string };
  tagline: string;
  category: string;
  bgTheme: "navy" | "ember" | "forest" | "slate" | "rust";
  tags: string[];
  isConfidential: boolean;
  isFeatured: boolean;

  // Case study fields
  clientType: string;
  scope: string;
  stats: Stat[];
  coverImage?: SanityImage;
  timeline?: string;

  overviewTitle: string;
  overviewBody: string;

  challengeTitle: string;
  challengeBody: string;

  solutionTitle: string;
  solutionBody: string;

  deliverables?: Deliverable[];
  timelinePhases?: TimelinePhase[];
  techStack: string[];

  nextProject?: {
    _ref: string;
    _type: "reference";
  };
}

// ─── SERVICE ────────────────────────────────────────────────────────────────
export interface ServiceInclude {
  text: string;
}

export interface Service {
  _id: string;
  _type: "service";
  index: string;
  title: string;
  tagline: string;
  description: string;
  idealFor?: string;
  tags: string[];
  includes?: ServiceInclude[];
  pillar: "design" | "build" | "scale";
  order: number;
}

// ─── SITE SETTINGS ──────────────────────────────────────────────────────────
export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  studioName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  aboutStatement: string;
  aboutBody: string[];
  email: string;
  calendlyUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  foundedYear: string;
  location: string;
  stats: Stat[];
}

// ─── TESTIMONIAL ────────────────────────────────────────────────────────────
export interface Testimonial {
  _id: string;
  _type: "testimonial";
  quote: string;
  author: string;
  role: string;
  company: string;
  isWhiteLabel: boolean;
}
