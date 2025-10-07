export default function WhoFor() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-medium text-neutral-900">Für wen ist ZertAI geeignet?</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-800">
            <div>
              <p className="font-medium">✓ Perfekt für:</p>
              <ul className="mt-1 space-y-1">
                <li>• HR-Manager in KMU (10–100 Mitarbeiter)</li>
                <li>• Schweizer Unternehmen mit mehrsprachigen Teams</li>
                <li>• Firmen, die 5–50 Zeugnisse pro Jahr erstellen</li>
                <li>• Alle, die 2+ Stunden pro Zeugnis sparen wollen</li>
                <li>• Teams, die Konsistenz über Zeugnisse hinweg wollen</li>
              </ul>
              <p className="mt-3 font-medium">✓ Wann ZertAI verwenden:</p>
              <ul className="mt-1 space-y-1">
                <li>• Normale Austritte (Kündigung durch Arbeitnehmer)</li>
                <li>• Vertragsende</li>
                <li>• Standardrollen und Leistungsbewertungen</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">❌ Wann einen Anwalt beauftragen:</p>
              <ul className="mt-1 space-y-1">
                <li>• Strittige Kündigungen</li>
                <li>• Laufende Rechtsstreitigkeiten</li>
                <li>• Führungspositionen in Großunternehmen</li>
                <li>• Dokumentierte Leistungsprobleme</li>
              </ul>
              <p className="mt-3 font-medium">Nicht geeignet für:</p>
              <ul className="mt-1 space-y-1">
                <li>• Großunternehmen (100+ Zeugnisse/Monat) – kontaktieren Sie uns</li>
                <li>• 100%-Rechtsgarantie (bietet kein Tool)</li>
                <li>• "Einstellen und vergessen"-Automatisierung (Sie prüfen weiterhin)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
