import React from 'react';
import { MessageCircle, Phone, Star, ShieldCheck, Heart, Sparkles, Award, MapPin } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-teal-soft/40 via-offwhite to-white">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-soft/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-coral-soft/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Lead Generation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Local Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-soft text-teal-dark font-semibold text-xs sm:text-sm border border-teal-primary/20 shadow-soft-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-coral-cta animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-teal-primary" />
              <span>Shahdara, Lahore · Trusted by Families for Years</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-charcoal tracking-tight leading-[1.12]">
              Painless Dentistry, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary via-teal-light to-teal-dark">
                Real Smiles.
              </span>
            </h1>

            {/* Subheadline with Doctor Credentials & Patient Positioning */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience gentle, zero-judgment dental care by <strong className="text-charcoal font-semibold">Dr. Zaheer Iqbal</strong>. Specialists in <strong className="text-teal-primary font-semibold">Braces & Orthodontics</strong>, Implants, and Root Canal Relief. A clean, modern clinic that feels like a wellness spa.
            </p>

            {/* Urdu Warm Tagline */}
            <div className="text-teal-dark/90 font-medium text-sm sm:text-base bg-teal-soft/60 px-4 py-2 rounded-xl inline-block border border-teal-primary/10">
              🇵🇰 بغیر کسی تکلیف کے جدید علاج اور قدرتی مسکراہٹ
            </div>

            {/* Conversion CTA Group: Triple Stacked for High Pakistani Conversion */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              
              {/* Primary WhatsApp Booking Button with Coral High Contrast Pop */}
              <a
                href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I want to book a free consultation for my teeth at Punjab Dental Clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-coral-cta hover:bg-coral-hover text-white font-extrabold text-base sm:text-lg shadow-coral-glow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 pulse-ring-coral"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-white text-coral-cta" />
                </div>
                <span>📱 Book on WhatsApp</span>
              </a>

              {/* Secondary Call Now Button */}
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-teal-soft text-teal-dark font-bold text-base border-2 border-teal-primary/30 hover:border-teal-primary transition-all duration-200 shadow-soft-sm"
              >
                <Phone className="w-5 h-5 text-teal-primary" />
                <span>📞 Call: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Proof Trust Strip */}
            <div className="pt-4 border-t border-gray-200/80">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Gold Star Badge */}
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-soft-sm border border-gray-100">
                  <div className="flex items-center text-gold-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
                    ))}
                  </div>
                  <span className="font-bold text-charcoal text-sm">4.9 / 5.0</span>
                  <span className="text-xs text-charcoal-muted">({CLINIC_INFO.stats.reviewCount} Reviews)</span>
                </div>

                {/* Specialties Summary Strip */}
                <div className="text-xs font-semibold text-charcoal-muted flex flex-wrap items-center justify-center gap-2">
                  <span className="bg-teal-soft text-teal-dark px-2.5 py-1 rounded-md">Braces Specialist</span>
                  <span className="bg-teal-soft text-teal-dark px-2.5 py-1 rounded-md">Painless RCT</span>
                  <span className="bg-teal-soft text-teal-dark px-2.5 py-1 rounded-md">Implants</span>
                  <span className="bg-teal-soft text-teal-dark px-2.5 py-1 rounded-md">Dentures</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor / Clinic Visual Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Punjab Dental Clinic Shahdara Lahore - Modern Painless Dental Care"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay with Clinic Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-coral-cta bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-max mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Shahdara's Trusted Dental Care</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Dr. Zaheer Iqbal
                  </h3>
                  <p className="text-teal-soft text-xs sm:text-sm font-medium">
                    Orthodontics, Dental Implants & Aesthetic Dentistry
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: 100% Painless Care */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft-md border border-teal-primary/15 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-teal-soft flex items-center justify-center text-teal-primary">
                  <Heart className="w-5 h-5 text-teal-primary fill-teal-soft" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">100% Pain-Free</p>
                  <p className="text-[11px] text-charcoal-muted font-medium">Gentle-Handed Touch</p>
                </div>
              </div>

              {/* Floating Badge 2: Patients Travel from Okara */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-soft-md border border-coral-cta/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center text-coral-cta">
                  <Award className="w-5 h-5 text-coral-cta" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Braces Specialist</p>
                  <p className="text-[11px] text-teal-primary font-semibold">Patients Travel from Okara</p>
                </div>
              </div>

              {/* Floating Badge 3: Economical Pricing */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-teal-primary text-white p-2.5 rounded-xl shadow-teal-glow items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="text-xs font-bold">Affordable Rates</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
