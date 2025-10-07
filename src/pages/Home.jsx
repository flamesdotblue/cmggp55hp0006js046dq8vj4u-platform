import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const bullets = [
    'Guided conversational flow: ask, refine, finalize',
    'Role-based controls and audit-friendly history',
    'Exports to PDF/Word with your brand styling',
    'Clear pricing, no lock-in, no vague promises'
  ];

  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Make compliant Arbeitszeugnisse without the busywork</h2>
            <p className="mt-3 text-neutral-300">Our AI drafts the right structure and phrasing based on role, performance, and jurisdiction—always with controls to edit and approve before export.</p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-neutral-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/product" className="inline-flex rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Explore product</Link>
              <Link to="/pricing" className="inline-flex rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90">Try it free</Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="text-sm text-neutral-300">Example output snippet</div>
            <div className="mt-3 rounded-lg bg-neutral-900/80 border border-white/10 p-4 text-sm text-neutral-200">
              <p className="font-medium text-neutral-100">Arbeitszeugnis — Senior Produktmanager/in</p>
              <p className="mt-2">Frau Maria Rossi war vom 01.03.2021 bis 30.06.2025 als Senior Produktmanagerin in unserem Unternehmen tätig. Ihre Aufgaben umfassten die strategische Produktplanung, die cross-funktionale Koordination sowie die Auswertung von Markt- und Kundenanforderungen.</p>
              <p className="mt-2">Sie überzeugte durch sehr gute analytische Fähigkeiten, eine ausgeprägte Lösungsorientierung und ein hohes Qualitätsbewusstsein. Ihr Verhalten gegenüber Vorgesetzten, Kolleginnen und Kollegen sowie externen Partnern war stets einwandfrei.</p>
              <p className="mt-2 text-neutral-400">— Drafted by ZertAI. Always review and approve before export.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
