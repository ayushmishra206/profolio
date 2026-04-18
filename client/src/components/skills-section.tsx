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
    caption: "Versions 7 – 10 · 50+ accepted core patches",
    items: [
      ["Custom module development (OOP PHP)", "Expert"],
      ["Installation profiles / distributions", "Expert"],
      ["Site building & information architecture", "Expert"],
      ["Migrate API, D7→D10 upgrades", "Advanced"],
      ["Twig theming, Render & Entity APIs", "Advanced"],
      ["Performance tuning, caching, headless", "Advanced"],
    ],
  },
  {
    title: "CiviCRM",
    caption: "5.x → 6.x upgrade specialist",
    items: [
      ["Drupal integration (Entity, Webform)", "Expert"],
      ["Membership, Events, Contributions", "Expert"],
      ["APIv3 / APIv4, extension development", "Advanced"],
      ["Case Management, CiviRules", "Advanced"],
      ["Data I/O, reconciliation, migrations", "Advanced"],
      ["CiviCRM 5.x → 6.x platform upgrades", "Advanced"],
    ],
  },
  {
    title: "Platform & stack",
    caption: "What holds the sites up",
    items: [
      ["PHP (OOP, 7.4 → 8.3)", "Expert"],
      ["MySQL (schema, query optimisation)", "Advanced"],
      ["Bootstrap 5 themes, SASS, a11y (WCAG)", "Advanced"],
      ["JavaScript (ES6+), jQuery", "Advanced"],
      ["React / TypeScript (side projects)", "Advanced"],
      ["Docker, Linux, Nginx", "Advanced"],
    ],
  },
  {
    title: "Ways of working",
    caption: "How releases actually ship",
    items: [
      ["Release engineering, multi-repo tag cuts", "Expert"],
      ["Git, PR review discipline, JIRA", "Expert"],
      ["Drush, Composer, Platform.sh, Acquia", "Advanced"],
      ["Technical writing & approach docs", "Advanced"],
      ["Mentoring, code review", "Advanced"],
      ["Agile / Scrum delivery", "Advanced"],
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
