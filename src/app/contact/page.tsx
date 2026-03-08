import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with PLAVI — premium WordPress builds, LMS platforms, platform migrations, and white-label execution.",
};

const C = {
  cream: "#EAE5DC", creamLight: "#F2EEE7", creamMid: "#E0DBD2",
  ink: "#1C1A18", inkMuted: "#7A7570", inkFaint: "#B0AAA3",
  orange: "#E8520A", border: "rgba(28,26,24,0.10)", white: "#FDFCFA",
};

const faq = [
  { q: "Do you work with clients outside Peru?", a: "Yes — the majority of our clients are international. We work across the US, Europe, Latin America, and beyond. Time zone is never a barrier." },
  { q: "How does white-label work?", a: "We build under your brand. Your clients never know PLAVI is involved. We sign NDAs, use your communication channels if needed, and deliver as part of your team." },
  { q: "What's your typical project timeline?", a: "Small builds: 4–6 weeks. Full platform projects: 3–6 months. Migrations: 2–4 months. We scope timeline in the proposal based on your specific requirements." },
  { q: "Do you offer ongoing support after launch?", a: "Yes — we offer structured retainer plans. Most clients stay on with us for ongoing management, updates, and performance optimization after launch." },
  { q: "What's your minimum project size?", a: "We generally start at $5,000 for smaller builds. For ongoing retainers or consulting, we scope based on hours. Larger platform projects start from $15,000." },
  { q: "Can you work with our existing design files?", a: "Absolutely. We regularly receive Figma handoffs and implement them in WordPress with precision. Design-to-build is a core part of what we do." },
];

export default function ContactPage() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>
        {/* Left */}
        <div style={{ paddingTop: "140px", paddingBottom: "80px", padding: "140px 52px 80px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `1px solid ${C.border}`, background: C.cream }}>
          <div>
            <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "18px" }}>
              Let's talk
            </div>
            <h1 style={{ fontSize: "clamp(48px,6.5vw,88px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02, color: C.ink, marginBottom: "28px" }}>
              Let's build<br />
              <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>something</em><br />
              that lasts.
            </h1>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: C.inkMuted, maxWidth: "420px", marginBottom: "52px" }}>
              Whether you're launching a platform, migrating infrastructure, or looking for a white-label partner — we respond within 24 hours.
            </p>
            <div style={{ borderTop: `1px solid ${C.border}` }}>
              {[
                { label: "hello@plavi.studio", badge: "Email ↗", href: "mailto:hello@plavi.studio" },
                { label: "Schedule a discovery call", badge: "Calendly ↗", href: "#" },
                { label: "LinkedIn", badge: "Connect ↗", href: "#" },
                { label: "Instagram", badge: "Follow ↗", href: "#" },
              ].map((link) => (
                <a key={link.label} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", borderBottom: `1px solid ${C.border}`, textDecoration: "none", color: C.ink, fontSize: "15px", fontWeight: 500 }}>
                  {link.label}
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.inkMuted }}>
                    {link.badge}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "32px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "12px", color: C.inkMuted, display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.orange, flexShrink: 0, animation: "blink 2s ease infinite" }} />
              Lima, Peru — Available globally
            </div>
            <div style={{ fontSize: "11px", color: C.inkFaint }}>Response time: under 24 hours</div>
          </div>
        </div>

        {/* Right */}
        <div style={{ paddingTop: "140px", paddingBottom: "80px", padding: "140px 52px 80px", background: C.creamLight }}>
          <ContactForm />
        </div>
      </div>

      {/* FAQ */}
      <section style={{ padding: "80px 52px", background: C.creamMid }}>
        <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.orange, marginBottom: "16px" }}>
          Before you reach out
        </div>
        <h2 style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, letterSpacing: "-0.03em", color: C.ink, marginBottom: "52px" }}>
          Common <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400 }}>questions.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {faq.map((f) => (
            <div key={f.q} style={{ background: C.white, padding: "36px 44px" }}>
              <div style={{ fontSize: "15px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "10px" }}>{f.q}</div>
              <div style={{ fontSize: "13px", lineHeight: 1.75, color: C.inkMuted }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}