import SectionLabel from "@/components/section-label";

const HIGHLIGHTS: Array<[string, string]> = [
  ["Technical excellence", "Zero critical post-launch issues across the current slate."],
  ["Open source", "50+ core contributions; GSoC mentor, 2024."],
  ["Mentorship", "Two juniors leveled up, still in my DMs."],
  ["Clarity", "Docs that shortcut clarification loops by 15%."],
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
                “The fun part isn't the code. It's the Tuesday when the client, the content team, and the CRM finally
                agree.”
              </p>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginTop: 20 }}>
                — from a standup, probably
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
              I started out as a Computer Applications graduate who mostly wrote Drupal modules in the corner of a
              living room. Four years on, I lead architecture on the kind of Drupal + CiviCRM builds that take an org
              chart to explain — membership portals with five audiences, migrations with no downtime budget, CRMs that
              can't afford to lose a donor record.
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
              The work I'm proudest of rarely looks dramatic from the outside. It's the release that went out on a
              Thursday without any 3am Slack messages. It's the handoff to an internal team that didn't need a call.
              It's <em>50+ patches</em> back into Drupal core because somebody else shouldn't have to hit the same wall
              twice.
            </p>
            <p
              className="serif"
              style={{ margin: 0, fontSize: 19, lineHeight: 1.65, fontWeight: 400, textWrap: "pretty" }}
            >
              Outside the day job I mentor GSoC students, ship the occasional side project (an expense-splitter, a
              Gmail sales copilot, a Spotify archive tool), and argue with myself about whether to ship Drupal or Next
              for small personal sites. (Mostly Drupal still wins, if we're being honest.)
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
