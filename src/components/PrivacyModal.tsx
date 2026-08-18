import React from 'react';
import { LegalModal } from './LegalModal';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <LegalModal isOpen={isOpen} onClose={onClose} title="Política de Privacidade — Tem na Área">
      <p className="text-xs text-white/40 font-mono">Última atualização: {today}</p>

      <p>
        A <strong className="text-white">KorenTech</strong>, responsável pela plataforma <strong className="text-white">Tem na Área</strong>, está comprometida com a proteção e a privacidade dos seus dados pessoais, em conformidade com a <strong className="text-white">Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.
      </p>

      <Section title="1. Quem Somos">
        <p>
          <strong className="text-white">KorenTech</strong> é a empresa controladora e operadora dos dados coletados pela plataforma Tem na Área. Para fins desta política, a KorenTech atua como <em>Controladora de Dados</em>, determinando as finalidades e os meios de tratamento das informações pessoais.
        </p>
        <p>Contato do Encarregado de Dados (DPO): <strong className="text-white">(85) 9666-5019</strong></p>
      </Section>

      <Section title="2. Dados que Coletamos">
        <p>Coletamos os seguintes tipos de dados:</p>
        <SubSection title="2.1 Dados fornecidos pelo usuário">
          <ul>
            <li>Nome completo do proprietário ou responsável;</li>
            <li>Nome da empresa e segmento de atuação;</li>
            <li>Endereço do estabelecimento;</li>
            <li>Informações de contato (telefone/WhatsApp, e-mail);</li>
            <li>Dados de pagamento (processados por gateway seguro — não armazenamos dados de cartão).</li>
          </ul>
        </SubSection>
        <SubSection title="2.2 Dados coletados automaticamente">
          <ul>
            <li>Endereço IP e informações do dispositivo;</li>
            <li>Dados de navegação e interação com a plataforma (logs de acesso);</li>
            <li>Cookies e tecnologias similares de rastreamento.</li>
          </ul>
        </SubSection>
        <SubSection title="2.3 Dados de terceiros">
          <ul>
            <li>Informações de clientes inseridas pelo usuário no sistema (estoque, vendas, pedidos). Esses dados são tratados em nome do usuário, que é o controlador desses dados perante seus próprios clientes.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="3. Como Usamos seus Dados">
        <p>Os dados coletados são utilizados para:</p>
        <ul>
          <li>Criação e gerenciamento da sua conta na plataforma;</li>
          <li>Prestação dos serviços contratados (gestão de vendas, estoque, caixa etc.);</li>
          <li>Processamento de pagamentos e gestão da assinatura;</li>
          <li>Comunicações sobre o serviço, atualizações e novidades;</li>
          <li>Suporte técnico e atendimento ao cliente;</li>
          <li>Melhoria contínua da plataforma com base em análise de uso;</li>
          <li>Cumprimento de obrigações legais e regulatórias.</li>
        </ul>
      </Section>

      <Section title="4. Base Legal para o Tratamento">
        <p>O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
        <ul>
          <li><strong className="text-white">Execução de contrato</strong> — para prestação dos serviços da plataforma;</li>
          <li><strong className="text-white">Legítimo interesse</strong> — para melhoria do serviço e comunicações relacionadas ao produto;</li>
          <li><strong className="text-white">Consentimento</strong> — para comunicações de marketing, quando aplicável;</li>
          <li><strong className="text-white">Cumprimento de obrigação legal</strong> — quando exigido por lei.</li>
        </ul>
      </Section>

      <Section title="5. Compartilhamento de Dados">
        <p>Não vendemos nem alugamos seus dados pessoais. Os dados podem ser compartilhados com:</p>
        <ul>
          <li><strong className="text-white">Provedores de serviço</strong> — parceiros que nos auxiliam na operação da plataforma (ex: processadores de pagamento, serviços de nuvem, ferramentas de análise), sob contratos de confidencialidade;</li>
          <li><strong className="text-white">Autoridades competentes</strong> — quando exigido por lei, ordem judicial ou regulamentação aplicável;</li>
          <li><strong className="text-white">Sucessores</strong> — em caso de fusão, aquisição ou reestruturação societária, os dados podem ser transferidos ao novo controlador.</li>
        </ul>
      </Section>

      <Section title="6. Cookies e Rastreamento">
        <p>Utilizamos cookies e tecnologias similares para:</p>
        <ul>
          <li>Manter sua sessão ativa na plataforma;</li>
          <li>Analisar o comportamento de uso para melhorias;</li>
          <li>Personalizar a experiência do usuário.</li>
        </ul>
        <p>Você pode configurar seu navegador para recusar cookies, mas isso pode afetar o funcionamento da plataforma.</p>
      </Section>

      <Section title="7. Segurança dos Dados">
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo:
        </p>
        <ul>
          <li>Criptografia em trânsito (TLS/HTTPS);</li>
          <li>Controles de acesso baseados em função (RBAC);</li>
          <li>Monitoramento contínuo de segurança;</li>
          <li>Backups regulares e planos de recuperação.</li>
        </ul>
      </Section>

      <Section title="8. Retenção de Dados">
        <p>
          Mantemos seus dados pessoais pelo período necessário para a prestação dos serviços contratados e por <strong className="text-white">até 5 (cinco) anos</strong> após o encerramento da conta, para cumprimento de obrigações legais, fiscais e contratuais, conforme a legislação brasileira.
        </p>
      </Section>

      <Section title="9. Seus Direitos como Titular">
        <p>Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados:</p>
        <ul>
          <li><strong className="text-white">Confirmação e acesso</strong> — saber se tratamos seus dados e ter acesso a eles;</li>
          <li><strong className="text-white">Correção</strong> — solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
          <li><strong className="text-white">Anonimização, bloqueio ou eliminação</strong> — de dados desnecessários ou excessivos;</li>
          <li><strong className="text-white">Portabilidade</strong> — receber seus dados em formato estruturado;</li>
          <li><strong className="text-white">Revogação do consentimento</strong> — quando o tratamento se basear no consentimento;</li>
          <li><strong className="text-white">Oposição</strong> — ao tratamento realizado com base em legítimo interesse.</li>
        </ul>
        <p>Para exercer seus direitos, entre em contato pelo WhatsApp <strong className="text-white">(85) 9666-5019</strong>.</p>
      </Section>

      <Section title="10. Transferência Internacional de Dados">
        <p>
          Alguns de nossos provedores de infraestrutura podem estar localizados fora do Brasil. Quando houver transferência internacional de dados, garantimos que ela ocorra em conformidade com a LGPD, por meio de cláusulas contratuais adequadas ou para países com nível de proteção equivalente.
        </p>
      </Section>

      <Section title="11. Crianças e Adolescentes">
        <p>
          A plataforma <strong className="text-white">Tem na Área</strong> é destinada exclusivamente a pessoas maiores de <strong className="text-white">18 (dezoito) anos</strong>. Não coletamos intencionalmente dados de menores de idade.
        </p>
      </Section>

      <Section title="12. Alterações nesta Política">
        <p>
          Esta Política pode ser atualizada periodicamente. Notificaremos os usuários sobre mudanças relevantes por e-mail ou notificação na plataforma. O uso continuado após a atualização constitui aceite da nova versão.
        </p>
      </Section>

      <Section title="13. Contato e Canal de Privacidade">
        <p>
          Para dúvidas, solicitações ou reclamações relacionadas à privacidade e ao tratamento de dados pessoais, entre em contato:
        </p>
        <ul>
          <li><strong className="text-white">WhatsApp:</strong> (85) 9666-5019</li>
          <li><strong className="text-white">Empresa:</strong> KorenTech — Plataforma Tem na Área</li>
        </ul>
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

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-1.5">
    <p className="text-white/90 font-semibold text-xs">{title}</p>
    <div className="[&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-brand-yellow">
      {children}
    </div>
  </div>
);
