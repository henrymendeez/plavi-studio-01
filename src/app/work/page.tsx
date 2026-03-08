import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/queries";
import { RevealWrapper, Eyebrow } from "@/components/ui";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects — platforms, migrations, LMS builds, and premium design.",
};

const C = {
  cream: "#EAE5DC", creamLight: "#F2EEE7", creamMid: "#E0DBD2",
  ink: "#1C1A18", inkMid: "#3A3733", inkMuted: "#7A7570",
  orange: "#E8520A", border: "rgba(28,26,24,0.10)",
};

const bgThemes: Record<string, string> = {
  navy:   "linear-gradient(145deg,#0d1520,#182d48,#0d1520)",
  ember:  "linear-gradient(145deg,#1a0e07,#2d1e0d,#120a05)",
  forest: "linear-gradient(145deg,#0a1a14,#0f2b20,#091515)",
  slate:  "linear-gradient(145deg,#14141a,#1e1e2d,#0d0d14)",
  rust:   "linear-gradient(145deg,#1a0c08,#2d1508,#140806)",
};

const fallbackProjects: Project[] = [
  { _id: "1", _type: "project", title: "International Education Foundation", slug: { current: "foundation" }, tagline: "Platform Architecture · LMS · Multilingual", category: "Platform Architecture", bgTheme: "navy", tags: ["Platform","LMS","AWS","Multilingual"], isConfidential: false, isFeatured: true, clientType: "", scope: "", stats: [], overviewTitle: "", overviewBody: "", challengeTitle: "", challengeBody: "", solutionTitle: "", solutionBody: "", techStack: [] },
  { _id: "2", _type: "project", title: "High-Volume WooCommerce Rebuild", slug: { current: "ecommerce" }, tagline: "Kentico → WordPress · CloudFront", category: "Migration & Rebuild", bgTheme: "ember", tags: ["Migration","E-commerce"], isConfidential: false, isFeatured: false, clientType: "", scope: "", stats: [], overviewTitle: "", overviewBody: "", challengeTitle: "", challengeBody: "", solutionTitle: "", solutionBody: "", techStack: [] },
  { _id: "3", _type: "project", title: "Training Organization Platform", slug: { current: "lms" }, tagline: "LearnDash · BuddyPress · AWS RDS", category: "LMS & Learning Platform", bgTheme: "forest", tags: ["LMS","Platform"], isConfidential: false, isFeatured: false, clientType: "", scope: "", stats: [], overviewTitle: "", overviewBody: "", challengeTitle: "", challengeBody: "", solutionTitle: "", solutionBody: "", techStack: [] },
  { _id: "4", _type: "project", title: "Boutique Agency Partner", slug: { current: "agency" }, tagline: "12-site rollout · Bricks Builder", category: "White-Label", bgTheme: "slate", tags: ["White-label","WordPress"], isConfidential: true, isFeatured: false, clientType: "", scope: "", stats: [], overviewTitle: "", overviewBody: "", challengeTitle: "", challengeBody: "", solutionTitle: "", solutionBody: "", techStack: [] },
  { _id: "5", _type: "project", title: "NGO Digital Overhaul", slug: { current: "ngo" }, tagline: "WordPress · Multilingual · Performance", category: "UX Redesign", bgTheme: "rust", tags: ["Platform","UX"], isConfidential: false, isFeatured: false, clientType: "", scope: "", stats: [], overviewTitle: "", overviewBody: "", challengeTitle: "", challengeBody: "", solutionTitle: "", solutionBody: "", techStack: [] },
  { _id: "6", _type: "project", title: "US Creative Agency", slug: { current: "agency-us" }, tagline: "Bricks · WooCommerce · Custom integrations", category: "White-Label", bgTheme: "forest", tags: ["White-label","E-commerce"], isConfidential: true, isFeatured: false, clientType: "", scope: "", stats: [], overviewTitle: "", overviewBody: "", challengeTitle: "", challengeBody: "", solutionTitle: "", solutionBody: "", techStack: [] },
];

