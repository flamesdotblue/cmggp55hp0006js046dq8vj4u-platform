import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(2,6,23,0.9)_65%,rgba(2,6,23,1)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
          <span className="font-semibold tracking-tight text-white text-lg">ZertAI</span>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          ✨ KI‑Assistent für DACH‑Arbeitszeugnisse
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Arbeitszeugnisse in 5 Minuten erstellen—
          <br className="hidden sm:block" />
          nicht mehr 2 Stunden
        </h1>

        <p className="mt-3 text-base sm:text-lg text-neutral-200">
          KI‑gestützte Zeugnisse in DE • FR • IT • EN nach DACH‑Arbeitsrecht <span className="ml-2">🇩🇪 🇫🇷 🇮🇹 🇬🇧</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-300">
          Trainiert mit 10.000+ realen Arbeitszeugnissen und DACH‑Rechtsprechung (§109 GewO, OR Art. 330a). Sie prüfen und genehmigen jedes Wort.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#process"
            className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90"
          >
            Jetzt kostenlos testen → <span className="ml-1 hidden sm:inline">3 Zeugnisse gratis</span>
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Wie es funktioniert (2 Min.)
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
