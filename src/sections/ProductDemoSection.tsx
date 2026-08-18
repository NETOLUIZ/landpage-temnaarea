import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Badge } from '../components/Badge';
import {
  LayoutDashboard,
  Zap,
  ShoppingBag,
  Package,
  Wallet,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { cn } from '../lib/utils';
import dashboardScreenshot from '../assets/dasbord.png';
import vendasScreenshot from '../assets/vendas.png';
import pedidosScreenshot from '../assets/pedidos.png';
import produtosScreenshot from '../assets/produtos.png';
import caixaScreenshot from '../assets/caixa.png';
import relatorioScreenshot from '../assets/relatorio.png';

type DemoTab = 'dashboard' | 'vendas' | 'pedidos' | 'estoque' | 'caixa' | 'relatorios';

export const ProductDemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DemoTab>('dashboard');

  const tabs: { id: DemoTab; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'vendas', label: 'Vendas', icon: <Zap className="w-4 h-4" /> },
    { id: 'pedidos', label: 'Pedidos', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'estoque', label: 'Estoque', icon: <Package className="w-4 h-4" /> },
    { id: 'caixa', label: 'Caixa', icon: <Wallet className="w-4 h-4" /> },
    { id: 'relatorios', label: 'Relatórios', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <section id="demo" className="py-20 sm:py-28 relative bg-bg-secondary/70 border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-purple/15 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Demonstração Interativa"
          badgeVariant="yellow"
          title="Não precisa imaginar. Veja funcionando."
          highlightText="Veja funcionando."
          description="Alterne entre as abas abaixo para conferir as telas reais da plataforma Tem na Área sem precisar instalar nada."
          align="center"
        />

        {/* Tab Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-bg-base/80 border border-white/10 max-w-4xl mx-auto backdrop-blur-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm transition-all duration-300',
                activeTab === tab.id
                  ? 'bg-brand-yellow text-bg-base shadow-glow-yellow'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Demo Window Display Frame */}
        <div className="rounded-2xl sm:rounded-3xl bg-bg-base border border-white/15 shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-white/50 hidden sm:inline-block">
                app.temnaarea.com.br/{activeTab}
              </span>
            </div>

            <Badge variant="yellow" icon={<Sparkles className="w-3 h-3 text-brand-yellow" />} className="text-[10px]">
              TELA DEMONSTRATIVA
            </Badge>
          </div>

          {/* Dynamic Tab View Content */}
          <div className="p-4 sm:p-6">
            {/* Área de imagem com altura fixa para todas as abas */}
            <div className="relative h-[360px] sm:h-[480px] lg:h-[560px] w-full rounded-xl overflow-hidden border border-white/10 bg-bg-base">
              {/* TAB 1: DASHBOARD */}
              {activeTab === 'dashboard' && (
                <img
                  src={dashboardScreenshot}
                  alt="Tela real do painel principal do sistema Tem na Área"
                  className="w-full h-full object-cover object-top animate-fadeIn"
                  loading="lazy"
                />
              )}

              {/* TAB 2: VENDAS */}
              {activeTab === 'vendas' && (
                <img
                  src={vendasScreenshot}
                  alt="Tela real de vendas e frente de caixa do sistema Tem na Área"
                  className="w-full h-full object-cover object-top animate-fadeIn"
                  loading="lazy"
                />
              )}

              {/* TAB 3: PEDIDOS */}
              {activeTab === 'pedidos' && (
                <img
                  src={pedidosScreenshot}
                  alt="Tela real de gestão de pedidos do sistema Tem na Área"
                  className="w-full h-full object-cover object-top animate-fadeIn"
                  loading="lazy"
                />
              )}

              {/* TAB 4: ESTOQUE */}
              {activeTab === 'estoque' && (
                <img
                  src={produtosScreenshot}
                  alt="Tela real de gestão de produtos e estoque do sistema Tem na Área"
                  className="w-full h-full object-cover object-top animate-fadeIn"
                  loading="lazy"
                />
              )}

              {/* TAB 5: CAIXA */}
              {activeTab === 'caixa' && (
                <img
                  src={caixaScreenshot}
                  alt="Tela real de controle de caixa do sistema Tem na Área"
                  className="w-full h-full object-cover object-top animate-fadeIn"
                  loading="lazy"
                />
              )}

              {/* TAB 6: RELATÓRIOS */}
              {activeTab === 'relatorios' && (
                <img
                  src={relatorioScreenshot}
                  alt="Tela real de relatórios e desempenho do sistema Tem na Área"
                  className="w-full h-full object-cover object-top animate-fadeIn"
                  loading="lazy"
                />
              )}
            </div>{/* fim do container fixo */}

            {/* Bottom Footer Info Bar */}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-white/50 font-mono gap-2">
              <span>Módulo: {activeTab.toUpperCase()}</span>
              <span>Visualização 100% responsiva para celular, tablet e computador</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
