import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ValueCalculator() {
  const [docs, setDocs] = useState(20);

  const values = useMemo(() => {
    const n = Number(docs) || 0;
    const hourly = 50; // € per hour assumption
    const hoursPerDocManual = 2;
    const teamPlanMonthly = 99;

    const manualCost = hoursPerDocManual * hourly * n;
    const consultantCost = 250 * n;
    const teamYearly = teamPlanMonthly * 12; // €1,188
    const savingsVsManual = Math.max(0, manualCost - teamYearly);
    const savingsVsConsultant = Math.max(0, consultantCost - teamYearly);
    const hoursSaved = hoursPerDocManual * n; // simple framing

    return { n, manualCost, consultantCost, teamYearly, savingsVsManual, savingsVsConsultant, hoursSaved };
  }, [docs]);

  return (
    <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-neutral-900">Wie viel könnten Sie sparen?</h2>

      <div className="mt-5">
        <label htmlFor="docRange" className="block text-sm font-medium text-neutral-800">
          Wie viele Arbeitszeugnisse pro Jahr?
        </label>
        <div className="mt-2 flex items-center gap-4">
          <span className="text-xs text-neutral-600">5</span>
          <input
            id="docRange"
            type="range"
            min={5}
            max={100}
            step={1}
            value={docs}
            onChange={(e) => setDocs(e.target.value)}
            className="flex-1 accent-neutral-900"
            aria-label="Anzahl Arbeitszeugnisse pro Jahr"
          />
          <span className="text-xs text-neutral-600">100</span>
        </div>
        <div className="mt-2 text-sm text-neutral-700">{values.n} Zeugnisse/Jahr</div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="text-neutral-900 font-medium">Ihre aktuellen Kosten</div>
          <ul className="mt-2 text-sm text-neutral-700 space-y-1">
            <li>Manuell (2 Std × €50/Std × {values.n}) = <span className="font-medium">€{values.manualCost.toLocaleString('de-DE')}</span>/Jahr</li>
            <li>HR‑Berater (€250 × {values.n}) = <span className="font-medium">€{values.consultantCost.toLocaleString('de-DE')}</span>/Jahr</li>
          </ul>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="text-neutral-900 font-medium">Mit ZertAI Team‑Plan</div>
          <div className="mt-2 text-sm text-neutral-700">€99 × 12 Monate = <span className="font-medium">€{values.teamYearly.toLocaleString('de-DE')}</span>/Jahr</div>
          <div className="mt-3 text-xs text-neutral-600">Alle 4 Sprachen inklusive • Jederzeit kündbar</div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-emerald-50 p-4">
          <div className="text-emerald-900 font-medium">Ihr Vorteil</div>
          <ul className="mt-2 text-sm text-emerald-900 space-y-1">
            <li>💰 Sie sparen vs. Manuell: <span className="font-semibold">€{values.savingsVsManual.toLocaleString('de-DE')}</span>/Jahr</li>
            <li>💰 Sie sparen vs. Berater: <span className="font-semibold">€{values.savingsVsConsultant.toLocaleString('de-DE')}</span>/Jahr</li>
            <li>⏱️ Zeitersparnis: <span className="font-semibold">{values.hoursSaved}</span> Arbeitsstunden</li>
          </ul>
        </div>
      </div>

      <a
        href="#plans"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800"
      >
        Team‑Plan testen <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}
