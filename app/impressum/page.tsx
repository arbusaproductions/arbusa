export default function Impressum() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">Impressum</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">Angaben gemäß § 5 DDG</h2>
        <p>
          Arbusa Productions GbR
          <br />
          c/o Impressumservice Dein-Impressum, Stettiner Str. 41
          <br />
          35410 Hungen
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Vertreten durch</h2>
        <p>Richard Petrauskas und Thomas Petrauskas</p>
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
        <h2 className="text-lg font-semibold mb-2">
          Umsatzsteuer-Identifikationsnummer
        </h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG i. V. m. § 5 Abs.
          1 Nr. 6 DDG:
          <br />
          DE464425408
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">
          Inhaltlich Verantwortlicher
        </h2>
        <p>
          Verantwortlicher für journalistisch-redaktionelle Inhalte gemäß § 18
          Abs. 2 MStV:
          <br />
          Richard Petrauskas
          <br />
          c/o Impressumservice Dein-Impressum, Stettiner Str. 41
          <br />
          35410 Hungen
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Verbraucherschlichtung</h2>
        <p>
          Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Datenschutz</h2>
        <p>
          Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie
          in unserer Datenschutzerklärung unter:{" "}
          <a href="/datenschutz" className="underline hover:text-emerald-400">
            www.arbusaproductions.com/datenschutz
          </a>
        </p>
      </section>
    </main>
  );
}
