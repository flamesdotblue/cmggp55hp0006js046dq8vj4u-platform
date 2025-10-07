import { BookOpenCheck, Lock, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Warum ZertAI vertrauen?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card icon={<BookOpenCheck className=\"h-5 w-5\" />} title="Rechtlich fundiert" lines={[
            '10.000+ Arbeitszeugnisse analysiert',
            '500+ Gerichtsurteile zur Zeugnissprache',
            '§109 GewO (DE) • OR Art. 330a (CH) • AT‑Arbeitsrecht',
          ]} />
          <Card icon={<Lock className=\"h-5 w-5\" />} title="Schweizer Datenschutz" lines={[
            'Datenverarbeitung in EU‑Rechenzentren (Zürich/Frankfurt)',
            'DSGVO‑konform',
            'Ihre Daten trainieren NIE unsere KI',
          ]} />
          <Card icon={<ShieldCheck className=\"h-5 w-5\" />} title="Sie behalten die Kontrolle" lines={[
            'KI generiert → Sie prüfen → Sie genehmigen',
            'Kein Black‑Box‑System',
            'Volle Editierung vor Export',
          ]} />
          <Card icon={<ShieldAlert className=\"h-5 w-5\" />} title="Ehrliche Grenzen" lines={[
            'Keine 100%‑Rechtsgarantie ohne Fachprüfung',
            'Bei Streitfällen: Anwalt konsultieren',
            'Bei Routinefällen: bis zu 95% Zeitersparnis',
          ]} />
        </div>
        <div className="mt-6 rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 text-amber-200 text-sm">
          ⚠️ Wichtig: Wir übernehmen die 80% Routinearbeit mit rechtlich informierten Formulierungen. Endgültige Verantwortung bleibt bei Ihnen.
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, lines }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">{icon}</div>
      <h3 className="mt-3 text-white font-medium">{title}</h3>
      <ul className="mt-2 text-sm text-neutral-300 space-y-1">
        {lines.map((l) => (
          <li key={l}>• {l}</li>
        ))}
      </ul>
    </div>
  );
}
