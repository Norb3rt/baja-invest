import { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Wifi, Zap, Globe, Waves, Home as HomeIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import TestimonialCarousel from '../components/TestimonialCarousel';
import heroVideo from '../assets/videos/hero-video.mp4';

type Page = 'home' | 'homes' | 'security' | 'pricing' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function Home({ onNavigate }: HomeProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleLearnMore = () => {
    onNavigate('homes');
  };

  return (
    <div className="relative">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-950" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="floating">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Escape Forever
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl text-gradient-gold mb-8 font-light tracking-wide">
              Baja California's Most Exclusive Oceanfront Sanctuary
            </p>
          </div>

          <div className="glass-card-strong rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-amber-100 font-medium tracking-wide leading-relaxed">
              Gated • Armed Security • EV-Ready • Fiber Internet • Zero Chaos • Built for Legends
            </p>
          </div>

          <button
            onClick={handleLearnMore}
            className="btn-premium text-white font-bold py-4 px-12 rounded-full text-lg tracking-wide"
          >
            Begin Your Legacy
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-400" size={40} />
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Baja Now
            </h2>
            <p className="text-xl md:text-2xl text-amber-200 max-w-4xl mx-auto leading-relaxed">
              While others live in fear, you'll live in paradise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safer Than 99% of U.S. Cities',
                description:
                  'Armed 24/7 gated security, private surveillance, and a community that protects its own',
              },
              {
                icon: Wifi,
                title: 'Fiber Internet Infrastructure',
                description:
                  'Work remotely from paradise with 1Gbps fiber. No compromises. No excuses.',
              },
              {
                icon: Zap,
                title: 'EV-Ready Every Home',
                description:
                  'Tesla chargers pre-installed. Drive the future while living in coastal luxury.',
              },
              {
                icon: Globe,
                title: 'International Freedom',
                description:
                  'Easy residency pathways, growing expat community, and world-class healthcare nearby',
              },
              {
                icon: Waves,
                title: 'Your Private Beach',
                description:
                  'Wake up to waves crashing. End your day with sunset cocktails. This is your life now.',
              },
              {
                icon: HomeIcon,
                title: 'Investment That Appreciates',
                description:
                  'Baja real estate has outpaced most U.S. markets. Own paradise that grows in value.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 glow-border scroll-fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <feature.icon className="text-amber-400 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What Our Owners Say
            </h2>
            <p className="text-xl text-amber-200">
              Real stories from those who made the leap
            </p>
          </div>

          <div className="scroll-fade-in">
            <TestimonialCarousel
              testimonials={[
                {
                  name: 'Michael Chen',
                  role: 'Tech Entrepreneur, San Francisco',
                  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                  quote: 'Sold everything in California – best decision of my life. The passive income from vacation rentals alone covers 40% of my mortgage.',
                },
                {
                  name: 'Sarah Martinez',
                  role: 'Remote Designer, Austin',
                  image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
                  quote: 'My cost of living dropped 60%. My quality of life doubled. Working from the ocean is literally a dream come true.',
                },
                {
                  name: 'David Thompson',
                  role: 'Retired Executive, Seattle',
                  image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
                  quote: 'I wake up to the ocean. Every. Single. Day. Paradise is real, and it\'s more affordable than I ever imagined.',
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Investment Banker, NYC',
                  image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
                  quote: 'Best ROI of my career. And I live at the beach. The appreciation in this area has been phenomenal.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Limited Release
            </h2>
            <p className="text-xl text-amber-200">
              Only 47 homes available. 12 already reserved.
            </p>
          </div>

          <div className="scroll-fade-in">
            <ContactForm variant="inline" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
