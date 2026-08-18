import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { TrustBar } from './sections/TrustBar';
import { SegmentsSection } from './sections/SegmentsSection';
import { ProblemSolutionSection } from './sections/ProblemSolutionSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { ProductDemoSection } from './sections/ProductDemoSection';
import { RestaurantSection } from './sections/RestaurantSection';
import { MercantilSection } from './sections/MercantilSection';
import { CustomizationSection } from './sections/CustomizationSection';
import { EcosystemSection } from './sections/EcosystemSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { PricingSection } from './sections/PricingSection';
import { SecuritySection } from './sections/SecuritySection';
import { SocialProofSection } from './sections/SocialProofSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingMobileCTA } from './components/FloatingMobileCTA';
import { TermsModal } from './components/TermsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SegmentModal } from './components/SegmentModal';
import { CheckoutProvider, useCheckout } from './context/CheckoutContext';
import { SegmentProvider, useSegment } from './context/SegmentContext';

// Componente interno que tem acesso aos contexts
function AppContent() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { isOpen: isCheckoutOpen, selectedPlan, closeCheckout } = useCheckout();
  const { isOpen: isSegmentOpen, selectedSegment, closeSegmentModal } = useSegment();

  return (
    <div className="min-h-screen bg-bg-base text-fg-base selection:bg-brand-yellow selection:text-black">
      <Header />

      <main>
        <HeroSection />
        <TrustBar />
        <SegmentsSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <ProductDemoSection />
        <RestaurantSection />
        <MercantilSection />
        <CustomizationSection />
        <EcosystemSection />
        <HowItWorksSection />
        <PricingSection />
        <SecuritySection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      <FloatingMobileCTA />

      {/* Modais legais */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Modal de checkout global */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} plan={selectedPlan} />

      {/* Modal de solução de segmento global */}
      <SegmentModal
        isOpen={isSegmentOpen}
        onClose={closeSegmentModal}
        segment={selectedSegment}
      />
    </div>
  );
}

export default function App() {
  return (
    <CheckoutProvider>
      <SegmentProvider>
        <AppContent />
      </SegmentProvider>
    </CheckoutProvider>
  );
}
