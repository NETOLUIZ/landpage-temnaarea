import React from 'react';
import {
  Zap,
  Wallet,
  Package,
  ClipboardList,
  Bike,
  LayoutGrid,
  Users,
  BarChart3,
} from 'lucide-react';
import { FEATURES } from '../data/features';

export const TrustBar: React.FC = () => {
  // Map icon names to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-4 h-4 text-brand-yellow" />,
    Wallet: <Wallet className="w-4 h-4 text-brand-green" />,
    Package: <Package className="w-4 h-4 text-brand-blue" />,
    ClipboardList: <ClipboardList className="w-4 h-4 text-brand-purple-light" />,
    Bike: <Bike className="w-4 h-4 text-pink-400" />,
    LayoutGrid: <LayoutGrid className="w-4 h-4 text-brand-yellow" />,
    Users: <Users className="w-4 h-4 text-brand-blue" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-brand-green" />,
  };

  return (
    <section className="relative py-10 bg-bg-secondary/60 border-y border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <p className="text-center text-xs sm:text-sm font-mono text-white/60 uppercase tracking-widest">
          Tudo que você precisa em um só lugar
        </p>

        {/* Feature Pills Scroll / Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-medium hover:border-brand-yellow/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="shrink-0 group-hover:scale-110 transition-transform">
                {iconMap[feature.iconName] || <Zap className="w-4 h-4 text-brand-yellow" />}
              </span>
              <span className="font-display font-semibold">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
