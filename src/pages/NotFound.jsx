import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-semibold text-white">404</h1>
        <p className="mt-2 text-neutral-300">We couldn't find that page.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90">Back to home</Link>
      </div>
    </main>
  );
}
