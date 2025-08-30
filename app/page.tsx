import Image from "next/image";
import Link from "next/link";
import { BRAND, LINKS, DOWNLOADS } from "@/lib/content";
import { anton } from "./fonts";

export default function Home() {
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
            className={`${anton.className} text-3xl md:text-4xl font-extrabold tracking-tight`}
          >
            {BRAND.title}
          </h1>
          <p className="text-neutral-300">{BRAND.bio}</p>
        </div>

        {/* Links – Arbusa „Melon“ Look: dunkel, mit grünem Hover */}
        <div className="grid gap-3">
          {LINKS.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              className="rounded-2xl bg-white/10 hover:bg-white/15 active:bg-white/20 px-5 py-3 text-base font-medium ring-1 ring-white/10 hover:ring-emerald-500/40 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Fahrzeug 1 */}
        <div className="text-left">
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
        </div>

        {/* Fahrzeug 2 */}
        <div className="text-left">
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
        </div>

        {/* Footer */}
        <footer className="pt-6 text-sm text-neutral-400">
          <div className="flex items-center justify-center gap-4">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <span>•</span>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
          <p className="mt-2">
            © {new Date().getFullYear()} {BRAND.title}
          </p>
        </footer>
      </div>
    </main>
  );
}
