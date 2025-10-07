import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Product() {
  const steps = [
    { title: 'Richtlinie festlegen', desc: 'Ton, Bewertungsregeln und Vorlagen gemäss Ihren Standards konfigurieren.' },
    { title: 'Chat & verfeinern', desc: 'Geführte Fragen beantworten. Die KI passt den Entwurf iterativ an.' },
    { title: 'Freigeben & exportieren', desc: 'PDF/Word mit Branding, plus Mehrsprachenvariante.' },
  ];

  return (
    <main className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">So funktioniert ZertAI</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">Ein klarer Ablauf ersetzt stundenlange Handarbeit. Volle Transparenz, volle Editierbarkeit – Sie behalten die Kontrolle.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h3 className="text-neutral-900 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl text-neutral-900 font-medium">Was uns unterscheidet</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> DACH‑Rechtsnuancen, mehrsprachige Formulierungen.</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Radikale Transparenz: klare Grenzen, klare Preise, kein Lock‑in.</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Human‑in‑the‑loop: Sie prüfen jeden Abschnitt vor Export.</li>
          </ul>
          <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">
            Preise ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
