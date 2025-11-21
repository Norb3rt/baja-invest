import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Contact() {
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
              'url(https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Secure Your Legacy
            </h1>
            <p className="text-xl md:text-2xl text-gradient-gold max-w-3xl mx-auto leading-relaxed">
              Take the first step toward your oceanfront paradise. Our team is ready to make your
              dream a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="scroll-fade-in">
              <div className="glass-card-strong rounded-3xl p-10">
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8 scroll-fade-in">
              <div className="glass-card rounded-2xl p-8 glow-border">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-white font-semibold mb-1">Visit Our Sales Center</p>
                      <p className="text-gray-300">
                        Carretera Transpeninsular KM 42
                        <br />
                        Baja California, Mexico 22710
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-white font-semibold mb-1">Call Us</p>
                      <p className="text-gray-300">
                        US: +1 (619) 555-0147
                        <br />
                        MX: +52 (664) 555-0198
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-white font-semibold mb-1">Email Us</p>
                      <p className="text-gray-300">info@bajalegacy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-white font-semibold mb-1">Office Hours</p>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 7:00 PM
                        <br />
                        Saturday - Sunday: 10:00 AM - 6:00 PM
                        <br />
                        Pacific Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 glow-border">
                <h3 className="text-2xl font-bold text-white mb-4">Schedule a Private Tour</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experience the property firsthand. We offer complimentary site tours including
                  transportation from San Diego and accommodation options.
                </p>
                <button className="w-full btn-premium text-white font-bold py-4 px-6 rounded-xl">
                  Book Your VIP Tour
                </button>
              </div>

              <div className="glass-card rounded-2xl p-8 glow-border">
                <h3 className="text-2xl font-bold text-white mb-4">Virtual Consultation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Can't visit in person? Schedule a virtual tour with one of our luxury property
                  specialists via video call.
                </p>
                <button className="w-full glass-card text-white font-bold py-4 px-6 rounded-xl hover:bg-white/10 transition-colors border border-amber-400/50">
                  Schedule Video Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-amber-200">Everything you need to know about your investment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: 'Can foreigners own property in Mexico?',
                answer:
                  'Absolutely. Through a bank trust (fideicomiso), foreign nationals can own property in restricted zones. This is a secure, government-regulated process that has been used successfully for decades.',
              },
              {
                question: 'What are the financing options?',
                answer:
                  'We work with specialized lenders offering financing for international properties. Options include developer financing, U.S.-based lenders, and Mexican banks with competitive rates.',
              },
              {
                question: 'What about property taxes and HOA fees?',
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
                question: 'What about healthcare in the area?',
                answer:
                  'World-class hospitals and medical facilities are within 30 minutes. Many U.S. and Canadian expats choose Baja for both quality and affordability of healthcare.',
              },
              {
                question: 'Is the area safe for families?',
                answer:
                  'Our gated community features 24/7 armed security and has lower crime rates than most U.S. cities. Families live here peacefully with children playing freely.',
              },
              {
                question: 'What is the completion timeline?',
                answer:
                  'Homes are available for immediate occupancy, with final units completing within 6-12 months. Early reservations get priority on lot selection and custom finishes.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-colors scroll-fade-in"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Paradise Awaits
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't let this opportunity pass. While others hesitate, visionaries act. The best
              properties are already reserved. Will you be next?
            </p>
            <div className="glass-card-strong rounded-3xl p-12 glow-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <p className="text-3xl font-bold text-gradient-gold mb-2">
                    Only 35 Homes Remaining
                  </p>
                  <p className="text-lg text-gray-300">
                    12 reserved this month. Time is running out.
                  </p>
                </div>
                <button className="btn-premium text-white font-bold py-5 px-12 rounded-xl text-lg whitespace-nowrap">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm">
            <div>
              <p className="font-semibold text-white mb-2">BAJA LEGACY</p>
              <p>Oceanfront Living Redefined</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Legal</p>
              <p>All renderings are conceptual. Prices subject to change.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Connect</p>
              <p>info@bajalegacy.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2024 Baja Legacy Development. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
