export default function PricingFAQ() {
  const faqs = [
    {
      q: 'Was passiert, wenn ich mein Limit überschreite?',
      a: 'Sie können jederzeit upgraden oder zusätzliche Zeugnisse für €3 pro Stück kaufen. Keine Überraschungen, keine Strafen.'
    },
    {
      q: 'Kann ich jederzeit kündigen?',
      a: 'Ja. Kündigen Sie jederzeit, ohne Fragen. Ihre Zeugnisse bleiben 30 Tage nach Kündigung zugänglich.'
    },
    {
      q: 'Brauche ich eine Kreditkarte für den kostenlosen Plan?',
      a: 'Nein. Erstellen Sie 3 Zeugnisse komplett kostenlos, keine Karte erforderlich. Nur upgraden, wenn Sie bereit sind.'
    },
    {
      q: 'Sind alle 4 Sprachen in jedem Plan enthalten?',
      a: 'Ja. Alle Pläne beinhalten Deutsch, Französisch, Italienisch und Englisch. Keine sprachbasierten Preisstufen.'
    },
    {
      q: 'Was ist mit Datensicherheit?',
      a: 'DSGVO-konform, EU-Rechenzentren (Frankfurt/Zürich), TLS 1.3-Verschlüsselung, Ihre Daten trainieren nie unsere KI.'
    },
    {
      q: 'Was wenn die KI einen Fehler macht?',
      a: 'Sie prüfen und genehmigen alles vor dem Export. Nicht zufrieden? Rückerstattung innerhalb 7 Tagen.'
    },
  ];

  return (
    <section className="mt-12">
      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <h2 className="text-lg font-medium text-neutral-900">Häufig gestellte Fragen zur Preisgestaltung</h2>
        <div className="mt-4 divide-y divide-neutral-200">
          {faqs.map((f) => (
            <div key={f.q} className="py-4">
              <div className="text-sm font-medium text-neutral-900">{f.q}</div>
              <div className="mt-1 text-sm text-neutral-700">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
