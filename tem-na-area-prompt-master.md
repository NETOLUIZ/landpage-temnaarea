# TEM NA ÁREA — Prompt Master do Site Oficial

> Escrito na primeira pessoa, como se eu (fundador da KorenTech) estivesse te
> passando o briefing direto. Use este arquivo como prompt raiz no Claude Code.
> Ele está dividido em **fases** — não peça pra rodar tudo de uma vez. Cole
> uma fase por vez, na ordem, e só avança pra próxima depois de verificar o
> critério de sucesso daquela fase.

---

## 0. QUEM SOU EU E O QUE EU QUERO

Eu sou o Tem na Área. Não sou mais um SaaS de gestão genérico — sou a
ferramenta que o dono de restaurante, mercantil, barbearia, loja ou salão
usa pra parar de administrar o negócio no improviso.

Eu não quero um site que pareça "software corporativo azul com cards
genéricos". Eu quero que quem abrir minha página em qualquer canto do
Brasil pense: **"caramba, isso é diferente"** — e dez segundos depois,
**"isso serve pro meu negócio"**.

Minha identidade nasce do meu logo: amarelo, roxo, azul, magenta, preto,
estética de grafite, energia de rua. Mas eu preciso continuar parecendo um
produto SaaS sério — não um flyer de evento. A proporção que eu quero:

**70% SaaS premium · 20% identidade Tem na Área · 10% street/grafite**

Minha régua de conversão em qualquer seção nova que alguém propuser:
**PROBLEMA → SOLUÇÃO → BENEFÍCIO → AÇÃO.**

Minha regra de ouro: o visitante deve sair pensando **"eu consigo
administrar meu negócio melhor com isso"** — não **"que site bonito"**. O
site bonito é consequência, não é o objetivo.

---

## 1. COMO EU QUERO SER CONSTRUÍDO (regras de execução — leia antes de codar)

Isto aqui é um projeto real da KorenTech, não um mockup descartável. Por
isso, as regras de comportamento de desenvolvimento da KorenTech valem
integralmente:

- **Pensa antes de codar.** Se houver mais de uma forma de interpretar uma
  seção deste prompt, para e apresenta as opções — não escolhe em silêncio.
- **Mudanças cirúrgicas por fase.** Este documento está dividido em fases
  (seção 3). Não pula fase. Cada fase tem um critério de "pronto" — só
  declara a fase concluída depois de rodar o build e conferir esse critério.
- **Sem informação inventada.** Preço, depoimento, cliente, número de
  usuários, integração — se não existe hoje, vira `CONFIG` ou placeholder
  explícito. Nunca aparece como texto definitivo na tela.
- **Ambiente.** Este é um projeto novo (`npm create vite@latest`), então não
  há risco de produção aqui — mas quando chegar a hora do deploy, ele **não
  substitui** o site em produção direto. Sobe primeiro num subdomínio de
  staging (ex: `novo.tem-na-area.korentech.com.br`) atrás do mesmo padrão de
  Nginx + Certbot que uso nos outros projetos, e só depois eu decido o swap
  de DNS/proxy. Isso não é parte deste prompt de frontend — é um lembrete
  pra quando chegarmos lá.

---

## 2. CONFIGURAÇÃO CENTRAL (criar antes de qualquer seção)

Tudo que pode mudar sem precisar mexer em componente vai em config.
Nada de URL, preço ou feature-flag espalhado no meio do JSX.

```
src/config/site.ts
```
```ts
export const SITE = {
  SITE_NAME: "Tem na Área",
  COMPANY_NAME: "KorenTech",
  LOGIN_URL: "#",      // preencher quando o app tiver domínio definido
  SIGNUP_URL: "#",
  SUPPORT_URL: "#",
  CONTACT_URL: "#",
  DEMO_URL: "#",
  ENABLE_FREE_TRIAL: false, // true só quando eu confirmar que existe trial
} as const
```

```
src/data/navigation.ts   // NAV_SOLUTIONS, NAV_FEATURES, NAV_DEMO, NAV_PRICING, NAV_FAQ
src/data/pricing.ts      // preços e features por plano — ver seção 8
src/data/segments.ts     // restaurante, mercantil, loja, barbearia, beleza, delivery
src/data/features.ts     // recursos (vendas, caixa, estoque, pedidos...)
src/data/faq.ts
src/data/testimonials.ts // hoje só placeholders, ver seção 9
src/data/tracking.ts     // ver seção 2.1 — isso não estava no briefing original e precisa entrar
```

