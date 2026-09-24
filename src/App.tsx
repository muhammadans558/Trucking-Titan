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

export default function App() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Header onGetStartedClick={scrollToContact} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onGetStarted={scrollToContact}
          onTalkToDispatcher={scrollToContact}
        />

        {/* 2. Carrier Value Proposition */}
        <ValueProposition />

        {/* 3. Core Dispatch Services */}
        <Services onSelectServiceCta={scrollToContact} />

        {/* 4. Load Selection (Beyond Posted Rate & Console) */}
        <LoadSelection />

        {/* 5. Who We Support (Equipment & Fleet Profiles) */}
        <WhoWeSupport />

        {/* 6. How It Works (4-Step Process) */}
        <HowItWorks onStartProcess={scrollToContact} />

        {/* 7. Carrier Onboarding (Call to Action) */}
        <CarrierOnboarding onStartCarrierSetup={scrollToContact} />

        {/* 8. Why Trucking Titan (Core Benefits) */}
        <WhyTruckingTitan />

        {/* 9. USA Coverage (Nationwide Scope) */}
        <UsaCoverage />

        {/* 10. About Trucking Titan */}
        <AboutSection />

        {/* 11. Carrier Pain Points Comparison */}
        <PainPointsComparison />

        {/* 12. Contact / Lead Form ("Let's Talk About Your Truck") */}
        <ContactForm />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. Final Strong CTA */}
        <FinalCta
          onGetStarted={scrollToContact}
          onContactUs={scrollToContact}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
