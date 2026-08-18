import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { SITE } from '../config/site';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-white/10 pt-16 pb-12 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-white/70 font-sans max-w-sm leading-relaxed">
              Tecnologia para ajudar negócios locais a crescer. Organização, controle de estoque e vendas simples em uma plataforma moderna.
            </p>
            <div className="text-xs font-mono text-white/50 pt-2">
              Desenvolvido com excelência por <span className="text-brand-yellow font-semibold">KorenTech</span>.
            </div>
          </div>

          {/* Col 1: Produto */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Produto</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#recursos" className="hover:text-brand-yellow transition-colors">Recursos</a></li>
              <li><a href="#solucoes" className="hover:text-brand-yellow transition-colors">Soluções</a></li>
              <li><a href="#precos" className="hover:text-brand-yellow transition-colors">Planos</a></li>
              <li><a href="#demo" className="hover:text-brand-yellow transition-colors">Demonstração</a></li>
            </ul>
          </div>

          {/* Col 2: Empresa */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-white/90 font-semibold">KorenTech</span></li>
              <li>
                <a
                  href="https://wa.me/558596665019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-yellow transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 group-hover:text-brand-yellow transition-colors" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/korentech_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-yellow transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:text-brand-yellow transition-colors" />
                  @korentech_dev
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Suporte & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">Suporte & Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href={SITE.SUPPORT_URL} className="hover:text-brand-yellow transition-colors">Central de Ajuda</a></li>
              <li><a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a></li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-brand-yellow transition-colors text-left"
                  id="footer-privacy-link"
                >
                  Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-brand-yellow transition-colors text-left"
                  id="footer-terms-link"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar with Dynamic Year */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© {currentYear} KorenTech. Todos os direitos reservados.</p>
          <p className="flex items-center gap-3">
            <button onClick={onOpenPrivacy} className="hover:text-brand-yellow transition-colors underline underline-offset-2">
              Política de Privacidade
            </button>
            <span>·</span>
            <button onClick={onOpenTerms} className="hover:text-brand-yellow transition-colors underline underline-offset-2">
              Termos de Uso
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};
