import ValueCalculator from './components/ValueCalculator';
import PricingPlans from './components/PricingPlans';
import FAQAndComparison from './components/FAQAndComparison';
import FinalCTA from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="w-full bg-emerald-50 border-b border-emerald-200 text-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm">
          🔐 Datenschutz nach Schweizer Standards • Verarbeitung nur in EU‑Rechenzentren (Zürich/Frankfurt) • DSGVO‑konform • Ihre Daten trainieren nie unsere KI
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">Transparente Preise</h1>
          <p className="mt-3 text-neutral-700">Wählen Sie den Plan, der zu Ihrem Workflow passt. Jederzeit kündbar.</p>

          <ValueCalculator />

          <PricingPlans />

          <p className="mt-8 text-xs text-neutral-500">ZertAI erstellt Entwürfe, die Ihre Arbeit beschleunigen. Bitte prüfen und genehmigen Sie jedes Dokument vor der Ausgabe – keine 100%‑Garantie ohne fachliche Prüfung.</p>

          <FAQAndComparison />

          <FinalCTA />
        </div>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} ZertAI. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
