import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
}

function AccordionFAQ({ items }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-item group hover:scale-102 transition-transform duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between"
          >
            <h3 className="text-lg md:text-xl font-semibold text-white text-left group-hover:text-amber-400 transition-colors duration-300">
              {item.question}
            </h3>
            <ChevronDown
              size={24}
              className={`text-amber-400 flex-shrink-0 transition-transform duration-350 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`accordion-content overflow-hidden transition-all duration-350 ease-in-out ${
              openIndex === index ? 'active' : ''
            }`}
          >
            <div className="pt-4 mt-4 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed text-lg">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionFAQ;
