export default function ProcessSection() {
  return (
    <section id="process" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Von unstrukturiertem Input zu professionellem Zeugnis</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Step
            title="SCHRITT 1: Ihre Angaben (2 Min.)"
            items={[
              'Name, Rolle, Beschäftigungsdaten',
              'Leistungsbewertung: 1–3 Skala',
              'Hauptverantwortlichkeiten (Stichpunkte)',
              'Umfang: 1–3 Rollen pro Tool',
            ]}
          />
          <Step
            title="SCHRITT 2: KI‑Generierung (30 Sek.)"
            items={[
              'Rechtlich fundierte Formulierungen',
              'Rollengerechte Verantwortlichkeiten',
              'Alle 4 Sprachen gleichzeitig',
            ]}
          />
          <Step
            title="SCHRITT 3: Prüfen & Exportieren (2 Min.)"
            items={[
              'Jeden Abschnitt bearbeiten',
              'Export als PDF/Word mit Branding',
              'Versionen für Audit‑Trails',
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-neutral-600">Gesamtzeit: ~5 Minuten statt 2–4 Stunden</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-neutral-200 p-5 bg-white shadow-sm">
            <h3 className="text-neutral-900 font-medium">Ihre Eingabe (2 Minuten):</h3>
            <div className="mt-3 text-sm text-neutral-700 space-y-1">
              <div>Name: Maria Rossi</div>
              <div>Position: Senior Produktmanagerin</div>
              <div>Leistung: ⭐⭐⭐ (3/3 – Sehr gut)</div>
              <div>Aufgaben: Produktplanung, Team‑Koordination</div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5 bg-white shadow-sm">
            <h3 className="text-neutral-900 font-medium">Generiertes Ergebnis (30 Sekunden):</h3>
            <div className="mt-3 rounded-md bg-neutral-50 border border-neutral-200 p-4 text-sm text-neutral-800">
              <p className="font-medium text-neutral-900">Arbeitszeugnis — Senior Produktmanager/in</p>
              <p className="mt-2">Frau Maria Rossi war vom 01.03.2021 bis 30.06.2025 als Senior Produktmanagerin in unserem Unternehmen tätig. Ihre Aufgaben umfassten die strategische Produktplanung, die cross‑funktionale Koordination sowie die Auswertung von Markt‑ und Kundenanforderungen.</p>
              <p className="mt-2">Sie überzeugte durch sehr gute analytische Fähigkeiten, eine ausgeprägte Lösungsorientierung und ein hohes Qualitätsbewusstsein. Ihr Verhalten gegenüber Vorgesetzten, Kolleginnen und Kollegen sowie externen Partnern war stets einwandfrei.</p>
              <ul className="mt-3 text-neutral-700 space-y-1">
                <li>✓ In 4 Sprachen gleichzeitig generiert</li>
                <li>✓ Jederzeit bearbeitbar vor Export</li>
                <li>✓ Rechtlich fundierte Formulierungen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ title, items }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-neutral-900 font-medium">{title}</div>
      <ul className="mt-3 text-sm text-neutral-700 space-y-1">
        {items.map((i) => (
          <li key={i}>→ {i}</li>
        ))}
      </ul>
    </div>
  );
}
