import { RouterProvider, createBrowserRouter, Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBanner from './components/TopBanner';

import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <TopBanner />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <div className="min-h-[60vh] grid place-items-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-neutral-900">Seite nicht gefunden</h1>
          <p className="mt-2 text-neutral-600">Die angeforderte Seite existiert nicht.</p>
          <Link to="/" className="mt-6 inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">Zur Startseite</Link>
        </div>
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'pricing', element: <Pricing /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
