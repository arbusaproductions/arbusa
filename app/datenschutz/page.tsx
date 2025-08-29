export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">Datenschutzerklärung</h1>

      <section>
        <h2 className="text-lg font-semibold">
          1) Information über die Erhebung personenbezogener Daten
        </h2>
        <p>
          Wir freuen uns, dass Sie unsere Website besuchen. Im Folgenden
          informieren wir Sie über den Umgang mit personenbezogenen Daten bei
          der Nutzung von <strong>arbusaproductions.com</strong>.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können.
        </p>
        <p className="mt-2">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist der im{" "}
          <a href="/impressum" className="underline hover:text-emerald-400">
            Impressum
          </a>{" "}
          genannte Betreiber.
        </p>
        <p className="mt-2">
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte (z.B. Anfragen über das
          Kontaktformular oder per E-Mail) eine SSL- bzw. TLS-Verschlüsselung.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          2) Datenerfassung beim Besuch unserer Website
        </h2>
        <p>
          Bei der rein informatorischen Nutzung dieser Website erheben wir nur
          solche Daten, die Ihr Browser an unseren Server übermittelt (sog.
          „Server-Logfiles“). Dazu gehören:
        </p>
        <ul className="list-disc list-inside text-neutral-300 mt-2 space-y-1">
          <li>Besuchte Seite</li>
          <li>Datum und Uhrzeit</li>
          <li>Menge der gesendeten Daten</li>
          <li>Quelle/Verweis, von dem Sie auf die Seite gelangten</li>
          <li>Browsertyp und Version</li>
          <li>Verwendetes Betriebssystem</li>
          <li>IP-Adresse (anonymisiert)</li>
        </ul>
        <p className="mt-2">
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
          unseres berechtigten Interesses an der Verbesserung von Stabilität und
          Funktionalität. Eine Weitergabe oder anderweitige Verwendung der Daten
          findet nicht statt.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">3) Kontaktaufnahme</h2>
        <p>
          Bei einer Kontaktaufnahme mit uns (z. B. per E-Mail) werden
          personenbezogene Daten erhoben. Diese Daten werden ausschließlich zum
          Zweck der Beantwortung Ihres Anliegens bzw. zur Kontaktaufnahme und
          die damit verbundene technische Administration gespeichert und
          verwendet.
        </p>
        <p className="mt-2">
          Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
          Zielt Ihre Kontaktaufnahme auf den Abschluss eines Vertrages ab, so
          ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          4) Rechte der betroffenen Person
        </h2>
        <ul className="list-disc list-inside text-neutral-300 mt-2 space-y-1">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
          <li>
            Beschwerde bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)
          </li>
        </ul>
        <p className="mt-2 font-semibold">
          Widerspruchsrecht: Sie können der Verarbeitung Ihrer personenbezogenen
          Daten jederzeit widersprechen, wenn diese auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO erfolgt.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">5) Dauer der Speicherung</h2>
        <p>
          Die Speicherdauer personenbezogener Daten richtet sich nach der
          jeweiligen Rechtsgrundlage, dem Verarbeitungszweck sowie den
          gesetzlichen Aufbewahrungsfristen. Grundsätzlich werden Daten
          gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind.
        </p>
      </section>

      <footer className="pt-6 text-sm text-neutral-500">
        <p>
          Bereitgestellt auf Grundlage eines Musters der IT-Recht Kanzlei
          München (
          <a
            href="https://www.it-recht-kanzlei.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-400"
          >
            www.it-recht-kanzlei.de
          </a>
          )
        </p>
      </footer>
    </main>
  );
}
