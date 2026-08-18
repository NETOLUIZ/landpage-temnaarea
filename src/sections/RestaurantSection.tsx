import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { UtensilsCrossed, ChefHat, Bike, CreditCard, CheckSquare, Smartphone, ArrowRight } from 'lucide-react';
import { useSegment } from '../context/SegmentContext';

export const RestaurantSection: React.FC = () => {
  const { openSegmentModal } = useSegment();
  const steps = [
    {
      num: "01",
      title: "Garçom",
      desc: "Atendimento ágil pelo celular ou tablet na mesa.",
      icon: <Smartphone className="w-5 h-5 text-brand-yellow" />,
    },
    {
      num: "02",
      title: "Pedido",
      desc: "Envio instantâneo para produção sem deslocamento.",
      icon: <UtensilsCrossed className="w-5 h-5 text-brand-purple-light" />,
    },
    {
      num: "03",
      title: "Cozinha",
      desc: "KDS ou impressão automatizada na praça correta.",
      icon: <ChefHat className="w-5 h-5 text-brand-blue" />,
    },
    {
      num: "04",
      title: "Entrega",
      desc: "Aviso de prato pronto para a mesa ou despachante.",
      icon: <Bike className="w-5 h-5 text-pink-400" />,
    },
    {
      num: "05",
      title: "Pagamento",
      desc: "Divisão de comanda facilitada e recebimento rápido.",
      icon: <CreditCard className="w-5 h-5 text-brand-green" />,
    },
    {
      num: "06",
      title: "Fechamento",
      desc: "Baixa de insumos e relatório da noite atualizado.",
      icon: <CheckSquare className="w-5 h-5 text-brand-yellow" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-bg-secondary/40 border-y border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 w-96 h-96 bg-brand-yellow/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionTitle
          badgeText="Solução para Restaurantes"
          badgeVariant="yellow"
          title="Seu restaurante em outro nível."
          highlightText="em outro nível."
          description="Do pedido do garçom ao fechamento da conta, tudo conectado para sua equipe servir rápido e sem erros."
          align="center"
        />

        {/* Step-by-Step Order Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <GlassCard key={idx} hoverGlow="yellow" className="space-y-4 relative group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow/10 transition-colors">
                  {step.icon}
                </div>
                <span className="font-mono font-bold text-2xl text-white/20 group-hover:text-brand-yellow transition-colors">
                  {step.num}
                </span>
              </div>

              <h4 className="text-xl font-display font-bold text-white group-hover:text-brand-yellow transition-colors">
                {step.title}
              </h4>

              <p className="text-sm text-white/70 font-sans leading-relaxed">
                {step.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Call to action button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => openSegmentModal('restaurante')}
          >
            Conhecer solução para restaurantes
          </Button>
        </div>
      </div>
    </section>
  );
};
