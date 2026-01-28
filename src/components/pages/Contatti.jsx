import React from "react";

const PHONE_DISPLAY = "329 477 2727";
const PHONE_TEL = "+393294772727";

export default function Contatti() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container">
          <h1 className="h1">Contatti e mappa</h1>
          <p className="lead">
            Via Cassia Km 27,550 – Cesano (Roma). Per prenotare, chiamaci: {PHONE_DISPLAY}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <div className="card">
                <h2 className="h2" style={{ marginBottom: 10 }}>Info rapide</h2>
                <div className="kv">
                  <div className="kvRow">
                    <div className="kvK">Telefono</div>
                    <div className="kvV"><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
                  </div>
                  <div className="kvRow">
                    <div className="kvK">Indirizzo</div>
                    <div className="kvV">Via Cassia Km 27,550 – Cesano (Roma)</div>
                  </div>
                  <div className="kvRow">
                    <div className="kvK">Prezzo</div>
                    <div className="kvV"><b>Menu fisso 35€</b> (bevande escluse)</div>
                  </div>
                </div>

                <div className="stack" style={{ marginTop: 14 }}>
                  <a className="btn btnPrimary" href={`tel:${PHONE_TEL}`}>Prenota telefonicamente</a>
                  <a className="btn btnGhost" href="https://wa.me/393294772727" target="_blank" rel="noreferrer">
                    Scrivici su WhatsApp
                  </a>
                </div>

                <p className="p subtle" style={{ marginTop: 14 }}>
                  Se stai organizzando un evento, guarda anche la pagina <a href="/feste">Feste</a>.
                </p>
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h3 className="h3">Orari</h3>
                <p className="p muted">
                  Inserisci qui gli orari di apertura appena li definisci. (Placeholder)
                </p>
                <ul className="list" style={{ marginTop: 12 }}>
                  <li>Pranzo: —</li>
                  <li>Cena: —</li>
                  <li>Chiusura settimanale: —</li>
                </ul>
              </div>
            </div>

            <div className="card mapCard">
              <iframe
                title="Mappa - Trattoria Casal dell'Orto"
                className="map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Via%20Cassia%20Km%2027,550%20Cesano%20Roma&output=embed"
              />
              <div className="mapActions">
                <a
                  className="btn btnGhost"
                  href="https://www.google.com/maps?q=Via%20Cassia%20Km%2027,550%20Cesano%20Roma"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apri su Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
