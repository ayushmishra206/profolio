import { scrollTo } from "@/components/navigation";

const LEDGER = [
  { n: "50+", label: "Drupal core patches" },
  { n: "1.2M", label: "Monthly visitors served" },
  { n: "12", label: "Enterprise launches" },
  { n: "4+", label: "Years in the weeds" },
];

export default function HeroSection() {
  return (
    <section id="top" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <div className="container-p">
        {/* Top meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 80,
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
        <div style={{ position: "relative" }}>
          <h1
            className="serif"
            style={{
              margin: 0,
              fontSize: "clamp(52px, 11vw, 172px)",
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              fontWeight: 300,
            }}
          >
            <span style={{ display: "block" }}>Senior Drupal</span>
            <span style={{ display: "block", fontStyle: "italic", color: "var(--accent)", paddingLeft: "8%" }}>
              engineer
            </span>
            <span style={{ display: "block", fontWeight: 400 }}>untangling big,</span>
            <span style={{ display: "block", fontStyle: "italic", paddingLeft: "18%" }}>opinionated</span>
            <span style={{ display: "block" }}>systems.</span>
          </h1>
        </div>

        {/* Grid: blurb + masthead details */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "clamp(40px, 6vw, 120px)",
            marginTop: 80,
            alignItems: "start",
          }}
        >
          <div>
            <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 16 }}>
              ¶ On the record
            </div>
            <p
              className="serif"
              style={{
                margin: 0,
                fontSize: "clamp(20px, 2.1vw, 26px)",
                lineHeight: 1.45,
                color: "var(--ink)",
                fontWeight: 300,
                maxWidth: "58ch",
                textWrap: "pretty",
              }}
            >
              I build and untangle large Drupal systems — the kind where CiviCRM, a membership portal, and a content
              team all need to agree on the same Tuesday.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
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

          <aside style={{ borderTop: "1px solid var(--ink)", paddingTop: 20 }}>
            <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 24, rowGap: 14 }}>
              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Based
              </dt>
              <dd style={{ margin: 0 }}>Jaipur, India · remote worldwide</dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Now
              </dt>
              <dd style={{ margin: 0 }}>
                Drupal Engineer (L2) at <span className="link-u">Compuco</span>
              </dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Focus
              </dt>
              <dd style={{ margin: 0 }}>Drupal 9/10 · CiviCRM · platform migrations</dd>

              <dt className="mono caps" style={{ color: "var(--ink-faint)" }}>
                Since
              </dt>
              <dd style={{ margin: 0 }}>2020 — four years in production</dd>

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
        <div style={{ marginTop: 120, borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
          <div
            className="ledger-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${LEDGER.length}, 1fr)`,
            }}
          >
            {LEDGER.map((l, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  borderRight: i < LEDGER.length - 1 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div
                  className="serif"
                  style={{
                    fontSize: "clamp(36px, 5vw, 64px)",
                    lineHeight: 1,
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {l.n}
                </div>
                <div className="mono caps" style={{ color: "var(--ink-soft)", marginTop: 10 }}>
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