### 2.1 — Tracking (isso faltava no briefing original)

Uma landing comercial sem pixel é uma landing que não aprende com quem
visita. Preparar (sem ativar, se eu ainda não tiver os IDs):

```ts
// src/data/tracking.ts
export const TRACKING = {
  GA4_ID: null,        // ex: "G-XXXXXXX"
  META_PIXEL_ID: null, // ex: "1234567890"
  GTM_ID: null,
} as const
```
Se o ID for `null`, o script correspondente **não** é injetado — nunca
carregar pixel vazio ou com ID fake. Marcar eventos-chave: clique em
"Começar agora" (header, hero, planos, CTA final), clique em "Ver como
funciona", troca de tab na demo interativa, submit de formulário se houver.

---

## 3. FASES DE EXECUÇÃO

Não implementar tudo de uma vez. Cada fase abaixo é um prompt independente
— cole uma por turno no Claude Code.

### Fase 0 — Fundação
Setup do projeto (React + Vite + TypeScript + Tailwind + Lucide React),
design tokens (seção 4), estrutura de pastas (seção 10), componentes base
(`Button`, `Badge`, `GlassCard`, `SectionTitle`, `CTA`).
**Critério de pronto:** `npm run build` sem erro, Storybook ou página de
teste mostrando os 5 componentes em todos os estados (default/hover/focus/
disabled), contraste de cada combinação texto/fundo checado (ver seção 4.3).

### Fase 1 — Primeira dobra
Header (seção 11) + Hero (seções 12–15) + Trust Bar (seção 16).
**Critério de pronto:** hero renderiza em 375px/768px/1440px sem overflow,
CTA visível sem scroll em mobile, dashboard mockup com dado demonstrativo
rotulado.

### Fase 2 — Convencimento
Feito pra quem tá no corre (17) + Segmentos (18–19) + Antes×Depois (20) +
Recursos (21–23) + Demonstração interativa (24–25).
**Critério de pronto:** todas as tabs da demo trocam conteúdo sem
recarregar, hover nos cards funciona no desktop e tap funciona no mobile.

### Fase 3 — Prova de encaixe
Restaurante (26) + Mercantil (27) + Personalização (28) + Ecossistema (29–30).
**Critério de pronto:** ilustração do ecossistema anima em sequência
(núcleo → segmentos → linhas) ao entrar na viewport, sem jank em mobile.

### Fase 4 — Conversão
Não precisa entender de tecnologia (31) + Como funciona (32) + Planos (33–35)
+ Segurança (36) + Prova social (37–38) + FAQ (39).
**Critério de pronto:** os 3 preços vêm de `pricing.ts`, plano do meio
visualmente destacado, FAQ com accordion acessível por teclado.

### Fase 5 — Fechamento
CTA final (40) + CTA flutuante mobile (41) + Footer (42) + SEO (43) +
Acessibilidade (44) + Performance (45).
**Critério de pronto:** Lighthouse ≥ 90 em Performance/Acessibilidade/SEO,
meta tags OG/Twitter presentes, ano do footer dinâmico (`new
Date().getFullYear()`, nunca hardcoded).

### Fase 6 — Eu reviso como cliente
Rodar o checklist da seção 11 e o teste de 5/10/20/30 segundos da seção 12.
Qualquer "não" vira ajuste antes de considerar o site pronto.

---

## 4. IDENTIDADE VISUAL

### 4.1 — Paleta como tokens semânticos

Nada de hex direto no JSX. Definir uma vez, usar em todo lugar
(`bg-brand-primary`, não `bg-[#FFD700]`).

```css
:root {
  --bg-base: #08090D;
  --bg-secondary: #0D0E12;

  --brand-yellow: #FFD700;   /* CTA, ação, venda, número importante */
  --brand-yellow-soft: #FFE16D;
  --brand-purple: #7A20B0;   /* tecnologia, recursos, módulos, premium */
  --brand-magenta: #F000B8;  /* criatividade, destaque, gradiente */
  --brand-blue: #00D2FF;     /* confiança, informação, gráfico */
  --brand-green: #00FFAB;    /* sucesso, pagamento, estoque ok */
  --fg-base: #FFFFFF;
}
```

