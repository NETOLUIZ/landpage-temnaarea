import React from 'react';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { ArrowRight, UtensilsCrossed, ShoppingCart, Scissors, Store, Sparkles, Bike } from 'lucide-react';
import { Segment } from '../data/segments';

export interface SegmentCardProps {
  segment: Segment;
  onClick?: () => void;
}

export const SegmentCard: React.FC<SegmentCardProps> = ({ segment, onClick }) => {
  const iconMap: Record<string, React.ReactNode> = {
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-brand-yellow" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6 text-brand-green" />,
    Scissors: <Scissors className="w-6 h-6 text-brand-blue" />,
    Store: <Store className="w-6 h-6 text-brand-purple-light" />,
    Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
    Bike: <Bike className="w-6 h-6 text-brand-yellow" />,
  };

  return (
    <GlassCard
      hoverGlow="yellow"
      interactive
      className="group flex flex-col justify-between h-full p-6 sm:p-8"
      onClick={onClick}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-brand-yellow/10 transition-all duration-300">
            {iconMap[segment.iconName] || <Store className="w-6 h-6 text-brand-yellow" />}
          </div>
          <span className="text-[11px] font-mono text-white/50 group-hover:text-brand-yellow transition-colors uppercase">
            Segmento
          </span>
        </div>

        <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-yellow transition-colors">
          {segment.name}
        </h3>

        <p className="text-sm text-white/70 leading-relaxed font-sans">
          {segment.description}
        </p>
      </div>

      <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono font-semibold text-brand-yellow group-hover:underline">
          Ver solução para {segment.name}
        </span>
        <Button variant="ghost" size="sm" className="p-2 rounded-full group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-4 h-4 text-brand-yellow" />
        </Button>
      </div>
    </GlassCard>
  );
};
