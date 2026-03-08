"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/studio")) return null;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 24px", height: "64px",
        background: scrolled ? "rgba(234,229,220,0.92)" : "#EAE5DC",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(28,26,24,0.1)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(28,26,24,.06)" : "none",
        transition: "all 0.4s ease",
      }}>
        <Link href="/" style={{
          fontSize: "19px", fontWeight: 800, letterSpacing: "-0.04em",
          color: "#1C1A18", textDecoration: "none",
        }}>
          plavi<span style={{ color: "#E8520A" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}
          className="desktop-nav">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontSize: "13px", fontWeight: pathname.startsWith(l.href) ? 700 : 500,
                color: pathname.startsWith(l.href) ? "#1C1A18" : "#3A3733",
                textDecoration: "none",
              }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact"
          className="desktop-nav"
          style={{
            fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em",
            background: "#E8520A", color: "#fff",
            padding: "10px 22px", borderRadius: "100px", textDecoration: "none",
          }}>
          Start a project
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: "5px", padding: "4px",
          }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "2px",
              background: "#1C1A18", borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translateY(7px)"
                : i === 2 ? "rotate(-45deg) translateY(-7px)"
                : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mobile-nav"
          style={{
            position: "fixed", top: "64px", left: 0, right: 0, bottom: 0,
            background: "#EAE5DC", zIndex: 199, display: "flex",
            flexDirection: "column", padding: "40px 24px",
          }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em",
                color: "#1C1A18", textDecoration: "none",
                padding: "16px 0", borderBottom: "1px solid rgba(28,26,24,0.1)",
              }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "32px", fontSize: "13px", fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase",
              background: "#E8520A", color: "#fff", padding: "16px 32px",
              borderRadius: "100px", textDecoration: "none", textAlign: "center",
            }}>
            Start a project
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}