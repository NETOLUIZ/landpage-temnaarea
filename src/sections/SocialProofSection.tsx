import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Badge } from '../components/Badge';
import { TESTIMONIALS } from '../data/testimonials';
import { UtensilsCrossed, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-bg-secondary/60 border-y border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-yellow/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <SectionTitle
          badgeText="Estudo de Caso"
          badgeVariant="yellow"
          title="Casos Reais: Ribeiro Restaurante"
          highlightText="Ribeiro Restaurante"
          description="Veja como a padronização e o controle automatizado transformaram a rotina de atendimento no balcão e na cozinha."
          align="center"
        />

        {/* Structured Case Study Card: Ribeiro Restaurante */}
        <GlassCard hoverGlow="yellow" className="max-w-4xl mx-auto border-brand-yellow/30 p-8 sm:p-12 space-y-8">
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Ribeiro Restaurante</h3>
                <span className="text-xs font-mono text-white/60">Gastronomia & Atendimento Presencial</span>
              </div>
            </div>
            <Badge variant="yellow">CLIENTE PARCEIRO KORENTECH</Badge>
          </div>

          {/* Problema -> Implementação -> Resultado Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problema */}
            <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" /> Desafio Inicial
              </div>
              <h4 className="text-base font-bold text-white">Fila no Balcão & Pedidos Perdidos</h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Lançamento manual em papel gerava atrasos na cozinha nos horários de pico e divergências no fechamento do caixa.
              </p>
            </div>

            {/* Implementação */}
            <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-brand-blue font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" /> Solução Tem na Área
              </div>
              <h4 className="text-base font-bold text-white">Garçom Digital & Tela de Cozinha</h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Implantação de comanda digital pelo celular para os garçons e centralização de pedidos direto na produção.
              </p>
            </div>

            {/* Resultado */}
            <div className="space-y-3 p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30">
              <div className="flex items-center gap-2 text-brand-yellow font-mono text-xs font-bold uppercase">
                <TrendingUp className="w-4 h-4" /> Resultado Prático
              </div>
              <h4 className="text-base font-bold text-white">Agilidade & Caixa 100% Preciso</h4>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Redução drástica do tempo de espera dos pratos e controle financeiro transparente sem erros ao fechar a noite.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Depoimentos reais placeholder */}
        {TESTIMONIALS.length > 0 && (
          <div className="max-w-4xl mx-auto pt-6 text-center space-y-4">
            <p className="text-xs font-mono text-white/50 uppercase tracking-widest">
              Depoimentos Verificados
            </p>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-white/60">
              [ {TESTIMONIALS[0].quote} — {TESTIMONIALS[0].client} ({TESTIMONIALS[0].segment}) ]
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
