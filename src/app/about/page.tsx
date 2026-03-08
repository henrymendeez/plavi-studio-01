import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/queries";
import { RevealWrapper, Eyebrow, BtnFill, BtnGhostDark } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "PLAVI — 8+ years of senior-level WordPress architecture, platform builds, and infrastructure.",
};

const C = {
  cream: "#EAE5DC", creamLight: "#F2EEE7",
  ink: "#1C1A18", inkMuted: "#7A7570",
  orange: "#E8520A", orangeLight: "#FFF0E9", white: "#FDFCFA",
  border: "rgba(28,26,24,0.10)",
};

const skills = [
  ["WordPress Engineering","Expert"],["Bricks Builder Architecture","Expert"],
  ["AWS Infrastructure","Expert"],["LMS Systems (LearnDash)","Expert"],
  ["Platform Migrations (Kentico)","Expert"],["Headless / Next.js","Advanced"],
  ["WooCommerce Development","Expert"],
];

const steps = [
  { step: "Step 01", title: "Discovery", desc: "We start by understanding your goals, constraints, and technical reality. No assumptions, no templates." },
  { step: "Step 02", title: "Architecture", desc: "We design the system before a single line of code is written. Stack, structure, access model, hosting — all defined upfront." },
  { step: "Step 03", title: "Build", desc: "Structured, component-based development with regular check-ins. You see progress, not just a final reveal." },
  { step: "Step 04", title: "Launch & Handoff", desc: "Coordinated launch, thorough documentation, and a team trained to manage their platform independently." },
];

const values = [
  { icon: "⚡", title: "Speed is architecture, not a setting", desc: "We build for performance from the start — not as an afterthought. CDN, caching, code structure, image delivery — all considered before launch." },
  { icon: "🏗", title: "Structure over decoration", desc: "Pretty sites that break under pressure aren't worth building. Every PLAVI project is engineered for longevity, not just visual polish." },
  { icon: "🤐", title: "Confidentiality is non-negotiable", desc: "Many of our best projects will never appear in our portfolio. White-label work means your clients never know we exist. That's the point." },
  { icon: "📋", title: "Documentation as a deliverable", desc: "We hand off platforms that internal teams can actually manage. Every project includes structured documentation and a training session." },
];

const fallbackSettings = {
  aboutBody: [
    "PLAVI was built for clients who've outgrown generic agencies. We work with <strong>international organizations, growing businesses, and creative agencies</strong> who need a technical partner that thinks in systems — not just pages.",
    "Our work is defined by <strong>clean code, measurable performance, and architecture that scales.</strong> We've shipped platforms for foundations, NGOs, and enterprise teams across four continents — often invisibly, under partner brands.",
    "8+ years. Senior-level execution. <strong>Zero shortcuts.</strong>",
  ],
  stats: [
    { value: "8", suffix: "+", label: "Years of craft" },
    { value: "40", suffix: "+", label: "Projects delivered" },
    { value: "12", suffix: "+", label: "Countries served" },
    { value: "100", suffix: "%", label: "White-label confidential" },
  ] as { value: string; suffix: string; label: string }[],
};

type SettingsShape = {
  aboutBody: string[];
  stats: { value: string; suffix: string; label: string }[];
};

