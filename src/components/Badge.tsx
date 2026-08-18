import React from 'react';
import { cn } from '../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'yellow' | 'purple' | 'blue' | 'green' | 'magenta' | 'outline';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'yellow',
  icon,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase border backdrop-blur-md transition-all duration-300';

  const variants = {
    yellow:
      'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/30 shadow-[0_0_12px_rgba(255,215,0,0.15)]',
    purple:
      'bg-brand-purple/20 text-purple-200 border-brand-purple/40 shadow-[0_0_12px_rgba(122,32,176,0.2)]',
    blue:
      'bg-brand-blue/10 text-brand-blue border-brand-blue/30 shadow-[0_0_12px_rgba(0,210,255,0.15)]',
    green:
      'bg-brand-green/10 text-brand-green border-brand-green/30 shadow-[0_0_12px_rgba(0,255,171,0.15)]',
    magenta:
      'bg-brand-magenta/10 text-pink-300 border-brand-magenta/30 shadow-[0_0_12px_rgba(240,0,184,0.15)]',
    outline:
      'bg-white/5 text-white/90 border-white/20',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
