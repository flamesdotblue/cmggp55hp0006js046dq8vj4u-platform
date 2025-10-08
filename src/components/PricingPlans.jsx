import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '€0',
    cadence: 'für immer',
    blurb: ['Für gelegentliche Nutzung', 'Testen Sie ZertAI ohne Risiko'],
    features: ['3 Dokumente / Monat', 'Einzelnutzer', '1 Sprache (Deutsch)', 'Basis‑Vorlagen'],
    cta: 'Jetzt kostenlos starten',
    ctaSub: 'Keine Kreditkarte erforderlich',
    highlight: false,
    disclaimer: '⚠️ Hinweis: Sie prüfen und genehmigen jedes Dokument',
  },
  {
    name: 'Team',
    price: '€99',
    cadence: 'pro Monat',
    badge: '🔥 Meistgewählt',
    blurb: ['Für HR‑Teams und wachsende Unternehmen', '∼€5 pro Zeugnis bei 20/Monat'],
    features: ['Unbegrenzte Dokumente', 'Bis zu 10 Nutzer', 'DE • FR • IT • EN', 'Brand‑Export (PDF/Word)'],
    cta: 'Team‑Plan testen →',
    ctaSub: 'Jederzeit kündbar • Alle Features 14 Tage testen',
    highlight: true,
    disclaimer: '⚠️ Hinweis: Sie prüfen und genehmigen jedes Dokument',
  },
  {
    name: 'Business',
    price: 'Ab €249',
    cadence: 'pro Monat',
    blurb: ['Für Unternehmen mit hohem Volumen', 'Enterprise‑Features und Compliance'],
    features: ['Unbegrenzte Dokumente', 'SSO & Rollen', 'Policy‑Engine & Audit‑Log', 'Priorisierter Support'],
    cta: 'Angebot anfragen →',
    ctaSub: 'Antwort innerhalb 24 Stunden',
    highlight: false,
    disclaimer: '⚠️ Hinweis: Sie prüfen und genehmigen jedes Dokument',
  },
];

export default function PricingPlans() {
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border ${plan.highlight ? 'border-fuchsia-300 bg-fuchsia-50' : 'border-neutral-200 bg-white'} p-6 flex flex-col shadow-sm`}
        >
          {plan.badge && (
            <div className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900 shadow-sm">
              <Star className="h-3.5 w-3.5" /> {plan.badge}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-neutral-900 font-medium text-lg">{plan.name}</h3>
            <div className="mt-1 text-sm text-neutral-700 space-y-0.5">
              {plan.blurb?.map((b) => (
                <div key={b}>{b}</div>
              ))}
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-neutral-900">{plan.price}</span>
              <span className="text-sm text-neutral-600">{plan.cadence}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-800">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> {f}</li>
              ))}
            </ul>
          </div>
          <button className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ${plan.highlight ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'}`}>
            {plan.cta}
          </button>
          {plan.ctaSub && <div className="mt-2 text-xs text-neutral-600">{plan.ctaSub}</div>}
          <div className="mt-4 text-xs text-neutral-600">{plan.disclaimer}</div>
        </div>
      ))}
    </section>
  );
}
