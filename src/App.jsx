import Hero from './components/Hero';
import ValueCalculator from './components/ValueCalculator';
import PricingPlans from './components/PricingPlans';
import FAQAndComparison from './components/FAQAndComparison';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="w-full bg-emerald-50 border-b border-emerald-200 text-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm">
          🔐 Datenschutz nach Schweizer Standards • Verarbeitung nur in EU‑Rechenzentren (Zürich/Frankfurt) • DSGVO‑konform • Ihre Daten trainieren nie unsere KI
        </div>
      </header>

      <main>
        <Hero />

        <section id="value" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ValueCalculator />
        </section>

        <section id="plans" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingPlans />
        </section>

        <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAndComparison />
        </section>

        <section className="mt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-neutral-900">Noch nicht sicher?</h3>
            <p className="mt-2 text-neutral-700">Starten Sie mit 3 kostenlosen Dokumenten – keine Kreditkarte erforderlich.</p>
            <a
              href="#plans"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800"
            >
              Kostenlos testen
            </a>
          </div>
          <p className="mt-8 text-xs text-neutral-500">ZertAI erstellt Entwürfe, die Ihre Arbeit beschleunigen. Bitte prüfen und genehmigen Sie jedes Dokument vor der Ausgabe – keine 100%‑Garantie ohne fachliche Prüfung.</p>
        </section>
      </main>

      <footer className="border-t border-neutral-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} ZertAI. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
