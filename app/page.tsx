"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND, GENERALLINKS, LINKSFAHRZEUG1, DOWNLOADS } from "@/lib/content";
import { anton } from "./fonts";
import useYouTubeCount from "@/lib/useYouTubeCount";
import { useCountUp } from "@/lib/useCountUp"; // <--- NEU

export default function Home() {
  const ytCount = useYouTubeCount();
  const animatedCount = useCountUp(ytCount ?? 0, 1000);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center space-y-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative w-[260px] h-[160px] bg-black mx-auto flex items-center justify-center">
            <Image
              src={BRAND.avatar}
              alt="Arbusa Logo"
              fill
              className="object-contain"
              sizes="(max-width: 420px) 220px, 260px"
            />
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <h1
            className={`${anton.className} text-3xl md:text-4xl font-extrabold tracking-tight px-6 py-2`}
            style={{
              color: "red", // Schwarzer Text
              WebkitTextStroke: "2px black", // Roter Rand um den Text (außen)
              textShadow: "0 0 25px green, 0 0 30px green", // Weicher, leuchtender grüner Schatten
            }}
          >
            {BRAND.title}
          </h1>
          <p className="text-neutral-300">{BRAND.bio}</p>
        </div>

        {/* Links – Arbusa „Melon“ Look: dunkel, mit grünem Hover */}
        <div className="grid gap-3">
          {GENERALLINKS.map((l) => {
            if (l.label === "YouTube") {
              return (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  className="relative flex items-center justify-center gap-2 
                     rounded-2xl bg-white/10 hover:bg-white/15 active:bg-white/20 
                     px-5 py-3 text-base font-medium ring-1 ring-white/10 
                     hover:ring-emerald-500/40 transition"
                >
                  {/* Icon + Label (bleibt zentriert) */}
                  <div className="flex items-center gap-2">
                    <img
                      src={l.icon}
                      alt={`${l.label} Logo`}
                      className="w-5 h-5"
                    />
                    <span>{l.label}</span>
                  </div>

                  {/* Badge rechts außen */}
                  {typeof ytCount === "number" && (
                    <span
                      className="absolute right-4 rounded-full 
               px-3 py-1 text-sm font-extrabold tabular-nums
               text-black bg-red-500 
               border border-green-500
               shadow-[0_0_6px_#22c55e]"
                    >
                      {animatedCount.toLocaleString("de-DE")}
                    </span>
                  )}
                </Link>
              );
            }

            // Standard-Buttons (TikTok, Instagram usw.)
            return (
              <Link
                key={l.href + l.label}
                href={l.href}
                target="_blank"
                className="flex items-center justify-center gap-2 
                   rounded-2xl bg-white/10 hover:bg-white/15 active:bg-white/20 
                   px-5 py-3 text-base font-medium ring-1 ring-white/10 
                   hover:ring-emerald-500/40 transition"
              >
                <img src={l.icon} alt={`${l.label} Logo`} className="w-5 h-5" />
                <span>{l.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Teileliste */}
        <div className="text-center">
          <h2 className={`${anton.className} text-3xl font-semibold mb-3`}>
            Teileliste
          </h2>
          <h3 className="text-sm text-neutral-300 mb-3">
            Hinweis: Einige Links sind Affiliate-Links – Preis für dich gleich,
            kleine Unterstützung für mich 🛠️
          </h3>
          <ul className="space-y-2">
            <div className="grid gap-3 justify-items-center">
              {LINKSFAHRZEUG1.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  className="w-full max-w-md rounded-2xl 
                 bg-red-500              /* rotes Innenleben */
                 border-4 border-green-600  /* fetter grüner Rand */
                 px-5 py-3 text-base font-extrabold 
                 text-black              /* schwarze Schrift */
                 shadow-md
                 hover:bg-red-400 hover:border-green-500
                 hover:scale-[1.03] hover:shadow-lg 
                 transition-all duration-200
                 "
                >
                  {l.label}
                </Link>
              ))}
            </div>
            {/* {DOWNLOADS.map((d) => (
              <li key={d.file}>
                <a
                  href={d.file}
                  download
                  className="inline-flex items-center gap-2 text-neutral-200 hover:text-white underline-offset-4 hover:underline"
                >
                  <span>⬇️</span>
                  <span>{d.label}</span>
                </a>
              </li>
            ))} */}
          </ul>
          {/* Links – Arbusa „Melon“ Look: dunkel, mit grünem Hover */}
        </div>

        {/* Fahrzeug 2 */}
        {/* <div className="text-left">
          <h2 className={`${anton.className} text-lg font-semibold mb-3`}>
            Downloads
          </h2>
          <ul className="space-y-2">
            {DOWNLOADS.map((d) => (
              <li key={d.file}>
                <a
                  href={d.file}
                  download
                  className="inline-flex items-center gap-2 text-neutral-200 hover:text-white underline-offset-4 hover:underline"
                >
                  <span>⬇️</span>
                  <span>{d.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </main>
  );
}
