import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
      <h3 className="text-xl font-semibold text-neutral-900">Noch nicht sicher?</h3>
      <p className="mt-2 text-neutral-700">Starten Sie mit 3 kostenlosen Dokumenten – keine Kreditkarte erforderlich.</p>
      <Link
        to="/pricing#plans"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800"
      >
        Kostenlos testen
      </Link>
    </section>
  );
}
