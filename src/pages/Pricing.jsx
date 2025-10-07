import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '€0',
    cadence: 'für immer',
    features: ['3 Dokumente / Monat', 'Einzelnutzer', 'Deutsch (DE)', 'Basis‑Vorlagen'],
    cta: 'Kostenlos starten',
    highlight: false,
  },
  {
    name: 'Team',
    price: '€99',
    cadence: 'pro Monat',
    features: ['Unbegrenzte Dokumente', 'Bis zu 10 Nutzer', 'DE • FR • IT • EN', 'Brand‑Export (PDF/Word)'],
    cta: '14‑Tage‑Test starten',
    highlight: true,
  },
  {
    name: 'Business',
    price: '€249',
    cadence: 'pro Monat',
    features: ['Unbegrenzte Dokumente', 'SSO & Rollen', 'Policy‑Engine & Audit‑Log', 'Priorisierter Support'],
    cta: 'Vertrieb kontaktieren',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Transparente Preise</h1>
        <p className="mt-3 text-neutral-700">Wählen Sie den Plan, der zu Ihrem Workflow passt. Jederzeit kündbar.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border ${plan.highlight ? 'border-fuchsia-300 bg-fuchsia-50' : 'border-neutral-200 bg-white'} p-6 flex flex-col shadow-sm`}>
              <div className="flex-1">
                <h3 className="text-neutral-900 font-medium text-lg">{plan.name}</h3>
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
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-500">ZertAI erstellt Entwürfe, die Ihre Arbeit beschleunigen. Bitte prüfen und genehmigen Sie jedes Dokument vor der Ausgabe – keine 100%‑Garantie ohne fachliche Prüfung.</p>
      </div>
    </main>
  );
}
