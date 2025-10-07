import { Link, NavLink } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 text-lg">ZertAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/product">Produkt</NavItem>
            <NavItem to="/pricing">Preise</NavItem>
            <a href="#languages" className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors">
              🇩🇪 🇫🇷 🇮🇹 🇬🇧
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-md bg-neutral-900 text-white px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-800"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
