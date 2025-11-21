import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Homes from './pages/Homes';
import Security from './pages/Security';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import CursorFollower from './components/CursorFollower';

type Page = 'home' | 'homes' | 'security' | 'pricing' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'homes':
        return <Homes />;
      case 'security':
        return <Security />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      <CursorFollower />
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="page-transition">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
