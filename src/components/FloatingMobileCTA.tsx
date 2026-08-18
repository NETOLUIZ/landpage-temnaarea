import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { useCheckout } from '../context/CheckoutContext';

export const FloatingMobileCTA: React.FC = () => {
  const { openCheckout } = useCheckout();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-bg-base/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl animate-fadeIn">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-yellow via-brand-magenta to-brand-purple flex items-center justify-center text-bg-base font-mono font-bold text-xs">
            TNA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-display font-bold text-white leading-tight">Tem na Área</span>
            <span className="text-[10px] font-mono text-white/50 leading-tight">KorenTech</span>
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          onClick={() => openCheckout()}
        >
          Começar agora
        </Button>
      </div>
    </div>
  );
};
