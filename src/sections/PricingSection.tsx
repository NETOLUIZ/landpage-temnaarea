import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PricingCard } from '../components/PricingCard';
import { PLANS } from '../data/pricing';
import { useCheckout } from '../context/CheckoutContext';

export const PricingSection: React.FC = () => {
  const { openCheckout } = useCheckout();

  return (
    <section id="precos" className="py-20 sm:py-28 relative bg-bg-secondary/40 border-y border-white/10 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-yellow/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Planos Transparentes"
          badgeVariant="yellow"
          title="Escolha o plano ideal para o momento do seu negócio."
          highlightText="plano ideal"
          description="Sem pegadinhas, sem taxas escondidas. Cancele quando quiser com suporte total da nossa equipe."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-4">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelectPlan={(p) => openCheckout(p)}
            />
          ))}
        </div>

        <p className="text-center text-xs font-mono text-white/50 pt-4">
          Valores mensais sem fidelidade compulsória. Precisa de mais de 5 unidades? Fale com a gente.
        </p>
      </div>
    </section>
  );
};
