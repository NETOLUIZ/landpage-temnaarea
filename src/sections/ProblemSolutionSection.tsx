import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  const problemPoints = [
    "Pedido perdido em conversas soltas no WhatsApp",
    "Anotações em papéis e cadernos que somem no balcão",
    "Estoque desatualizado e falta de insumo na hora da venda",
    "Caixa difícil de fechar com diferença no fim do dia",
    "Informações de vendas e dinheiro espalhadas em vários lugares",
  ];

  const solutionPoints = [
    "Pedidos centralizados e acompanhados em tela única em tempo real",
    "Sistema prático no computador, tablet ou celular sem cadernos",
    "Baixa automática de estoque e alertas de reposição antes do fim",
    "Fechamento de caixa transparente, rápido e sem dor de cabeça",
    "Vendas, estoque e caixa integrados em uma plataforma simples",
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-bg-secondary/40 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionTitle
          badgeText="Antes × Depois"
          badgeVariant="magenta"
          title="Chega de administrar seu negócio no improviso."
          highlightText="no improviso."
          description="Compare a rotina de quem depende de cadernos e WhatsApp com quem usa um sistema feito de verdade para a correria do dia a dia."
          align="center"
        />

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left Column: ❌ Improviso */}
          <GlassCard padded={false} className="border-red-500/20 bg-red-950/10 flex flex-col p-7 sm:p-9">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-red-500/20">
              <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  No Improviso <span className="text-red-400 font-mono text-sm">❌</span>
                </h3>
                <p className="text-xs text-white/60">Como a maioria tenta tocar o negócio</p>
              </div>
            </div>

            {/* List — flex-1 empurra o resultado para baixo */}
            <ul className="flex-1 space-y-0">
              {problemPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5 text-sm text-white/80 leading-relaxed min-h-[52px] py-1.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 text-center">
              Resultado: Estresse, prejuízo invisível e tempo perdido.
            </div>
          </GlassCard>

          {/* Right Column: ✓ Com Tem na Área */}
          <GlassCard
            padded={false}
            hoverGlow="yellow"
            className="border-brand-yellow/30 bg-brand-yellow/5 flex flex-col shadow-glow-yellow/10 p-7 sm:p-9"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-brand-yellow/20">
              <div className="p-2.5 rounded-xl bg-brand-yellow/20 text-brand-yellow">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  Com Tem na Área <span className="text-brand-green font-mono text-sm">✓</span>
                </h3>
                <p className="text-xs text-white/60">O jeito certo e organizado de crescer</p>
              </div>
            </div>

            {/* List */}
            <ul className="flex-1 space-y-0">
              {solutionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5 text-sm text-white font-medium leading-relaxed min-h-[52px] py-1.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 text-xs font-mono text-brand-yellow text-center font-semibold">
              Resultado: Negócio sob controle e vendas mais rápidas.
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