Regra de uso — cada cor tem UM papel, não decoração aleatória:
| Cor | Uso |
|---|---|
| Amarelo | CTA principal, ações, números-chave |
| Roxo | Tecnologia, recursos, módulos, elementos premium |
| Azul | Confiança, informação, gráficos, elementos secundários |
| Magenta | Detalhe, gradiente, criatividade — nunca como cor de texto de corpo |
| Verde | Status positivo, pagamento confirmado, estoque ok |

Nunca usar as cinco cores ao mesmo tempo no mesmo componente.

### 4.2 — Tipografia
- Títulos/display: **Plus Jakarta Sans** (ou Space Grotesk como alternativa bold)
- Corpo de texto: **Hanken Grotesk**
- Labels pequenos, dados, badges: **JetBrains Mono**

### 4.3 — Contraste é regra dura, não sugestão

Fundo escuro + gradiente + glow é bonito e é onde a maioria dos sites
"street SaaS" perde pontos de acessibilidade. Trava não-negociável:

- Texto de corpo sobre `--bg-base`/`--bg-secondary`: mínimo **4.5:1**.
- Texto grande (18px+, headline): mínimo **3:1**.
- **Nunca** colocar texto de corpo diretamente sobre o gradiente
  amarelo→magenta→azul do hero — o gradiente é para a palavra de destaque
  (poucas palavras, tipografia grande), nunca para frase inteira ou texto
  pequeno.
- Todo componente com glow/glassmorphism precisa ser checado com o texto
  por cima *depois* do efeito aplicado, não antes.

### 4.4 — Estilo visual
Fundo escuro, gradientes radiais (roxo, azul), glow amarelo pontual,
glassmorphism moderado, cards premium com borda discreta, elementos 3D
sutis, splashes de grafite discretos inspirados no logo, linhas
luminosas. Não poluir — o teste é: "isso ainda parece um produto SaaS
sério, ou já virou banner de evento?"

---

## 5. HEADER

Desktop: Logo · Soluções · Recursos · Demonstração · Planos · FAQ ·
Entrar · **Começar agora** (CTA amarelo).

Fixed, sticky, backdrop-blur, transparente no topo → fundo escuro + glow
discreto ao rolar. Mobile: drawer/fullscreen premium com os mesmos itens
+ animação de abertura.

---

## 6. HERO — a dobra mais importante

**Badge:** Tecnologia para o seu negócio

**Título:**
> Seu negócio mais organizado. Suas vendas em um só lugar.

(destacar um trecho com gradiente amarelo → magenta → azul, respeitando
4.4.3 — só a palavra de destaque, tipografia grande)

**Subtítulo:**
> Venda, organize pedidos, controle estoque e acompanhe seu dinheiro em
> uma plataforma simples, moderna e feita para o seu negócio.

**CTAs:** Começar agora · Ver como funciona
**Microtexto:** Para restaurantes, mercantis, lojas, salões, delivery e
negócios locais.

### Mockup do dashboard (dado 100% fictício, rotulado como "dados
demonstrativos" de forma visível — não é métrica real do produto):
Vendas hoje R$ 3.840,00 · Pedidos 18 · Produtos 248 · Clientes 126 ·
Crescimento +18,4%

### Elementos flutuantes ao redor (animação suave, nunca `animate-bounce`):
Novo pedido (R$ 89,90) · Caixa aberto (R$ 2.450,00) · Estoque (tudo certo)
· Novo cliente cadastrado · Venda realizada (R$ 120,00)

---

## 7. SEÇÕES DE CONVENCIMENTO

### Trust bar
"Tudo que você precisa em um só lugar." — Vendas, Caixa, Estoque,
Pedidos, Delivery, Mesas, Clientes, Relatórios, cada um com ícone Lucide.

### Feito para quem tá no corre
> "Para quem abre a porta cedo, fecha tarde e precisa fazer o negócio
> acontecer."
Segmentos ilustrados: Restaurante, Mercantil, Barbearia, Loja, Beleza,
Delivery. Sem fotos de pessoas reais sem necessidade.

