import React from 'react';
import {
  TrendingUp,
  ShoppingBag,
  Package,
  Users,
  DollarSign,
  BarChart2,
  CheckCircle,
  Clock,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Badge } from './Badge';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-bg-secondary border border-white/15 shadow-2xl overflow-hidden backdrop-blur-2xl">
      {/* Top Header Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 text-xs font-mono text-white/50 hidden sm:inline-block">app.temnaarea.com.br/dashboard</span>
        </div>

        {/* REQUIRED: Prominent Disclaimer Label */}
        <Badge variant="yellow" icon={<Sparkles className="w-3 h-3 text-brand-yellow" />} className="text-[10px] sm:text-xs">
          DADOS DEMONSTRATIVOS
        </Badge>
      </div>

      {/* Main SaaS Interface Content */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Top Summary Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
              Visão Geral do Negócio
            </h3>
            <p className="text-xs text-white/60 font-sans">
              Acompanhamento de vendas e operação em tempo real
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              Caixa Aberto
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Vendas hoje */}
          <div className="col-span-2 sm:col-span-1 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 hover:border-brand-yellow/40 transition-colors">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-mono uppercase">Vendas Hoje</span>
              <DollarSign className="w-4 h-4 text-brand-yellow" />
            </div>
            <p className="text-xl sm:text-2xl font-display font-extrabold text-white">R$ 3.840,00</p>
            <span className="text-[11px] font-mono text-brand-green inline-flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18,4% vs ontem
            </span>
          </div>

          {/* Pedidos */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 hover:border-brand-purple/40 transition-colors">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-mono uppercase">Pedidos</span>
              <ShoppingBag className="w-4 h-4 text-brand-purple-light" />
            </div>
            <p className="text-xl sm:text-2xl font-display font-extrabold text-white">18</p>
            <span className="text-[11px] font-mono text-white/50">Hoje</span>
          </div>

          {/* Produtos */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 hover:border-brand-blue/40 transition-colors">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-mono uppercase">Produtos</span>
              <Package className="w-4 h-4 text-brand-blue" />
            </div>
            <p className="text-xl sm:text-2xl font-display font-extrabold text-white">248</p>
            <span className="text-[11px] font-mono text-brand-green">Estoque OK</span>
          </div>

          {/* Clientes */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 hover:border-brand-magenta/40 transition-colors">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-mono uppercase">Clientes</span>
              <Users className="w-4 h-4 text-pink-400" />
            </div>
            <p className="text-xl sm:text-2xl font-display font-extrabold text-white">126</p>
            <span className="text-[11px] font-mono text-white/50">Base ativa</span>
          </div>

          {/* Crescimento */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 space-y-1">
            <div className="flex items-center justify-between text-brand-yellow">
              <span className="text-xs font-mono uppercase">Crescimento</span>
              <BarChart2 className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-display font-extrabold text-brand-yellow">+18,4%</p>
            <span className="text-[11px] font-mono text-white/70">Performance do mês</span>
          </div>
        </div>

        {/* Visual Graphic & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Chart preview */}
          <div className="lg:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-white/80 font-bold uppercase">Fluxo de Vendas (Hoje)</span>
              <span className="text-xs text-brand-yellow font-mono font-semibold">Pico: 12h - 14h</span>
            </div>

            {/* Bar Chart Visualization */}
            <div className="h-32 sm:h-36 flex items-end justify-between gap-1.5 pt-4">
              {[35, 45, 60, 90, 100, 75, 85, 95, 65, 40, 50, 80].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t bg-gradient-to-t from-brand-purple to-brand-yellow group-hover:from-brand-magenta group-hover:to-brand-yellow transition-all duration-300"
                  />
                  <span className="text-[9px] font-mono text-white/40">{8 + i}h</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders List */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-white/80 font-bold uppercase">Últimos Pedidos</span>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-green" />
                  <span className="font-mono text-white font-medium">#1084</span>
                </div>
                <span className="font-bold text-brand-yellow">R$ 120,00</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-blue" />
                  <span className="font-mono text-white font-medium">#1083</span>
                </div>
                <span className="font-bold text-white/90">R$ 89,90</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-green" />
                  <span className="font-mono text-white font-medium">#1082</span>
                </div>
                <span className="font-bold text-white/90">R$ 245,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
