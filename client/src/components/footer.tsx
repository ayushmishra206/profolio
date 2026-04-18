export default function Footer() {
  return (
    <footer style={{ padding: "48px 0 32px", borderTop: "1px solid var(--ink)" }}>
      <div
        className="container-p"
        style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline" }}
      >
        <div className="serif" style={{ fontStyle: "italic", fontSize: 22 }}>
          Ayush Mishra
        </div>
        <div className="mono caps" style={{ color: "var(--ink-faint)" }}>
          © {new Date().getFullYear()} · Set in Fraunces & IBM Plex · Built by hand
        </div>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mono caps"
          style={{ color: "var(--ink)" }}
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
