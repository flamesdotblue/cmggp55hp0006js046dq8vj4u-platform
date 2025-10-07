import { Link, NavLink, useLocation } from 'react-router-dom';
import { Rocket, Languages, Shield } from 'lucide-react';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'text-white bg-white/10' : 'text-neutral-300 hover:text-white hover:bg-white/5'
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">ZertAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/product">Produkt</NavItem>
            <NavItem to="/pricing">Preise</NavItem>
            <a
              href="#languages"
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span className="inline-flex items-center gap-2"><Languages className="h-4 w-4" />DE · FR · IT · EN</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to={location.pathname === '/pricing' ? '/product' : '/pricing'}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
            >
              <Shield className="h-4 w-4" />
              {location.pathname === '/pricing' ? 'Warum ZertAI?' : 'Transparente Preise'}
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-md bg-white text-neutral-900 px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
