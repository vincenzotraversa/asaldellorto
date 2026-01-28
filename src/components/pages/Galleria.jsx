import React from "react";

const PLACEHOLDERS = [
  { title: "La tavola", subtitle: "Convivialità e porzioni abbondanti" },
  { title: "I primi", subtitle: "Pappardelle fatte in casa" },
  { title: "I secondi", subtitle: "Stinco e pollo alla cacciatora" },
  { title: "L’orto", subtitle: "Stagionalità e prodotto" },
  { title: "La sala esterna", subtitle: "Feste su prenotazione" },
  { title: "I dolci", subtitle: "Torte e biscotti artigianali" },
];

function PhotoCard({ title, subtitle }) {
  return (
    <div className="card photoCard">
      <div className="photo" aria-hidden="true" />
      <div className="photoMeta">
        <div className="photoTitle">{title}</div>
        <div className="p muted">{subtitle}</div>
      </div>
    </div>
  );
}

export default function Galleria() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container">
          <h1 className="h1">Galleria</h1>
          <p className="lead">
            Qui puoi inserire foto di piatti, sala e momenti speciali. In questa versione trovi dei placeholder: ti basterà
            sostituirli con le immagini reali.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galleryGrid">
            {PLACEHOLDERS.map((p) => (
              <PhotoCard key={p.title} title={p.title} subtitle={p.subtitle} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="cta">
            <div>
              <h2 className="h2">Vuoi vedere il menu?</h2>
              <p className="p muted">Menu fisso 35€ (bevande escluse), con portate che seguono la stagionalità.</p>
            </div>
            <div className="ctaActions">
              <a className="btn btnPrimary" href="/menu">
                Menu fisso
              </a>
              <a className="btn btnGhost" href="tel:+393294772727">
                Prenota
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
