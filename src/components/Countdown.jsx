import React, { useEffect, useMemo, useState } from "react";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function diffParts(now, target) {
  if (now >= target) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const ms = target - now;
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetIso = "2026-07-31T00:00:00" }) {
  const target = useMemo(() => new Date(targetIso), [targetIso]);
  const [parts, setParts] = useState(() => diffParts(new Date(), target));

  useEffect(() => {
    const t = setInterval(() => setParts(diffParts(new Date(), target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  return (
    <div className="countPlate" aria-label="Countdown">
      <div className="countGrid" role="presentation">
        <div className="countCol">
          <div className="countNum">{parts.days}</div>
          <div className="countLbl">GIORNI</div>
        </div>
        <div className="countCol">
          <div className="countNum">{pad2(parts.hours)}</div>
          <div className="countLbl">ORE</div>
        </div>
        <div className="countCol">
          <div className="countNum">{pad2(parts.minutes)}</div>
          <div className="countLbl">MINUTI</div>
        </div>
        <div className="countCol">
          <div className="countNum">{pad2(parts.seconds)}</div>
          <div className="countLbl">SECONDI</div>
        </div>
      </div>
    </div>
  );
}
