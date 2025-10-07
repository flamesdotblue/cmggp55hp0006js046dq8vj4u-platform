import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '€0',
    cadence: 'forever',
    features: ['3 documents / month', 'Single user', 'DE language', 'Basic templates'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Team',
    price: '€99',
    cadence: 'per month',
    features: ['Unlimited documents', 'Up to 10 users', 'DE · FR · IT · EN', 'Brand exports (PDF/Word)'],
    cta: 'Start 14-day trial',
    highlight: true,
  },
  {
    name: 'Business',
    price: '€249',
    cadence: 'per month',
    features: ['Unlimited documents', 'SSO & roles', 'Policy engine & audit log', 'Priority support'],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">Transparent pricing</h1>
        <p className="mt-3 text-neutral-300">No tricks. Choose a plan that fits your workflow. Cancel anytime.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border ${plan.highlight ? 'border-fuchsia-400/40 bg-white/10' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}>
              <div className="flex-1">
                <h3 className="text-white font-medium text-lg">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">{plan.price}</span>
                  <span className="text-sm text-neutral-400">{plan.cadence}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
                  ))}
                </ul>
              </div>
              <button className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ${plan.highlight ? 'bg-white text-neutral-900 hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/15'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-500">ZertAI generates drafts to accelerate your work. Always review and approve before issuing any document.</p>
      </div>
    </main>
  );
}
