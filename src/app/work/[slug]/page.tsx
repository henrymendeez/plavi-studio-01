import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/queries";
import { RevealWrapper, Eyebrow, Divider } from "@/components/ui";
import type { Project } from "@/types";

const C = {
  cream: "#EAE5DC", creamLight: "#F2EEE7",
  ink: "#1C1A18", inkMuted: "#7A7570",
  orange: "#E8520A", orangeLight: "#FFF0E9", white: "#FDFCFA",
  border: "rgba(28,26,24,0.10)",
};

const bgThemes: Record<string, string> = {
  navy:   "linear-gradient(145deg,#0d1520 0%,#182d48 50%,#0d1520 100%)",
  ember:  "linear-gradient(145deg,#1a0e07 0%,#2d1e0d 50%,#120a05 100%)",
  forest: "linear-gradient(145deg,#0a1a14 0%,#0f2b20 50%,#091515 100%)",
  slate:  "linear-gradient(145deg,#14141a 0%,#1e1e2d 50%,#0d0d14 100%)",
  rust:   "linear-gradient(145deg,#1a0c08 0%,#2d1508 50%,#140806 100%)",
};

const glows: Record<string, string> = {
  navy:   "radial-gradient(ellipse at 30% 70%,rgba(232,82,10,.08),transparent 55%)",
  ember:  "radial-gradient(ellipse at 70% 40%,rgba(232,82,10,.1),transparent 55%)",
  forest: "radial-gradient(ellipse at 50% 60%,rgba(80,200,130,.06),transparent 55%)",
  slate:  "radial-gradient(ellipse at 40% 60%,rgba(100,120,232,.07),transparent 55%)",
  rust:   "radial-gradient(ellipse at 60% 40%,rgba(232,82,10,.1),transparent 55%)",
};

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  try {
    const projects = await getAllProjects();
    return projects.filter((p) => !p.isConfidential).map((p) => ({ slug: p.slug.current }));
  } catch { return []; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

const fallbackProjects: Record<string, Project> = {
  foundation: { _id: "1", _type: "project", title: "International Education Foundation", slug: { current: "foundation" }, tagline: "Platform Architecture · LMS · Multilingual", category: "Platform Architecture", bgTheme: "navy", tags: ["WordPress","LearnDash","AWS","WPML"], isConfidential: false, isFeatured: true, clientType: "International Foundation", scope: "Platform Architecture · LMS · Multilingual", timeline: "6 months", stats: [{ value: "14", suffix: "+", label: "Countries served" },{ value: "8", suffix: "K", label: "Active users" },{ value: "99", suffix: "%", label: "Uptime" },{ value: "3", suffix: "×", label: "Faster load time" }], overviewTitle: "A platform built for global scale.", overviewBody: "An international education foundation needed a centralized platform to serve learners across 14 countries — in 6 languages, with role-based access, structured courses, and enterprise-grade reliability.\n\nThe existing solution was a patchwork of plugins and manual processes. PLAVI was brought in to rebuild the entire platform from the ground up on WordPress, LearnDash, and AWS infrastructure.", challengeTitle: "Global complexity, legacy infrastructure", challengeBody: "The foundation was running a fragile WordPress install with no multisite structure, no CDN, and a single shared server. As user numbers grew across regions, load times degraded and the admin team had no reliable way to manage multilingual content or user roles at scale.", solutionTitle: "Structured architecture built for reliability", solutionBody: "We rebuilt the platform on a clean WordPress multisite install with LearnDash for course delivery, WPML for multilingual content, and a full AWS stack — EC2, RDS, and CloudFront — for performance and reliability.", deliverables: [{ icon: "🏗", title: "WordPress Multisite Architecture", description: "Clean multisite setup with structured content types and role-based access across 6 tiers." },{ icon: "📚", title: "LearnDash LMS Integration", description: "Full course system with progress tracking, certificates, and automated enrollment." },{ icon: "🌐", title: "WPML Multilingual Setup", description: "Six-language implementation with translation workflows for the content team." },{ icon: "☁️", title: "AWS Infrastructure", description: "EC2 + RDS + CloudFront stack with 99%+ uptime and global CDN delivery." }], techStack: ["WordPress Multisite","LearnDash","WPML","AWS EC2","AWS RDS","AWS CloudFront","ACF Pro","Bricks Builder"] },
  ecommerce: { _id: "2", _type: "project", title: "High-Volume WooCommerce Rebuild", slug: { current: "ecommerce" }, tagline: "Kentico → WordPress · CloudFront", category: "Migration & Rebuild", bgTheme: "ember", tags: ["WooCommerce","Migration","CloudFront","Performance"], isConfidential: false, isFeatured: false, clientType: "E-Commerce Brand", scope: "Migration & Rebuild · E-Commerce", timeline: "4 months", stats: [{ value: "4", suffix: "K", label: "Monthly orders" },{ value: "2.4", suffix: "s", label: "Load time" },{ value: "38", suffix: "%", label: "Conversion lift" },{ value: "0", suffix: "", label: "Data lost" }], overviewTitle: "From legacy platform to modern commerce.", overviewBody: "A high-volume e-commerce brand was running on Kentico — a costly, developer-dependent platform that their team couldn't manage independently. They needed a migration to WordPress and WooCommerce without disrupting live orders or losing SEO rankings.\n\nPLAVI executed a 5-phase migration that moved 4,000+ monthly orders to a new WooCommerce stack with CloudFront delivery and zero data loss.", challengeTitle: "Live store, zero downtime tolerance", challengeBody: "The brand processed thousands of orders monthly. Any migration had to be executed with surgical precision — preserving product data, customer records, order history, and SEO URLs — while the live Kentico store stayed operational until the final cutover.", solutionTitle: "Phased migration with parallel operation", solutionBody: "We built the new WooCommerce store in parallel, migrated all product and customer data in structured phases, and ran both systems simultaneously during a controlled transition period.", timelinePhases: [{ phase: "Phase 01", title: "Audit & Architecture", description: "Full audit of existing Kentico structure, data mapping, and new WordPress architecture design." },{ phase: "Phase 02", title: "Data Migration", description: "Products, customers, and order history migrated to WooCommerce with full integrity checks." },{ phase: "Phase 03", title: "Parallel Build", description: "New store built and tested while legacy system remained live." },{ phase: "Phase 04", title: "SEO Preservation", description: "All URLs mapped, redirects implemented, and search rankings monitored through transition." },{ phase: "Phase 05", title: "Cutover & Launch", description: "Final cutover executed during low-traffic window with immediate post-launch monitoring." }], techStack: ["WordPress","WooCommerce","AWS CloudFront","ACF Pro","Bricks Builder","Kentico Migration"] },
  lms: { _id: "3", _type: "project", title: "Training Organization Platform", slug: { current: "lms" }, tagline: "LearnDash · BuddyPress · AWS RDS", category: "LMS & Learning Platform", bgTheme: "forest", tags: ["LearnDash","BuddyPress","AWS","Membership"], isConfidential: false, isFeatured: false, clientType: "Training Organization", scope: "LMS · Community · Membership", timeline: "5 months", stats: [{ value: "3.2", suffix: "K", label: "Active learners" },{ value: "48", suffix: "", label: "Courses" },{ value: "6", suffix: "", label: "Access tiers" },{ value: "94", suffix: "%", label: "Completion rate" }], overviewTitle: "A complete learning ecosystem.", overviewBody: "A professional training organization needed more than a course plugin — they needed a full learning ecosystem with community features, tiered membership access, subscription billing, and enterprise-grade hosting.\n\nPLAVI designed and built a platform combining LearnDash, BuddyPress, and WooCommerce Subscriptions on an AWS RDS backend.", challengeTitle: "Complex access logic, simple user experience", challengeBody: "The organization had six distinct membership tiers, each with different course access, community permissions, and billing cycles. Previous attempts with off-the-shelf LMS tools had resulted in a confusing user experience and constant support requests.", solutionTitle: "Unified platform with clean access architecture", solutionBody: "We built a unified system where membership tier drives everything — course access, community visibility, and billing — automatically. Users see only what they have access to. Admins manage everything from a single structured backend.", deliverables: [{ icon: "📚", title: "LearnDash Course System", description: "48 courses with progress tracking, quizzes, certificates, and drip content." },{ icon: "👥", title: "BuddyPress Community", description: "Tiered community access with groups, messaging, and activity feeds per membership level." },{ icon: "💳", title: "WooCommerce Subscriptions", description: "Six membership tiers with automated billing, upgrades, and access provisioning." },{ icon: "☁️", title: "AWS RDS Backend", description: "Managed database layer for reliability and performance at scale." }], techStack: ["WordPress","LearnDash","BuddyPress","WooCommerce Subscriptions","AWS RDS","AWS EC2","ACF Pro"] },
  ngo: { _id: "5", _type: "project", title: "NGO Digital Overhaul", slug: { current: "ngo" }, tagline: "WordPress · Multilingual · Performance", category: "UX Redesign", bgTheme: "rust", tags: ["WordPress","UX","Multilingual","Performance"], isConfidential: false, isFeatured: false, clientType: "Non-Governmental Organization", scope: "UX Redesign · Performance · Multilingual", timeline: "3 months", stats: [{ value: "4", suffix: "×", label: "Faster load time" },{ value: "3", suffix: "", label: "Languages" },{ value: "62", suffix: "%", label: "Bounce rate drop" },{ value: "100", suffix: "%", label: "Mobile optimized" }], overviewTitle: "Clarity over complexity.", overviewBody: "A regional NGO had a website that no longer reflected the quality of their work. Built on an outdated theme with no clear information hierarchy, it was slow, hard to navigate, and difficult for the internal team to update.\n\nPLAVI delivered a full UX redesign and rebuild — faster, cleaner, and fully manageable by non-technical staff.", challengeTitle: "Outdated site, overwhelmed team", challengeBody: "The existing site had grown organically over years — page after page added without structure. Navigation was confusing, mobile experience was broken, and every content update required developer involvement.", solutionTitle: "Structured redesign, empowered team", solutionBody: "We audited the existing content, restructured the information architecture, and rebuilt the site on Bricks Builder with a clean component system. The internal team received a full training session and can now manage all content independently.", deliverables: [{ icon: "🎨", title: "UX Audit & Redesign", description: "Full information architecture review and conversion-focused redesign." },{ icon: "⚡", title: "Performance Optimization", description: "4× faster load time through image optimization, caching, and CDN configuration." },{ icon: "🌐", title: "Multilingual Implementation", description: "Three-language setup with WPML and streamlined translation workflow." },{ icon: "📱", title: "Mobile Optimization", description: "Fully responsive build tested across all major devices and browsers." }], techStack: ["WordPress","Bricks Builder","WPML","ACF Pro","Cloudflare CDN"] },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let project: Project | null = null;
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try { project = await getProjectBySlug(slug); } catch {}
  }
  if (!project) project = fallbackProjects[slug] ?? null;
  if (!project) notFound();
  if (project.isConfidential) notFound();

  const { bgTheme = "navy" } = project;

  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 52px 80px", position: "relative", overflow: "hidden", background: bgThemes[bgTheme] ?? bgThemes.navy }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", inset: 0, background: glows[bgTheme] ?? glows.navy }} />

        <Link href="/work" style={{ position: "absolute", top: "88px", left: "52px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "rgba(245,240,232,.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          ← All projects
        </Link>

        <div style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "28px" }}>
            <span style={{ width: "32px", height: "1.5px", background: C.orange }} />
            {project.category} · Case Study
          </div>
          <h1 style={{ fontSize: "clamp(44px,7vw,88px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.03, color: "#F5F0E8", maxWidth: "860px", marginBottom: "32px" }}>
            {project.title}
          </h1>
          <div style={{ display: "flex", gap: "60px", paddingTop: "32px", borderTop: "1px solid rgba(245,240,232,.12)" }}>
            {[["Client type", project.clientType], ["Scope", project.scope], ["Timeline", project.timeline]].filter(([, v]) => v).map(([label, val]) => (
              <div key={label}>
                <div style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,240,232,.4)", marginBottom: "6px" }}>{label}</div>
                <div style={{ fontSize: "13.5px", fontWeight: 600, color: "rgba(245,240,232,.8)" }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      {project.stats?.length > 0 && (
        <RevealWrapper style={{ display: "grid", gridTemplateColumns: `repeat(${project.stats.length},1fr)`, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          {project.stats.map((s, i) => (
            <div key={i} style={{ padding: "52px 44px", borderRight: i < project.stats.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ fontSize: "54px", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, lineHeight: 1 }}>
                {s.value}<span style={{ color: C.orange }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: "12px", fontWeight: 500, color: C.inkMuted, marginTop: "6px" }}>{s.label}</div>
            </div>
          ))}
        </RevealWrapper>
      )}

      {/* Overview */}
      <RevealWrapper style={{ padding: "80px 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
        <div>
          <Eyebrow>Project overview</Eyebrow>
          <h2 style={{ fontSize: "clamp(32px,3.8vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: C.ink }}>
            {project.overviewTitle}
          </h2>
          <Divider />
        </div>
        <div style={{ fontSize: "15px", lineHeight: 1.8, color: C.inkMuted }}>
          {project.overviewBody?.split("\n\n").map((para, i) => (
            <p key={i} style={{ marginBottom: "20px" }}>{para}</p>
          ))}
        </div>
      </RevealWrapper>

      {/* Timeline phases */}
      {project.timelinePhases && project.timelinePhases.length > 0 && (
        <section style={{ padding: "80px 52px", background: C.creamLight }}>
          <RevealWrapper>
            <Eyebrow>Migration approach</Eyebrow>
            <h2 style={{ fontSize: "clamp(32px,3.5vw,50px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "8px" }}>
              A <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>methodical</em> process.
            </h2>
            <Divider />
          </RevealWrapper>
          <div style={{ borderTop: `1px solid ${C.border}`, marginTop: "52px" }}>
            {project.timelinePhases.map((phase, i) => (
              <RevealWrapper key={i} delay={i * 60} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "32px", padding: "28px 0", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.orange, paddingTop: "3px" }}>{phase.phase}</div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: C.ink, marginBottom: "8px" }}>{phase.title}</div>
                  <div style={{ fontSize: "13px", lineHeight: 1.75, color: C.inkMuted }}>{phase.description}</div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>
      )}

      {/* Challenge / Solution */}
      <RevealWrapper style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
        {[
          { label: "The challenge", title: project.challengeTitle, body: project.challengeBody, bg: C.white },
          { label: "The solution", title: project.solutionTitle, body: project.solutionBody, bg: C.cream },
        ].map(({ label, title, body, bg }) => (
          <div key={label} style={{ background: bg, padding: "64px 52px" }}>
            <Eyebrow>{label}</Eyebrow>
            <h3 style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "20px" }}>{title}</h3>
            <div style={{ fontSize: "14px", lineHeight: 1.82, color: C.inkMuted }}>
              {body?.split("\n\n").map((para, i) => <p key={i} style={{ marginBottom: "16px" }}>{para}</p>)}
            </div>
          </div>
        ))}
      </RevealWrapper>

      {/* Deliverables */}
      {project.deliverables && project.deliverables.length > 0 && (
        <section style={{ padding: "80px 52px", background: C.creamLight }}>
          <RevealWrapper>
            <Eyebrow>What we built</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "8px" }}>
              Full scope of <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>delivery.</em>
            </h2>
            <Divider />
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginTop: "52px" }}>
            {project.deliverables.map((d, i) => (
              <RevealWrapper key={i} delay={i * 50} style={{ background: C.white, padding: "36px", display: "flex", alignItems: "flex-start", gap: "18px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: C.orangeLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
                  {d.icon}
                </div>
                <div>
                  <div style={{ fontSize: "14.5px", fontWeight: 700, color: C.ink, marginBottom: "6px" }}>{d.title}</div>
                  <div style={{ fontSize: "12.5px", lineHeight: 1.7, color: C.inkMuted }}>{d.description}</div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>
      )}

      {/* Tech stack */}
      {project.techStack && project.techStack.length > 0 && (
        <RevealWrapper style={{ padding: "80px 52px" }}>
          <Eyebrow>Technology stack</Eyebrow>
          <h2 style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "8px" }}>
            Built with the <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>right tools.</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "40px" }}>
            {project.techStack.map((tech) => (
              <span key={tech} style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 20px", borderRadius: "100px", border: `1px solid ${C.border}`, color: C.inkMuted }}>
                {tech}
              </span>
            ))}
          </div>
        </RevealWrapper>
      )}

      {/* Back to work */}
      <Link href="/work" style={{ display: "block", background: C.ink, padding: "80px 52px", textDecoration: "none" }}>
        <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(234,229,220,.35)", marginBottom: "20px" }}>
          Back to work
        </div>
        <div style={{ fontSize: "clamp(32px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#EAE5DC", lineHeight: 1.08 }}>
          View all projects →
        </div>
      </Link>
    </>
  );
}