import { useMemo, useState } from 'react';
import { BarChart3 } from 'lucide-react';

export default function ValueCalculator() {
  const [count, setCount] = useState(20);

  const { manualCost, consultantCost, planCost, timeSavedHours, moneySavedMin, moneySavedMax } = useMemo(() => {
    const hourly = 50;
    const manualHours = 2; // conservative end of 2–4h
    const manual = manualHours * hourly * count; // €
    const consultant = 250 * count; // €
    const plan = 99 * 12; // Team plan yearly
    const savedHours = (manualHours * count);
    const savedMin = manual - plan; // vs manual
    const savedMax = consultant - plan; // vs consultant
    return {
      manualCost: manual,
      consultantCost: consultant,
      planCost: plan,
      timeSavedHours: savedHours,
      moneySavedMin: savedMin,
      moneySavedMax: savedMax,
    };
  }, [count]);

  const euro = (n) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="mt-10">
      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <div className="flex items-center gap-2 text-neutral-900 font-medium"><BarChart3 className="h-5 w-5" /> Rechnen Sie Ihre Ersparnis aus</div>
        <div className="mt-4">
          <label className="text-sm text-neutral-700">Wie viele Arbeitszeugnisse erstellen Sie pro Jahr?</label>
          <div className="mt-2 flex items-center gap-4">
            <input
              type="range"
              min={5}
              max={100}
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-full accent-neutral-900"
            />
            <div className="text-sm text-neutral-900 w-24 text-right">{count} Stück</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <Card title="Ihre aktuellen Kosten (manuell)">{euro(manualCost)}/Jahr</Card>
          <Card title="HR-Berater Alternative">{euro(consultantCost)}/Jahr</Card>
          <Card title="Mit ZertAI Team-Plan">{euro(planCost)}/Jahr</Card>
        </div>
        <div className="mt-4 text-sm text-neutral-800">
          <p>+ Sie sparen ca. {timeSavedHours} Arbeitsstunden pro Jahr</p>
          <p className="mt-1 font-medium">Ihre Ersparnis: {euro(moneySavedMin)} – {euro(moneySavedMax)} pro Jahr + Zeit zurück</p>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
      <div className="text-neutral-700">{title}</div>
      <div className="mt-1 text-neutral-900 font-semibold">{children}</div>
    </div>
  );
}
