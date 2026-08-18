import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { FAQItem } from '../components/FAQItem';
import { FAQ_ITEMS } from '../data/faq';

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/15 blur-[150px] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Perguntas Frequentes"
          badgeVariant="yellow"
          title="Tire suas dúvidas antes de começar."
          highlightText="suas dúvidas"
          description="Tudo o que você precisa saber sobre o Tem na Área, suas funcionalidades e como ele se adapta ao seu negócio."
          align="center"
        />

        {/* FAQ Accordion Grid */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <FAQItem key={idx} id={String(idx)} faq={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
