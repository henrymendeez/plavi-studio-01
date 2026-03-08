import { getSiteSettings, getAllServices, getAllProjects } from "@/lib/queries";
import {
  Hero,
  Marquee,
  Pillars,
  ServicesPreview,
  WorkGrid,
  StatsBand,
  AboutPreview,
  WhiteLabelBand,
} from "@/components/sections/HomeSections";
import { BtnFill, BtnGhostDark, RevealWrapper } from "@/components/ui";

// Fallback data for development (before Sanity is wired up)
const fallbackSettings = {
  _id: "siteSettings",
  _type: "siteSettings" as const,
  studioName: "PLAVI",
  tagline: "Premium Web Studio",
  heroHeadline: "We build digital platforms agencies rely on.",
  heroSubtitle:
    "Premium WordPress architecture, platform builds, and white-label execution for serious brands.",
  aboutStatement:
    "We're the studio that other agencies secretly rely on.",
  aboutBody: [
    "PLAVI was built for clients who've outgrown generic agencies. We work with <strong>international organizations, growing businesses, and creative agencies</strong> who need a technical partner that thinks in systems — not just pages.",
    "Our work is defined by <strong>clean code, measurable performance, and architecture that scales.</strong> We've shipped platforms for foundations, NGOs, and enterprise teams across four continents — often invisibly, under partner brands.",
    "8+ years. Senior-level execution. <strong>Zero shortcuts.</strong>",
  ],
  email: "hello@plavi.studio",
  foundedYear: "2016",
  location: "Lima, Peru",
  stats: [
    { value: "8", suffix: "+", label: "Years of craft" },
    { value: "40", suffix: "+", label: "Projects delivered" },
    { value: "12", suffix: "+", label: "Countries served" },
    { value: "100", suffix: "%", label: "White-label confidential" },
  ],
};

export default async function HomePage() {
  // Fetch from Sanity — falls back gracefully if env vars not set
  let settings = fallbackSettings;
  let services: Awaited<ReturnType<typeof getAllServices>> = [];
  let projects: Awaited<ReturnType<typeof getAllProjects>> = [];

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const [s, svc, proj] = await Promise.all([
        getSiteSettings(),
        getAllServices(),
        getAllProjects(),
      ]);
      if (s) settings = {
        ...fallbackSettings,
        ...s,
        aboutBody: s.aboutBody ?? fallbackSettings.aboutBody,
        stats: (s.stats ?? fallbackSettings.stats).map(st => ({
          value: st.value,
          suffix: st.suffix ?? "",
          label: st.label,
        })),
      };
      if (svc) services = svc;
      if (proj) projects = proj;
    } catch (e) {
      console.warn("Sanity fetch failed, using fallback data", e);
    }
  }

  return (
  <div>
    <div className="bg-red-500 text-white p-8 text-2xl">Tailwind test</div>
    <Hero settings={settings} />
    <Marquee />
      <Pillars />
      {services.length > 0 && <ServicesPreview services={services} />}
      {projects.length > 0 && <WorkGrid projects={projects} />}
      <StatsBand stats={settings.stats} />
      <AboutPreview settings={settings} />
      <WhiteLabelBand />

      {/* Contact teaser */}
      {/* Contact teaser */}
      <section style={{ padding: "100px 52px", background: "#EAE5DC" }}>
        <RevealWrapper style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "60px" }}>
          <div>
            <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E8520A", marginBottom: "16px" }}>
              Let's talk
            </div>
            <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#1C1A18" }}>
              Let's build{" "}
              <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>
                together.
              </em>
            </h2>
            <p style={{ fontSize: "14px", color: "#7A7570", lineHeight: 1.75, maxWidth: "420px", marginTop: "16px" }}>
              Whether you're launching a platform, migrating infrastructure, or looking for a white-label partner — we respond within 24 hours.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
            <BtnFill href="/contact">Start a project</BtnFill>
            <BtnGhostDark href="/work">See our work</BtnGhostDark>
          </div>
        </RevealWrapper>
      </section>
    </div>
  );
}
