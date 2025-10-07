export default function ComparisonTable() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
          <div className="grid grid-cols-4 text-sm font-medium bg-neutral-50 border-b border-neutral-200">
            <div className="px-4 py-3 text-neutral-500">&nbsp;</div>
            <div className="px-4 py-3 text-neutral-900">Manuell</div>
            <div className="px-4 py-3 text-neutral-900">Word-Vorlage</div>
            <div className="px-4 py-3 text-neutral-900">Mit ZertAI</div>
          </div>
          <Row label="Zeit" a="2–4 Stunden" b="1–2 Stunden" c="5 Minuten" />
          <Row label="Kosten" a="€150 Arbeitszeit" b="€50 Arbeitszeit" c="€3–10" />
          <Row label="Sprachen" a="1" b="1" c="4 gleichzeitig" />
          <Row label="Risiko" a="Hoch" b="Mittel" c="Reduziert*" />
        </div>
        <p className="mt-2 text-[11px] text-neutral-500">*Durch rechtlich fundierte Formulierungen. Keine 100%-Garantie ohne Prüfung.</p>
      </div>
    </section>
  );
}

function Row({ label, a, b, c }) {
  return (
    <div className="grid grid-cols-4 text-sm border-b border-neutral-200 last:border-b-0">
      <div className="px-4 py-3 text-neutral-600 bg-neutral-50">{label}</div>
      <div className="px-4 py-3 text-neutral-900">{a}</div>
      <div className="px-4 py-3 text-neutral-900">{b}</div>
      <div className="px-4 py-3 text-neutral-900">{c}</div>
    </div>
  );
}
