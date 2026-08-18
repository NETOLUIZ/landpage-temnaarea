import React from 'react';
import { LegalModal } from './LegalModal';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <LegalModal isOpen={isOpen} onClose={onClose} title="Termos de Uso — Tem na Área">
      <p className="text-xs text-white/40 font-mono">Última atualização: {today}</p>

      <Section title="1. Aceitação dos Termos">
        <p>
          Ao acessar ou utilizar a plataforma <strong className="text-white">Tem na Área</strong>, desenvolvida e operada pela <strong className="text-white">KorenTech</strong>, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que cesse imediatamente o uso da plataforma.
        </p>
      </Section>

      <Section title="2. Descrição do Serviço">
        <p>
          O <strong className="text-white">Tem na Área</strong> é um sistema de gestão comercial destinado a pequenos e médios negócios, oferecendo funcionalidades como controle de vendas, emissão de pedidos, gestão de estoque, controle de caixa, mesas e comandas, integração com delivery e relatórios gerenciais.
        </p>
        <p>
          O serviço é disponibilizado em regime de assinatura (<em>SaaS – Software as a Service</em>), conforme os planos disponíveis na plataforma.
        </p>
      </Section>

      <Section title="3. Cadastro e Conta">
        <ul>
          <li>O usuário deve fornecer informações verdadeiras, precisas e atualizadas no momento do cadastro.</li>
          <li>É de responsabilidade exclusiva do usuário manter a confidencialidade de suas credenciais de acesso (login e senha).</li>
          <li>A KorenTech não se responsabiliza por acessos não autorizados decorrentes de negligência do usuário.</li>
          <li>Cada conta é de uso pessoal e intransferível, salvo quando o plano contratado prevê múltiplos usuários.</li>
        </ul>
      </Section>

      <Section title="4. Planos e Pagamento">
        <ul>
          <li>Os planos e valores estão descritos na página de preços e podem ser alterados mediante aviso prévio de <strong className="text-white">30 (trinta) dias</strong>.</li>
          <li>O pagamento é realizado de forma recorrente (mensal), conforme o plano escolhido.</li>
          <li>O não pagamento na data de vencimento pode resultar na suspensão temporária do acesso.</li>
          <li>Não há fidelidade compulsória. O cancelamento pode ser solicitado a qualquer momento, sem multas.</li>
          <li>Valores pagos de forma antecipada não são reembolsáveis, exceto nos casos previstos no Código de Defesa do Consumidor.</li>
        </ul>
      </Section>

      <Section title="5. Uso Permitido">
        <p>O usuário compromete-se a utilizar a plataforma exclusivamente para fins lícitos e de acordo com a legislação brasileira vigente. São expressamente proibidos:</p>
        <ul>
          <li>Uso para atividades fraudulentas, ilegais ou que prejudiquem terceiros;</li>
          <li>Tentativas de acesso não autorizado à infraestrutura da plataforma;</li>
          <li>Reprodução, redistribuição ou revenda do software sem autorização expressa;</li>
          <li>Inserção de dados falsos, enganosos ou que violem direitos de terceiros.</li>
        </ul>
      </Section>

      <Section title="6. Propriedade Intelectual">
        <p>
          Todo o conteúdo da plataforma — incluindo código-fonte, design, logotipos, textos, funcionalidades e documentação — é propriedade exclusiva da <strong className="text-white">KorenTech</strong> e protegido pelas leis de propriedade intelectual brasileiras e tratados internacionais.
        </p>
        <p>
          O usuário recebe apenas uma licença de uso limitada, não exclusiva e intransferível para acessar e usar a plataforma conforme estes Termos.
        </p>
      </Section>

      <Section title="7. Disponibilidade e Manutenção">
        <p>
          A KorenTech empenha-se em manter a plataforma disponível 24 horas por dia, 7 dias por semana. No entanto, não garante disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência sempre que possível.
        </p>
        <p>
          A KorenTech não se responsabiliza por indisponibilidades decorrentes de fatores externos, como falhas de internet, problemas de infraestrutura de terceiros ou casos fortuitos e de força maior.
        </p>
      </Section>

      <Section title="8. Limitação de Responsabilidade">
        <p>
          A KorenTech não se responsabiliza por danos indiretos, incidentais, especiais ou consequentes decorrentes do uso ou da impossibilidade de uso da plataforma, incluindo perda de dados, lucros cessantes ou interrupção de negócios.
        </p>
        <p>
          A responsabilidade máxima da KorenTech ficará limitada ao valor pago pelo usuário nos últimos <strong className="text-white">3 (três) meses</strong> de assinatura.
        </p>
      </Section>

      <Section title="9. Cancelamento e Rescisão">
        <p>
          O usuário pode cancelar sua assinatura a qualquer momento pelo canal de suporte. O acesso será mantido até o fim do período já pago.
        </p>
        <p>
          A KorenTech pode encerrar ou suspender o acesso do usuário, sem aviso prévio, em caso de violação destes Termos.
        </p>
      </Section>

      <Section title="10. Alterações nos Termos">
        <p>
          Estes Termos podem ser atualizados periodicamente. As alterações entrarão em vigor após publicação na plataforma. O uso continuado após a publicação das alterações constitui aceite dos novos termos.
        </p>
      </Section>

      <Section title="11. Foro e Legislação Aplicável">
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de <strong className="text-white">Fortaleza – CE</strong> para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
        </p>
      </Section>

      <Section title="12. Contato">
        <p>
          Dúvidas, solicitações ou reclamações podem ser encaminhadas pelo WhatsApp <strong className="text-white">(85) 9666-5019</strong> ou pelo canal de suporte oficial da plataforma.
        </p>
      </Section>
    </LegalModal>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-2.5">
    <h3 className="text-sm font-bold text-white font-display">{title}</h3>
    <div className="space-y-2 pl-1 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-brand-yellow">
      {children}
    </div>
  </div>
);
