import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden rounded-3xl">
        <div className="relative h-[400px] md:h-[500px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="glass-card-strong h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl text-white italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-amber-400 font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-48 h-48 rounded-2xl object-cover border-4 border-amber-400/30 shadow-premium-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-400/30 text-amber-400 hover:bg-amber-400/30 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-amber-400 to-rose-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-400/30 text-amber-400 hover:bg-amber-400/30 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="text-center mt-6 text-sm text-gray-400">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
