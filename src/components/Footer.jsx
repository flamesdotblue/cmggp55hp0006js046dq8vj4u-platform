import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
              <span className="font-semibold tracking-tight text-neutral-900">ZertAI</span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 max-w-md">
              Wir automatisieren Arbeitszeugnisse mit Transparenz und Sorgfalt – damit Sie sich auf Menschen konzentrieren können, nicht auf Papierkram.
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-neutral-600">
            <Link className="hover:text-neutral-900" to="/product">Produkt</Link>
            <Link className="hover:text-neutral-900" to="/pricing">Preise</Link>
            <a className="hover:text-neutral-900" href="#languages">Sprachen</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} ZertAI. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}
