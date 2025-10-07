import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
          <h3 className="text-xl font-semibold text-neutral-900">Bereit, es auszuprobieren?</h3>
          <p className="mt-2 text-neutral-700">3 Zeugnisse kostenlos • Keine Kreditkarte • 5 Minuten Setup</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800">Kostenlos testen</Link>
            <Link to="/pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Preise ansehen</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
