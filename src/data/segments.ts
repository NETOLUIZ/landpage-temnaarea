export interface Segment {
  id: string;
  name: string;
  description: string;
  iconName: string;
  tagline: string;
  challenge: string;
  features: string[];
  highlight: string;
}

export const SEGMENTS: Segment[] = [
  {
    id: "restaurante",
    name: "Restaurante",
    description: "Garçom, comandas, mesas, cozinha e caixa sem confusão.",
    iconName: "UtensilsCrossed",
    tagline: "Da comanda à mesa sem erro e sem atraso.",
    challenge:
      "Pedido anotado no papel que some, comanda errada, cozinha sem informação e caixa que nunca fecha certo. Essa é a rotina de quem ainda não usa um sistema.",
    features: [
      "Abertura e gerenciamento de mesas em tempo real",
      "Comandas digitais enviadas direto para a cozinha",
      "Controle de pedidos por status (em preparo, pronto, entregue)",
      "Fechamento de caixa por forma de pagamento (Pix, cartão, dinheiro)",
      "Relatório de itens mais vendidos e margem por produto",
      "Controle de estoque com baixa automática ao fechar pedido",
      "Suporte a múltiplos garçons e operadores simultâneos",
    ],
    highlight: "Reduza erros de pedido em até 90% e feche o caixa mais rápido todo dia.",
  },
  {
    id: "mercantil",
    name: "Mercantil",
    description: "Controle de estoque agilizado, leitor de código e frente de caixa.",
    iconName: "ShoppingCart",
    tagline: "Venda mais rápido, repõe na hora certa e nunca perde estoque.",
    challenge:
      "Produto em falta sem aviso, estoque que nunca bate, preço errado no balcão e caixa difícil de auditar. O mercantil que não tem sistema vive apagando incêndio.",
    features: [
      "Frente de caixa (PDV) com leitura de código de barras",
      "Alertas automáticos de estoque mínimo por produto",
      "Cadastro de produtos com grade, variações e fornecedores",
      "Controle de entradas de mercadoria (NF e manual)",
      "Fluxo de caixa com sangrias, suprimentos e fechamento diário",
      "Relatório de giro de estoque e produtos parados",
      "Suporte a múltiplos operadores com controle de acesso",
    ],
    highlight: "Nunca mais perca venda por falta de produto ou dinheiro no caixa sem saber onde foi.",
  },
  {
    id: "barbearia",
    name: "Barbearia",
    description: "Agendamento rápido, controle de serviços prestados e comissões.",
    iconName: "Scissors",
    tagline: "Agenda cheia, atendimento organizado, comissão no centavo.",
    challenge:
      "Agenda bagunçada no WhatsApp, cliente sem retorno, barbeiro que não sabe quanto recebeu e dono que não sabe se o mês foi bom. Isso acontece sem um sistema.",
    features: [
      "Agenda de horários por profissional",
      "Catálogo de serviços com preços e tempo de duração",
      "Controle de comissões por barbeiro e serviço",
      "Histórico completo de atendimentos por cliente",
      "Controle de produtos utilizados e estoque do salão",
      "Fluxo de caixa diário com entradas por serviço",
      "Relatório de desempenho por profissional",
    ],
    highlight: "Saiba exatamente quanto cada profissional produziu e quanto entrou no caixa hoje.",
  },
  {
    id: "loja",
    name: "Loja",
    description: "Vendas diretas, grade de produtos, controle de estoque e fluxo financeiro.",
    iconName: "Store",
    tagline: "Do estoque ao caixa, tudo sob controle em um só lugar.",
    challenge:
      "Produto sem etiqueta de preço, venda sem nota, estoque que não bate e financeiro feito na planilha. A loja que não tem sistema deixa dinheiro na mesa todo dia.",
    features: [
      "PDV rápido com busca por nome ou código do produto",
      "Cadastro de produtos com grade (tamanho, cor, variação)",
      "Emissão de pedidos e orçamentos para clientes",
      "Controle de estoque com entrada e saída de mercadoria",
      "Relatório de vendas por período, produto e vendedor",
      "Controle de fluxo de caixa e formas de pagamento",
      "Suporte a múltiplos vendedores e níveis de acesso",
    ],
    highlight: "Tenha visão total do seu estoque e das suas vendas sem precisar de planilha.",
  },
  {
    id: "beleza",
    name: "Salão & Beleza",
    description: "Organize atendimentos, catálogo de serviços e histórico de clientes.",
    iconName: "Sparkles",
    tagline: "Mais tempo cuidando das clientes, menos tempo apagando incêndio.",
    challenge:
      "Atendimento perdido por esquecimento, cliente que não volta porque não foi lembrado, produto que acaba sem aviso e caixa feito no papel. Isso custa caro todo mês.",
    features: [
      "Agenda de atendimentos por profissional e horário",
      "Catálogo de serviços com tempo e valor por procedimento",
      "Histórico completo de serviços por cliente",
      "Controle de produtos cosméticos usados e em estoque",
      "Controle de comissões por profissional",
      "Fluxo de caixa diário com fechamento simplificado",
      "Relatório de serviços mais realizados e receita por período",
    ],
    highlight: "Fidelize clientes com histórico completo e nunca perca um atendimento por falta de organização.",
  },
  {
    id: "delivery",
    name: "Delivery",
    description: "Gestão centralizada de pedidos da cozinha à entrega na porta.",
    iconName: "Bike",
    tagline: "Pedido recebido, preparado e entregue sem caos.",
    challenge:
      "Pedido anotado em papel, entregador sem rota, cliente sem previsão e cozinha que não sabe a fila. Delivery sem sistema é sinônimo de reclamação e prejuízo.",
    features: [
      "Painel de pedidos em tempo real por status",
      "Separação de pedidos por origem (balcão, telefone, app)",
      "Controle de fila de preparo na cozinha",
      "Gestão de entregadores e rotas de entrega",
      "Histórico de pedidos por cliente com endereço salvo",
      "Relatório de pedidos por período e canal de venda",
      "Integração com controle de caixa e formas de pagamento",
    ],
    highlight: "Processe mais pedidos com menos erro e mantenha o cliente informado do início ao fim.",
  },
];
