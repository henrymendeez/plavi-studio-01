import Link from "next/link";

export function Footer() {
  return (
    <footer style={{
      padding: "28px 52px",
      borderTop: "1px solid rgba(28,26,24,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#EAE5DC",
    }}>
      <div style={{ fontSize: "16px", fontWeight: 800, letterSpacing: "-0.02em", color: "#7A7570" }}>
        plavi<span style={{ color: "#E8520A" }}>.</span>
      </div>
      <div style={{ fontSize: "11px", color: "#B0AAA3" }}>
        © 2025 PLAVI Studio — Lima, Peru. All rights reserved.
      </div>
      <ul style={{ display: "flex", gap: "28px", listStyle: "none" }}>
        {["Privacy", "Terms", "LinkedIn"].map((item) => (
          <li key={item}>
            <Link href="#" style={{
              fontSize: "11px", fontWeight: 500,
              color: "#7A7570", textDecoration: "none",
            }}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}