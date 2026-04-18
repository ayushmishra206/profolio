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
      "Lead engineer on a shared Drupal + CiviCRM codebase serving 10+ client platforms — membership portals, self-service CPD workflows, and event/case-management sites. Active across 17 internal repos.",
    lines: [
      "Own the platform release cadence: coordinated multi-repo tag cuts and shipped a CiviCRM 5.x → 6.x major-version upgrade without client-facing downtime.",
      "100+ merged PRs in 8 months across theme, CRM, and distribution layers — zero critical post-launch regressions on features I led.",
      "Architected a Member Directory performance rework bringing large directory pages back under acceptable load times for an org with a five-figure member count.",
      "Primary maintainer of the shared Bootstrap 5 theme consumed by 5+ client sites — responsive navigation, accessible forms, mobile admin.",
      "Tech lead and primary client contact on five client platforms; drive specs, reviews, and delivery with 3–5 engineers per workstream.",
    ],
    stack: ["Drupal 7/8/9/10", "CiviCRM 5/6", "PHP", "Bootstrap 5", "Release engineering"],
  },
  {
    role: "Software Developer",
    org: "OpenSense Labs",
    place: "Remote",
    period: "Oct 2020 — Mar 2022",
    current: false,
    blurb:
      "Full-stack Drupal work on tourism, civic-tech, and education platforms — plus the open-source contribution programme that helped the company hit top-3 global on the Drupal.org Marketplace.",
    lines: [
      "Delivered a Drupal 7→8 migration for a 1M+ MAU tourism publishing platform — MySQL tuning, Varnish strategy, Pattern Lab theme redesign.",
      "Led backend on an education data platform: REST integrations pulling 2000+ responses, cron syncing 1500+ nodes, custom content-ranking algorithm.",
      "Authored 60+ accepted patches to Drupal core via client-engagement-driven issue triage.",
      "Mentored two junior engineers through their first module builds and review discipline.",
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