### Segmentos (cards grandes, interativos)
Restaurante · Mercantil · Loja · Barbearia · Beleza · Delivery — cada um
com descrição curta e CTA que aparece no hover (desktop) ou tap (mobile).

### Antes × Depois
> "Chega de administrar seu negócio no improviso."
Esquerda (❌): pedido perdido no WhatsApp, anotação em papel, estoque
desatualizado, caixa difícil de acompanhar, informação espalhada.
Direita (✓): pedidos organizados, estoque controlado, caixa acompanhado,
vendas registradas, tudo em um só lugar.

### Copy de benefício (nunca feature crua)
- Em vez de "controle de estoque" → **"Saiba o que está acabando antes
  do seu cliente perceber."**
- Em vez de "controle de caixa" → **"Saiba quanto entrou no seu negócio
  hoje."**
- Em vez de "gestão de pedidos" → **"Pare de procurar pedido perdido no
  WhatsApp."**
- Em vez de "relatórios" → **"Entenda o que está vendendo e como está
  seu negócio."**

### Recursos
Vendas · Caixa · Estoque · Pedidos · Delivery · Mesas · Clientes ·
Relatórios · Usuários — cards com hover: ícone ganha cor, borda acende,
descrição aparece, card eleva levemente.

### Demonstração interativa
"Não precisa imaginar. Veja funcionando." Tabs: Dashboard, Vendas,
Pedidos, Estoque, Caixa, Relatórios — sem backend, dados fictícios, mas
com fidelidade visual de sistema real.

---

## 8. SEÇÕES DE ENCAIXE POR SEGMENTO

### Restaurante
> "Seu restaurante em outro nível." — "Do pedido do garçom ao fechamento
> da conta, tudo conectado."
Fluxo: Garçom → Pedido → Cozinha → Entrega → Pagamento → Fechamento.
CTA: Conhecer solução para restaurantes.

### Mercantil
> "Mais controle para o seu mercantil."
Produtos, Estoque, Vendas, Caixa, Categorias, Relatórios.
CTA: Conhecer solução para mercantis.

### Personalização
> "Seu sistema. Sua marca." — mockup mostrando logo/nome/cores do
> cliente substituindo o padrão genérico (ex: usar o caso Ribeiro
> Restaurante como referência visual, já que é cliente real).

### Ecossistema Tem na Área
> "Um só sistema. Vários negócios." Composição central (Tem na Área) com
> os segmentos ao redor conectados por linha — usar a arte de referência
> anexada como guia de estilo, não para reprodução literal em produção
> (definir se vira SVG ilustrado próprio ou ilustração vetorizada
> encomendada; imagem gerada por IA não sobe direto pro site final).
Animação: núcleo aparece → segmentos aparecem → linhas conectam, ao
entrar na viewport.

---

## 9. CONFIANÇA E CONVERSÃO

### Não precisa entender de tecnologia
Três pilares: Fácil de aprender · Tudo organizado · Suporte quando
precisar.

### Como funciona
01 Escolha seu negócio · 02 Configure sua plataforma · 03 Cadastre
produtos e equipe · 04 Comece a trabalhar. Timeline horizontal
(desktop) / vertical (mobile).

### Planos — vêm de `pricing.ts`, nunca hardcoded no componente
```ts
// src/data/pricing.ts — valores abaixo são os que tenho hoje;
// se mudarem, só edito aqui.
export const PLANS = [
  { id: "basico", name: "Básico", price: 59.90, highlight: false,
    description: "Para começar a organizar seu negócio.", features: [...] },
  { id: "profissional", name: "Profissional", price: 99.90, highlight: true,
    badge: "MAIS ESCOLHIDO",
    description: "Para negócios que precisam de mais recursos.", features: [...] },
  { id: "premium", name: "Premium", price: 159.90, highlight: false,
    description: "Para operações que querem uma solução mais completa.", features: [...] },
] as const
```
Plano do meio com borda amarela, glow, badge, leve elevação, CTA mais
forte — os três cards nunca são visualmente iguais.
Se `SITE.ENABLE_FREE_TRIAL` for `false`, não mostrar nenhuma menção a
teste grátis em nenhuma seção.

### Segurança
Controle de acesso · Usuários e permissões · Proteção de informações ·
Dados armazenados com segurança · Backup. Nunca prometer "100% seguro"
ou "impossível ser hackeado".

