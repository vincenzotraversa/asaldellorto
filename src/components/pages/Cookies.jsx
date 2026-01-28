import React from "react";

export default function Cookies() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container">
          <h1 className="h1">Cookie Policy</h1>
          <p className="lead">Informativa cookie (bozza). Se usi strumenti di analisi o marketing, integra un banner di consenso.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose card">
            <h2>1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti possono salvare sul dispositivo dell’utente per migliorare l’esperienza di navigazione.
            </p>

            <h2>2. Cookie tecnici</h2>
            <p>
              Questo sito può utilizzare cookie tecnici necessari al funzionamento e alla sicurezza (es. gestione della sessione). Non richiedono consenso.
            </p>

            <h2>3. Cookie di terze parti</h2>
            <p>
              Se incorpori servizi esterni (es. mappe, video, strumenti analytics), tali servizi possono impostare cookie. In tal caso è consigliato un sistema di gestione del consenso.
            </p>

            <h2>4. Come gestire i cookie</h2>
            <p>
              Puoi controllare o eliminare i cookie dalle impostazioni del browser.
            </p>

            <p className="p subtle" style={{ marginTop: 16 }}>
              Nota: questa pagina è un modello informativo e non sostituisce la consulenza legale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
