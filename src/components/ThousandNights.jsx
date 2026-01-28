import React from "react";

export default function ThousandNights() {
  return (
    <section className="section nights">
      <div className="container">
        <h2 className="sectionTitle">Mille e una notte</h2>
        <p className="sectionSub">
          Quando il sole scende, accendiamo le lanterne: un finale fiabesco, caldo e dorato.
        </p>

        <div className="card nightsCard">
          <div className="nightsInner">
            <div className="lanterns" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="lantern" />
              ))}
            </div>

            <div className="grid2">
              <div>
                <div className="smallCaps">Dress code (opzionale)</div>
                <h3 style={{ marginTop: 6 }}>Tocco dorato</h3>
                <p style={{ color: "rgba(31,31,31,.65)", lineHeight: 1.7, margin: "10px 0 0" }}>
                  Un dettaglio oro, ambra o rame: un accessorio, un foulard, una cravatta.
                  Piccole scintille per una notte che sembra uscita da una favola.
                </p>
              </div>

              <div>
                <div className="smallCaps">Il nostro desiderio</div>
                <h3 style={{ marginTop: 6 }}>Una notte da ricordare</h3>
                <p style={{ color: "rgba(31,31,31,.65)", lineHeight: 1.7, margin: "10px 0 0" }}>
                  Dopo il taglio torta, musica e luci soffuse: lasciatevi guidare dal ritmo,
                  come se ogni canzone fosse un nuovo capitolo… e noi non vediamo l’ora di viverlo con voi.
                </p>
              </div>
            </div>

            <div className="hr" />
            <p style={{ textAlign: "center", color: "rgba(31,31,31,.60)", margin: "18px 0 0", fontFamily: "ui-sans-serif, system-ui" }}>
              “E fu così che, tra le luci e le risate, la notte continuò a raccontare meraviglie.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
