export default function Pricing() {
  return (
    <main className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Transparente Preise</h1>
        <p className="mt-3 text-neutral-700">Wählen Sie den Plan, der zu Ihrem Workflow passt. Jederzeit kündbar.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium text-lg">Starter</h3>
            <div className="mt-1 text-sm text-neutral-700">Für gelegentliche Nutzung • Testen ohne Risiko</div>
            <div className="mt-3 text-3xl font-semibold text-neutral-900">€0 <span className="text-sm font-normal text-neutral-600">für immer</span></div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
              <li>• 3 Dokumente / Monat</li>
              <li>• Einzelnutzer</li>
              <li>• 1 Sprache (Deutsch)</li>
              <li>• Basis‑Vorlagen</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-fuchsia-300 bg-fuchsia-50 p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium text-lg">Team <span className="ml-2 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs text-amber-900">Meistgewählt</span></h3>
            <div className="mt-1 text-sm text-neutral-700">Für HR‑Teams und wachsende Unternehmen</div>
            <div className="mt-3 text-3xl font-semibold text-neutral-900">€99 <span className="text-sm font-normal text-neutral-600">pro Monat</span></div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
              <li>• Unbegrenzte Dokumente</li>
              <li>• Bis zu 10 Nutzer</li>
              <li>• DE • FR • IT • EN</li>
              <li>• Brand‑Export (PDF/Word)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-neutral-900 font-medium text-lg">Business</h3>
            <div className="mt-1 text-sm text-neutral-700">Für Unternehmen mit hohem Volumen</div>
            <div className="mt-3 text-3xl font-semibold text-neutral-900">Ab €249 <span className="text-sm font-normal text-neutral-600">pro Monat</span></div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
              <li>• SSO & Rollen</li>
              <li>• Policy‑Engine & Audit‑Log</li>
              <li>• Priorisierter Support</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-500">ZertAI erstellt Entwürfe, die Ihre Arbeit beschleunigen. Bitte prüfen und genehmigen Sie jedes Dokument vor der Ausgabe – keine 100%‑Garantie ohne fachliche Prüfung.</p>
      </div>
    </main>
  );
}
