import SectionLabel from "@/components/section-label";

type Level = "Expert" | "Advanced";

interface SkillGroup {
  title: string;
  caption: string;
  items: Array<[string, Level]>;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Drupal",
    caption: "Versions 7 – 10 · 50+ core patches",
    items: [
      ["Site building & information architecture", "Expert"],
      ["Custom module development (OOP PHP)", "Expert"],
      ["Twig theming & Render API", "Advanced"],
      ["Performance tuning & headless Drupal", "Advanced"],
      ["Migrate API, multisite, config mgmt", "Advanced"],
    ],
  },
  {
    title: "CiviCRM",
    caption: "Deep integration specialist",
    items: [
      ["Configuration & customization", "Expert"],
      ["Drupal integration (Entity, Webform)", "Expert"],
      ["Membership & event management", "Advanced"],
      ["API development & data I/O", "Advanced"],
      ["CiviRules, Case Management", "Advanced"],
    ],
  },
  {
    title: "Stack",
    caption: "What I reach for",
    items: [
      ["PHP (OOP)", "Expert"],
      ["MySQL", "Advanced"],
      ["JavaScript (ES6+)", "Advanced"],
      ["HTML / CSS", "Expert"],
      ["REST · GraphQL", "Advanced"],
    ],
  },
  {
    title: "Tools & ways",
    caption: "How the work actually gets done",
    items: [
      ["Git, Bitbucket, PR discipline", "Expert"],
      ["Linux environments", "Advanced"],
      ["JIRA, Agile/Scrum rituals", "Advanced"],
      ["Drush, Composer, Platform.sh", "Advanced"],
      ["Technical leadership & mentoring", "Advanced"],
    ],
  },
];

const EDUCATION = [
  {
    degree: "MCA — Master of Computer Applications",
    school: "Chandigarh University (Online)",
    period: "2021 – 2023",
    grade: "8.0 GPA",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "Manipal University Jaipur",
    period: "2017 – 2020",
    grade: "8.5 GPA",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "120px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="container-p">
        <SectionLabel num="§ 04" caption="What I reach for, and how often">
          Craft
        </SectionLabel>

        <div
          className="skills-grid"
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            border: "1px solid var(--ink)",
          }}
        >
          {SKILL_GROUPS.map((g, gi) => (
            <div
              key={gi}
              style={{
                padding: "28px 28px 32px",
                borderRight: gi % 2 === 0 ? "1px solid var(--ink)" : "none",
                borderBottom: gi < 2 ? "1px solid var(--ink)" : "none",
                background: gi === 0 ? "var(--paper-2)" : "var(--paper)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 20,
                }}
              >
                <h3
                  className="serif"
                  style={{ margin: 0, fontSize: 32, fontWeight: 300, fontStyle: "italic" }}
                >
                  {g.title}
                </h3>
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  {String(gi + 1).padStart(2, "0")}/0{SKILL_GROUPS.length}
                </span>
              </div>
              <div className="mono" style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 16 }}>
                {g.caption}
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {g.items.map(([name, level], i) => (
                  <li
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "baseline",
                      padding: "12px 0",
                      borderTop: "1px dotted var(--rule)",
                      fontSize: 15,
                    }}
                  >
                    <span>{name}</span>
                    <span
                      className="mono caps"
                      style={{
                        fontSize: 10,
                        color: level === "Expert" ? "var(--accent)" : "var(--ink-soft)",
                      }}
                    >
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 72 }}>
          <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 16 }}>
            Schooling & certs
          </div>
          <div style={{ borderTop: "1px solid var(--ink)" }}>
            {EDUCATION.map((ed, i) => (
              <div
                key={i}
                className="edu-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                  {ed.period}
                </span>
                <span className="serif" style={{ fontSize: 22, lineHeight: 1.3 }}>
                  {ed.degree}
                  <span style={{ color: "var(--ink-soft)", fontStyle: "italic" }}> — {ed.school}</span>
                </span>
                <span className="mono caps" style={{ color: "var(--accent)" }}>
                  {ed.grade}
                </span>
              </div>
            ))}
            <div
              className="edu-row"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 24,
                alignItems: "baseline",
                padding: "22px 0",
                borderBottom: "1px solid var(--ink)",
              }}
            >
              <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                2024
              </span>
              <span className="serif" style={{ fontSize: 22, lineHeight: 1.3 }}>
                GSoC Mentor Certification
                <span style={{ color: "var(--ink-soft)", fontStyle: "italic" }}> — Drupal Association</span>
              </span>
              <span className="mono caps" style={{ color: "var(--accent)" }}>
                Completion
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div { border-right: none !important; border-bottom: 1px solid var(--ink) !important; }
          .skills-grid > div:last-child { border-bottom: none !important; }
          .edu-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `}</style>
    </section>
  );
}
