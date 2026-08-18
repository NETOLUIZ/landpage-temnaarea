import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { FeatureCard } from '../components/FeatureCard';
import { FEATURES } from '../data/features';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="recursos" className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      {/* Background glowing spots */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-brand-blue/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-brand-purple/15 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Recursos da Plataforma"
          badgeVariant="blue"
          title="Tudo o que seu estabelecimento precisa para operar sem trava."
          highlightText="operar sem trava."
          description="Desenvolvido focando no que realmente importa: vender mais rápido, não perder dinheiro e ter controle absoluto do seu negócio."
          align="center"
        />

        {/* 9 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
