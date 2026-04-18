import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Craft" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const y = window.scrollY + 120;
      let current = "top";
      for (const it of NAV_ITEMS) {
        const el = document.getElementById(it.id);
        if (el && y >= el.offsetTop) current = it.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "color-mix(in srgb, var(--paper) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(6px) saturate(1.05)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "background .25s ease, border-color .25s ease",
      }}
    >
      <div
        className="container-p"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px var(--gutter)" }}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
          style={{ display: "flex", alignItems: "baseline", gap: 10 }}
        >
          <span
            className="serif"
            style={{ fontSize: 22, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Ayush Mishra
          </span>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-faint)" }}>
            — est. 2020
          </span>
        </a>

        <nav className="desktop-nav" style={{ display: "flex", gap: 28 }}>
          {NAV_ITEMS.map((it, i) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(it.id);
              }}
              className="mono"
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: active === it.id ? "var(--ink)" : "var(--ink-soft)",
                position: "relative",
                paddingBottom: 4,
                borderBottom: active === it.id ? "1px solid var(--accent)" : "1px solid transparent",
                transition: "color .2s ease, border-color .2s ease",
              }}
            >
              <span style={{ color: "var(--ink-faint)", marginRight: 8 }}>0{i + 1}</span>
              {it.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-toggle mono"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--ink)",
            padding: "8px 12px",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
            color: "var(--ink)",
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          className="mobile-panel"
          style={{ borderTop: "1px solid var(--rule)", background: "var(--paper)", padding: "20px var(--gutter)" }}
        >
          {NAV_ITEMS.map((it, i) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(it.id);
                setOpen(false);
              }}
              className="serif"
              style={{
                display: "block",
                fontSize: 28,
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
                fontStyle: "italic",
              }}
            >
              <span className="mono" style={{ fontSize: 12, marginRight: 12, color: "var(--ink-faint)" }}>
                0{i + 1}
              </span>
              {it.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-block !important; }
        }
      `}</style>
    </header>
  );
}

export { scrollTo };
