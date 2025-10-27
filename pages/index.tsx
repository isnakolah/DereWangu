import React, { useState, useEffect } from 'react';
import {
  Navigation,
  HeroSection,
  StatsBar,
  HowItWorks,
  SafetySection,
  BusinessSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
  Footer
} from '@/components/landing';

export default function DereWanguLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <Navigation scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <SafetySection />
      <BusinessSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

