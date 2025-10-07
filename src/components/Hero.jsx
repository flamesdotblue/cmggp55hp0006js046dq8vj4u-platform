import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(99,102,241,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              KI-gestützte Arbeitszeugnisse für DACH
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Arbeitszeugnisse in 5 Minuten statt 2 Stunden erstellen
            </h1>
            <h2 className="mt-2 text-lg sm:text-xl text-neutral-700">
              KI-gestützte Zeugnisse in DE • FR • IT • EN nach DACH-Arbeitsrecht
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-700">
              Basierend auf der Analyse von 10.000+ realen Arbeitszeugnissen und DACH-Arbeitsrechtsstandards. Sie behalten die volle Kontrolle: prüfen, bearbeiten und freigeben Sie jedes Wort vor dem Export.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-800"
              >
                Erstellen Sie 3 Zeugnisse kostenlos
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                2-Minuten-Demo ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroComparison />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroComparison() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
      <div className="text-sm font-medium text-neutral-900">Manuell vs. Vorlage vs. ZertAI</div>
      <div className="mt-3 grid grid-cols-3 text-xs sm:text-sm">
        <div className="font-medium text-neutral-500">&nbsp;</div>
        <div className="font-medium text-neutral-900">Manuell</div>
        <div className="font-medium text-neutral-900">Mit ZertAI</div>
      </div>
      <div className="divide-y divide-neutral-200 mt-2">
        <Row label="Zeit" manual="2–4 Stunden" ai="5 Minuten" />
        <Row label="Kosten" manual="€150 Arbeitszeit" ai="€3–10" />
        <Row label="Sprachen" manual="1" ai="4 gleichzeitig" />
        <Row label="Risiko" manual="Hoch" ai="Reduziert*" />
      </div>
      <div className="mt-2 text-[11px] text-neutral-500">*Durch rechtlich fundierte Formulierungen. Keine 100%-Garantie ohne Prüfung.</div>
    </div>
  );
}

function Row({ label, manual, ai }) {
  return (
    <div className="grid grid-cols-3 py-2">
      <div className="text-neutral-500 text-xs sm:text-sm">{label}</div>
      <div className="text-neutral-900 text-xs sm:text-sm">{manual}</div>
      <div className="text-neutral-900 text-xs sm:text-sm">{ai}</div>
    </div>
  );
}
