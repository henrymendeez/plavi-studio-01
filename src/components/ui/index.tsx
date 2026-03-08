"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ─── RevealWrapper ────────────────────────────────────────────────────────────
export function RevealWrapper({
  children,
  className = "",
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("on"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

// ─── Eyebrow ──────────────────────────────────────────────────────────────────
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.22em",
      textTransform: "uppercase", color: "#E8520A", marginBottom: "18px",
    }}>
      {children}
    </div>
  );
}

// ─── SectionTitle ─────────────────────────────────────────────────────────────
export function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2 style={{
      fontSize: "clamp(36px,4.8vw,66px)", fontWeight: 800,
      lineHeight: 1.05, letterSpacing: "-0.03em",
      color: light ? "#EAE5DC" : "#1C1A18",
    }}>
      {children}
    </h2>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
export function Divider() {
  return (
    <div style={{
      width: "44px", height: "3px", background: "#E8520A",
      borderRadius: "2px", margin: "20px 0",
    }} />
  );
}

// ─── Buttons ──────────────────────────────────────────────────────────────────
interface BtnProps {
  href: string;
  children: React.ReactNode;
}

export function BtnFill({ href, children }: BtnProps) {
  return (
    <Link href={href} style={{
      display: "inline-block",
      fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.08em",
      textTransform: "uppercase", background: "#E8520A", color: "#fff",
      padding: "14px 30px", borderRadius: "100px", textDecoration: "none",
    }}>
      {children}
    </Link>
  );
}

export function BtnStroke({ href, children }: BtnProps) {
  return (
    <Link href={href} style={{
      display: "inline-flex", alignItems: "center", gap: "10px",
      fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.08em",
      textTransform: "uppercase", background: "transparent",
      color: "#1C1A18", border: "2px solid #1C1A18",
      padding: "12px 22px 12px 30px", borderRadius: "100px", textDecoration: "none",
    }}>
      {children}
      <span style={{
        width: "30px", height: "30px", borderRadius: "50%",
        background: "#1C1A18", color: "#EAE5DC",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "13px", flexShrink: 0,
      }}>→</span>
    </Link>
  );
}

export function BtnCream({ href, children }: BtnProps) {
  return (
    <Link href={href} style={{
      display: "inline-block",
      fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.06em",
      textTransform: "uppercase", background: "#EAE5DC", color: "#1C1A18",
      padding: "14px 30px", borderRadius: "100px", textDecoration: "none",
    }}>
      {children}
    </Link>
  );
}

export function BtnGhostDark({ href, children }: BtnProps) {
  return (
    <Link href={href} style={{
      display: "inline-block",
      fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.06em",
      textTransform: "uppercase", background: "transparent",
      color: "rgba(234,229,220,0.5)", border: "1.5px solid rgba(234,229,220,0.18)",
      padding: "13px 28px", borderRadius: "100px", textDecoration: "none",
    }}>
      {children}
    </Link>
  );
}