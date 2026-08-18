import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Layers, MessageSquare, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const pillars = [
    {
      title: "Fácil de Aprender",
      desc: "Interface direta e intuitiva sem necessidade de manuais extensos ou treinamentos complexos.",
      icon: <Sparkles className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: "Tudo Organizado",
      desc: "Vendas, estoque e caixa integrados no mesmo lugar sem duplicar trabalho.",
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Suporte quando precisar",
      desc: "Atendimento direto via WhatsApp para você tirar dúvidas operacionais a qualquer momento.",
      icon: <MessageSquare className="w-6 h-6 text-brand-green" />,
    },
  ];

  const steps = [
    { num: "01", title: "Escolha seu negócio", desc: "Selecione o seu segmento (Restaurante, Mercantil, Barbearia, Loja, Salão ou Delivery)." },
    { num: "02", title: "Configure sua plataforma", desc: "Defina o nome do seu estabelecimento, taxas e formas de pagamento aceitas." },
    { num: "03", title: "Cadastre produtos e equipe", desc: "Adicione seus itens, categorias e libere o acesso para seus funcionários." },
    { num: "04", title: "Comece a trabalhar", desc: "Abra o caixa e faça suas vendas no computador, tablet ou celular." },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/15 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Pillar Section: Não precisa entender de tecnologia */}
        <div className="space-y-12">
          <SectionTitle
            badgeText="Simplicidade em Primeiro Lugar"
            badgeVariant="purple"
            title="Não precisa entender de tecnologia."
            highlightText="entender de tecnologia."
            description="O Tem na Área foi construído para quem vive a correria do balcão e não tem tempo a perder com sistemas confusos."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item, idx) => (
              <GlassCard key={idx} hoverGlow="yellow" className="space-y-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Timeline Section: Como funciona */}
        <div className="space-y-12 pt-8 border-t border-white/10">
          <SectionTitle
            badgeText="Passo a Passo"
            badgeVariant="yellow"
            title="Como funciona a implantação"
            highlightText="implantação"
            description="Quatro passos simples para colocar seu negócio em outro nível ainda hoje."
            align="center"
          />

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <GlassCard key={idx} hoverGlow="purple" className="space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-brand-yellow">
                    {step.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-brand-green/60 group-hover:text-brand-green transition-colors" />
                </div>
                <h4 className="text-lg font-display font-bold text-white group-hover:text-brand-yellow transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
