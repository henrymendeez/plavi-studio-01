"use client";

import Link from "next/link";
import { RevealWrapper, Eyebrow, SectionTitle, BtnFill, BtnStroke, BtnCream, BtnGhostDark } from "@/components/ui";
import type { Project, Service, SiteSettings } from "@/types";

const C = {
  cream: "#EAE5DC", creamLight: "#F2EEE7", creamMid: "#E0DBD2",
  ink: "#1C1A18", inkMid: "#3A3733", inkMuted: "#7A7570", inkFaint: "#B0AAA3",
  orange: "#E8520A", orangeLight: "#FFF0E9", white: "#FDFCFA",
  border: "rgba(28,26,24,0.10)",
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section style={{
      minHeight: "100vh", paddingTop: "148px", paddingBottom: 0,
      padding: "148px 52px 0", display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      background: C.cream, position: "relative", overflow: "hidden",
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.2em",
        textTransform: "uppercase", color: C.inkMuted, marginBottom: "36px",
        animation: "up .7s ease .1s both",
      }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.orange }} />
        Premium Web Studio · Lima, Peru
      </div>

      <h1 style={{
        fontSize: "clamp(50px,8.5vw,112px)", fontWeight: 800,
        lineHeight: 1.04, letterSpacing: "-0.035em", color: C.ink,
        maxWidth: "1000px", marginBottom: "28px",
        animation: "up .85s ease .22s both",
      }}>
        We build digital platforms<br />
        agencies <span style={{ position: "relative", display: "inline-block" }}>
          rely on.
          <span style={{
            content: "''", position: "absolute", left: 0, right: 0, bottom: "4px",
            height: "3px", background: C.ink, borderRadius: "2px",
            display: "block",
          }} />
        </span>
      </h1>

      <p style={{
        fontSize: "17px", fontWeight: 400, color: C.inkMuted,
        lineHeight: 1.65, maxWidth: "480px", marginBottom: "44px",
        animation: "up .8s ease .36s both",
      }}>
        {settings.heroSubtitle || "Premium WordPress architecture, platform builds, and white-label execution for serious brands."}
      </p>

      <div style={{ display: "flex", gap: "12px", marginBottom: "80px", animation: "up .8s ease .5s both" }}>
        <BtnFill href="/contact">Start a project</BtnFill>
        <BtnStroke href="/work">See our work</BtnStroke>
      </div>

      {/* Mock screens */}
      <div style={{
        width: "100%", maxWidth: "1100px", height: "420px",
        position: "relative", flexShrink: 0,
        animation: "up 1s ease .65s both",
      }}>
        {[
          { style: { width: "252px", height: "338px", left: 0, transform: "rotate(-6deg) translateY(24px)", zIndex: 1 }, bg: "linear-gradient(145deg,#0d1520,#1a2e48)" },
          { style: { width: "292px", height: "372px", left: "50%", marginLeft: "-232px", transform: "rotate(-2deg) translateY(8px)", zIndex: 2 }, bg: "linear-gradient(145deg,#1a0e07,#2d1e0d)" },
          { style: { width: "312px", height: "398px", left: "50%", transform: "translateX(-50%)", zIndex: 3 }, bg: "linear-gradient(145deg,#0a1a14,#0f2b20)" },
          { style: { width: "252px", height: "338px", right: 0, transform: "rotate(5deg) translateY(24px)", zIndex: 1 }, bg: "linear-gradient(145deg,#14141a,#1e1e2d)" },
        ].map((m, i) => (
          <div key={i} style={{
            position: "absolute", bottom: 0, borderRadius: "10px", overflow: "hidden",
            boxShadow: "0 28px 70px rgba(28,26,24,.15)", border: "1px solid rgba(28,26,24,.06)",
            background: "#fff", ...m.style,
          }}>
            <div style={{
              height: "26px", background: "#f3f3f1", borderBottom: "1px solid #e8e8e4",
              display: "flex", alignItems: "center", padding: "0 10px", gap: "5px",
            }}>
              {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
                <span key={c} style={{ width: "7px", height: "7px", borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{ height: "calc(100% - 26px)", background: m.bg }} />
          </div>
        ))}
      </div>

      <style>{`@keyframes up { from { opacity:0; transform:translateY(26px); } to { opacity:1; transform:none; } }`}</style>
    </section>
  );
}

