import React from 'react';
import { cn } from '../lib/utils';
import { Badge } from './Badge';

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText?: string;
  badgeVariant?: 'yellow' | 'purple' | 'blue' | 'green' | 'magenta' | 'outline';
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'center' | 'left';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  className,
  badgeText,
  badgeVariant = 'yellow',
  title,
  highlightText,
  description,
  align = 'center',
  ...props
}) => {
  // If highlightText is provided, split the title and render highlighted portion with gradient text
  const renderTitle = () => {
    if (!highlightText || !title.includes(highlightText)) {
      return title;
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand underline decoration-brand-yellow/30 decoration-wavy underline-offset-4">
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        'max-w-3xl flex flex-col gap-4 mb-12',
        align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start',
        className
      )}
      {...props}
    >
      {badgeText && (
        <Badge variant={badgeVariant} className="w-fit">
          {badgeText}
        </Badge>
      )}

      <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight sm:whitespace-nowrap">
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
