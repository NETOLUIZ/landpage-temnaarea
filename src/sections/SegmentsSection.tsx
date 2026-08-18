import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SegmentCard } from '../components/SegmentCard';
import { SEGMENTS } from '../data/segments';
import { useSegment } from '../context/SegmentContext';

export const SegmentsSection: React.FC = () => {
  const { openSegmentModal } = useSegment();

  return (
    <section id="solucoes" className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      {/* Background radial highlight */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Feito para quem tá no corre"
          badgeVariant="yellow"
          title="Para quem abre a porta cedo, fecha tarde e precisa fazer o negócio acontecer."
          highlightText="fazer o negócio acontecer."
          description="Seja restaurante, mercantil, barbearia ou loja, o Tem na Área se adapta à rotina real do seu estabelecimento."
          align="center"
        />

        {/* 6 Segment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SEGMENTS.map((segment) => (
            <SegmentCard
              key={segment.id}
              segment={segment}
              onClick={() => openSegmentModal(segment)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
