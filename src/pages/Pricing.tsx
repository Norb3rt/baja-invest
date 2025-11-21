import { useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Award, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AccordionFAQ from '../components/AccordionFAQ';
import InvestmentCalculator from '../components/InvestmentCalculator';

function Pricing() {
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

  const pricingTiers = [
    {
      title: 'The Coastal Haven',
      subtitle: '2-Bedroom Legacy Homes',
      price: '$250,000',
      features: [
        '1,650 square feet of luxury',
        '2 bedrooms, 2 bathrooms',
        'Ocean view terrace',
        'EV charging station',
        'Smart home package',
        'Premium finishes throughout',
      ],
      badge: 'Best Value',
    },
    {
      title: 'The Ocean Residence',
      subtitle: '3-Bedroom Oceanfront Estates',
      price: '$320,000',
      features: [
        '2,100 square feet of perfection',
        '3 bedrooms, 2.5 bathrooms',
        'Direct oceanfront location',
        'Rooftop deck with panoramic views',
        'Infinity pool ready',
        'Premium appliance package',
      ],
      badge: 'Most Popular',
      featured: true,
    },
    {
      title: 'The Legacy Estate',
      subtitle: 'Beachfront Masterpieces',
      price: '$425,000',
      features: [
        '2,850 square feet of opulence',
        '3 bedrooms, 3 bathrooms',
        'Private beachfront access',
        'Private pool included',
        'Wine cellar & guest suite',
        'Concierge finishing options',
      ],
      badge: 'Ultimate Luxury',
    },
  ];

  return (
    <div className="relative pt-20">
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Investment Meets Paradise
            </h1>
            <p className="text-xl md:text-2xl text-gradient-gold max-w-4xl mx-auto leading-relaxed">
              Own oceanfront luxury for less than a condo in California. Watch your investment appreciate
              while you live in paradise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`group scroll-fade-in relative transition-all duration-500 ${tier.featured
                  ? 'lg:scale-105 glass-premium rounded-3xl p-8'
                  : 'glass-card rounded-3xl p-8 hover-lift'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 scale-110">
                    <div className="badge-premium px-6 py-2 rounded-full relative">
                      <p className="text-white font-bold text-sm tracking-wide">{tier.badge}</p>
                      <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-50 transition-opacity" />
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 pt-6">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{tier.title}</h3>
                  <p className="text-amber-200 mb-6 text-sm font-medium">{tier.subtitle}</p>
                  <div className="mb-6 bg-gradient-to-r from-amber-400/10 to-rose-400/10 rounded-2xl px-8 py-6 border border-amber-400/20">
                    <p className="text-4xl sm:text-5xl font-bold text-gradient-gold mb-2 whitespace-nowrap">{tier.price}</p>
                    <p className="text-gray-400 text-xs tracking-wide">STARTING FROM USD</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform">
                      <CheckCircle className="text-amber-400 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform" size={20} />
                      <p className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-premium text-white font-bold py-4 px-6 rounded-xl shadow-glow-gold group-hover:shadow-glow-gold-lg transition-all duration-300 ease-in-out">
                  Reserve This Property
                </button>
              </div>
            ))}
          </div>

          <div className="glass-card-strong rounded-3xl p-12 text-center scroll-fade-in glow-border">
            <Clock className="text-amber-400 mx-auto mb-6" size={64} />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Limited Release – Only 47 Homes
            </h3>
            <p className="text-xl text-amber-200 mb-2">12 already reserved</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              These aren't just homes. They're the last affordable oceanfront properties in Baja
              California. Once they're gone, they're gone forever.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Investment Calculator */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Calculate Your Personal ROI
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Adjust the variables below to see how this investment could work for your specific situation
            </p>
          </div>

          <div className="scroll-fade-in">
            <InvestmentCalculator basePrice={250000} className="glow-border hover-lift" />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why This Is The Smartest Investment You'll Make
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Real estate that appreciates while you live the dream
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                value: '18.3%',
                label: 'Average Annual Appreciation',
                description: 'Baja coastal properties 2019-2024',
              },
              {
                icon: DollarSign,
                value: '60%',
                label: 'Lower Cost of Living',
                description: 'Compared to California coastal cities',
              },
              {
                icon: Award,
                value: '3-5 years',
                label: 'Expected ROI Timeline',
                description: 'Based on current market trends',
              },
              {
                icon: TrendingUp,
                value: '$150K+',
                label: 'Projected 5-Year Gain',
                description: 'Conservative appreciation estimate',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 scroll-fade-in glow-border"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="text-amber-400 mx-auto mb-4" size={48} />
                <p className="text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                The Numbers Don't Lie
              </h2>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Comparable U.S. Coastal Properties
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">San Diego, CA (2BR Condo)</span>
                    <span className="text-amber-400 font-bold text-xl">$650K+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Santa Barbara, CA (2BR)</span>
                    <span className="text-amber-400 font-bold text-xl">$800K+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Malibu, CA (2BR)</span>
                    <span className="text-amber-400 font-bold text-xl">$1.2M+</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-white font-bold text-lg">Baja Legacy (2BR)</span>
                    <span className="text-gradient-gold font-bold text-3xl">$250K</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  5-Year Conservative Projection
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Purchase Price:</span>
                    <span className="text-white font-semibold">$250,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projected Value (2029):</span>
                    <span className="text-amber-400 font-semibold">$400,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Appreciation:</span>
                    <span className="text-green-400 font-semibold">+$150,000</span>
                  </div>
                  <div className="flex justify-between text-lg pt-4 border-t border-white/10">
                    <span className="text-white font-bold">Total ROI:</span>
                    <span className="text-gradient-gold font-bold">60%+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-fade-in">
              <div className="glass-card rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">
                  Secure Your Financial Future Today
                </h3>
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed text-center mb-4">
                    Lock in these prices before the next release. Early adopters are already seeing
                    significant appreciation.
                  </p>
                  <p className="text-amber-400 font-semibold text-center text-lg">
                    Properties in Phase 1 have already appreciated 12% since launch.
                  </p>
                </div>
                <ContactForm variant="inline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment Questions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about purchasing your oceanfront legacy
            </p>
          </div>

          <div className="scroll-fade-in">
            <AccordionFAQ
              items={[
                {
                  question: 'Can foreigners own property in Mexico?',
                  answer:
                    'Absolutely. Through a bank trust (fideicomiso), foreign nationals can own property in restricted zones. This is a secure, government-regulated process that has been used successfully for decades.',
                },
                {
                  question: 'What financing options are available?',
                  answer:
                    'We work with specialized lenders offering financing for international properties. Options include developer financing, U.S.-based lenders, and Mexican banks with competitive rates. Most qualify for 70-80% financing.',
                },
                {
                  question: 'What are the total costs (taxes, HOA, etc)?',
                  answer:
                    'Property taxes in Baja are significantly lower than U.S. rates, typically 0.1-0.2% of property value annually. HOA fees cover security, maintenance, and amenities starting at $150/month.',
                },
                {
                  question: 'Is this a good rental investment?',
                  answer:
                    'Many owners successfully rent their properties as vacation homes, generating 8-12% annual returns. Our property management service can handle everything for you.',
                },
                {
                  question: 'How long does the purchase process take?',
                  answer:
                    'From contract to closing typically takes 60-90 days. Our team guides you through every step, handling all legal requirements and paperwork efficiently.',
                },
                {
                  question: 'What about resale value and appreciation?',
                  answer:
                    'Baja coastal properties have appreciated at 18.3% annually (2019-2024). Early phase properties are already up 12%. Current market demand is extremely strong.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-strong rounded-3xl p-12 text-center scroll-fade-in group">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-amber-400 transition-colors">
              Ready to Secure Your Legacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Work with our preferred lenders who specialize in international properties. Flexible terms.
              Competitive rates. Make your oceanfront paradise affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium text-white font-bold py-4 px-10 rounded-xl text-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-shadow">
                Explore Financing Options
              </button>
              <button className="btn-secondary text-white font-bold py-4 px-10 rounded-xl text-lg">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
