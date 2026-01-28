import React from "react";
import { Link } from "react-router-dom";

const PHONE_TEL = "+393294772727";

function Bullet({ children }) {
  return (
    <li className="bullet">
      <span className="bulletDot" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export default function Feste() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container">
          <h1 className="h1">Feste nella sala esterna</h1>
          <p className="lead">
            Abbiamo uno spazio all’aperto dove organizzare feste su prenotazione: compleanni, ricorrenze, pranzi di famiglia
            e tavolate tra amici.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="h2">Un posto che fa atmosfera</h2>
              <p className="p muted">
                Il contesto è rustico e accogliente: l’idea è stare bene insieme, mangiare tanto e parlare ancora di più.
              </p>

              <ul className="bullets" style={{ marginTop: 14 }}>
                <Bullet>Spazio esterno riservabile per gruppi</Bullet>
                <Bullet>Formula semplice e conviviale (menu fisso 35€ bevande escluse)</Bullet>
                <Bullet>Soluzione perfetta per chi cerca una “scampagnata” fuori città</Bullet>
              </ul>

              <div className="heroCtas" style={{ marginTop: 18 }}>
                <a className="btn btnPrimary" href={`tel:${PHONE_TEL}`}>
                  Parliamone al telefono
                </a>
                <Link className="btn btnGhost" to="/menu">
                  Vedi il menu
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="h3">Per prenotare, indicaci</h3>
              <ul className="bullets" style={{ marginTop: 12 }}>
                <Bullet>Data e orario desiderati</Bullet>
                <Bullet>Numero di persone (adulti/bambini)</Bullet>
                <Bullet>Tipo di occasione (compleanno, festa, ricorrenza…)</Bullet>
                <Bullet>Eventuali allergie o esigenze particolari</Bullet>
              </ul>
              <p className="p subtle" style={{ marginTop: 14 }}>
                Ti rispondiamo con la disponibilità e la proposta più adatta.
              </p>
              <div className="stack" style={{ marginTop: 14 }}>
                <a className="btn btnPrimary" href="https://wa.me/393294772727" target="_blank" rel="noreferrer">
                  Scrivici su WhatsApp
                </a>
                <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
                  Chiama
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="cta">
            <div>
              <h2 className="h2">Vuoi solo un tavolo?</h2>
              <p className="p muted">Prenota e vieni a goderti il percorso completo: tanto gusto, zero pensieri.</p>
            </div>
            <div className="ctaActions">
              <Link className="btn btnPrimary" to="/contatti">
                Contatti e mappa
              </Link>
              <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
                Prenota
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
