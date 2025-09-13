"use client";
import { useEffect, useState } from "react";

export default function useYouTubeCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/followers", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setCount(Number(d?.youtube ?? 0)))
      .catch(() => setCount(null));
  }, []);

  return count;
}
