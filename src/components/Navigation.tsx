import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'homes' | 'security' | 'pricing' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ currentPage, onNavigate, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Our Homes', page: 'homes' },
    { label: 'Security & Lifestyle', page: 'security' },
    { label: 'Pricing & Investment', page: 'pricing' },
    { label: 'Contact', page: 'contact' },
  ];

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > 10);
  });

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen 
          ? 'glass-card-strong backdrop-blur-xl' 
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-gradient-gold tracking-wider hover:scale-110 transition-transform duration-300 relative group"
            >
              BAJA LEGACY
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300" />
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group rounded-lg ${
                    currentPage === item.page
                      ? 'text-amber-400'
                      : 'text-white hover:text-amber-300'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 transform origin-left transition-transform duration-300 rounded-full ${
                      currentPage === item.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="btn-premium text-white font-semibold py-2 px-6 rounded-full text-sm tracking-wide hover:shadow-glow-gold-lg">
                Reserve Now
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-amber-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 glass-card-strong mx-0 rounded-2xl overflow-hidden nav-mobile-smooth shadow-premium-lg">
            {navItems.map((item, idx) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 border-b border-white/5 hover:border-amber-400/30 last:border-b-0 ${
                  currentPage === item.page
                    ? 'text-amber-400 bg-gradient-to-r from-amber-400/10 to-transparent'
                    : 'text-white hover:text-amber-300 hover:bg-white/5'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {currentPage === item.page && (
                    <ChevronDown size={20} className="text-amber-400 rotate-180" />
                  )}
                </div>
              </button>
            ))}
            <div className="px-6 py-4 border-t border-white/10 mt-2">
              <button className="w-full btn-premium text-white font-semibold py-3 px-6 rounded-lg text-center">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