// ─── MARQUEE ─────────────────────────────────────────────────────────────────
const marqueeItems = [
  "WordPress Architecture","AWS Infrastructure","LMS Development",
  "Bricks Builder","Platform Migrations","White-Label Execution",
  "Headless CMS","WooCommerce","LearnDash","Technical Consulting",
];

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.creamMid, padding: "15px 0", overflow: "hidden" }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "30px", padding: "0 30px",
            fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: C.inkMuted, flexShrink: 0,
          }}>
            {item}
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.orange, flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── THREE PILLARS ───────────────────────────────────────────────────────────
const pillars = [
  { num: "01", icon: "✦", title: "Design", desc: "Premium UI & UX. High-end, conversion-focused websites built with precision and structure." },
  { num: "02", icon: "⬡", title: "Build", desc: "Advanced WordPress & platform architecture. Bricks, custom post types, LMS, migrations." },
  { num: "03", icon: "◎", title: "Scale", desc: "White-label partnerships & ongoing support. Grade A execution under your brand." },
];

export function Pillars() {
  return (
    <section style={{ padding: "100px 52px", background: C.cream }}>
      <RevealWrapper>
        <Eyebrow>How we work</Eyebrow>
        <SectionTitle>Three <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>pillars.</em></SectionTitle>
      </RevealWrapper>
      <RevealWrapper delay={100} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px", border: `1px solid ${C.border}`, marginTop: "64px" }} className="grid-3col">
        {pillars.map((p) => (
          <div key={p.num} style={{ background: C.white, padding: "50px 42px 46px", position: "relative", overflow: "hidden" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "26px" }}>{p.num}</div>
            <div style={{ width: "46px", height: "46px", background: C.orangeLight, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "24px" }}>{p.icon}</div>
            <div style={{ fontSize: "21px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "14px" }}>{p.title}</div>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: C.inkMuted }}>{p.desc}</p>
          </div>
        ))}
      </RevealWrapper>
    </section>
  );
}

// ─── SERVICES PREVIEW ────────────────────────────────────────────────────────
export function ServicesPreview({ services }: { services: Service[] }) {
  return (
    <section style={{ padding: "100px 52px", background: C.creamLight }}>
      <RevealWrapper style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px" }}>
        <div>
          <Eyebrow>What we do</Eyebrow>
          <SectionTitle>Eight <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>services.</em></SectionTitle>
        </div>
        <Link href="/services" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkMuted, textDecoration: "none", borderBottom: `1px solid ${C.border}`, paddingBottom: "3px" }}>
          Full services →
        </Link>
      </RevealWrapper>
      <div style={{ borderTop: `1px solid ${C.border}` }}>
        {services.map((svc, i) => (
          <RevealWrapper key={svc._id} delay={i * 40} style={{ display: "grid", gridTemplateColumns: "52px 1fr 1.1fr auto", gap: "28px", alignItems: "start", padding: "34px 0", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.18em", color: C.orange, paddingTop: "3px" }}>{svc.index}</div>
            <div>
              <div style={{ fontSize: "19px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1.2 }}>{svc.title}</div>
              <div style={{ fontSize: "12px", color: C.inkMuted, marginTop: "5px", fontStyle: "italic" }}>{svc.tagline}</div>
            </div>
            <div style={{ fontSize: "13px", lineHeight: 1.82, color: C.inkMuted }}>{svc.description}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "flex-end", paddingTop: "3px" }}>
              {svc.tags?.slice(0, 3).map((tag) => (
                <span key={tag} style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkMuted, border: `1px solid ${C.border}`, padding: "5px 11px", borderRadius: "100px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}

// ─── WORK GRID ───────────────────────────────────────────────────────────────
const bgThemes: Record<string, string> = {
  navy:   "linear-gradient(145deg,#0d1520,#182d48,#0d1520)",
  ember:  "linear-gradient(145deg,#1a0e07,#2d1e0d,#120a05)",
  forest: "linear-gradient(145deg,#0a1a14,#0f2b20,#091515)",
  slate:  "linear-gradient(145deg,#14141a,#1e1e2d,#0d0d14)",
  rust:   "linear-gradient(145deg,#1a0c08,#2d1508,#140806)",
};

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section style={{ padding: "100px 52px", background: C.creamMid }}>
      <RevealWrapper style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }} className="work-grid">
        <div>
          <Eyebrow>Selected projects</Eyebrow>
          <SectionTitle>Recent <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>work.</em></SectionTitle>
        </div>
        <Link href="/work" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkMuted, textDecoration: "none", borderBottom: `1px solid ${C.border}`, paddingBottom: "3px" }}>
          Full portfolio ↗
        </Link>
      </RevealWrapper>
      <RevealWrapper delay={80} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
        {projects.slice(0, 3).map((p, i) => (
          <Link key={p._id} href={p.isConfidential ? "#" : `/work/${p.slug.current}`} style={{
            position: "relative", overflow: "hidden", cursor: "pointer", display: "block",
            gridRow: i === 0 ? "span 2" : "auto", aspectRatio: i === 0 ? "auto" : "16/10",
            minHeight: i === 0 ? "560px" : "280px", textDecoration: "none",
          }}>
            <div style={{ position: "absolute", inset: 0, background: bgThemes[p.bgTheme] ?? bgThemes.navy }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(28,26,24,.93) 0%,rgba(28,26,24,.2) 55%,transparent 100%)", opacity: 0.7 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "44px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "10px" }}>{p.category}</div>
              <div style={{ fontSize: i === 0 ? "44px" : "28px", fontWeight: 800, letterSpacing: "-0.02em", color: "#F5F0E8", lineHeight: 1.08, marginBottom: "12px" }}>{p.title}</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {p.tags?.slice(0, 3).map((tag) => (
                  <span key={tag} style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", border: "1px solid rgba(245,240,232,.18)", color: "rgba(245,240,232,.6)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </RevealWrapper>
    </section>
  );
}

// ─── STATS BAND ──────────────────────────────────────────────────────────────
export function StatsBand({ stats }: { stats: SiteSettings["stats"] }) {
  if (!stats || stats.length === 0) return null;
  return (
    <RevealWrapper style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }} className="stats-band">
      {stats.map((s, i) => (
        <div key={i} style={{ padding: "52px 44px", borderRight: i < stats.length - 1 ? `1px solid ${C.border}` : "none" }}>
          <div style={{ fontSize: "54px", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, lineHeight: 1 }}>
            {s.value}<span style={{ color: C.orange }}>{s.suffix}</span>
          </div>
          <div style={{ fontSize: "12px", fontWeight: 500, color: C.inkMuted, marginTop: "6px" }}>{s.label}</div>
        </div>
      ))}
    </RevealWrapper>
  );
}

// ─── ABOUT PREVIEW ───────────────────────────────────────────────────────────
const skills = [
  ["WordPress Engineering","Expert"],["Bricks Builder","Expert"],
  ["AWS Infrastructure","Expert"],["LMS Systems","Expert"],
  ["Headless / Next.js","Advanced"],["Platform Migrations","Expert"],
];

export function AboutPreview({ settings }: { settings: SiteSettings }) {
  return (
    <section style={{ padding: "100px 52px", background: C.creamLight }}>
      <RevealWrapper style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }} className="grid-2col">
        <div>
          <Eyebrow>About PLAVI</Eyebrow>
          <blockquote style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontSize: "clamp(24px,3vw,40px)", lineHeight: 1.35, color: C.ink, marginBottom: "32px" }}>
            "We're the studio that other agencies{" "}
            <strong style={{ fontStyle: "normal", color: C.orange, fontWeight: 400 }}>secretly rely on.</strong>"
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
  );
}

// ─── WHITE LABEL BAND ────────────────────────────────────────────────────────
const wlCards = [
  { icon: "🏗", title: "Full site builds", desc: "End-to-end development under your brand — from design handoff to live deployment." },
  { icon: "⚙️", title: "Component-based dev", desc: "Structured, reusable systems your clients can manage without breaking things." },
  { icon: "🔗", title: "Complex integrations", desc: "CRMs, payments, LMS, APIs — we handle the technical depth agencies avoid." },
  { icon: "🛡", title: "Ongoing support", desc: "Retainer-based support so you can promise clients reliability without the risk." },
];

export function WhiteLabelBand() {
  return (
    <RevealWrapper style={{ background: "#1C1A18", padding: "100px 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", position: "relative", overflow: "hidden" }}>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(234,229,220,.4)", marginBottom: "32px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.orange }} />
          For agencies
        </div>
        <h2 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#EAE5DC", marginBottom: "24px" }}>
          Your silent<br />
          <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "rgba(232,82,10,.9)" }}>technical partner.</em>
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(234,229,220,.45)", lineHeight: 1.75, maxWidth: "400px", marginBottom: "40px" }}>
          We work white-label with creative and marketing agencies that need senior-level WordPress and infrastructure expertise — without adding headcount.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <BtnCream href="/contact">Partner with us</BtnCream>
          <BtnGhostDark href="/services">See what we build</BtnGhostDark>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {wlCards.map((c) => (
          <div key={c.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px", background: "rgba(234,229,220,.04)", padding: "20px 24px", borderRadius: "4px" }}>
            <div style={{ fontSize: "22px", flexShrink: 0 }}>{c.icon}</div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "rgba(234,229,220,.8)", marginBottom: "4px" }}>{c.title}</div>
              <div style={{ fontSize: "12.5px", color: "rgba(234,229,220,.4)", lineHeight: 1.7 }}>{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </RevealWrapper>
  );
}