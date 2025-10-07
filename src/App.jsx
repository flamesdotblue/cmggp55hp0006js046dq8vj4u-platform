import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import RouterView from './components/RouterView';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <TopBanner />
      <Navbar />
      <main>
        <RouterView />
      </main>
      <Footer />
    </div>
  );
}
