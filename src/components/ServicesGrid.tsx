import React from 'react';
import { Sparkles, ShieldCheck, HeartPulse, Smile, Zap, Stethoscope, MessageCircle, CheckCircle2, Star } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { getWhatsAppBookingUrl } from '../constants';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Zap,
  Stethoscope
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-soft text-teal-dark font-bold text-xs uppercase tracking-wider border border-teal-primary/15">
            <Sparkles className="w-3.5 h-3.5 text-coral-cta" />
            <span>Comprehensive Dental Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
            Specialized Care for Your Entire Family
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted">
            From our celebrated orthodontic braces to immediate pain relief, Dr. Zaheer Iqbal combines gentle hands with modern dental technology.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-white p-7 transition-all duration-300 flex flex-col justify-between border ${
                  service.popular 
                    ? 'border-coral-cta ring-2 ring-coral-cta/20 shadow-soft-lg' 
                    : 'border-gray-200/80 hover:border-teal-primary/30 shadow-soft-sm hover:shadow-soft-md'
                } gradient-card-hover`}
              >
                {/* Popular Badge for Braces */}
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 bg-coral-cta text-white text-xs font-black px-3.5 py-1 rounded-full shadow-coral-glow flex items-center gap-1 uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Most Popular & Recommended</span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      service.popular 
                        ? 'bg-coral-light text-coral-cta' 
                        : 'bg-teal-soft text-teal-primary'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-extrabold text-charcoal">
                        {service.title}
                      </h3>
                      <p className="text-xs font-bold text-teal-primary">
                        Dr. Zaheer Iqbal
                      </p>
                    </div>
                  </div>

                  {/* Short Patient Benefit Line */}
                  <div className="bg-teal-soft/40 border-l-4 border-teal-primary p-2.5 rounded-r-xl mb-4">
                    <p className="text-xs font-semibold text-teal-dark">
                      💡 {service.shortBenefit}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-charcoal-muted leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-teal-primary flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Patient Highlight Quote */}
                  <div className="p-3 bg-gray-50 rounded-xl text-xs text-charcoal-muted italic mb-6 border border-gray-100">
                    {service.patientHighlight}
                  </div>
                </div>

                {/* Direct Action: WhatsApp Inquire */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppBookingUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      service.popular
                        ? 'bg-coral-cta hover:bg-coral-hover text-white shadow-coral-glow'
                        : 'bg-teal-soft hover:bg-teal-primary text-teal-dark hover:text-white border border-teal-primary/20'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire / Book on WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Need custom advice callout banner */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-teal-primary/15 shadow-soft-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-charcoal">
              Not sure which dental treatment you need?
            </h4>
            <p className="text-sm text-charcoal-muted">
              Dr. Zaheer provides honest, zero-judgment checkups and explains all economical options.
            </p>
          </div>
          <a
            href="#book-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-primary hover:bg-teal-dark text-white font-bold text-sm shadow-teal-glow transition-all whitespace-nowrap"
          >
            <span>Book A Free Examination</span>
          </a>
        </div>

      </div>
    </section>
  );
};
