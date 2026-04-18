import { scrollTo } from "@/components/navigation";

const LEDGER = [
  { n: "5+", label: "Years shipping Drupal" },
  { n: "100+", label: "PRs merged in 2025" },
  { n: "50+", label: "Drupal core patches" },
  { n: "13", label: "Client platforms in prod" },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      style={{
        paddingTop: "96px",
        paddingBottom: "28px",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container-p" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "clamp(16px, 2.4vh, 28px)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div className="mono caps" style={{ color: "var(--ink-soft)" }}>
            Portfolio · Vol. IV · {new Date().getFullYear()}
          </div>
          <div className="mono caps" style={{ color: "var(--ink-soft)" }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                background: "var(--accent)",
                borderRadius: 999,
                marginRight: 8,
                verticalAlign: 1,
              }}
            />
            Open to new work · Apr 2026
          </div>
        </div>

        {/* Headline — oversized mixed-style display */}
        <div style={{ position: "relative", marginTop: "auto" }}>
          <h1
            className="serif"
            style={{
              margin: 0,
              fontSize: "clamp(40px, 7.2vw, 120px)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              fontWeight: 300,
            }}
          >
            <span style={{ display: "block" }}>
              Drupal{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>+</span> CiviCRM
            </span>
            <span style={{ display: "block", fontWeight: 400, paddingLeft: "6%" }}>
              engineer for
            </span>
            <span style={{ display: "block" }}>
              <span style={{ fontStyle: "italic" }}>membership</span> platforms.
            </span>
          </h1>
        </div>

        {/* Grid: blurb + masthead details */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "clamp(32px, 5vw, 88px)",
            marginTop: "clamp(24px, 3.2vh, 44px)",
            alignItems: "start",
          }}
        >
          <div>
            <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 10 }}>
              ¶ On the record
            </div>
            <p
              className="serif"
              style={{
                margin: 0,
                fontSize: "clamp(17px, 1.7vw, 22px)",
                lineHeight: 1.45,
                color: "var(--ink)",
                fontWeight: 300,
                maxWidth: "58ch",
                textWrap: "pretty",
              }}
            >
              I build and maintain Drupal + CiviCRM platforms for membership organisations — member portals,
              event and case management, and the long-running migrations that keep them on supported versions.
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              <button className="btn-p" onClick={() => scrollTo("work")}>
                See the work{" "}
                <span className="mono" style={{ fontSize: 12, opacity: 0.7 }}>
                  →
                </span>
              </button>
              <button className="btn-p ghost" onClick={() => scrollTo("contact")}>
                Start a conversation
              </button>
              <a
                className="btn-p ghost"
                href="https://docs.google.com/document/d/1IvrdXyAMyVwRIprCViROXEEkI5x98SvRNirkh1NGaQY/export?format=pdf"
                target="_blank"
                rel="noreferrer"
              >
                Résumé, PDF{" "}
                <span className="mono" style={{ fontSize: 11, opacity: 0.6 }}>
                  ↗
                </span>
              </a>
            </div>
          </div>

          <aside style={{ borderTop: "1px solid var(--ink)", paddingTop: 14 }}>
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 20, rowGap: 8, fontSize: 14 }}>
              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Based
              </dt>
              <dd style={{ margin: 0 }}>New Delhi, India</dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Now
              </dt>
              <dd style={{ margin: 0 }}>
                Drupal Engineer (L2) at <span className="link-u">Compuco</span>
              </dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Focus
              </dt>
              <dd style={{ margin: 0 }}>Drupal 7–10 · CiviCRM · platform releases · migrations</dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Since
              </dt>
              <dd style={{ margin: 0 }}>2020 — 5+ years in production</dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Contact
              </dt>
              <dd style={{ margin: 0 }}>
                <a className="link-u" href="mailto:ayushmishra206@gmail.com">
                  ayushmishra206@gmail.com
                </a>
              </dd>
            </dl>
          </aside>
        </div>

        {/* Ledger numbers */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "clamp(18px, 2.4vh, 32px)",
            borderBottom: "1px solid var(--ink)",
          }}
        >
          <div
            className="ledger-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${LEDGER.length}, 1fr)`,
              borderTop: "1px solid var(--ink)",
            }}
          >
            {LEDGER.map((l, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 18px",
                  borderRight: i < LEDGER.length - 1 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div
                  className="serif"
                  style={{
                    fontSize: "clamp(26px, 3.4vw, 44px)",
                    lineHeight: 1,
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {l.n}
                </div>
                <div className="mono caps" style={{ color: "var(--ink-soft)", marginTop: 6 }}>
                  {l.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .ledger-grid { grid-template-columns: 1fr 1fr !important; }
          .ledger-grid > div:nth-child(2n) { border-right: none !important; }
          .ledger-grid > div:nth-child(-n+2) { border-bottom: 1px solid var(--rule); }
        }
      `}</style>
    </section>
  );
}
