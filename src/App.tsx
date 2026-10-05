import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { CareGuideSection } from './components/CareGuideSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Language, ServiceItem } from './types';
import { SERVICES_DATA } from './data/services';

export default function App() {
  const [lang, setLang] = useState<Language>('ky');
  // Default with one popular service selected for immediate demonstration
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([
    SERVICES_DATA[0], // Пудровый каш
  ]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
    // Scroll to booking section for smooth client feedback
    scrollToBooking();
  };

  const handleToggleService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleClearSelected = () => {
    setSelectedServices([]);
  };

  // Update HTML title on language change
  useEffect(() => {
    if (lang === 'ky') {
      document.title = 'Салон Салидат — Ат-Башы | Брови & Перманентный макияж';
    } else {
      document.title = 'Салон красоты «Салидат» — Ат-Башы | Брови и перманент';
    }
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 selection:bg-rose-200 selection:text-rose-900">
      {/* Navigation Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onBookClick={scrollToBooking}
        />

        {/* Services & Price List */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
          selectedServiceIds={selectedServices.map((s) => s.id)}
        />

        {/* Before & After Portfolio Showcase */}
        <PortfolioSection
          lang={lang}
          onBookClick={scrollToBooking}
        />

        {/* Interactive Booking & WhatsApp Message Builder */}
        <BookingSection
          lang={lang}
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onClearSelected={handleClearSelected}
        />

        {/* Why Choose Salon Salidat & Reviews */}
        <AdvantagesSection
          lang={lang}
        />

        {/* Care Guide & FAQ */}
        <CareGuideSection
          lang={lang}
        />

        {/* Address, Map & Directions */}
        <LocationSection
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
      />

      {/* Persistent Floating Bar for Quick Mobile Access */}
      <FloatingActions
        lang={lang}
        onBookClick={scrollToBooking}
      />
    </div>
  );
}
