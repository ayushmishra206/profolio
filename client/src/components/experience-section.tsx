import SectionLabel from "@/components/section-label";

interface Experience {
  role: string;
  org: string;
  place: string;
  period: string;
  current: boolean;
  blurb: string;
  lines: string[];
  stack: string[];
}

const EXPERIENCE: Experience[] = [
  {
    role: "Drupal Engineer, L2",
    org: "Compuco",
    place: "Remote",
    period: "Apr 2022 — present",
    current: true,
    blurb:
      "Technical lead on complex Drupal + CiviCRM builds. I own the architecture on 5+ concurrent projects and keep releases boring in the best way.",
    lines: [
      "Shipped with zero critical post-launch issues across the current slate.",
      "Rewrote the team's documentation playbook — clarification loops shrank by ~15%.",
      "Standardised module deployment and CiviCRM update cadence across projects.",
      "Cut average project delay by 10% through earlier-stage scoping calls.",
    ],
    stack: ["Drupal 8/9/10", "CiviCRM", "PHP", "Architecture"],
  },
  {
    role: "Software Developer",
    org: "OpenSense Labs",
    place: "Remote",
    period: "Oct 2020 — Mar 2022",
    current: false,
    blurb:
      "Large-scale Drupal work for tourism, civic tech, and education — plus the open-source contributions that helped put the company in the top three global Drupal shops.",
    lines: [
      "Shepherded Washington.org's migration at 1M+ monthly visitors without SEO attrition.",
      "Built an intake/education platform with 2000+ live API responses.",
      "Authored automated cron jobs managing 1500+ Drupal nodes.",
      "Mentored two junior devs on module development and review discipline.",
    ],
    stack: ["Drupal 7/8", "REST APIs", "Migrations", "Mentorship"],
  },
  {
    role: "GSoC Mentor",
    org: "Drupal Association · Google Summer of Code",
    place: "",
    period: "May — Sep 2024",
    current: false,
    blurb:
      "Mentored student contributors through their first real open-source cycle — scoping, reviewing, unblocking, and occasionally shipping with them.",
    lines: [
      "Full-cycle mentorship from proposal through final submission.",
      "Completion certificate awarded by the Drupal Association.",
    ],
    stack: ["Mentorship", "Open source", "Community"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="work" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="container-p">
        <SectionLabel num="§ 01" caption="Four years, two companies, one thesis">
          Work
        </SectionLabel>

        <div style={{ marginTop: 80 }}>
          {EXPERIENCE.map((e, idx) => (
            <article
              key={idx}
              className="work-row"
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "clamp(24px, 5vw, 80px)",
                padding: "48px 0",
                borderTop: "1px solid var(--ink)",
                borderBottom: idx === EXPERIENCE.length - 1 ? "1px solid var(--ink)" : "none",
              }}
            >
              <div>
                <div
                  className="mono caps"
                  style={{ color: e.current ? "var(--accent)" : "var(--ink-soft)", marginBottom: 6 }}
                >
                  {e.current ? "● Now" : "○ Prior"}
                </div>
                <div className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>
                  {e.period}
                </div>
                {e.place && (
                  <div className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 4 }}>
                    {e.place}
                  </div>
                )}
              </div>

              <div>
                <h3
                  className="serif"
                  style={{
                    margin: 0,
                    fontSize: "clamp(28px, 3.2vw, 42px)",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  {e.role}
                  <span style={{ fontStyle: "italic", color: "var(--ink-soft)" }}> — {e.org}</span>
                </h3>
                <p
                  className="serif"
                  style={{
                    marginTop: 18,
                    fontSize: 19,
                    lineHeight: 1.55,
                    maxWidth: "62ch",
                    textWrap: "pretty",
                  }}
                >
                  {e.blurb}
                </p>

                <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none" }}>
                  {e.lines.map((l, i) => (
                    <li
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "28px 1fr",
                        alignItems: "baseline",
                        padding: "10px 0",
                        borderTop: "1px dotted var(--rule)",
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: "var(--ink)",
                      }}
                    >
                      <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>
                        →
                      </span>
                      <span style={{ textWrap: "pretty" }}>{l}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {e.stack.map((s, i) => (
                    <span
                      key={i}
                      className="mono"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "6px 10px",
                        border: "1px solid var(--rule)",
                        color: "var(--ink-soft)",
                        background: "var(--paper-2)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .work-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
