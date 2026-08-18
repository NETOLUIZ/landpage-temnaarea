import React from 'react';
import { cn } from '../lib/utils';

export interface FloatingMetricProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  badgeColor?: 'yellow' | 'purple' | 'blue' | 'green' | 'magenta';
  reverse?: boolean;
}

export const FloatingMetric: React.FC<FloatingMetricProps> = ({
  className,
  icon,
  title,
  subtitle,
  badgeColor = 'yellow',
  reverse = false,
  ...props
}) => {
  const dotColors = {
    yellow: 'bg-brand-yellow shadow-glow-yellow',
    purple: 'bg-brand-purple shadow-glow-purple',
    blue: 'bg-brand-blue shadow-glow-blue',
    green: 'bg-brand-green shadow-glow-green',
    magenta: 'bg-brand-magenta shadow-glow-magenta',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-bg-secondary/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl transition-all duration-300 pointer-events-none select-none',
        reverse ? 'animate-float-reverse' : 'animate-float-slow',
        className
      )}
      {...props}
    >
      {icon ? (
        <div className="p-2 rounded-xl bg-white/10 text-white shrink-0">
          {icon}
        </div>
      ) : (
        <span className={cn('w-2.5 h-2.5 rounded-full shrink-0', dotColors[badgeColor])} />
      )}

      <div className="flex flex-col text-left">
        <span className="text-xs font-display font-semibold text-white leading-tight">
          {title}
        </span>
        {subtitle && (
          <span className="text-[11px] font-mono text-white/70 leading-tight">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
