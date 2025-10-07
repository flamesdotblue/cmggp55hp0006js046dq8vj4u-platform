import { Languages, Timer, ShieldCheck, Workflow } from 'lucide-react';

export default function FeatureGrid() {
  return (
    <section id="languages" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Schnell. Verständlich. Vertrauenswürdig.</h2>
          <p className="mt-3 text-neutral-700">Konkrete Vorteile, mit ehrlicher Transparenz zu Grenzen und Risiken.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FeatureCard
            icon={<Timer className="h-5 w-5" />}
            title="Von 2 Stunden auf 5 Minuten"
            desc={
              <>
                <p>Arbeitszeitkosten im Schnitt €21,18 pro Aufgabe (HR-Studie). Manuell: 2–4 Stunden. Mit ZertAI: 5-Minuten-Gespräch → fertiger Entwurf.</p>
                <p className="mt-2 text-emerald-700 font-medium">Zeitersparnis in Beta: 95%</p>
              </>
            }
          />
          <FeatureCard
            icon={<Languages className="h-5 w-5" />}
            title="4 Sprachen mit Nuancen"
            desc={
              <>
                <p>Nicht nur Übersetzung—kulturelle Anpassung. "Stets zur vollsten Zufriedenheit" → "Toujours à l'entière satisfaction" usw. Jede Sprache folgt regionalen Konventionen.</p>
              </>
            }
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Rechtlich fundiert"
            desc={
              <>
                <p>Ausgerichtet an DACH-Standards: §109 GewO (DE), OR Art. 330a (CH), AT-Arbeitsrecht. Regelmäßige Aktualisierung.</p>
                <p className="mt-2 text-neutral-700">Keine 100%-Garantie—aber deutlich reduziertes Risiko.</p>
              </>
            }
          />
          <FeatureCard
            icon={<Workflow className="h-5 w-5" />}
            title="Volle Kontrolle"
            desc={
              <>
                <p>Sie sehen, wie Bewertungen in Text übersetzt werden. Bearbeiten vor Export, Versionshistorie und Prüfpfade.</p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
      <div className="inline-flex items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 h-10 w-10">
        {icon}
      </div>
      <h3 className="mt-3 text-neutral-900 font-medium">{title}</h3>
      <div className="mt-1 text-sm text-neutral-700 leading-relaxed">{desc}</div>
    </div>
  );
}
