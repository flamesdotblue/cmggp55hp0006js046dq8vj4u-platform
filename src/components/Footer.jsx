import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
              <span className="font-semibold tracking-tight text-white">ZertAI</span>
            </div>
            <p className="mt-2 text-sm text-neutral-400 max-w-md">
              We automate reference letters with transparency and care—so you can focus on people, not paperwork.
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-neutral-300">
            <Link className="hover:text-white" to="/product">Produkt</Link>
            <Link className="hover:text-white" to="/pricing">Preise</Link>
            <a className="hover:text-white" href="#languages">Sprachen</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} ZertAI. All rights reserved.</div>
      </div>
    </footer>
  );
}
