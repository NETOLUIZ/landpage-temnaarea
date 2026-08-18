import React from 'react';
import { GlassCard } from './GlassCard';
import {
  Zap,
  Wallet,
  Package,
  ClipboardList,
  Bike,
  LayoutGrid,
  Users,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import { Feature } from '../data/features';

export interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-6 h-6 text-brand-yellow" />,
    Wallet: <Wallet className="w-6 h-6 text-brand-green" />,
    Package: <Package className="w-6 h-6 text-brand-blue" />,
    ClipboardList: <ClipboardList className="w-6 h-6 text-brand-purple-light" />,
    Bike: <Bike className="w-6 h-6 text-pink-400" />,
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-brand-yellow" />,
    Users: <Users className="w-6 h-6 text-brand-blue" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-brand-green" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-purple-300" />,
  };

  return (
    <GlassCard
      hoverGlow="purple"
      interactive
      className="group flex flex-col justify-between h-full p-6 sm:p-8"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-brand-purple/20 transition-all duration-300">
            {iconMap[feature.iconName] || <Zap className="w-6 h-6 text-brand-yellow" />}
          </div>
          <span className="text-[11px] font-mono text-white/50 group-hover:text-purple-300 transition-colors uppercase">
            {feature.name}
          </span>
        </div>

        {/* Benefit-driven Headline (Rule 7: Never raw features) */}
        <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug group-hover:text-brand-yellow transition-colors">
          {feature.copyHeadline}
        </h3>

        <p className="text-sm text-white/70 leading-relaxed font-sans">
          {feature.description}
        </p>
      </div>
    </GlassCard>
  );
};
