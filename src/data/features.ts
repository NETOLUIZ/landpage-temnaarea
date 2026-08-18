export interface Feature {
  id: string;
  name: string;
  copyHeadline: string;
  description: string;
  iconName: string;
}

export const FEATURES: Feature[] = [
  {
    id: "vendas",
    name: "Vendas",
    copyHeadline: "Agilidade no atendimento e registro instantâneo.",
    description: "Venda rápida na frente de caixa sem travamentos ou complicações.",
    iconName: "Zap",
  },
  {
    id: "caixa",
    name: "Caixa",
    copyHeadline: "Saiba quanto entrou no seu negócio hoje.",
    description: "Abertura, fechamento e controle detalhado do fluxo financeiro diário.",
    iconName: "Wallet",
  },
  {
    id: "estoque",
    name: "Estoque",
    copyHeadline: "Saiba o que está acabando antes do seu cliente perceber.",
    description: "Alertas de estoque baixo, entrada de mercadorias e contagem simples.",
    iconName: "Package",
  },
  {
    id: "pedidos",
    name: "Pedidos",
    copyHeadline: "Pare de procurar pedido perdido no WhatsApp.",
    description: "Central de pedidos com acompanhamento em tempo real do status.",
    iconName: "ClipboardList",
  },
  {
    id: "delivery",
    name: "Delivery",
    copyHeadline: "Entrega organizada do balcão até a porta do cliente.",
    description: "Despacho rápido e controle de entregadores direto na tela.",
    iconName: "Bike",
  },
  {
    id: "mesas",
    name: "Mesas",
    copyHeadline: "Comandas e controle de mesas em tempo real.",
    description: "Ideal para restaurantes, bares e lanchonetes não perderem nenhuma conta.",
    iconName: "LayoutGrid",
  },
  {
    id: "clientes",
    name: "Clientes",
    copyHeadline: "Conheça quem compra com você e fidelize seu público.",
    description: "Histórico de compras, dados de contato e preferências organizadas.",
    iconName: "Users",
  },
  {
    id: "relatorios",
    name: "Relatórios",
    copyHeadline: "Entenda o que está vendendo e como está seu negócio.",
    description: "Métricas diretas ao ponto para tomar decisões inteligentes sem enrolação.",
    iconName: "BarChart3",
  },
  {
    id: "usuarios",
    name: "Usuários",
    copyHeadline: "Toda a equipe conectada com permissões seguras.",
    description: "Defina o que cada funcionário pode ver e operar no sistema.",
    iconName: "ShieldCheck",
  },
];
