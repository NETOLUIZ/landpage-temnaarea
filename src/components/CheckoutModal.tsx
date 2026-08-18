import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageCircle, User, Building2, MapPin, HelpCircle, Briefcase } from 'lucide-react';
import { Plan } from '../data/pricing';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const WHATSAPP_NUMBER = '558596665019';

const SEGMENTOS = [
  'Restaurante / Lanchonete',
  'Bar / Pub',
  'Pizzaria',
  'Padaria / Confeitaria',
  'Mercado / Mercearia',
  'Farmácia / Drogaria',
  'Pet Shop',
  'Salão de Beleza',
  'Clínica / Consultório',
  'Loja de Roupas / Calçados',
  'Papelaria / Livraria',
  'Açougue / Peixaria',
  'Hortifruti',
  'Outro',
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, plan }) => {
  const [form, setForm] = useState({
    nomePropietario: '',
    nomeEmpresa: '',
    segmento: '',
    endereco: '',
    desafio: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fecha com Esc
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Bloqueia scroll do body quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.nomePropietario.trim()) newErrors.nomePropietario = 'Informe seu nome';
    if (!form.nomeEmpresa.trim()) newErrors.nomeEmpresa = 'Informe o nome da empresa';
    if (!form.segmento) newErrors.segmento = 'Selecione o segmento';
    if (!form.endereco.trim()) newErrors.endereco = 'Informe o endereço';
    if (!form.desafio.trim()) newErrors.desafio = 'Conte-nos seu desafio';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);

    const msg = encodeURIComponent(
      `Olá! Quero conhecer o plano *${plan.name}* (R$ ${plan.price.toFixed(2).replace('.', ',')}/${plan.period.replace('/', '')})\n\n` +
      `👤 *Nome:* ${form.nomePropietario}\n` +
      `🏢 *Empresa:* ${form.nomeEmpresa}\n` +
      `📂 *Segmento:* ${form.segmento}\n` +
      `📍 *Endereço:* ${form.endereco}\n\n` +
      `💡 *Meu maior desafio hoje:*\n${form.desafio}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cadastro para plano"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f1117] shadow-2xl"
          onClick={e => e.stopPropagation()}
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
        >
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

          <div className="p-6 sm:p-8 space-y-6">
            {/* Header de boas-vindas */}
            <div className="space-y-3 text-center">
              {/* Emoji de boas-vindas animado */}
              <div className="text-5xl animate-bounce-slow mx-auto w-fit select-none">👋</div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Seja bem-vindo!
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Você escolheu o plano{' '}
                <span className="text-brand-yellow font-bold">{plan.name}</span>
                {' '}— R${' '}
                <span className="font-bold text-white">
                  {plan.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-white/50">{plan.period}</span>
                . Antes de começar, precisamos de algumas informações rápidas. 🚀
              </p>
            </div>

            {/* Divisor */}
            <div className="h-px bg-white/10" />

            {/* Formulário */}
            <div className="space-y-4">
              {/* Nome do Proprietário */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono text-white/60 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" />
                  Nome do Proprietário
                </label>
                <input
                  id="checkout-nome"
                  type="text"
                  placeholder="Ex: João da Silva"
                  value={form.nomePropietario}
                  onChange={e => handleChange('nomePropietario', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-white bg-white/5 outline-none transition-all placeholder:text-white/30
                    focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/60
                    ${errors.nomePropietario ? 'border-red-400/70 bg-red-500/5' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.nomePropietario && (
                  <p className="text-xs text-red-400">{errors.nomePropietario}</p>
                )}
              </div>

              {/* Nome da Empresa */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono text-white/60 uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  Nome da Empresa
                </label>
                <input
                  id="checkout-empresa"
                  type="text"
                  placeholder="Ex: Restaurante do João"
                  value={form.nomeEmpresa}
                  onChange={e => handleChange('nomeEmpresa', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-white bg-white/5 outline-none transition-all placeholder:text-white/30
                    focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/60
                    ${errors.nomeEmpresa ? 'border-red-400/70 bg-red-500/5' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.nomeEmpresa && (
                  <p className="text-xs text-red-400">{errors.nomeEmpresa}</p>
                )}
              </div>

              {/* Segmento */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono text-white/60 uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5" />
                  Segmento
                </label>
                <select
                  id="checkout-segmento"
                  value={form.segmento}
                  onChange={e => handleChange('segmento', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-sm bg-white/5 outline-none transition-all appearance-none cursor-pointer
                    focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/60
                    ${form.segmento ? 'text-white' : 'text-white/30'}
                    ${errors.segmento ? 'border-red-400/70 bg-red-500/5' : 'border-white/10 hover:border-white/20'}`}
                  style={{ backgroundColor: '#0f1117' }}
                >
                  <option value="" disabled style={{ background: '#0f1117' }}>Selecione o segmento...</option>
                  {SEGMENTOS.map(seg => (
                    <option key={seg} value={seg} style={{ background: '#0f1117' }}>{seg}</option>
                  ))}
                </select>
                {errors.segmento && (
                  <p className="text-xs text-red-400">{errors.segmento}</p>
                )}
              </div>

              {/* Endereço */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono text-white/60 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  Endereço
                </label>
                <input
                  id="checkout-endereco"
                  type="text"
                  placeholder="Ex: Rua das Flores, 123 - São Paulo, SP"
                  value={form.endereco}
                  onChange={e => handleChange('endereco', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-white bg-white/5 outline-none transition-all placeholder:text-white/30
                    focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/60
                    ${errors.endereco ? 'border-red-400/70 bg-red-500/5' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.endereco && (
                  <p className="text-xs text-red-400">{errors.endereco}</p>
                )}
              </div>

              {/* Maior Desafio */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono text-white/60 uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Qual seu maior desafio hoje?
                </label>
                <textarea
                  id="checkout-desafio"
                  placeholder="Conte-nos o que mais te preocupa no seu negócio hoje..."
                  rows={3}
                  value={form.desafio}
                  onChange={e => handleChange('desafio', e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-white bg-white/5 outline-none transition-all resize-none placeholder:text-white/30
                    focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow/60
                    ${errors.desafio ? 'border-red-400/70 bg-red-500/5' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.desafio && (
                  <p className="text-xs text-red-400">{errors.desafio}</p>
                )}
              </div>
            </div>

            {/* CTA principal */}
            <div className="space-y-3 pt-2">
              <p className="text-center text-white/50 text-xs">
                Clique no botão abaixo e vamos te ajudar! 👇
              </p>
              <button
                id="checkout-submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`
                  w-full flex items-center justify-center gap-3 rounded-xl px-6 py-4
                  font-bold text-base text-black transition-all duration-300
                  bg-brand-yellow hover:bg-yellow-300 active:scale-95
                  shadow-lg shadow-brand-yellow/30 hover:shadow-brand-yellow/50
                  disabled:opacity-70 disabled:cursor-not-allowed
                  ${isSubmitting ? 'animate-pulse' : ''}
                `}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Abrindo WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Falar com nossa equipe no WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-white/30 text-[11px]">
                Você será direcionado ao WhatsApp da nossa equipe. Sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
