import React, { useEffect } from 'react';
import {
  X, CheckCircle2, AlertCircle, ArrowRight, Zap,
  UtensilsCrossed, ShoppingCart, Scissors, Store, Sparkles, Bike,
} from 'lucide-react';
import { Segment } from '../data/segments';
import { useCheckout } from '../context/CheckoutContext';

interface SegmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  segment: Segment | null;
}

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7 text-brand-yellow" />,
  ShoppingCart:    <ShoppingCart    className="w-7 h-7 text-brand-green"  />,
  Scissors:        <Scissors        className="w-7 h-7 text-brand-blue"   />,
  Store:           <Store           className="w-7 h-7 text-brand-purple-light" />,
  Sparkles:        <Sparkles        className="w-7 h-7 text-pink-400"     />,
  Bike:            <Bike            className="w-7 h-7 text-brand-yellow" />,
};

export const SegmentModal: React.FC<SegmentModalProps> = ({ isOpen, onClose, segment }) => {
  const { openCheckout } = useCheckout();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !segment) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Solução para ${segment.name}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0f14] shadow-2xl"
          onClick={e => e.stopPropagation()}
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl" />

          {/* Botão X de Fechar */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white/80 transition-all hover:bg-white/25 hover:text-white hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 p-6 sm:p-8 space-y-6">

            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                {iconMap[segment.iconName] ?? <Store className="w-7 h-7 text-brand-yellow" />}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Segmento</span>
                  <span className="text-[10px] font-mono text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded-full border border-brand-yellow/20">
                    Tem na Área
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {segment.name}
                </h2>
                <p className="text-brand-yellow font-medium text-sm">{segment.tagline}</p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Desafio */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase text-red-400 tracking-wider">O problema de hoje</p>
                <p className="text-sm text-white/75 leading-relaxed">{segment.challenge}</p>
              </div>
            </div>

            {/* Recursos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-yellow" />
                <p className="text-xs font-mono font-bold uppercase text-white/60 tracking-wider">
                  O que o Tem na Área resolve para você
                </p>
              </div>
              <ul className="space-y-2.5">
                {segment.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destaque */}
            <div className="p-4 rounded-xl bg-brand-yellow/8 border border-brand-yellow/25 text-center">
              <p className="text-sm font-semibold text-brand-yellow leading-relaxed">
                💡 {segment.highlight}
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-1">
              <button
                onClick={() => { openCheckout(); onClose(); }}
                className="w-full flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 font-bold text-base text-black bg-brand-yellow hover:bg-yellow-300 active:scale-95 transition-all shadow-lg shadow-brand-yellow/30"
              >
                Quero essa solução para meu negócio
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-white/30 text-[11px]">
                Sem compromisso · Nossa equipe entra em contato pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
