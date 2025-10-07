import { Clock, ShieldCheck, PencilLine, Wallet } from 'lucide-react';

export default function FeatureGrid() {
  return (
    <section id="languages" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Schnell. Verständlich. Vertrauenswürdig.</h2>
          <p className="mt-3 text-neutral-300">Konkrete Ergebnisse statt Hype – mit Zahlen, die zählen.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card
            icon={<Clock className="h-5 w-5" />}
            title="Von 2 Std. auf 5 Min."
            lines={[
              'Ø €150 Arbeitszeit/Zeugnis (2 Std × €75)',
              'Mit ZertAI: ~5 Minuten',
              'Zeitersparnis in Beta: 95%'
            ]}
          />
          <Card
            icon={<Wallet className="h-5 w-5" />}
            title="Bezahlbar, geringes Risiko"
            lines={[
              'Berater: €200–500 pro Zeugnis',
              'Word-Vorlage: €50 + Risiko',
              'ZertAI: ~€3–10/Zeugnis'
            ]}
          />
          <Card
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Rechtlich fundiert"
            lines={[
              '10.000+ echte Zeugnisse analysiert',
              '500+ Urteile zur Zeugnissprache',
              '§109 GewO, OR Art. 330a, AT-Präzedenz'
            ]}
          />
          <Card
            icon={<PencilLine className="h-5 w-5" />}
            title="Sie steuern, wir beschleunigen"
            lines={[
              'Volle Editierung vor Export',
              'Transparente Formulierungslogik',
              'Auditfähige Versionshistorie'
            ]}
          />
        </div>
        <p className="mt-6 text-xs text-neutral-500">*Keine 100%-Garantie ohne fachliche Prüfung. ZertAI beschleunigt Routinearbeit und liefert rechtlich informierte Formulierungen.</p>
      </div>
    </section>
  );
}

function Card({ icon, title, lines }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
      <div className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white h-10 w-10">
        {icon}
      </div>
      <h3 className="mt-3 text-white font-medium">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-neutral-300">
        {lines.map((l) => (
          <li key={l}>• {l}</li>
        ))}
      </ul>
    </div>
  );
}
