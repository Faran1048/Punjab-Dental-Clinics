import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MeetDoctor } from './components/MeetDoctor';
import { Testimonials } from './components/Testimonials';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { LocationAndHours } from './components/LocationAndHours';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-charcoal font-sans selection:bg-teal-primary selection:text-white relative">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Metrics Bar */}
        <TrustStats />

        {/* 3. Specialized Services Grid */}
        <ServicesGrid />

        {/* 4. Why Choose Us Split Layout */}
        <WhyChooseUs />

        {/* 5. Meet Dr. Zaheer Iqbal Profile */}
        <MeetDoctor />

        {/* 6. Real Patient Reviews Showcase */}
        <Testimonials />

        {/* 7. Interactive Before/After & Clinic Tour */}
        <BeforeAfterGallery />

        {/* 8. Lead Capture Form (Core Conversion) */}
        <LeadCaptureForm />

        {/* 9. Location, Directions & Schedule */}
        <LocationAndHours />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Quick Action Bar */}
      <MobileBottomBar />

      {/* Floating WhatsApp Quick-Chat Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
