export default function ProductHowFAQ() {
  const faqs = [
    {
      q: 'Wie genau ist die rechtliche Sprache?',
      a: 'Die KI wurde mit 10.000+ realen Zeugnissen und Gerichtsurteilen trainiert. Sie generiert rechtlich informierte Formulierungen basierend auf DACH‑Standards. Aber: Keine 100%‑Garantie ohne Fachprüfung.'
    },
    {
      q: 'Kann ich die generierten Texte bearbeiten?',
      a: 'Ja, vollständig. Jeder Abschnitt ist editierbar. Sie haben volle Kontrolle.'
    },
    {
      q: 'Funktioniert es auch ohne HRIS?',
      a: 'Ja. Sie können Daten manuell über das Konversations‑Interface eingeben oder eine Excel/CSV hochladen.'
    },
    {
      q: 'Wie lange dauert die Generierung wirklich?',
      a: 'Dateneingabe: 2 Minuten · KI‑Generierung: 30 Sekunden · Prüfen & Exportieren: 2 Minuten · Gesamt: ~5 Minuten pro Zeugnis.'
    },
    {
      q: 'Was passiert, wenn ich mit dem Ergebnis nicht zufrieden bin?',
      a: 'Sie können jeden Abschnitt neu generieren lassen oder manuell bearbeiten. Falls nichts hilft: Rückerstattung innerhalb 7 Tagen.'
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Häufige Fragen zur Funktionsweise</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="text-neutral-900 font-medium">❓ {item.q}</div>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
