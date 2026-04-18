import type { ReactNode } from "react";

interface SectionLabelProps {
  num: string;
  caption?: string;
  children: ReactNode;
}

export default function SectionLabel({ num, caption, children }: SectionLabelProps) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
        <span className="mono caps" style={{ color: "var(--accent)" }}>
          {num}
        </span>
        <h2
          className="serif"
          style={{
            margin: 0,
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {children}
        </h2>
      </div>
      {caption && (
        <div className="mono caps" style={{ color: "var(--ink-soft)" }}>
          {caption}
        </div>
      )}
    </div>
  );
}
