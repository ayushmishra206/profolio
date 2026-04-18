import SectionLabel from "@/components/section-label";

const HIGHLIGHTS: Array<[string, string]> = [
  ["Platform ownership", "Lead maintainer on a shared Drupal + CiviCRM codebase serving 10+ client sites."],
  ["Release discipline", "100+ merged PRs in 8 months across 17 repos, zero critical regressions."],
  ["Open source", "50+ accepted Drupal core patches; GSoC mentor, 2024."],
  ["Upgrades", "D7→D10 and CiviCRM 5.x→6.x moves without client-facing downtime."],
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="container-p">
        <SectionLabel num="§ 03" caption="A short biography, told plainly">
          About
        </SectionLabel>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "clamp(40px, 7vw, 120px)",
            marginTop: 60,
          }}
        >
          <aside>
            <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 20 }}>
              <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 12 }}>
                Pullquote
              </div>
              <p
                className="serif"
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.6vw, 34px)",
                  fontStyle: "italic",
                  lineHeight: 1.3,
                  fontWeight: 300,
                }}
              >
                “Membership platforms live for a decade. The work isn't the launch — it's every release after.”
              </p>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginTop: 20 }}>
                — what I tell every new client
              </div>
            </div>
          </aside>

          <div>
            <p
              className="serif"
              style={{
                margin: "0 0 22px",
                fontSize: 19,
                lineHeight: 1.65,
                fontWeight: 400,
                textWrap: "pretty",
              }}
            >
              I've spent five years working on one kind of system: long-lived Drupal platforms built around a CiviCRM
              backbone. Professional associations, regulators, training bodies, research networks — organisations
              whose members, events, and case data have to survive multiple governments and half a dozen staff turnovers.
            </p>
            <p
              className="serif"
              style={{
                margin: "0 0 22px",
                fontSize: 19,
                lineHeight: 1.65,
                fontWeight: 400,
                textWrap: "pretty",
              }}
            >
              At Compuco I'm a lead engineer on a shared Drupal + CiviCRM codebase serving 10+ client platforms.
              I own the release pipeline, the shared theme layer, and the integration work that keeps the CRM and
              the website in agreement across major upgrades. The numbers are real: <em>100+ merged PRs across 17
              repos</em> in the last eight months, with zero critical post-launch regressions on features I led.
            </p>
            <p
              className="serif"
              style={{ margin: 0, fontSize: 19, lineHeight: 1.65, fontWeight: 400, textWrap: "pretty" }}
            >
              Before Compuco I shipped a Drupal 7→8 migration on a publishing platform doing a million monthly
              visits, contributed 50+ patches back to Drupal core, and mentored two juniors through their first
              module builds. In 2024 I did a full season as a GSoC mentor for the Drupal Association. Side of desk
              I build small products — an expense-splitter, a clinical-reasoning companion, a Gmail sales copilot
              — mostly to stay honest about the stack outside my day job.
            </p>

            <div
              style={{
                marginTop: 48,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                borderTop: "1px solid var(--rule)",
              }}
            >
              {HIGHLIGHTS.map(([title, body], i) => (
                <div
                  key={i}
                  style={{
                    padding: "22px 0",
                    paddingRight: i % 2 === 0 ? 20 : 0,
                    paddingLeft: i % 2 === 1 ? 20 : 0,
                    borderBottom: "1px solid var(--rule)",
                    borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <div className="mono caps" style={{ color: "var(--accent)", marginBottom: 6 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="serif" style={{ fontSize: 20, lineHeight: 1.3, marginBottom: 4 }}>
                    {title}
                  </div>
                  <div style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.5 }}>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
