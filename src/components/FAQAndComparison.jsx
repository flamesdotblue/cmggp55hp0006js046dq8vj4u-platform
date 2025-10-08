export default function FAQAndComparison() {
  const faqs = [
    {
      q: 'Was passiert, wenn ich mein Limit überschreite?',
      a: 'Sie können jederzeit auf einen höheren Plan upgraden oder zusätzliche Dokumente für €3 pro Zeugnis kaufen. Keine Überraschungen.'
    },
    { q: 'Kann ich jederzeit kündigen?', a: 'Ja, jederzeit. Keine Kündigungsfrist. Ihre Dokumente bleiben 30 Tage nach Kündigung zugänglich.' },
    { q: 'Brauche ich eine Kreditkarte für den Starter‑Plan?', a: 'Nein. 3 Dokumente komplett kostenlos, keine Karte erforderlich.' },
    { q: 'Sind alle 4 Sprachen in jedem Plan enthalten?', a: 'Ja. DE, FR, IT, EN in allen Plänen ohne Aufpreis.' },
    { q: 'Was ist mit Datensicherheit?', a: 'DSGVO‑konform, EU‑Rechenzentren (Zürich/Frankfurt), TLS 1.3‑Verschlüsselung. Ihre Daten trainieren NIE unsere KI.' },
    { q: 'Was, wenn die KI einen Fehler macht?', a: 'Sie prüfen und genehmigen jedes Dokument vor Export. Nicht zufrieden? Rückerstattung innerhalb 7 Tagen.' },
    { q: 'Gibt es Mengenrabatte?', a: 'Ja. Ab 50+ Dokumenten/Monat kontaktieren Sie uns für individuelle Preise.' },
  ];

  const rows = [
    { label: 'Dokumente/Monat', starter: '3', team: 'Unbegrenzt', business: 'Unbegrenzt' },
    { label: 'Nutzer', starter: '1', team: 'Bis 10', business: 'Unbegrenzt' },
    { label: 'Sprachen', starter: 'Alle 4', team: 'Alle 4', business: 'Alle 4' },
    { label: 'Brand‑Export (PDF/Word)', starter: '❌', team: '✓', business: '✓' },
    { label: 'HRIS‑Integration', starter: '❌', team: '❌', business: '✓' },
    { label: 'Policy‑Engine', starter: '❌', team: '❌', business: '✓' },
    { label: 'Audit‑Log', starter: '❌', team: '❌', business: '✓' },
    { label: 'Priorisierter Support', starter: '❌', team: '❌', business: '✓' },
    { label: 'Dedicated Manager', starter: '❌', team: '❌', business: '✓' },
  ];

  return (
    <section className="mt-14">
      <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Häufig gestellte Fragen</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="text-neutral-900 font-medium">❓ {item.q}</div>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-2xl sm:text-3xl font-semibold text-neutral-900">Funktionen im Detail</h2>
      <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 text-neutral-700">
            <tr>
              <th className="text-left font-medium p-3 w-1/2">Funktion</th>
              <th className="text-left font-medium p-3">Starter</th>
              <th className="text-left font-medium p-3">Team</th>
              <th className="text-left font-medium p-3">Business</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 === 1 ? 'bg-neutral-50 border-t border-neutral-200' : 'border-t border-neutral-200'}>
                <td className="p-3 text-neutral-800">{r.label}</td>
                <td className="p-3 text-neutral-900">{r.starter}</td>
                <td className="p-3 text-neutral-900">{r.team}</td>
                <td className="p-3 text-neutral-900">{r.business}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-neutral-600">* Rechtlich informierte Formulierungen, keine 100%‑Garantie ohne fachliche Prüfung.</p>
    </section>
  );
}
