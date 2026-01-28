import React, { useMemo, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
    { href: "#foto", label: "Foto" },
  { href: "#rsvp", label: "Conferma partecipazione" },
  { href: "#dove", label: "Dove & Quando" },
  { href: "#lista", label: "Lista nozze" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const today = useMemo(() => "31 Luglio 2026", []);

  return (
    <header className="nav">
      <div className="container navInner">
        <a className="navBrand" href="#home" onClick={(e) => onNav(e, "#home")}>
          <strong>Michele & Paola</strong>
          <span>{today}</span>
        </a>

        <button className="btn navToggle" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>

        <nav className={`navLinks ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => onNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a className="btn btnPrimary" href="#rsvp" onClick={(e) => onNav(e, "#rsvp")}>
            Conferma presenza
          </a>
        </nav>
      </div>
    </header>
  );
}
