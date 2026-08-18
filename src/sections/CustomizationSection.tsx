import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Badge } from '../components/Badge';
import { Sparkles, Store, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import personalizacaoPreview from '../assets/personalizacao.png';

export const CustomizationSection: React.FC = () => {
  const [isCustomBrand, setIsCustomBrand] = useState(true);

  return (
    <section className="py-20 sm:py-28 relative bg-bg-secondary/60 border-y border-white/10 overflow-hidden">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-magenta/15 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Personalização Exclusiva"
          badgeVariant="magenta"
          title="Seu sistema. Sua marca."
          highlightText="Sua marca."
          description="Deixe a plataforma com a identidade visual do seu estabelecimento. O cliente e sua equipe enxergam a sua marca, não um sistema genérico."
          align="center"
        />

        {/* Live Brand Preview Switcher Button */}
        <div className="flex justify-center">
          <div className="p-1.5 rounded-2xl bg-bg-base border border-white/10 inline-flex items-center gap-2">
            <button
              onClick={() => setIsCustomBrand(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all ${
                !isCustomBrand ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Visual Padrão
            </button>
            <button
              onClick={() => setIsCustomBrand(true)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 ${
                isCustomBrand ? 'bg-brand-yellow text-bg-base shadow-glow-yellow' : 'text-white/60 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Sua Marca (ex: Ribeiro Restaurante)
            </button>
          </div>
        </div>

        {/* Dynamic Interface Card Preview */}
        <GlassCard className="max-w-4xl mx-auto border-white/15 p-6 sm:p-10 space-y-6">
          {/* Header preview of custom brand vs generic */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              {isCustomBrand ? (
                <>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-white font-bold shadow-lg">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-extrabold text-white tracking-tight">
                      Ribeiro Restaurante
                    </h4>
                    <span className="text-xs font-mono text-amber-400">Sistema Próprio de Gestão</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-brand-purple flex items-center justify-center text-white font-bold">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-extrabold text-white tracking-tight">
                      Tem na Área
                    </h4>
                    <span className="text-xs font-mono text-white/50">Plataforma Padrão</span>
                  </div>
                </>
              )}
            </div>

            <Badge variant={isCustomBrand ? "yellow" : "outline"}>
              {isCustomBrand ? "MARCA PERSONALIZADA ATIVA" : "VISUAL PADRÃO DA PLATAFORMA"}
            </Badge>
          </div>

          {/* Sample Screen Interface displaying branding application */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50">Identidade no Comprovante</span>
              <p className="text-sm font-semibold text-white">Logo e dados do estabelecimento nos cupons e relatórios.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50">Menu & Cardápio Digital</span>
              <p className="text-sm font-semibold text-white">Cores e marca própria na comanda e telas do garçom.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-white/50">Sensação Profissional</span>
              <p className="text-sm font-semibold text-white">Poder de grande franquia com a agilidade do seu negócio.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white/80 font-mono">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>Disponível para customização de nome, logo, cores principais e relatórios.</span>
          </div>

          {/* Real screenshot example of white-label branding in the platform */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/50">Exemplo real na plataforma</span>
            <img
              src={personalizacaoPreview}
              alt="Painel de personalização de marca do Tem na Área mostrando o exemplo Ribeiro Restaurante"
              className="w-full rounded-xl border border-white/10 shadow-2xl"
              loading="lazy"
              width={461}
              height={211}
            />
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
