export default function Impressum() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">Impressum</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">Angaben gemäß § 5 DDG</h2>
        <p>
          Arbusa Productions GbR
          <br />
          Gesellschafter: Richard Petrauskas und Thomas Petrauskas
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
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          DE464425408
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
    </main>
  );
}
