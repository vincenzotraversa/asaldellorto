import React from "react";
import { Link } from "react-router-dom";

const PHONE_DISPLAY = "329 477 2727";
const PHONE_TEL = "+393294772727";

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Feature({ title, text, icon }) {
  return (
    <div className="card feature">
      <div className="featureIcon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="h3">{title}</h3>
      <p className="p muted">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="heroSection">
        <div className="container">
          <div className="heroGrid">
            <div>
              <div className="heroBadges">
                <Badge>Roma · Cesano</Badge>
                <Badge>Menu fisso 35€</Badge>
                <Badge>Porzioni abbondanti</Badge>
              </div>

              <h1 className="h1">
                Sapori di campagna,
                <br />
                <span className="accent">dalla nostra terra al piatto</span>.
              </h1>

              <p className="lead">
                Alla Trattoria Casal dell'Orto trovi un’esperienza semplice e genuina: antipasti caldi e freddi,
                pappardelle fatte in casa, stinco di maiale e pollo alla cacciatora, bruschette… e per chiudere
                torte e biscotti artigianali. <b>Prezzo fisso 35€</b> (bevande escluse).
              </p>

              <div className="heroCtas">
                <a className="btn btnPrimary" href={`tel:${PHONE_TEL}`}>
                  Prenota: {PHONE_DISPLAY}
                </a>
                <Link className="btn btnGhost" to="/menu">
                  Cosa include il menu
                </Link>
              </div>

              <p className="p subtle">
                Ideale per una scampagnata senza svuotare le tasche — con la bontà di ingredienti che rispettano le
                stagioni.
              </p>
            </div>

            <div className="heroArt" aria-hidden="true">
              <div className="heroArtInner">
                <div className="heroArtTop" />
                <div className="heroArtCard">
                  <div className="heroArtTitle">Oggi in tavola</div>
                  <div className="heroArtList">
                    <span>🥖 Bruschette</span>
                    <span>🍝 Pappardelle fatte in casa</span>
                    <span>🍖 Stinco &amp; pollo alla cacciatora</span>
                    <span>🍰 Torte e biscotti artigianali</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Il nostro modo di cucinare</h2>
            <p className="p muted">
              Non è solo “mangiare fuori”: è sedersi a tavola e sentirsi a casa, con piatti costruiti attorno al prodotto.
            </p>
          </div>

          <div className="grid3">
            <Feature
              icon="🌱"
              title="Prodotto della nostra terra"
              text="Cuciniamo seguendo la stagionalità e valorizzando materie prime genuine: sapori netti, senza fronzoli."
            />
            <Feature
              icon="🍽️"
              title="Prezzo fisso, pancia felice"
              text="Menu fisso a 35€ (bevande escluse): tante portate, porzioni abbondanti e la soddisfazione di una vera trattoria."
            />
            <Feature
              icon="🎉"
              title="Sala esterna per feste"
              text="Uno spazio all’aperto riservabile su prenotazione: compleanni, ricorrenze, tavolate tra amici."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section soft">
        <div className="container">
          <div className="cta">
            <div>
              <h2 className="h2">Vuoi organizzare una festa?</h2>
              <p className="p muted">
                Raccontaci data, numero di persone e tipo di occasione: ti proponiamo la soluzione migliore.
              </p>
            </div>
            <div className="ctaActions">
              <Link className="btn btnPrimary" to="/feste">
                Scopri la sala esterna
              </Link>
              <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
                Chiama ora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="h2">Dove siamo</h2>
              <p className="p muted">
                Via Cassia Km 27,550 — Cesano (Roma). Perfetto se vuoi uscire dalla città e respirare un po’ di verde.
              </p>
              <div className="heroCtas" style={{ marginTop: 14 }}>
                <Link className="btn btnPrimary" to="/contatti">
                  Orari e indicazioni
                </Link>
                <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
                  Prenota
                </a>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
