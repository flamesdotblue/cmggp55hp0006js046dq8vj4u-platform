import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-neutral-900">404</h1>
        <p className="mt-2 text-neutral-600">Diese Seite wurde nicht gefunden.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">Zur Startseite</Link>
      </div>
    </main>
  );
}
