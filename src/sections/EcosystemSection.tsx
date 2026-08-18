import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import ecosystemImage from '../assets/global-ecosystem.jpg';

export const EcosystemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 relative bg-bg-base overflow-hidden">
      {/* Background glow behind central ecosystem hub */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionTitle
          badgeText="Ecossistema Tem na Área"
          badgeVariant="purple"
          title="Um só sistema. Vários negócios."
          highlightText="Vários negócios."
          description="A mesma inteligência de gestão adaptada especificamente para o modelo de operação do seu estabelecimento."
          align="center"
        />

        {/* Ecosystem Illustration */}
        <div className="max-w-2xl mx-auto">
          <img
            src={ecosystemImage}
            alt="Ecossistema Tem na Área: Burger Craft, Beleza & Estilo, Farmácia, Pizzaria, Ice Cream & Açaí, Delivery e Suporte & Serviços conectados em um só sistema"
            className="w-full"
            loading="lazy"
            width={1100}
            height={1100}
          />
        </div>
      </div>
    </section>
  );
};
