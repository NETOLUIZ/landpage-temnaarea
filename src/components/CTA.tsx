import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE } from '../config/site';

export interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  onPrimaryClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  compact?: boolean;
}

export const CTA: React.FC<CTAProps> = ({
  className,
  title = "Pronto para deixar seu negócio mais organizado?",
  subtitle = "Tenha as ferramentas que você precisa para vender, controlar e acompanhar seu negócio em um só lugar.",
  primaryButtonText = "Começar agora",
  primaryButtonHref = SITE.SIGNUP_URL,
  onPrimaryClick,
  secondaryButtonText = "Ver como funciona",
  secondaryButtonHref = "#demo",
  compact = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-bg-secondary border border-white/10 text-center shadow-2xl transition-all duration-300",
        compact ? "p-8 sm:p-10" : "p-10 sm:p-16",
        className
      )}
      {...props}
    >
      {/* Brand color ambient glows in background */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-brand-yellow/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-brand-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-magenta/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-purple-200 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
          <span>KorenTech · Tem na Área</span>
        </div>

        <h3
          className={cn(
            "font-display font-extrabold text-white tracking-tight leading-tight",
            compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl"
          )}
        >
          {title}
        </h3>

        {subtitle && (
          <p className="text-white/80 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {onPrimaryClick ? (
            <Button variant="primary" size={compact ? "md" : "lg"} rightIcon={<ArrowRight className="w-4 h-4" />} onClick={onPrimaryClick}>
              {primaryButtonText}
            </Button>
          ) : (
            <a href={primaryButtonHref}>
              <Button variant="primary" size={compact ? "md" : "lg"} rightIcon={<ArrowRight className="w-4 h-4" />}>
                {primaryButtonText}
              </Button>
            </a>
          )}

          {secondaryButtonText && (
            <a href={secondaryButtonHref}>
              <Button variant="outline" size={compact ? "md" : "lg"}>
                {secondaryButtonText}
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