let settings: SettingsShape = fallbackSettings;
if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  try {
    const s = await getSiteSettings();
    if (s) settings = {
      aboutBody: s.aboutBody ?? fallbackSettings.aboutBody,
      stats: (s.stats ?? fallbackSettings.stats).map(st => ({
        value: st.value,
        suffix: st.suffix ?? "",
        label: st.label,
      })),
    };
  } catch {}
}

  return (
    <>
      {/* Hero */}
      <div style={{ paddingTop: "140px", paddingBottom: "80px", padding: "140px 52px 80px", background: C.cream, borderBottom: `1px solid ${C.border}` }}>
        <Eyebrow>About PLAVI</Eyebrow>
        <h1 style={{ fontSize: "clamp(52px,7.5vw,100px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02, color: C.ink }}>
          The studio other<br />
          agencies <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>rely on.</em>
        </h1>
        <p style={{ fontSize: "16px", color: C.inkMuted, lineHeight: 1.7, maxWidth: "520px", marginTop: "22px" }}>
          8+ years of senior-level WordPress architecture, platform builds, and infrastructure. Based in Lima. Operating globally.
        </p>
      </div>

      {/* Statement + Skills */}
      <section style={{ padding: "80px 52px" }}>
        <RevealWrapper style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
          <div>
            <Eyebrow>About</Eyebrow>
            <blockquote style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.3, color: C.ink, marginBottom: "32px" }}>
              "We don't sell websites. We build{" "}
              <strong style={{ fontStyle: "normal", color: C.orange, fontWeight: 400 }}>digital infrastructure</strong>{" "}
              your organization can depend on."
            </blockquote>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: C.inkMuted, paddingTop: "24px", borderTop: `1px solid ${C.border}` }}>
              — PLAVI Studio · Lima, Peru · Est. 2016
            </div>
          </div>
          <div>
            {settings.aboutBody?.map((para, i) => (
              <p key={i} style={{ fontSize: "14.5px", lineHeight: 1.85, color: C.inkMuted, marginBottom: "20px" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
            <div style={{ marginTop: "40px" }}>
              {skills.map(([name, level]) => (
                <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: `1px solid ${C.border}`, fontSize: "13px", fontWeight: 500, color: C.inkMuted }}>
                  <span>{name}</span>
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: C.orangeLight, color: C.orange, padding: "4px 10px", borderRadius: "100px" }}>
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* Stats */}
      <RevealWrapper style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        {settings.stats?.map((s, i) => (
          <div key={i} style={{ padding: "52px 44px", borderRight: i < 3 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ fontSize: "54px", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, lineHeight: 1 }}>
              {s.value}<span style={{ color: C.orange }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: "12px", fontWeight: 500, color: C.inkMuted, marginTop: "6px" }}>{s.label}</div>
          </div>
        ))}
      </RevealWrapper>

      {/* Process */}
      <section style={{ padding: "80px 52px", background: C.creamLight }}>
        <RevealWrapper>
          <Eyebrow>How we work</Eyebrow>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "52px" }}>
            A <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>structured</em> process.
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={80} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2px" }}>
          {steps.map((p) => (
            <div key={p.step} style={{ background: C.white, padding: "40px 36px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "18px" }}>{p.step}</div>
              <div style={{ fontSize: "17px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "10px" }}>{p.title}</div>
              <div style={{ fontSize: "13px", lineHeight: 1.75, color: C.inkMuted }}>{p.desc}</div>
            </div>
          ))}
        </RevealWrapper>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 52px" }}>
        <RevealWrapper>
          <Eyebrow>What we stand for</Eyebrow>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "52px" }}>
            The <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>principles</em> we work by.
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={80} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {values.map((v) => (
            <div key={v.title} style={{ background: C.white, padding: "44px", display: "flex", gap: "24px", alignItems: "flex-start" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: C.orangeLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
                {v.icon}
              </div>
              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "8px" }}>{v.title}</div>
                <div style={{ fontSize: "13px", lineHeight: 1.75, color: C.inkMuted }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </section>

      {/* CTA */}
      <div style={{ background: C.ink, padding: "100px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "60px" }}>
        <div>
          <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#EAE5DC" }}>
            Working with us<br />
            <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "rgba(232,82,10,.9)" }}>looks like this.</em>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(234,229,220,.45)", lineHeight: 1.75, maxWidth: "400px", marginTop: "16px" }}>
            A discovery call. A clear proposal. A build that ships on time. And a platform you can depend on for years.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <BtnFill href="/contact">Start a project</BtnFill>
          <BtnGhostDark href="/work">See our work</BtnGhostDark>
        </div>
      </div>
    </>
  );
}