import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Services } from './components/Services';
import { LoadSelection } from './components/LoadSelection';
import { WhoWeSupport } from './components/WhoWeSupport';
import { HowItWorks } from './components/HowItWorks';
import { CarrierOnboarding } from './components/CarrierOnboarding';
import { WhyTruckingTitan } from './components/WhyTruckingTitan';
import { UsaCoverage } from './components/UsaCoverage';
import { AboutSection } from './components/AboutSection';
import { PainPointsComparison } from './components/PainPointsComparison';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';

export default function App() {
  const scrollToOnboarding = () => {
    const target =
      document.getElementById('carrier-onboarding') ||
      document.getElementById('onboarding');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = () => {
    const target = document.getElementById('contact');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Header onGetStartedClick={scrollToOnboarding} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onGetStarted={scrollToOnboarding}
          onTalkToDispatcher={scrollToContact}
        />

        {/* 2. Carrier Value Proposition */}
        <RevealOnScroll>
          <ValueProposition />
        </RevealOnScroll>

        {/* 3. Core Dispatch Services */}
        <RevealOnScroll>
          <Services onSelectServiceCta={scrollToOnboarding} />
        </RevealOnScroll>

        {/* 4. Load Selection (Beyond Posted Rate & Console) */}
        <RevealOnScroll>
          <LoadSelection />
        </RevealOnScroll>

        {/* 5. Who We Support (Equipment & Fleet Profiles) */}
        <RevealOnScroll>
          <WhoWeSupport />
        </RevealOnScroll>

        {/* 6. How It Works (4-Step Process) */}
        <RevealOnScroll>
          <HowItWorks onStartProcess={scrollToOnboarding} />
        </RevealOnScroll>

        {/* 7. Carrier Onboarding Form */}
        <RevealOnScroll>
          <CarrierOnboarding onStartCarrierSetup={scrollToOnboarding} />
        </RevealOnScroll>

        {/* 8. Why Trucking Titan (Core Benefits) */}
        <RevealOnScroll>
          <WhyTruckingTitan />
        </RevealOnScroll>

        {/* 9. USA Coverage (Nationwide Scope) */}
        <RevealOnScroll>
          <UsaCoverage />
        </RevealOnScroll>

        {/* 10. About Trucking Titan */}
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>

        {/* 11. Carrier Pain Points Comparison */}
        <RevealOnScroll>
          <PainPointsComparison />
        </RevealOnScroll>

        {/* 12. Contact / Lead Hub ("Let's Talk About Your Truck") */}
        <RevealOnScroll>
          <ContactForm onNavigateToOnboarding={scrollToOnboarding} />
        </RevealOnScroll>

        {/* 13. FAQ Accordion */}
        <RevealOnScroll>
          <FaqSection />
        </RevealOnScroll>

        {/* 14. Final Strong CTA */}
        <RevealOnScroll>
          <FinalCta
            onGetStarted={scrollToOnboarding}
            onContactUs={scrollToContact}
          />
        </RevealOnScroll>
      </main>

      {/* Footer */}
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
}
