// components/VisitorCounter.tsx
"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // zuerst Zahl holen
    fetch("/api/counter")
      .then((r) => r.json())
      .then((d) => setCount(d.total ?? 0))
      .catch(() => setCount(null));

    // dann versuchen zu zählen (nur wenn heute noch nicht gezählt)
    fetch("/api/counter", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.total ?? null))
      .catch(() => {});
  }, []);

  return (
    <div className="w-full py-8 text-center">
      <div className="inline-flex items-center rounded-2xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 p-[2px] shadow-md">
        <div className="rounded-2xl bg-rose-500/30 px-4 py-2 backdrop-blur-sm">
          <span className="mr-2 font-semibold text-black">Besucher:</span>
          <span className="font-extrabold tabular-nums text-black">
            {count === null ? "…" : count.toLocaleString("de-DE")}
          </span>
        </div>
      </div>
    </div>
  );
}
