import React from "react";
import Countdown from "./Countdown.jsx";

// Immagini da src/assets (Vite-friendly)
import micheleAvatar from "../assets/michele1.jpg";
import paolaAvatar from "../assets/paola1.jpg";
import centerImg from "../assets/noi1.jpg"; // cambia qui se vuoi usare un'altra foto centrale

export default function Us() {
  return (
    <section id="us" className="section usLikeTheme">
      <div className="container">
        {/* decorazione (se hai /public/images/flower.png) */}
        <div className="usTopNavFlower" aria-hidden="true" />

        <div className="usGrid">
          {/* SINISTRA */}
          <div className="usSide">
            <div className="usAvatar">
              <img src={micheleAvatar} alt="Michele" />
            </div>
            <div className="usName">Michele</div>
            <p className="usText">
              Dal primo sguardo ho capito che con te anche le cose semplici diventano straordinarie.
              Sei casa, risata e coraggio. E io scelgo te, ogni giorno.
            </p>
          </div>

          {/* CENTRO */}
          <div className="usCenter">
            <div className="usFrameHeart">
              <img src={centerImg} alt="Michele e Paola" />

              <svg
                className="usHeartOutline"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M50 92
                    C50 92 6 66 6 36
                    C6 16 24 10 35 18
                    C44 25 50 37 50 37
                    C50 37 56 25 65 18
                    C76 10 94 16 94 36
                    C94 66 50 92 50 92 Z"
                  stroke="#c62828"
                  strokeWidth="1.8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          {/* DESTRA */}
          <div className="usSide">
            <div className="usAvatar">
              <img src={paolaAvatar} alt="Paola" />
            </div>
            <div className="usName">Paola</div>
            <p className="usText">
              Con te ho imparato che l’amore è un viaggio: si va lontano tenendosi la mano,
              tornando sempre nello stesso posto… nel cuore.
            </p>
          </div>
        </div>

        {/* COUNTDOWN fuori dalle box */}
        <div className="usCountdown">
          <Countdown targetIso="2026-07-31T00:00:00" />
        </div>
      </div>
    </section>
  );
}
