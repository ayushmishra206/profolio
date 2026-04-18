import { useEffect, useRef, useState, type CSSProperties } from "react";
import SectionLabel from "@/components/section-label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
}

const PROJECT_TYPES: Array<{ value: string; label: string }> = [
  { value: "drupal", label: "Drupal development" },
  { value: "civicrm", label: "CiviCRM integration" },
  { value: "migration", label: "Site migration" },
  { value: "performance", label: "Performance optimization" },
  { value: "consult", label: "Technical consultation" },
  { value: "other", label: "Other" },
];

const SOCIALS = [
  { label: "GitHub", handle: "@ayushmishra206", href: "https://github.com/ayushmishra206" },
  { label: "LinkedIn", handle: "in/ayushmishra206", href: "https://linkedin.com/in/ayushmishra206" },
  { label: "Drupal", handle: "u/ayushmishra206", href: "https://drupal.org/u/ayushmishra206" },
  { label: "Email", handle: "ayushmishra206@gmail.com", href: "mailto:ayushmishra206@gmail.com" },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "", type: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [typeOpen, setTypeOpen] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typeOpen) return;
    const onDown = (e: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) setTypeOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTypeOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [typeOpen]);

  const selectedType = PROJECT_TYPES.find((t) => t.value === form.type);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const body = new FormData();
    body.append("entry.832518771", form.name);
    body.append("entry.1336921264", form.email);
    body.append("entry.224623651", form.subject);
    body.append("entry.1756018840", form.message);
    body.append("entry.2129877594", form.type || "");
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScexg_QQx5sehBH3vPBbLi7pEPryezi4XS8RloLfG2_dQroyQ/formResponse",
        { method: "POST", mode: "no-cors", body },
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", type: "" });
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll be in touch soon.",
      });
    } catch {
      setStatus("error");
      toast({
        title: "Didn't go through",
        description: "Try emailing me directly at ayushmishra206@gmail.com.",
        variant: "destructive",
      });
    }
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    padding: "12px 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--rule)",
    fontFamily: "var(--sans)",
    fontSize: 16,
    color: "var(--ink)",
    outline: "none",
    transition: "border-color .2s ease",
  };

  return (
    <section
      id="contact"
      style={{ padding: "120px 0", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}
    >
      <div className="container-p">
        <SectionLabel num="§ 05" caption="The letters page">
          Contact
        </SectionLabel>

        <div
          className="contact-grid"
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(40px, 6vw, 100px)",
          }}
        >
          <div>
            <p
              className="serif"
              style={{ margin: 0, fontSize: 24, lineHeight: 1.4, fontWeight: 300, textWrap: "pretty" }}
            >
              Ready to discuss a Drupal build, CRM integration, or a migration that's been kicked down the road? I read
              every message, and I don't ghost.
            </p>

            <div style={{ marginTop: 40, borderTop: "1px solid var(--ink)" }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr auto",
                    alignItems: "baseline",
                    padding: "18px 0",
                    borderBottom: "1px solid var(--rule)",
                    transition: "color .2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                >
                  <span className="mono caps" style={{ color: "var(--ink-faint)" }}>
                    {s.label}
                  </span>
                  <span className="serif" style={{ fontStyle: "italic", fontSize: 19 }}>
                    {s.handle}
                  </span>
                  <span className="mono" style={{ fontSize: 12, color: "var(--ink-faint)" }}>
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 6 }}>
                Based
              </div>
              <div className="serif" style={{ fontSize: 20 }}>
                New Delhi, India
              </div>
            </div>
          </div>

          <form onSubmit={submit}>
            <div className="mono caps" style={{ color: "var(--ink-faint)", marginBottom: 20 }}>
              Send a letter
            </div>

            <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              <label>
                <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                  Name
                </div>
                <input
                  required
                  style={inputStyle}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
                />
              </label>
              <label>
                <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                  Email
                </div>
                <input
                  required
                  type="email"
                  style={inputStyle}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
                />
              </label>
            </div>

            <label style={{ display: "block", marginTop: 28 }}>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                Subject
              </div>
              <input
                required
                style={inputStyle}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
              />
            </label>

            <div style={{ marginTop: 28 }}>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                Project type
              </div>
              <div ref={typeRef} style={{ position: "relative" }}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={typeOpen}
                  onClick={() => setTypeOpen((o) => !o)}
                  style={{
                    ...inputStyle,
                    paddingRight: 24,
                    textAlign: "left",
                    cursor: "pointer",
                    color: selectedType ? "var(--ink)" : "var(--ink-faint)",
                    borderBottomColor: typeOpen ? "var(--ink)" : "var(--rule)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span style={{ fontStyle: selectedType ? "normal" : "italic" }}>
                    {selectedType ? selectedType.label : "Select one (optional)"}
                  </span>
                  <span
                    className="mono"
                    aria-hidden="true"
                    style={{
                      fontSize: 11,
                      color: "var(--ink-faint)",
                      transition: "transform .2s ease",
                      transform: typeOpen ? "rotate(180deg)" : "none",
                    }}
                  >
                    ▾
                  </span>
                </button>

                {typeOpen && (
                  <ul
                    role="listbox"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 6px)",
                      left: 0,
                      right: 0,
                      margin: 0,
                      padding: 6,
                      listStyle: "none",
                      background: "var(--paper)",
                      border: "1px solid var(--ink)",
                      boxShadow: "0 10px 24px -12px rgba(26,24,21,0.18)",
                      zIndex: 20,
                      animation: "projFade .18s ease",
                    }}
                  >
                    {form.type && (
                      <li role="option" aria-selected={false}>
                        <button
                          type="button"
                          onClick={() => {
                            setForm({ ...form, type: "" });
                            setTypeOpen(false);
                          }}
                          className="mono caps"
                          style={{
                            width: "100%",
                            textAlign: "left",
                            background: "transparent",
                            border: 0,
                            padding: "10px 12px",
                            color: "var(--ink-faint)",
                            cursor: "pointer",
                            fontSize: 11,
                            letterSpacing: "0.12em",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-faint)")}
                        >
                          Clear selection
                        </button>
                      </li>
                    )}
                    {PROJECT_TYPES.map((t) => {
                      const on = t.value === form.type;
                      return (
                        <li key={t.value} role="option" aria-selected={on}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, type: t.value });
                              setTypeOpen(false);
                            }}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              background: on ? "var(--paper-2)" : "transparent",
                              border: 0,
                              borderLeft: on ? "3px solid var(--accent)" : "3px solid transparent",
                              padding: "12px 14px",
                              fontFamily: "var(--sans)",
                              fontSize: 15,
                              color: "var(--ink)",
                              cursor: "pointer",
                              transition: "background .15s ease, border-color .15s ease",
                            }}
                            onMouseEnter={(e) => {
                              if (!on) e.currentTarget.style.background = "var(--paper-2)";
                            }}
                            onMouseLeave={(e) => {
                              if (!on) e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {t.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            <label style={{ display: "block", marginTop: 28 }}>
              <div className="mono caps" style={{ color: "var(--ink-soft)", marginBottom: 4, fontSize: 10 }}>
                Message
              </div>
              <textarea
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={(e) => (e.target.style.borderBottomColor = "var(--ink)")}
                onBlur={(e) => (e.target.style.borderBottomColor = "var(--rule)")}
              />
            </label>

            <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn-p" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
              </button>
              <span
                className="mono caps"
                style={{
                  color:
                    status === "sent"
                      ? "var(--sage)"
                      : status === "error"
                        ? "var(--accent)"
                        : "var(--ink-faint)",
                }}
              >
                {status === "sent" && "Thanks — I'll be in touch soon"}
                {status === "error" && "Didn't go through — try email?"}
                {status === "idle" && "Or just email directly"}
                {status === "sending" && "One moment…"}
              </span>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid, .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
