import React, { useState } from "react";

// Web App Apps Script (deve terminare con /exec, non /dev)
const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_RSVP_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbzuF3jtJ8Cof4pEEX4KMrcR85-qprN9WL1MAKgGL3YI10KyHnXPmFE4_4R9SHpfirTDdA/exec";

export default function Rsvp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirm: "Si, non posso mancare",
    guests: "1",
    notes: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "", // "success" | "error"
  });

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    const fullName = (form.name || "").trim();
    const parts = fullName.split(/\s+/);
    const nome = parts.shift() || "";
    const cognome = parts.join(" ") || "";

    // Payload "compatibile": invia sia i campi "nuovi" (name/confirm/guests/notes)
    // sia quelli "legacy" (nome/cognome/partecipa/ospiti/note), così non si rompe
    // se lo script Google è stato modificato in una delle due versioni.
    const payload = {
      // nuova struttura
      name: fullName,
      email: (form.email || "").trim(),
      confirm: form.confirm,
      guests: form.guests,
      notes: form.notes,

      // legacy
      nome,
      cognome,
      partecipa: form.confirm,
      ospiti: form.guests,
      note: form.notes,
    };

    try {
      setStatus({ loading: true, message: "", type: "" });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      setStatus({
        loading: false,
        message: "Conferma inviata! Grazie 💖",
        type: "success",
      });

      setForm({
        name: "",
        email: "",
        confirm: "Si, non posso mancare",
        guests: "1",
        notes: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        message: "Errore nell’invio. Riprova oppure contattaci direttamente.",
        type: "error",
      });
    }
  };

  return (
    <section id="rsvp" className="section">
      <div className="container sectionCard rsvpCard">
        <div className="rsvpHeader">
          <div className="rsvpKicker"></div>
          <h2 className="sectionTitle">Conferma la tua presenza</h2>
          <p className="sectionSub">
            È gradita gentile conferma entro il 31 Marzo 2026.
          </p>
        </div>

        <form className="rsvpForm" onSubmit={onSubmit}>
          <label className="field">
            <span>Nome e cognome</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nome e cognome"
              required
            />
          </label>

          <label className="field">
            <span>E-mail</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              required
            />
          </label>

          <label className="field">
            <span>Conferma</span>
            <select name="confirm" value={form.confirm} onChange={onChange}>
              <option>Si, non posso mancare</option>
              <option>No, non riesco</option>
              <option>Forse</option>
            </select>
          </label>

          <label className="field">
            <span>Numero di invitati</span>
            <select name="guests" value={form.guests} onChange={onChange}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <label className="field fieldFull">
            <span>Note</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onChange}
              placeholder="Allergie, preferenze, info utili..."
              rows={4}
            />
          </label>

          {status.message && (
            <p
              className={`rsvpStatus ${
                status.type === "success" ? "isSuccess" : "isError"
              }`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}

          <div className="rsvpActions">
            <button className="btn btnPrimary" type="submit" disabled={status.loading}>
              {status.loading ? "Invio..." : "Invia conferma"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
