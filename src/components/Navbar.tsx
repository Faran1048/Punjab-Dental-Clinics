import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, Star, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Meet Dr. Zaheer', href: '#meet-doctor' },
    { label: 'Patient Reviews', href: '#testimonials' },
    { label: 'Smile Gallery', href: '#gallery' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-teal-dark text-white text-xs py-2 px-4 border-b border-teal-light/20 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-teal-soft font-medium">
              <MapPin className="w-3.5 h-3.5 text-coral-cta" />
              Shahdara, Lahore
            </span>
            <span className="hidden md:inline text-teal-light/60">•</span>
            <span className="hidden md:flex items-center gap-1 text-gold-light">
              <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
              <span className="font-semibold text-white">4.9 / 5.0</span> (60+ Verified Patient Reviews)
            </span>
            <span className="hidden lg:inline text-teal-light/60">•</span>
            <span className="hidden lg:flex items-center gap-1 text-teal-soft">
              <Clock className="w-3.5 h-3.5 text-teal-light" />
              Mon–Sat: 3:00 PM – 10:00 PM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/80 hidden sm:inline">Emergency & Inquiries:</span>
            <a 
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="font-bold text-coral-cta hover:text-white transition-colors flex items-center gap-1 tracking-wide"
            >
              <Phone className="w-3 h-3" />
              {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft-md py-3' 
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Clinic Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-teal-primary flex items-center justify-center text-white shadow-soft-sm group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                <path d="M30 35C30 25 40 22 50 26C60 22 70 25 70 35C70 48 66 60 58 74C56 77 52 77 50 72C48 77 44 77 42 74C34 60 30 48 30 35Z" fill="#FAFAF9" stroke="#E6F5F3" strokeWidth="3"/>
                <path d="M40 45C44 50 56 50 60 45" stroke="#FF7A59" strokeWidth="5" strokeLinecap="round"/>
                <circle cx="68" cy="32" r="4" fill="#D4AF37"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-teal-dark tracking-tight leading-none">
                  Punjab Dental Clinic
                </span>
              </div>
              <p className="text-xs text-charcoal-muted font-medium flex items-center gap-1 mt-0.5">
                <span className="text-teal-primary font-semibold">Dr. Zaheer Iqbal</span> · Shahdara Lahore
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-charcoal hover:text-teal-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-primary hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Button */}
            <a
              href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I want to book a consultation at Punjab Dental Clinic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-soft text-teal-dark font-semibold text-xs border border-teal-primary/20 hover:bg-teal-primary hover:text-white transition-all duration-200"
              title="Chat with Dr. Zaheer Iqbal on WhatsApp"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <MessageCircle className="w-4 h-4 text-teal-primary group-hover:text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Book Free Consultation Primary CTA */}
            <a
              href="#book-appointment"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-coral-cta hover:bg-coral-hover text-white font-bold text-xs sm:text-sm shadow-coral-glow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-charcoal hover:text-teal-primary hover:bg-teal-soft/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-soft text-teal-dark font-bold text-xs border border-teal-primary/20"
              >
                <Phone className="w-4 h-4 text-teal-primary" />
                <span>Call Now</span>
              </a>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-coral-cta text-white font-bold text-xs shadow-soft-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal hover:bg-teal-soft/60 hover:text-teal-primary transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-charcoal-muted">›</span>
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href="#book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-primary text-white font-bold text-sm shadow-teal-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation Now</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
