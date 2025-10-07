import { ShieldCheck, Lock } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-medium text-neutral-900">Warum ZertAI vertrauen?</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-800">
            <div>
              <p className="font-medium">🔍 10.000+ Zeugnisse analysiert</p>
              <p className="mt-1">2 Jahre Forschung zu DACH-Arbeitsrechtssprache und Präzedenzfällen</p>
              <p className="mt-3 font-medium">📚 Rechtlich fundiert, nicht erfunden</p>
              <p className="mt-1">Basiert auf §109 GewO (DE), OR Art. 330a (CH), AT-Arbeitsrecht + 500+ Gerichtsurteile zur Zeugnissprache</p>
              <p className="mt-3 font-medium">✍️ Sie behalten die Kontrolle</p>
              <p className="mt-1">KI generiert Entwürfe → Sie prüfen → Sie genehmigen. Kein Black-Box-System.</p>
            </div>
            <div>
              <p className="font-medium flex items-center gap-2"><Lock className="h-4 w-4" /> DSGVO-konform & EU/CH-Datenresidenz</p>
              <p className="mt-1">Daten nur in EU-Rechenzentren (Frankfurt/Zürich). Mitarbeiterdaten trainieren nie unsere KI.</p>
              <p className="mt-3 font-medium">⚠️ Ehrliche Grenzen</p>
              <p className="mt-1">Keine 100%-Rechtsgarantie ohne Anwaltsprüfung. Für Standardfälle spart ZertAI ~95% Zeit bei reduziertem Risiko.</p>
              <p className="mt-3 inline-flex items-center gap-2 text-emerald-700"><ShieldCheck className="h-4 w-4" /> Transparenz statt Hype.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
