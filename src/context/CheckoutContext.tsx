import React, { createContext, useContext, useState } from 'react';
import { PLANS, Plan } from '../data/pricing';

interface CheckoutContextType {
  openCheckout: (plan?: Plan) => void;
  closeCheckout: () => void;
  selectedPlan: Plan | null;
  isOpen: boolean;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

// Plano padrão quando não especificado (Profissional — mais escolhido)
const DEFAULT_PLAN = PLANS.find(p => p.highlight) ?? PLANS[0];

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const openCheckout = (plan?: Plan) => {
    setSelectedPlan(plan ?? DEFAULT_PLAN);
  };

  const closeCheckout = () => {
    setSelectedPlan(null);
  };

  return (
    <CheckoutContext.Provider value={{ openCheckout, closeCheckout, selectedPlan, isOpen: selectedPlan !== null }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error('useCheckout must be used inside CheckoutProvider');
  return ctx;
};
