import React from "react";

export default function Privacy() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container">
          <h1 className="h1">Privacy Policy</h1>
          <p className="lead">Informativa privacy (bozza). Personalizzala con i dati del titolare e del trattamento.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose card">
            <h2>1. Titolare del trattamento</h2>
            <p>
              Titolare: <b>Trattoria Casal dell'Orto</b> (inserire ragione sociale/P.IVA, email e recapiti).
            </p>

            <h2>2. Tipologie di dati</h2>
            <p>
              Dati di contatto (telefono/email) quando ci chiami o ci scrivi, e informazioni fornite per gestire prenotazioni o richieste di eventi.
            </p>

            <h2>3. Finalità e basi giuridiche</h2>
            <ul>
              <li>Gestione prenotazioni e richieste: esecuzione di misure precontrattuali/contrattuali.</li>
              <li>Risposta a richieste: legittimo interesse.</li>
              <li>Adempimenti di legge: obbligo legale.</li>
            </ul>

            <h2>4. Conservazione</h2>
            <p>
              I dati sono conservati per il tempo necessario a gestire la richiesta e, se applicabile, per gli obblighi di legge.
            </p>

            <h2>5. Destinatari</h2>
            <p>
              Eventuali fornitori tecnici (hosting, manutenzione) nominati responsabili del trattamento, nei limiti necessari.
            </p>

            <h2>6. Diritti dell'interessato</h2>
            <p>
              Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità nei casi previsti dal GDPR.
            </p>

            <h2>7. Contatti</h2>
            <p>
              Per esercitare i diritti: inserire email dedicata.
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
