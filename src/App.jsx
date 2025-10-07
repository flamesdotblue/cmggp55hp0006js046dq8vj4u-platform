import ProductHero from './components/ProductHero';
import ProductFlow from './components/ProductFlow';
import ProductComparison from './components/ProductComparison';
import ProductSecurityTech from './components/ProductSecurityTech';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="w-full bg-emerald-50 border-b border-emerald-200 text-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm">
          🔐 Datenschutz nach Schweizer Standards • Verarbeitung nur in EU‑Rechenzentren (Zürich/Frankfurt) • DSGVO‑konform • Ihre Daten trainieren nie unsere KI
        </div>
      </header>

      <main>
        <section className="border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
            <span className="font-semibold tracking-tight text-lg">ZertAI</span>
          </div>
        </section>

        <ProductHero />
        <ProductFlow />
        <ProductComparison />
        <ProductSecurityTech />

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
              <h3 className="text-xl font-semibold">Bereit, es auszuprobieren?</h3>
              <p className="mt-2 text-neutral-700">3 Zeugnisse kostenlos • Keine Kreditkarte • 5 Minuten Setup</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800">Kostenlos testen</a>
                <a href="/pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Preise ansehen</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} ZertAI. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
