"use client";

import { useState } from "react";

const C = {
  ink: "#1C1A18", inkMuted: "#7A7570", inkFaint: "#B0AAA3",
  orange: "#E8520A", orangeDim: "#CF4708", border: "rgba(28,26,24,0.10)", white: "#FDFCFA",
};

const inputStyle: React.CSSProperties = {
  width: "100%", fontFamily: "inherit", fontSize: "14px", fontWeight: 500,
  color: C.ink, background: C.white, border: `1px solid ${C.border}`,
  borderRadius: "8px", padding: "14px 18px", outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.15em",
  textTransform: "uppercase" as const, color: C.inkMuted, display: "block", marginBottom: "6px",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "96px 0" }}>
        <div style={{ fontSize: "48px", marginBottom: "24px" }}>✦</div>
        <h2 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "16px" }}>Got it. Talk soon.</h2>
        <p style={{ fontSize: "14px", color: C.inkMuted, lineHeight: 1.75, maxWidth: "320px" }}>
          We'll review your brief and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em", color: C.ink, marginBottom: "8px" }}>
        Tell us about your project
      </h2>
      <p style={{ fontSize: "13px", color: C.inkMuted, marginBottom: "36px", lineHeight: 1.6 }}>
        Fill in what you know. We'll work out the details together.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div>
            <label style={labelStyle}>First name</label>
            <input type="text" placeholder="Maria" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Last name</label>
            <input type="text" placeholder="Garcia" style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="maria@company.com" required style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Company / Organization</label>
          <input type="text" placeholder="Acme Foundation" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>What do you need?</label>
          <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
            <option value="">Select a service</option>
            {[
              "Premium Website Design & Development",
              "White-Label Development (Agency)",
              "Advanced WordPress Build",
              "LMS & Learning Platform",
              "Website Migration & Rebuild",
              "UX-Focused Redesign",
              "Technical Consulting",
              "Ongoing Management",
              "Not sure yet — let's talk",
            ].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Approximate budget</label>
          <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
            <option value="">Select a range</option>
            <option>Under $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $40,000</option>
            <option>$40,000+</option>
            <option>Ongoing retainer</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Tell us more</label>
          <textarea
            placeholder="Describe your project, goals, or constraints we should know about..."
            style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
          />
        </div>

        <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
          <input type="checkbox" style={{ width: "18px", height: "18px", marginTop: "2px", flexShrink: 0, accentColor: C.orange }} />
          <span style={{ fontSize: "12.5px", color: C.inkMuted, lineHeight: 1.6 }}>
            This is a white-label inquiry — please keep our engagement confidential.
          </span>
        </label>

        <button type="submit" style={{
          width: "100%", fontFamily: "inherit", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase", background: C.orange,
          color: "#fff", border: "none", padding: "16px 32px", borderRadius: "100px",
          cursor: "pointer",
        }}>
          Send project brief →
        </button>
      </form>
    </>
  );
}