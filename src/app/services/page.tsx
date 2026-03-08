import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/queries";
import { RevealWrapper, Eyebrow, BtnCream, BtnGhostDark } from "@/components/ui";
import type { Service } from "@/types";

export const metadata: Metadata = {
  title: "Services",
  description: "Eight services across design, build, and scale.",
};

const C = {
  cream: "#EAE5DC", creamLight: "#F2EEE7", creamMid: "#E0DBD2",
  ink: "#1C1A18", inkMid: "#3A3733", inkMuted: "#7A7570",
  orange: "#E8520A", orangeLight: "#FFF0E9", white: "#FDFCFA",
  border: "rgba(28,26,24,0.10)",
};

const pillars = [
  { num: "01", icon: "✦", title: "Design", desc: "Premium UI & UX. High-end, conversion-focused websites built with precision, structure, and long-term flexibility. Not a template job." },
  { num: "02", icon: "⬡", title: "Build", desc: "Advanced WordPress & platform architecture. Bricks Builder, custom post types, LMS builds, migrations — structured, clean, future-ready." },
  { num: "03", icon: "◎", title: "Scale", desc: "White-label partnerships & ongoing support. Your invisible technical partner — Grade A execution under your brand. Fully confidential." },
];

const fallbackServices: Service[] = [
  { _id: "1", _type: "service", index: "01", order: 1, title: "Premium Website Design & Development", tagline: "High-end, conversion-focused websites built with precision and structure.", description: "We design and develop modern digital platforms that combine strong UI, clean architecture, and long-term flexibility.", pillar: "design", idealFor: "Ideal for", tags: ["Brands","Foundations","Growing companies"], includes: [{ text: "Custom design & development" },{ text: "Structured, scalable architecture" },{ text: "Performance-first build" },{ text: "CMS-ready for internal teams" }] },
  { _id: "2", _type: "service", index: "02", order: 2, title: "White-Label Development for Agencies", tagline: "Your invisible technical partner.", description: "PLAVI works behind the scenes with creative and marketing agencies to execute complex WordPress builds under their brand.", pillar: "scale", idealFor: "Includes", tags: ["Confidential","Full builds","Retainer"], includes: [{ text: "Full site builds under your brand" },{ text: "Component-based development" },{ text: "Ongoing technical support" },{ text: "Complex integrations" }] },
  { _id: "3", _type: "service", index: "03", order: 3, title: "Advanced WordPress Builds", tagline: "Structured, clean, and future-ready.", description: "We build using modern WordPress architecture — prioritizing flexibility, maintainability, and performance.", pillar: "build", idealFor: "Focus areas", tags: ["Bricks Builder","Custom CPTs","ACF"], includes: [{ text: "Component-based builds" },{ text: "Custom post types & dynamic content" },{ text: "Scalable backend structure" }] },
  { _id: "4", _type: "service", index: "04", order: 4, title: "LMS & Learning Platform Development", tagline: "Structured learning environments built for scale.", description: "We design and implement learning management systems for organizations that need structured courses, gated content, and automated workflows.", pillar: "build", idealFor: "Perfect for", tags: ["Foundations","Educators","Membership orgs"], includes: [{ text: "LearnDash / Moodle implementation" },{ text: "Member access & gated content" },{ text: "Certificate automation" }] },
  { _id: "5", _type: "service", index: "05", order: 5, title: "Website Migrations & Rebuilds", tagline: "From legacy to modern.", description: "We migrate websites from platforms like Kentico into clean, modern WordPress builds — without losing structure, content integrity, or SEO value.", pillar: "build", idealFor: "Includes", tags: ["Kentico","SEO preserved","Data integrity"], includes: [{ text: "Platform migration strategy" },{ text: "Content restructuring" },{ text: "URL & SEO preservation" }] },
  { _id: "6", _type: "service", index: "06", order: 6, title: "UX-Focused Redesigns", tagline: "Not a visual refresh — a structural upgrade.", description: "We redesign outdated websites with focus on clarity, hierarchy, and user flow. The goal is not decoration — it's measurable improvement.", pillar: "design", idealFor: "Process", tags: ["UX Audit","Redesign","CRO"], includes: [{ text: "UX audit & heatmap review" },{ text: "Hierarchy & flow redesign" },{ text: "Conversion-focused implementation" }] },
  { _id: "7", _type: "service", index: "07", order: 7, title: "Technical Consulting & Architecture Planning", tagline: "Senior-level guidance before development starts.", description: "We help organizations define the right stack, hosting structure — including AWS when required — and long-term digital strategy.", pillar: "scale", idealFor: "Covers", tags: ["AWS","Strategy","Stack planning"], includes: [{ text: "Stack & platform selection" },{ text: "Hosting architecture" },{ text: "Long-term digital strategy" }] },
  { _id: "8", _type: "service", index: "08", order: 8, title: "Ongoing Management & Optimization", tagline: "For teams that want reliability, not ad hoc fixes.", description: "Structured maintenance and management plans for clients who prefer a long-term technical partner.", pillar: "scale", idealFor: "Includes", tags: ["Retainer","Monitoring","Long-term"], includes: [{ text: "Monthly performance reporting" },{ text: "Security & update management" },{ text: "Proactive optimization" }] },
];

