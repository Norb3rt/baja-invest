import { useEffect, useRef } from 'react';
import { Bed, Bath, Maximize, Car, Wifi, Sun } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Homes() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade-in').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const homes = [
    {
      title: 'The Coastal Haven',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1650,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: '$250,000',
      features: ['Ocean View', 'EV Charging', 'Smart Home', 'Private Terrace'],
    },
    {
      title: 'The Ocean Residence',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: '$320,000',
      features: ['Oceanfront', 'Infinity Pool Ready', 'Rooftop Deck', 'Premium Finishes'],
    },
    {
      title: 'The Legacy Estate',
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2850,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: '$425,000',
      features: ['Beachfront', 'Private Pool', 'Wine Cellar', 'Guest Suite'],
    },
  ];

  return (
    <div className="relative pt-20">
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Modern Masterpieces
            </h1>
            <p className="text-xl md:text-2xl text-gradient-gold max-w-3xl mx-auto leading-relaxed">
              Glass walls. Infinity edges. Architectural poetry overlooking the Pacific.
            </p>
          </div>

          <div className="space-y-32">
            {homes.map((home, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 scroll-fade-in`}
              >
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-3xl mirror-reflection">
                    <img
                      src={home.image}
                      alt={home.title}
                      className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute top-8 right-8 glass-card px-6 py-3 rounded-full">
                    <p className="text-2xl font-bold text-gradient-gold">{home.price}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="glass-card rounded-3xl p-10 glow-border">
                    <h3 className="text-4xl font-bold text-white mb-4">{home.title}</h3>

                    <div className="flex items-center space-x-8 mb-8 text-amber-200">
                      <div className="flex items-center space-x-2">
                        <Bed size={24} />
                        <span className="text-lg font-medium">{home.bedrooms} Bed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bath size={24} />
                        <span className="text-lg font-medium">{home.bathrooms} Bath</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Maximize size={24} />
                        <span className="text-lg font-medium">{home.sqft} sqft</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {home.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 text-white glass-card px-4 py-3 rounded-lg hover:border-amber-400/50 hover:bg-amber-400/5 transition-all group scroll-fade-in"
                          style={{ transitionDelay: `${(index * 300) + (idx * 50)}ms` }}
                        >
                          <Sun className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                          <span className="text-sm group-hover:text-amber-200 transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Car className="text-amber-400" size={24} />
                        <span>Tesla EV Charger Included</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Wifi className="text-amber-400" size={24} />
                        <span>1Gbps Fiber Internet Ready</span>
                      </div>
                    </div>

                    <button className="w-full mt-8 btn-premium text-white font-bold py-4 px-8 rounded-xl text-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-shadow group">
                      <span className="flex items-center justify-center space-x-2">
                        <span>Schedule Private Viewing</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Every Detail Perfected
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Floor-to-ceiling glass walls that dissolve the boundary between interior luxury and
                  oceanfront paradise.
                </p>
                <p>
                  Italian porcelain, German fixtures, smart home automation that responds to your every
                  need.
                </p>
                <p>
                  Private terraces designed for sunset cocktails. Master suites with views that make
                  waking up feel like a dream.
                </p>
                <p className="text-amber-400 font-semibold text-xl">
                  This isn't just a home. This is your transformation.
                </p>
              </div>
            </div>

            <div className="scroll-fade-in">
              <ContactForm variant="inline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homes;
