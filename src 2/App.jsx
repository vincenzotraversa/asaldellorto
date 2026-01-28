import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Rsvp from "./components/Rsvp.jsx";
import WhereWhen from "./components/WhereWhen.jsx";
import Gifts from "./components/Gifts.jsx";
import Footer from "./components/Footer.jsx";

import bgWedding from "./assets/bg-wedding.png";
import chiesa from "./assets/chiesa.png";

export default function App() {
  return (
    <div
      className="siteBackground"
      style={{ backgroundImage: `url(${bgWedding})` }}
    >
      <div className="siteOverlay" />
      <Navbar />

      <main className="siteContent">
        <Hero />
        <Gallery />
        <Rsvp />

        {/* ✅ Da qui in poi: sfondo chiesa fino alla fine */}
        <div
          className="churchWrap"
          style={{ backgroundImage: `url(${chiesa})` }}
        >
          <div className="churchOverlay" />
          <div className="churchContent">
            <WhereWhen />
            <Gifts />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