### Prova social — hoje é 100% placeholder
```ts
// src/data/testimonials.ts
export const TESTIMONIALS = [
  { client: "CLIENTE_REAL_01", quote: "DEPOIMENTO_REAL_01", logo: "LOGO_CLIENTE_01" },
]
```
Quando eu tiver depoimento real, troco aqui — não antes.

### Caso Ribeiro Restaurante
Estrutura pronta (Problema → Implementação → Resultado) mas **sem
número de resultado inventado**. Se eu não te passar o dado real de
crescimento, o campo fica como placeholder configurável, não como texto
definitivo.

### FAQ
O que é o Tem na Área? · Para quais negócios serve? · Preciso instalar
algo? · Funciona no celular? · Posso personalizar com minha marca? ·
Posso cadastrar funcionários? · Controlo estoque? · Trabalho com mesas
e comandas? · Tem delivery? · Como funciona o suporte? · Posso
cancelar? · Como funciona a parte fiscal? — respostas só com
funcionalidades que existem de fato hoje.

---

## 10. FECHAMENTO

### CTA final
Fundo com as cinco cores do sistema. "Pronto para deixar seu negócio
mais organizado?" + "Tenha as ferramentas que você precisa para vender,
controlar e acompanhar seu negócio em um só lugar." CTA: Começar agora
/ Conhecer a plataforma.

### CTA flutuante mobile
Persistente, não invasivo. Desktop: CTA discreto só depois de
determinado scroll.

### Footer
Logo + "Tecnologia para ajudar negócios locais a crescer." Colunas:
Produto (Recursos, Soluções, Planos, Demonstração) · Empresa (KorenTech,
Sobre, Contato) · Suporte (Central de ajuda, FAQ, Suporte) · Legal
(Privacidade, Termos). Sem "API Docs" ou "Carreiras" — não existem
ainda. Ano sempre dinâmico: `© {new Date().getFullYear()} KorenTech.`

---

## 11. ESTRUTURA DE PASTAS

```
src/
  components/
    Header/ Logo/ Button/ Badge/ GlassCard/ DashboardMockup/
    FloatingMetric/ FeatureCard/ SegmentCard/ PricingCard/ FAQItem/
    TestimonialCard/ SectionTitle/ CTA/
  sections/
    HeroSection/ TrustBar/ SegmentsSection/ ProblemSolutionSection/
    FeaturesSection/ ProductDemoSection/ RestaurantSection/
    MercantilSection/ CustomizationSection/ EcosystemSection/
    HowItWorksSection/ PricingSection/ SecuritySection/
    SocialProofSection/ FAQSection/ FinalCTASection/
  data/
  config/
  assets/
  styles/
  lib/
  hooks/
```

Stack: React + Vite + TypeScript + Tailwind CSS + Lucide React. Sem
biblioteca desnecessária. Componentes funcionais com hooks, sem
over-engineering de estado (Regra 2 do padrão KorenTech: mínimo de
código que resolve o problema).

---

## 12. ANTES DE EU CONSIDERAR PRONTO — checklist final

Em 5 segundos: entendi o que é? Em 10s: entendi pra quem serve? Em 20s:
entendi o benefício? Em 30s: vi o produto? Em 1 min: sei quanto custa?
Antes de sair: sei como começar? — qualquer "não" aqui é ajuste
obrigatório antes de fechar a fase 5.

Teste técnico: build sem erro TS, zero warning de console, todos os
links de âncora (#solucoes, #recursos, #precos, #faq, #demo) apontando
pra seção que existe de verdade, todas as tabs/accordion/menu testados,
responsivo checado em 375/390/430/768/1024/1280/1440/1920, Lighthouse
≥ 90 em Performance/A11y/SEO.

---

## 13. O QUE EU NUNCA QUERO VER NO SITE

Cliente inventado, depoimento inventado, número/faturamento inventado,
integração que não existe, certificação que não existe, garantia que
não existe, lorem ipsum, hex hardcoded fora dos tokens, texto sobre
gradiente sem contraste checado, ano de copyright fixo, "API Docs" numa
landing comercial, animação sem `prefers-reduced-motion`, hover como
única forma de acessar conteúdo em mobile.
