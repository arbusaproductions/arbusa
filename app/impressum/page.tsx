export default function Impressum() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">Impressum</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p>
          Richard Petrauskas
          <br />
          Arbusa Productions
          <br />
          Stettiner Straße 41
          <br />
          c/o Impressumservice dein-impressum.de
          <br />
          35410 Hungen
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:arbusa.productions@gmail.com"
            className="underline hover:text-emerald-400"
          >
            arbusa.productions@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE358476151
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-400"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <footer className="pt-6 text-sm text-neutral-500">
        <p>
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-400"
          >
            www.e-recht24.de
          </a>
        </p>
      </footer>
    </main>
  );
}
