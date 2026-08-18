import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItemData } from '../data/faq';
import { cn } from '../lib/utils';

export interface FAQItemProps {
  faq: FAQItemData;
  id: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className="rounded-2xl bg-bg-secondary/80 border border-white/10 overflow-hidden transition-all duration-300">
      <button
        type="button"
        id={`faq-header-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white hover:text-brand-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base transition-colors"
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-brand-yellow shrink-0 transition-transform duration-300',
            isOpen && 'transform rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <div
          id={`faq-content-${id}`}
          role="region"
          aria-labelledby={`faq-header-${id}`}
          className="px-6 pb-6 pt-1 text-sm text-white/80 font-sans leading-relaxed border-t border-white/5 animate-fadeIn"
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
};
