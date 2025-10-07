export default function ProductIntegrations() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Integration & Kompatibilität</h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-neutral-900 font-medium">CSV‑Import</h3>
            <ul className="mt-2 text-sm text-neutral-700 space-y-1">
              <li>• Personio</li>
              <li>• BambooHR</li>
              <li>• SAP SuccessFactors</li>
              <li>• Workday</li>
              <li>• ADP</li>
              <li>• Excel / Google Sheets</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-neutral-900 font-medium">Export‑Formate</h3>
            <ul className="mt-2 text-sm text-neutral-700 space-y-1">
              <li>• PDF (mit Ihrem Branding)</li>
              <li>• Word (bearbeitbar)</li>
              <li>• Alle 4 Sprachen gleichzeitig</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-neutral-900 font-medium">Browser‑Kompatibilität</h3>
            <ul className="mt-2 text-sm text-neutral-700 space-y-1">
              <li>• Keine Installation erforderlich</li>
              <li>• Chrome, Firefox, Safari, Edge</li>
              <li>• Funktioniert auf Mac, Windows, Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
