
import Countdown from "./Countdown.jsx";


export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero heroBare">
      <div className="container heroBareInner">


        <div className="heroBareTop">
          <div className="heroBareKicker">IL NOSTRO GIORNO</div>
          <h1 className="heroBareTitle">Michele &amp; Paola</h1>
          <div className="heroBareDate">31 LUGLIO 2026</div>

          <div className="heroBareCountdown">
            <Countdown targetIso="2026-07-31T00:00:00" />
          </div>

          <div className="heroBareCtas">
            <button className="btn btnPrimary" onClick={() => scrollTo("#rsvp")}>
              Conferma presenza
            </button>
            <button className="btn" onClick={() => scrollTo("#dove")}>
              Dove &amp; Quando
            </button>
          </div>
        </div>
      </div>

      <button className="scrollDown" onClick={() => scrollTo("#foto")} aria-label="Scorri">
        ↓
      </button>
    </section>
  );
}
