import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} • Michele & Paola - Ancora fai che non vieni!
      </div>
    </footer>
  );
}
