import { Link, NavLink, useLocation } from 'react-router-dom';
import { Rocket, Languages, Shield } from 'lucide-react';

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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
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
            <a
              href="#languages"
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <span className="inline-flex items-center gap-2"><Languages className="h-4 w-4" />DE · FR · IT · EN</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to={location.pathname === '/pricing' ? '/product' : '/pricing'}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              <Shield className="h-4 w-4" />
              {location.pathname === '/pricing' ? 'Warum ZertAI?' : 'Transparente Preise'}
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-md bg-neutral-900 text-white px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              3 Zeugnisse kostenlos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
