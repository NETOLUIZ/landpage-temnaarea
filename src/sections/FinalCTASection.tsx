import React from 'react';
import { CTA } from '../components/CTA';
import { useCheckout } from '../context/CheckoutContext';

export const FinalCTASection: React.FC = () => {
  const { openCheckout } = useCheckout();
  return (
    <section className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <CTA
          title="Pronto para deixar seu negócio mais organizado?"
          subtitle="Tenha as ferramentas que você precisa para vender, controlar e acompanhar seu negócio em um só lugar."
          primaryButtonText="Começar agora"
          onPrimaryClick={openCheckout}
          secondaryButtonText="Conhecer a plataforma"
          secondaryButtonHref="#demo"
        />
      </div>
    </section>
  );
};
