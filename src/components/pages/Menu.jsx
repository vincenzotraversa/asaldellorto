import React from "react";

const PRICE = "35€";

function SectionCard({ title, items, note }) {
  return (
    <div className="card">
      <h3 className="h3">{title}</h3>
      <ul className="list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      {note ? <p className="p subtle" style={{ marginTop: 12 }}>{note}</p> : null}
    </div>
  );
}

export default function Menu() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container">
          <h1 className="h1">Menu fisso {PRICE}</h1>
          <p className="lead">
            Qui non devi scegliere tra mille righe: ti portiamo noi il meglio della casa, in un percorso abbondante e
            conviviale. <b>Bevande escluse.</b>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Cosa arriva in tavola</h2>
            <p className="p muted">
              Le portate possono variare in base alla stagionalità e alla disponibilità dei prodotti. Di seguito trovi un
              esempio tipico.
            </p>
          </div>

          <div className="grid2">
            <SectionCard
              title="Antipasti (caldi e freddi)"
              items={[
                "Bruschette",
                "Selezione di antipasti della casa (più portate)",
                "Verdure di stagione e assaggi rustici",
              ]}
              note="Gli antipasti cambiano spesso: è il nostro modo di seguire l’orto e il mercato."
            />

            <SectionCard
              title="Primi"
              items={["Pappardelle fatte in casa"]}
              note="La pasta è protagonista: fresca, ruvida, fatta per trattenere il sugo."
            />

            <SectionCard
              title="Secondi"
              items={["Stinco di maiale", "Pollo alla cacciatora"]}
              note="Porzioni generose, cotture lente e sapori pieni."
            />

            <SectionCard
              title="Dolci"
              items={["Selezione di torte artigianali", "Biscotti fatti in casa"]}
              note="Il finale giusto: semplice e goloso."
            />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="cta">
            <div>
              <h2 className="h2">Allergie o esigenze particolari?</h2>
              <p className="p muted">
                Avvisaci in fase di prenotazione: faremo il possibile per adattare il percorso.
              </p>
            </div>
            <div className="ctaActions">
              <a className="btn btnPrimary" href="tel:+393294772727">
                Prenota telefonicamente
              </a>
              <a
                className="btn btnGhost"
                href="https://wa.me/393294772727"
                target="_blank"
                rel="noreferrer"
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
