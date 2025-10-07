import { ShieldAlert, ShieldCheck, Lock, BookOpenCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Warum ZertAI vertrauen?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><BookOpenCheck className="h-5 w-5" /></div>
            <h3 className="mt-3 text-white font-medium">Rechtlich fundiert</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li>10.000+ Arbeitszeugnisse analysiert</li>
              <li>500+ Gerichtsurteile zur Zeugnissprache</li>
              <li>§109 GewO (DE) • OR Art. 330a (CH) • AT‑Arbeitsrecht</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><Lock className="h-5 w-5" /></div>
            <h3 className="mt-3 text-white font-medium">Schweizer Datenschutz</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li>Datenverarbeitung in EU‑Rechenzentren (Zürich/Frankfurt)</li>
              <li>DSGVO‑konform</li>
              <li>Ihre Daten trainieren NIE unsere KI</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><ShieldCheck className="h-5 w-5" /></div>
            <h3 className="mt-3 text-white font-medium">Sie behalten die Kontrolle</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li>KI generiert → Sie prüfen → Sie genehmigen</li>
              <li>Kein Black‑Box‑System</li>
              <li>Volle Editierung vor Export</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white"><ShieldAlert className="h-5 w-5" /></div>
            <h3 className="mt-3 text-white font-medium">Ehrliche Grenzen</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
              <li>Keine 100%‑Rechtsgarantie ohne Fachprüfung</li>
              <li>Bei Streitfällen: Anwalt konsultieren</li>
              <li>Bei Routinefällen: bis zu 95% Zeitersparnis</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 text-amber-200 text-sm">
          ⚠️ Wichtig: Wir übernehmen die 80% Routinearbeit mit rechtlich informierten Formulierungen. Endgültige Verantwortung bleibt bei Ihnen.
        </div>
      </div>
    </section>
  );
}
