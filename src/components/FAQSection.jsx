export default function FAQSection() {
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
    </section>
  );
}
