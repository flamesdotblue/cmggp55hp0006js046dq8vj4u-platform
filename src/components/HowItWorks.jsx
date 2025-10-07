import { Settings2, MessageSquareText, FileText } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Settings2 className="h-5 w-5" />, title: 'Schritt 1: Kurzes Gespräch (2 Minuten)',
      desc: 'Name, Rolle, Leistungsbewertung (1–3), besondere Verantwortlichkeiten.'
    },
    {
      icon: <MessageSquareText className="h-5 w-5" />, title: 'Schritt 2: KI-Entwurf (30 Sekunden)',
      desc: 'Rechtlich fundierte Formulierungen, rollengerechte Struktur, DACH-Standards.'
    },
    {
      icon: <FileText className="h-5 w-5" />, title: 'Schritt 3: Prüfen & Exportieren (2 Minuten)',
      desc: 'Abschnitte bearbeiten, zusätzliche Sprachen, PDF/Word mit Branding exportieren.'
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Von der Frage zur PDF in 3 Schritten</h2>
        <p className="mt-3 text-neutral-700 max-w-2xl">Gesamtzeit: ~5 Minuten vs. 2–4 Stunden manuell. Nicht Black Box—Sie behalten die Kontrolle.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-neutral-200 bg-white p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">{s.icon}</div>
              <h3 className="mt-3 text-neutral-900 font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
