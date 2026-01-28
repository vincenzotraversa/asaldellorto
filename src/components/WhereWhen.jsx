import React from "react";

export default function WhereWhen() {
  return (
    <section id="dove" className="section">
      <div className="container">
        <h2 className="sectionTitle">Dove &amp; Quando</h2>

        <p className="sectionSub">
          Il luogo in cui pronunceremo il nostro sì e quello in cui festeggeremo insieme.
        </p>

        <div className="whereGrid">
          <article className="whereCard">
            <div className="whereHead">
              <div className="whereBadge">Cerimonia</div>
              <h3 className="whereTitle">Chiesa di Maria Santissima Addolorata</h3>
            </div>

            <div className="whereMeta">
              <div className="whereRow">
                <span className="whereLabel">Ora</span>
                <span className="whereValue">17:00</span>
              </div>
              <div className="whereRow">
                <span className="whereLabel">Indirizzo</span>
                <span className="whereValue">Viale Toledo, 61 — 72015 Selva di Fasano (BR)</span>
              </div>
            </div>

            <div className="whereActions">
              <a
                className="btn btnSmall"
                target="_blank"
                rel="noreferrer"
                href="https://maps.google.com/?q=Viale+Toledo+61,+72015+Selva+di+Fasano+BR"
              >
                Apri su Maps
              </a>
            </div>
          </article>

          <article className="whereCard">
            <div className="whereHead">
              <div className="whereBadge">Ricevimento</div>
              <h3 className="whereTitle">Plenilunio alla Fortezza</h3>
            </div>

            <div className="whereMeta">
              <div className="whereRow">
                <span className="whereLabel">Quando</span>
                <span className="whereValue">A seguire</span>
              </div>
              <div className="whereRow">
                <span className="whereLabel">Indirizzo</span>
                <span className="whereValue">Str. Com. Fontana di Giulia, 8 — 70042 Mola di Bari (BA)</span>
              </div>
            </div>

            <div className="whereActions">
              <a
                className="btn btnSmall"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=Plenilunio%20alla%20Fortezza%20Mola%20di%20Bari"
              >
                Apri su Maps
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
