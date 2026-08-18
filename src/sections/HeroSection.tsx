import React from 'react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { DashboardMockup } from '../components/DashboardMockup';
import { FloatingMetric } from '../components/FloatingMetric';
import { ArrowRight, Play, Sparkles, CheckCircle2, ShoppingBag, Wallet, Package, Users, Zap } from 'lucide-react';
import { useCheckout } from '../context/CheckoutContext';

export const HeroSection: React.FC = () => {
  const { openCheckout } = useCheckout();
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-hero-gradient">
      {/* Background ambient lighting glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-brand-purple/20 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-brand-blue/10 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-magenta/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Stack - Compact on mobile so CTA is visible above fold */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">
          {/* Badge */}
          <Badge variant="yellow" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Tecnologia para o seu negócio
          </Badge>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
            Seu negócio mais organizado.{' '}
            <span className="text-gradient-brand block sm:inline">
              Suas vendas em um só lugar.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
            Venda, organize pedidos, controle estoque e acompanhe seu dinheiro em uma plataforma simples, moderna e feita para o seu negócio.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-glow-yellow"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => openCheckout()}
            >
              Começar agora
            </Button>

            <a href="#demo" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<Play className="w-4 h-4 text-brand-yellow fill-brand-yellow" />}
              >
                Ver como funciona
              </Button>
            </a>
          </div>

          {/* Microtext */}
          <p className="text-xs sm:text-sm text-white/60 font-mono flex items-center justify-center gap-1.5 flex-wrap pt-1">
            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
            <span>Para restaurantes, mercantis, lojas, salões, delivery e negócios locais.</span>
          </p>
        </div>

        {/* Dashboard Mockup Container with Floating Elements */}
        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          {/* Floating Pill Badges (Positioned around dashboard on desktop, hidden on tiny mobile to avoid overlap) */}
          <div className="hidden lg:block">
            {/* Top Left: Novo pedido */}
            <FloatingMetric
              icon={<ShoppingBag className="w-4 h-4 text-brand-yellow" />}
              title="Novo pedido"
              subtitle="R$ 89,90 · Cozinha"
              badgeColor="yellow"
              className="absolute -top-6 -left-8 z-30"
            />

            {/* Top Right: Caixa aberto */}
            <FloatingMetric
              icon={<Wallet className="w-4 h-4 text-brand-green" />}
              title="Caixa aberto"
              subtitle="R$ 2.450,00 · Dinheiro"
              badgeColor="green"
              reverse
              className="absolute -top-6 -right-8 z-30"
            />

            {/* Middle Left: Estoque */}
            <FloatingMetric
              icon={<Package className="w-4 h-4 text-brand-blue" />}
              title="Estoque"
              subtitle="Tudo certo · 248 itens"
              badgeColor="blue"
              reverse
              className="absolute top-1/2 -left-12 -translate-y-1/2 z-30"
            />

            {/* Bottom Right: Novo cliente */}
            <FloatingMetric
              icon={<Users className="w-4 h-4 text-pink-400" />}
              title="Novo cliente"
              subtitle="Cadastrado agora"
              badgeColor="magenta"
              className="absolute -bottom-6 -right-6 z-30"
            />

            {/* Bottom Left: Venda realizada */}
            <FloatingMetric
              icon={<Zap className="w-4 h-4 text-brand-yellow" />}
              title="Venda realizada"
              subtitle="R$ 120,00 · PIX"
              badgeColor="yellow"
              reverse
              className="absolute -bottom-6 -left-6 z-30"
            />
          </div>

          {/* Interactive Mockup Component */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};
