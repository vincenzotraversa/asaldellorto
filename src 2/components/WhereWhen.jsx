import React from "react";

export default function WhereWhen() {
  return (
    <section id="dove" className="section">
      <div className="container">
        <h2 className="sectionTitle">Dove &amp; Quando</h2>

        <p className="sectionSub">
          Il luogo in cui pronunceremo il nostro sì e quello in cui festeggeremo insieme.
        </p>

        <div className="whereList">
          {/* CERIMONIA */}
          <div className="placeCard whereCard">
            <h3 className="placeTitle">Cerimonia</h3>

            <p className="placeText">
              <strong>Ore 17.00</strong>
              <br />
              Chiesa di Maria Santissima Addolorata
              <br />
              Viale Toledo, 61
              <br />
              72015 Selva di Fasano (BR)
            </p>
          </div>

          {/* RICEVIMENTO */}
          <div className="placeCard whereCard">
            <h3 className="placeTitle">A seguire</h3>

            <p className="placeText">
              <strong>Ricevimento</strong>
              <br />
              Plenilunio alla Fortezza
              <br />
              Str. Com. Fontana di Giulia, 8
              <br />
              70042 Mola di Bari (BA)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
