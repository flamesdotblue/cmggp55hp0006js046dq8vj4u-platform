export default function PlanComparison() {
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
      <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Funktionen im Detail</h2>
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
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-neutral-200">
                <td className="p-3 text-neutral-800">{r.label}</td>
                <td className="p-3 text-neutral-900">{r.starter}</td>
                <td className="p-3 text-neutral-900">{r.team}</td>
                <td className="p-3 text-neutral-900">{r.business}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