export default async function WorkPage() {
  let projects = fallbackProjects;
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try { projects = await getAllProjects(); } catch {}
  }

  if (!projects || projects.length === 0) {
  projects = fallbackProjects;
}
const featured = projects.find((p) => p.isFeatured) ?? projects[0];
  const rest = projects.filter((p) => p._id !== featured._id);

  return (
    <>
      {/* Page Hero */}
      <div style={{ paddingTop: "140px", paddingBottom: "80px", padding: "140px 52px 80px", background: C.cream, borderBottom: `1px solid ${C.border}` }}>
        <Eyebrow>Selected projects</Eyebrow>
        <h1 style={{ fontSize: "clamp(52px,7.5vw,100px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02, color: C.ink }}>
          Work that <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>speaks</em><br />for itself.
        </h1>
        <p style={{ fontSize: "16px", color: C.inkMuted, lineHeight: 1.7, maxWidth: "520px", marginTop: "22px" }}>
          Eight years of platforms, migrations, LMS builds, and premium design — for international organizations, agencies, and serious brands.
        </p>
      </div>

      {/* Projects grid */}
      <section style={{ padding: "60px 52px 100px", background: C.cream }}>
        <RevealWrapper style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
          <ProjectCard project={featured} featured />
          <div style={{ display: "grid", gap: "3px" }}>
            {rest.slice(0, 2).map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        </RevealWrapper>

        {rest.length > 2 && (
          <RevealWrapper delay={100} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3px", marginTop: "3px" }}>
            {rest.slice(2).map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </RevealWrapper>
        )}
      </section>

      {/* CTA */}
      <div style={{ background: C.ink, padding: "100px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "60px" }}>
        <div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#EAE5DC" }}>
            Ready to build<br />
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "rgba(232,82,10,.9)" }}>something real?</em>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(234,229,220,.45)", lineHeight: 1.75, maxWidth: "360px", marginTop: "16px" }}>
            Tell us about your project and we'll get back within 24 hours.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <Link href="/contact" style={{ fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: C.cream, color: C.ink, padding: "14px 30px", borderRadius: "100px", textDecoration: "none" }}>
            Start a project
          </Link>
          <Link href="/services" style={{ fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "transparent", color: "rgba(234,229,220,.5)", border: "1.5px solid rgba(234,229,220,.18)", padding: "13px 28px", borderRadius: "100px", textDecoration: "none" }}>
            Our services
          </Link>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project: p, featured = false }: { project: Project; featured?: boolean }) {
  const href = p.isConfidential ? "#" : `/work/${p.slug.current}`;
  return (
    <Link href={href} style={{
      position: "relative", overflow: "hidden", cursor: "pointer", display: "block",
      minHeight: featured ? "560px" : "380px", textDecoration: "none",
    }}>
      <div style={{ position: "absolute", inset: 0, background: bgThemes[p.bgTheme] ?? bgThemes.navy }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(28,26,24,.93) 0%,rgba(28,26,24,.2) 55%,transparent 100%)", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: "36px", right: "36px", width: "44px", height: "44px", borderRadius: "50%", border: "1.5px solid rgba(245,240,232,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5F0E8", fontSize: "18px" }}>↗</div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "44px" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "10px" }}>
          {p.category}{p.isFeatured ? " · Featured" : ""}
        </div>
        <div style={{ fontSize: featured ? "44px" : "28px", fontWeight: 800, letterSpacing: "-0.02em", color: "#F5F0E8", lineHeight: 1.08, marginBottom: "12px" }}>
          {p.title}
        </div>
        {p.tagline && (
          <div style={{ fontSize: "11.5px", color: "rgba(245,240,232,.45)", letterSpacing: "0.08em", marginBottom: "16px" }}>{p.tagline}</div>
        )}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {p.tags?.slice(0, 4).map((tag) => (
            <span key={tag} style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", border: "1px solid rgba(245,240,232,.18)", color: "rgba(245,240,232,.6)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}