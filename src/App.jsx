import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import ExampleTabs from './components/ExampleTabs';
import TrustSection from './components/TrustSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Hero />
      <main>
        <ProcessSection />
        <ExampleTabs />
        <TrustSection />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
            <span className="font-semibold tracking-tight text-white">ZertAI</span>
          </div>
          <p className="mt-2 text-sm text-neutral-400 max-w-xl">
            🔐 Datenschutz nach Schweizer Standards — Verarbeitung nur in EU‑Rechenzentren (Zürich/Frankfurt), DSGVO‑konform. Ihre Daten trainieren nie unsere KI.
          </p>
          <div className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} ZertAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
