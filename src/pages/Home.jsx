import { Link } from 'react-router-dom';
import ComparisonTable from '../components/ComparisonTable';
import ExampleIO from '../components/ExampleIO';
import Trust from '../components/Trust';
import WhoFor from '../components/WhoFor';
import Objection from '../components/Objection';

export default function Home() {
  return (
    <main className="relative">
      <ComparisonTable />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Arbeitszeugnisse 10x schneller—mit rechtlich fundierten Formulierungen</h2>
              <p className="mt-3 text-neutral-700">Unsere KI generiert Entwürfe basierend auf DACH-Arbeitsrechtsstandards (DE: §109 GewO, CH: OR Art. 330a, AT: Arbeitsrecht). Sie prüfen, bearbeiten und genehmigen vor dem Export.</p>
              <div className="mt-4 text-sm text-neutral-700">
                <p>Wichtig: Wir garantieren keine 100%ige Rechtskonformität ohne Fachprüfung. Aber wir übernehmen die 80% Routinearbeit, die Ihre Zeit verschwendet—damit Sie sich auf die 20% konzentrieren können, die menschliches Urteilsvermögen erfordern.</p>
              </div>
              <div className="mt-8 flex gap-3">
                <Link to="/product" className="inline-flex rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50">2-Minuten-Demo ansehen</Link>
                <Link to="/pricing" className="inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">3 Zeugnisse kostenlos</Link>
              </div>
            </div>
            <div>
              <ExampleIO />
            </div>
          </div>
        </div>
      </section>

      <Trust />
      <WhoFor />
      <Objection />
    </main>
  );
}
