import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={onClose}>
        <div
          className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl border border-white/10 bg-[#0d0f14] shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header fixo */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 shrink-0">
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-white">{title}</h2>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white/80 transition-all hover:bg-white/25 hover:text-white hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conteúdo rolável */}
          <div
            className="overflow-y-auto px-6 sm:px-8 py-6 text-sm text-white/75 leading-relaxed space-y-5 font-sans"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.12) transparent' }}
          >
            {children}
          </div>

          {/* Footer fixo */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/10 shrink-0 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-xl px-6 py-2.5 text-sm font-bold bg-brand-yellow text-black hover:bg-yellow-300 active:scale-95 transition-all"
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
