import React, { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);
  const iban = "IT83Q0103004008000003074065";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Copia non disponibile su questo browser.");
    }
  };

  return (
    <section id="lista" className="section">
      <div className="container">
        <h2 className="sectionTitle">Lista nozze</h2>

        <p className="sectionSub">
          Un piccolo pensiero per noi. La nostra casa è già arredata e piena di amore.
          Se vorrete farci un dono, sarà un prezioso aiuto per il nostro viaggio di nozze.
        </p>

        {/* CUORE + IBAN */}
        <div className="giftsRomantic">
          <div className="giftsHeart" aria-hidden="true">♥</div>

          <div className="iban">
            <div>
              <div className="smallCaps">IBAN</div>
              <code>{iban}</code>
            </div>

            <button className="btn btnPrimary" onClick={copy}>
              {copied ? "Copiato!" : "Copia IBAN"}
            </button>
          </div>

          <p className="giftsThanks">
            Grazie di cuore per essere parte del nostro viaggio ✨
          </p>
        </div>
      </div>
    </section>
  );
}
