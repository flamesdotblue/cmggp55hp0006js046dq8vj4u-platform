import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">Arbeitszeugnisse in 5 Minuten — nicht mehr 2 Stunden</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">KI‑gestützte Zeugnisse in DE • FR • IT • EN nach DACH‑Arbeitsrecht. Trainiert mit 10.000+ realen Zeugnissen und Rechtsprechung. Sie prüfen und genehmigen jedes Wort.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link to="/product" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-800">Wie es funktioniert</Link>
          <Link to="/pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Preise ansehen</Link>
        </div>
      </div>
    </section>
  );
}