export default async function ServicesPage() {
  let services = fallbackServices;
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try { services = await getAllServices(); } catch {}
  }

  return (
    <>
      {/* Hero */}
      <div style={{ paddingTop: "140px", paddingBottom: "80px", padding: "140px 52px 80px", background: C.cream, borderBottom: `1px solid ${C.border}` }}>
        <Eyebrow>What we do</Eyebrow>
        <h1 style={{ fontSize: "clamp(52px,7.5vw,100px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02, color: C.ink }}>
          Services built for<br />
          <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>serious work.</em>
        </h1>
        <p style={{ fontSize: "16px", color: C.inkMuted, lineHeight: 1.7, maxWidth: "520px", marginTop: "22px" }}>
          Eight services. Three pillars. One studio that delivers — on time, to spec, without shortcuts.
        </p>
      </div>

      {/* Pillars */}
      <section style={{ padding: "80px 52px" }}>
        <RevealWrapper>
          <Eyebrow>Three pillars</Eyebrow>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "52px" }}>
            How we <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>organize our work.</em>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={80} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px", border: `1px solid ${C.border}` }}>
          {pillars.map((p) => (
            <div key={p.num} style={{ background: C.white, padding: "52px 44px 48px", position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "24px" }}>{p.num}</div>
              <div style={{ width: "46px", height: "46px", background: C.orangeLight, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "22px" }}>{p.icon}</div>
              <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "12px" }}>{p.title}</div>
              <p style={{ fontSize: "13px", lineHeight: 1.8, color: C.inkMuted }}>{p.desc}</p>
            </div>
          ))}
        </RevealWrapper>
      </section>

      {/* Full service list */}
      <section style={{ padding: "80px 52px", background: C.creamLight }}>
        <RevealWrapper>
          <Eyebrow>Full scope</Eyebrow>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "12px" }}>
            All <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>eight services.</em>
          </h2>
          <p style={{ fontSize: "14px", color: C.inkMuted, maxWidth: "520px", lineHeight: 1.7, marginBottom: "52px" }}>
            Not a generalist menu. Every service is something we've done many times, for serious clients, with measurable outcomes.
          </p>
        </RevealWrapper>
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          {services.map((svc, i) => (
            <RevealWrapper key={svc._id} delay={i * 50} style={{ display: "grid", gridTemplateColumns: "56px 1fr 320px", gap: "40px", alignItems: "start", padding: "44px 0", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.18em", color: C.orange, paddingTop: "4px" }}>{svc.index}</div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1.15, marginBottom: "8px" }}>{svc.title}</div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: C.inkMuted, fontStyle: "italic", marginBottom: "14px" }}>{svc.tagline}</div>
                <div style={{ fontSize: "13.5px", lineHeight: 1.82, color: C.inkMuted }}>{svc.description}</div>
              </div>
              <div>
                {svc.idealFor && (
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.orange, marginBottom: "12px" }}>{svc.idealFor}</div>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "16px" }}>
                  {svc.tags?.map((tag) => (
                    <span key={tag} style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkMuted, border: `1px solid ${C.border}`, padding: "5px 12px", borderRadius: "100px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {svc.includes?.map((item, j) => (
                    <div key={j} style={{ fontSize: "12px", color: C.inkMuted, paddingLeft: "14px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: C.orange, fontSize: "10px" }}>→</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section style={{ padding: "80px 52px" }}>
        <RevealWrapper>
          <Eyebrow>Who we work with</Eyebrow>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "52px" }}>
            The right <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>clients.</em>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={80} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {[
            { icon: "🌐", title: "International Organizations", desc: "Foundations, NGOs, and global institutions needing multilingual, high-availability platforms.", items: ["Foundation portals & member systems","Multilingual LMS platforms","AWS-hosted infrastructure"] },
            { icon: "🏢", title: "Serious Brands", desc: "Growing companies that have outgrown template solutions and need a technical partner who thinks in systems.", items: ["Premium website design & build","E-commerce architecture","UX-focused redesigns"] },
            { icon: "🤝", title: "Creative Agencies", desc: "Design and marketing agencies that need senior WordPress execution under their brand — without hiring in-house.", items: ["White-label builds","Client project execution","Fully confidential"] },
            { icon: "📚", title: "Education & Training", desc: "Organizations that need structured learning environments — not just a course plugin on a theme.", items: ["LearnDash & custom LMS builds","Member portal development","Certificate automation"] },
          ].map((c) => (
            <div key={c.title} style={{ background: C.white, padding: "44px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{c.icon}</div>
              <div style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "10px" }}>{c.title}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: C.inkMuted, marginBottom: "18px" }}>{c.desc}</p>
              <ul style={{ listStyle: "none" }}>
                {c.items.map((item) => (
                  <li key={item} style={{ fontSize: "12.5px", color: C.inkMuted, paddingLeft: "16px", position: "relative", marginBottom: "6px" }}>
                    <span style={{ position: "absolute", left: 0, color: C.orange }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealWrapper>
      </section>

      {/* WL band */}
      <div style={{ background: C.ink, padding: "100px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "60px" }}>
        <div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#EAE5DC" }}>
            The studio agencies<br />
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "rgba(232,82,10,.9)" }}>quietly rely on.</em>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(234,229,220,.45)", lineHeight: 1.75, maxWidth: "400px", marginTop: "16px" }}>
            PLAVI works white-label with agencies across the US, Europe, and Latin America.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <BtnCream href="/contact">Partner with us</BtnCream>
          <BtnGhostDark href="/work">See our work</BtnGhostDark>
        </div>
      </div>
    </>
  );
}