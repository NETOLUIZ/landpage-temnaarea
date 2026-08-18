import React from 'react';
import { cn } from '../lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: 'none' | 'yellow' | 'purple' | 'blue' | 'magenta';
  interactive?: boolean;
  padded?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  className,
  hoverGlow = 'none',
  interactive = false,
  padded = true,
  children,
  ...props
}) => {
  const glowStyles = {
    none: '',
    yellow: 'hover:border-brand-yellow/50 hover:shadow-glow-yellow',
    purple: 'hover:border-brand-purple/50 hover:shadow-glow-purple',
    blue: 'hover:border-brand-blue/50 hover:shadow-glow-blue',
    magenta: 'hover:border-brand-magenta/50 hover:shadow-glow-magenta',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-bg-secondary/80 backdrop-blur-xl border border-white/10 text-fg-base transition-all duration-300',
        padded && 'p-6 sm:p-8',
        interactive && 'hover:-translate-y-1 cursor-pointer',
        glowStyles[hoverGlow],
        className
      )}
      {...props}
    >
      {/* Subtle background highlight spot */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
