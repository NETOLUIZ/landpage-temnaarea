import React from 'react';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Badge } from './Badge';
import { Check, ArrowRight } from 'lucide-react';
import { Plan } from '../data/pricing';

export interface PricingCardProps {
  plan: Plan;
  onSelectPlan: (plan: Plan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  return (
    <GlassCard
      hoverGlow={plan.highlight ? 'yellow' : 'purple'}
      className={`flex flex-col justify-between h-full relative transition-all duration-300 ${
        plan.highlight
          ? 'border-brand-yellow/60 bg-brand-yellow/5 shadow-glow-yellow/20 lg:-translate-y-3 z-20'
          : 'border-white/10 z-10'
      }`}
    >
      <div className="space-y-6">
        {/* Top Badge & Header */}
        <div className="flex items-center justify-between min-h-[28px]">
          <h3 className="text-2xl font-display font-extrabold text-white">
            {plan.name}
          </h3>
          {plan.badge && (
            <Badge variant="yellow" className="text-[10px]">
              {plan.badge}
            </Badge>
          )}
        </div>

        <p className="text-sm text-white/70 font-sans min-h-[40px]">
          {plan.description}
        </p>

        {/* Pricing tag */}
        <div className="flex items-baseline gap-1 py-3 border-y border-white/10">
          <span className="text-xs font-mono text-white/50">R$</span>
          <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            {plan.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-xs font-mono text-white/60">{plan.period}</span>
        </div>

        {/* Feature List Checklist */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-white/50 uppercase tracking-wider block">Incluso no plano:</span>
          <ul className="space-y-2.5">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-brand-yellow' : 'text-brand-green'}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-8">
        <Button
          variant={plan.highlight ? 'primary' : 'outline'}
          size="lg"
          className="w-full"
          rightIcon={<ArrowRight className="w-4 h-4" />}
          onClick={() => onSelectPlan(plan)}
        >
          Escolher {plan.name}
        </Button>
      </div>
    </GlassCard>
  );
};
