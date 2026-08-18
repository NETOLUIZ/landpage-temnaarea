import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { ShoppingCart, Barcode, PackageCheck, Zap, Wallet, BarChart2, ArrowRight } from 'lucide-react';
import { useSegment } from '../context/SegmentContext';

export const MercantilSection: React.FC = () => {
  const { openSegmentModal } = useSegment();
  const mercantilFeatures = [
    {
      title: "Leitor de Código de Barras",
      desc: "Bipou, vendeu. Compatível com os principais leitores de mercado para agilizar a fila.",
      icon: <Barcode className="w-6 h-6 text-brand-green" />,
    },
    {
      title: "Controle de Estoque e Grade",
      desc: "Cadastro rápido de itens por categoria, marca, código e alerta de validade/estoque mínimo.",
      icon: <PackageCheck className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Frente de Caixa Express",
      desc: "Operação leve e rápida que não trava mesmo nos horários de maior pico no balcão.",
      icon: <Zap className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Fechamento de Caixa Certo",
      desc: "Acompanhe sangrias, reforços e entradas por forma de pagamento sem divergência.",
      icon: <Wallet className="w-6 h-6 text-purple-300" />,
    },
    {
      title: "Categorização de Produtos",
      desc: "Organização clara por setores (bebidas, mercearia, limpeza, hortifrúti).",
      icon: <ShoppingCart className="w-6 h-6 text-pink-400" />,
    },
    {
      title: "Relatórios de Giro",
      desc: "Descubra os itens mais vendidos e o que está encalhado na prateleira.",
      icon: <BarChart2 className="w-6 h-6 text-brand-green" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-96 h-96 bg-brand-green/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionTitle
          badgeText="Solução para Mercantis"
          badgeVariant="green"
          title="Mais controle para o seu mercantil."
          highlightText="para o seu mercantil."
          description="Controle de estoque agilizado, leitor de código de barras e frente de caixa sem fila para o seu negócio."
          align="center"
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mercantilFeatures.map((item, idx) => (
            <GlassCard key={idx} hoverGlow="blue" className="space-y-4 group">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:bg-brand-blue/10 transition-colors">
                {item.icon}
              </div>

              <h4 className="text-xl font-display font-bold text-white group-hover:text-brand-green transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-white/70 font-sans leading-relaxed">
                {item.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Call to action button */}
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => openSegmentModal('mercantil')}
          >
            Conhecer solução para mercantis
          </Button>
        </div>
      </div>
    </section>
  );
};
