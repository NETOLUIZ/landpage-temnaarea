import React from 'react';
import { cn } from '../lib/utils';
import logoMark from '../assets/logo-mark.png';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md', ...props }) => {
  const markSizes = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  };

  const captionSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div className={cn('inline-flex items-center gap-2 select-none', className)} {...props}>
      <img
        src={logoMark}
        alt="Tem na Área"
        className={cn('w-auto object-contain shrink-0', markSizes[size])}
      />
      <span className={cn('font-mono text-white/50 tracking-wider uppercase', captionSizes[size])}>
        KorenTech
      </span>
    </div>
  );
};
