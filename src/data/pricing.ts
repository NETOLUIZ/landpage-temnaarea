export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  highlight: boolean;
  badge?: string;
  description: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: 59.90,
    period: "/mês",
    highlight: false,
    description: "Para começar a organizar seu negócio.",
    features: [
      "Vendas e Emissão de Pedidos",
      "Controle de Caixa Básico",
      "Gestão de Estoque",
      "Até 2 Usuários",
      "Suporte via WhatsApp",
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    price: 99.90,
    period: "/mês",
    highlight: true,
    badge: "MAIS ESCOLHIDO",
    description: "Para negócios que precisam de mais recursos.",
    features: [
      "Tudo do plano Básico",
      "Controle de Mesas e Comandas",
      "Integração com Delivery",
      "Relatórios de Vendas Avançados",
      "Até 5 Usuários",
      "Suporte Prioritário",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 159.90,
    period: "/mês",
    highlight: false,
    description: "Para operações que querem uma solução mais completa.",
    features: [
      "Tudo do plano Profissional",
      "Usuários Ilimitados",
      "Personalização de marca",
      "Relatórios Financeiros Avançados",
      "Gestão completa de estoque e insumos",
      "Suporte VIP dedicado",
    ],
  },
];
