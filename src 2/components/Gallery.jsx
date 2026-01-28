import React from "react";
import galleria1 from "../assets/noi1.jpg";
import galleria2 from "../assets/noi2.jpg";
import galleria3 from "../assets/noi3.jpg";
import galleria4 from "../assets/paola1.jpg";
import galleria5 from "../assets/michele1.jpg";
import galleria6 from "../assets/michelepaolahome2.png";

const photos = [
  galleria1,
  galleria2,
  galleria3,
  galleria4,
  galleria5,
  galleria6,
];

export default function Gallery() {
  return (
    <section id="foto" className="section">
      <div className="container">
        <h2 className="sectionTitle">Foto</h2>
        <p className="sectionSub">
          Alcuni momenti nostri, in attesa di crearne di nuovi insieme a voi.
        </p>

        <div className="galleryGrid">
          {photos.map((p, i) => (
            <div key={i} className="galleryItem">
              <img src={p} alt="Foto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
