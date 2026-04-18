import { useMemo, useState } from "react";
import SectionLabel from "@/components/section-label";

interface Project {
  id: string;
  num: string;
  year: string;
  title: string;
  kind: string;
  status: string;
  blurb: string;
  lines: string[];
  stack: string[];
  links: { live?: string; repo?: string };
}

const PROJECTS: Project[] = [
  {
    id: "splitease",
    num: "01",
    year: "2025",
    title: "SplitEase",
    kind: "Product · Next.js",
    status: "Live",
    blurb:
      "Modern expense-splitting app for groups — track who owes what, settle up with the minimum number of payments, and stop fighting over brunch receipts.",
    lines: [
      "Greedy debt-simplification algorithm collapses tangled IOUs into the fewest possible settlements.",
      "Multiple split modes — equal, percentage, shares, exact — plus receipt uploads and recurring charges.",
      "Role-based permissions, categorised ledgers, and Recharts-powered analytics out of the box.",
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma", "Neon Postgres", "NextAuth", "Tailwind"],
    links: {
      live: "https://split.ayushmishra.com",
      repo: "https://github.com/ayushmishra206/Splitease",
    },
  },
  {
    id: "medixgpt",
    num: "02",
    year: "2025",
    title: "MedixGPT",
    kind: "Product · Clinical companion",
    status: "Live",
    blurb:
      "A clinical companion that turns a symptom snapshot into structured differentials — built for curious patients and time-poor clinicians, not for replacing either.",
    lines: [
      "Guided intake flow captures symptoms, duration, and modifiers without overwhelming the user.",
      "Structured reasoning surface lays out candidate conditions, red flags, and next-step suggestions.",
      "Designed as a companion tool, with clear non-diagnostic framing throughout.",
    ],
    stack: ["TypeScript", "Next.js", "LLMs"],
    links: { live: "https://www.medixgpt.com" },
  },
  {
    id: "flow",
    num: "03",
    year: "2025",
    title: "Flow",
    kind: "Chrome extension · Sales copilot",
    status: "Beta",
    blurb:
      "A Gmail-native sales copilot. Auto-pulls contacts from threads, drops deals into a Kanban pipeline, and nudges you about the follow-up you were about to forget.",
    lines: [
      "Content-script overlay adds a deal pipeline and next-step prompts directly inside Gmail.",
      "Signature parsing extracts names, titles, and companies into contacts with one click.",
      "Firebase + Firestore backend syncs pipeline state across devices in real time.",
    ],
    stack: ["React", "TypeScript", "Vite", "Firebase", "Gmail API"],
    links: { repo: "https://github.com/ayushmishra206/flow" },
  },
  {
    id: "discover-weekly",
    num: "04",
    year: "2024",
    title: "Discover Weekly Saver",
    kind: "Tooling · Python",
    status: "Shipped",
    blurb:
      "A tiny, reliable script that rescues Spotify's Discover Weekly before it rotates — so the song you meant to save on Monday is still there on Tuesday.",
    lines: [
      "OAuth flow against Spotify's Web API, with tokens cached locally and scoped read-only.",
      "De-duplicates against a permanent \"Discover Weekly Collection\" before writing.",
      "Drop-in cron / anacron setup included for always-on or laptop-first users.",
    ],
    stack: ["Python", "Spotipy", "OAuth", "cron"],
    links: { repo: "https://github.com/ayushmishra206/spotify-autosave-discover-weekly" },
  },
  {
    id: "profolio",
    num: "05",
    year: "2026",
    title: "Profolio",
    kind: "Open source · This site",
    status: "Live",
    blurb:
      "The print-inspired portfolio you're reading right now — warm-paper palette, oversized Fraunces display, IBM Plex for body and mono, and no stock headshot in sight.",
    lines: [
      "Editorial type-driven layout: numbered sections, hair-rule dividers, ledger stats.",
      "CSS variable palette — paper, ink, terracotta, rule — exposes the theme for quick reskins.",
      "Static React/Vite build deploys straight to GitHub Pages via Actions.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    links: { live: "https://ayushmishra.com", repo: "https://github.com/ayushmishra206/profolio" },
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(PROJECTS[0].id);
  const project = useMemo(() => PROJECTS.find((p) => p.id === active) ?? PROJECTS[0], [active]);

  return (
    <section
      id="projects"
      style={{ padding: "120px 0", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
    >
      <div className="container-p">
        <SectionLabel num="§ 02" caption={`An index, ${PROJECTS.length} entries`}>
          Selected projects
        </SectionLabel>

        <div
          className="proj-grid"
          style={{
            marginTop: 80,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(28px, 5vw, 80px)",
          }}
        >
          {/* Left: index list */}
          <div>
            <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 16 }}>
              Index
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px solid var(--ink)" }}>
              {PROJECTS.map((p) => {
                const on = p.id === active;
                return (
                  <li key={p.id} style={{ borderBottom: "1px solid var(--rule)" }}>
                    <button
                      onClick={() => setActive(p.id)}
                      onMouseEnter={() => setActive(p.id)}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "48px 1fr auto",
                        alignItems: "baseline",
                        gap: 16,
                        width: "100%",
                        padding: "22px 8px",
                        background: on ? "var(--paper)" : "transparent",
                        border: 0,
                        borderLeft: on ? "3px solid var(--accent)" : "3px solid transparent",
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "inherit",
                        color: "inherit",
                        transition: "background .2s ease, border-color .2s ease",
                      }}
                    >
                      <span className="mono" style={{ fontSize: 13, color: on ? "var(--accent)" : "var(--ink-faint)" }}>
                        {p.num}
                      </span>
                      <span
                        className="serif"
                        style={{
                          fontSize: "clamp(22px, 2.4vw, 32px)",
                          fontStyle: on ? "italic" : "normal",
                          fontWeight: 300,
                          lineHeight: 1.1,
                          color: on ? "var(--ink)" : "var(--ink-soft)",
                        }}
                      >
                        {p.title}
                      </span>
                      <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                        {p.year}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: active project detail */}
          <div key={project.id} style={{ animation: "projFade .35s ease" }}>
            <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 24,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div className="mono caps" style={{ color: "var(--accent)" }}>
                  {project.kind}
                </div>
                <div className="mono caps" style={{ color: "var(--ink-soft)" }}>
                  Status · {project.status}
                </div>
              </div>

              <h3
                className="serif"
                style={{
                  margin: 0,
                  fontSize: "clamp(40px, 5.5vw, 76px)",
                  fontWeight: 300,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.95,
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  marginTop: 28,
                  aspectRatio: "16/9",
                  width: "100%",
                  border: "1px solid var(--ink)",
                  background:
                    "repeating-linear-gradient(135deg, var(--paper) 0 12px, var(--paper-2) 12px 24px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <span className="mono caps" style={{ color: "var(--ink-soft)", fontSize: 11 }}>
                  Project shot · {project.id}.png
                </span>
                <span
                  className="mono"
                  style={{ position: "absolute", top: 10, left: 12, fontSize: 11, color: "var(--ink-faint)" }}
                >
                  fig. {project.num}
                </span>
              </div>

              <p
                className="serif"
                style={{
                  marginTop: 28,
                  fontSize: 21,
                  lineHeight: 1.5,
                  fontWeight: 300,
                  textWrap: "pretty",
                }}
              >
                {project.blurb}
              </p>

              <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none" }}>
                {project.lines.map((l, i) => (
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
                {project.stack.map((s, i) => (
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
                      background: "var(--paper)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                {project.links.live && (
                  <a className="btn-p" href={project.links.live} target="_blank" rel="noreferrer">
                    Visit site{" "}
                    <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>
                      ↗
                    </span>
                  </a>
                )}
                {project.links.repo && (
                  <a className="btn-p ghost" href={project.links.repo} target="_blank" rel="noreferrer">
                    Source{" "}
                    <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
