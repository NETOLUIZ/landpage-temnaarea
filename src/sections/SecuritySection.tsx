import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { ShieldCheck, Lock, UserCheck, HardDriveDownload } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      title: "Controle de Acesso por Nível",
      desc: "Defina com precisão o que cada funcionário (garçom, operador de caixa, gerente) pode acessar ou alterar.",
      icon: <UserCheck className="w-6 h-6 text-brand-purple-light" />,
    },
    {
      title: "Proteção de Informações",
      desc: "Criptografia na transmissão de dados para proteger suas vendas, cadastro de clientes e fluxo financeiro.",
      icon: <Lock className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Armazenamento em Nuvem Protegido",
      desc: "Servidores monitorados continuamente para garantir alta disponibilidade e estabilidade na sua operação.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
    },
    {
      title: "Backup Automático Diário",
      desc: "Cópias de segurança frequentes para que você nunca perca seu histórico de caixa ou cadastro de estoque.",
      icon: <HardDriveDownload className="w-6 h-6 text-brand-yellow" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-bg-base overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-blue/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionTitle
          badgeText="Segurança & Confiabilidade"
          badgeVariant="blue"
          title="Seus dados operacionais protegidos."
          highlightText="protegidos."
          description="Tecnologia de proteção avançada para manter seu caixa, estoque e histórico de vendas protegidos no dia a dia."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((item, idx) => (
            <GlassCard key={idx} hoverGlow="blue" className="space-y-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
                {item.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                {item.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
