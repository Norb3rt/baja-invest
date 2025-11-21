import { useEffect, useRef } from 'react';
import { Shield, Camera, Lock, Users, Heart, Palmtree } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Security() {
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

  return (
    <div className="relative pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-fade-in mb-12">
            <Shield className="text-amber-400 mx-auto mb-8 floating" size={80} />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Your Family Deserves This Peace
            </h1>
            <p className="text-xl md:text-2xl text-gradient-gold max-w-4xl mx-auto leading-relaxed">
              Safer than 99% of U.S. cities. Armed 24/7 security. Private surveillance. Zero compromise.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Military-Grade Protection
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Sleep soundly knowing your sanctuary is protected by world-class security systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Armed Gated Entrance',
                description:
                  'Professional security personnel screening every entry 24/7. Your community stays your community.',
              },
              {
                icon: Camera,
                title: 'Perimeter Surveillance',
                description:
                  'HD cameras with night vision covering every angle. AI-powered threat detection. Real-time monitoring.',
              },
              {
                icon: Lock,
                title: 'Smart Access Control',
                description:
                  'Biometric gates, encrypted access codes, and mobile app control. You decide who enters.',
              },
              {
                icon: Users,
                title: 'Private Patrol Teams',
                description:
                  'Regular perimeter patrols by trained security professionals. Visible deterrence that works.',
              },
              {
                icon: Shield,
                title: 'Emergency Response',
                description:
                  'Direct line to local authorities and private security. Average response time under 3 minutes.',
              },
              {
                icon: Camera,
                title: 'Community Watch',
                description:
                  'Neighbors who care. A tight-knit community that looks out for each other.',
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Lifestyle You've Been Dreaming Of
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Work from paradise. Play on private beaches. Live the life others only imagine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 scroll-fade-in">
              <div className="glass-card rounded-2xl p-8 glow-border">
                <Heart className="text-amber-400 mb-4" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4">Remote Work Paradise</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Your home office overlooks the Pacific. 1Gbps fiber internet keeps you connected to
                  the world. Video calls with sunset backgrounds.
                </p>
                <p className="text-amber-400 font-semibold">
                  Your colleagues will be jealous. Your productivity will skyrocket.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 glow-border">
                <Palmtree className="text-amber-400 mb-4" size={48} />
                <h3 className="text-3xl font-bold text-white mb-4">Private Beach Access</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Morning surf sessions. Sunset yoga. Beach bonfires with neighbors who became friends.
                  Your private stretch of coastline.
                </p>
                <p className="text-amber-400 font-semibold">This is your backyard now.</p>
              </div>
            </div>

            <div className="space-y-8 scroll-fade-in">
              <div className="relative h-[400px] rounded-2xl overflow-hidden mirror-reflection group">
                <img
                  src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  loading="lazy"
                  alt="Home office with ocean view"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-2xl font-bold">Your New Office View</p>
                </div>
              </div>

              <div className="relative h-[300px] rounded-2xl overflow-hidden mirror-reflection group">
                <img
                  src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  loading="lazy"
                  alt="Family on beach at sunset"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-2xl font-bold">Every Evening Feels Like Vacation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                A Community of Winners
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Your neighbors are entrepreneurs, remote executives, successful retirees, and digital
                  nomads who chose freedom.
                </p>
                <p>
                  Monthly community dinners. Impromptu beach parties. Business collaborations that
                  happen organically.
                </p>
                <p>
                  Kids playing safely. Dogs running free on the beach. Real human connections in a world
                  that forgot how.
                </p>
                <p className="text-amber-400 font-semibold text-xl">
                  This is the life you were supposed to live.
                </p>
              </div>
            </div>

            <div className="scroll-fade-in">
              <div className="relative h-[500px] rounded-2xl overflow-hidden mirror-reflection">
                <img
                  src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Happy community gathering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-amber-200">
              Join the community that chose paradise over chaos
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

export default Security;
