import React from 'react';
import { Heart, Sparkles, Shield, Banknote, UserCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppBookingUrl } from '../constants';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Heart,
      title: "100% Pain-Free Gentle Protocol",
      description: "Our localized painless anesthesia and calm approach eliminate pain so you feel relaxed and completely comfortable throughout your visit.",
      tag: "Zero Discomfort"
    },
    {
      icon: Sparkles,
      title: "Clean, Modern, Spa-Like Atmosphere",
      description: "Hospital-grade autoclaved sterilization with a soothing, anxiety-free ambiance designed to feel like a tranquil wellness lounge, not a cold clinic.",
      tag: "Strict Hygiene"
    },
    {
      icon: UserCheck,
      title: "Experienced & Gentle-Handed Doctor",
      description: "Dr. Zaheer Iqbal is recognized for his humility, meticulous clinical skill, and gentle touch that puts both anxious adults and nervous kids at ease.",
      tag: "Master Craftsmanship"
    },
    {
      icon: Banknote,
      title: "Affordable Pricing & No Hidden Costs",
      description: "Transparent, honest rates without unnecessary procedures. We offer easy installment payment plans for braces and restorative care.",
      tag: "Economical"
    },
    {
      icon: Shield,
      title: "Friendly Staff & Zero-Judgment Care",
      description: "No matter how long it has been since your last dental visit or the condition of your teeth, our welcoming team treats you with dignity and empathy.",
      tag: "Empathetic Team"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-teal-soft/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why Choose Us Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-soft text-teal-dark font-bold text-xs uppercase tracking-wider border border-teal-primary/15">
              <Sparkles className="w-3.5 h-3.5 text-coral-cta" />
              <span>The Punjab Dental Clinic Difference</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
              Why Patients in Shahdara & Beyond Choose Dr. Zaheer Iqbal
            </h2>

            <p className="text-base text-charcoal-muted leading-relaxed">
              Every detail of our clinic is engineered around patient comfort, transparent treatment plans, and proven medical safety. Here is why our patients rate us 4.9/5 stars.
            </p>

            <div className="space-y-4 pt-2">
              {reasons.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-offwhite border border-gray-100 hover:border-teal-primary/30 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <h4 className="font-heading font-bold text-base text-charcoal">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-soft text-teal-dark">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I want to experience your gentle, pain-free dental care at Punjab Dental Clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-coral-cta hover:bg-coral-hover text-white font-bold text-sm shadow-coral-glow transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Experience Painless Dentistry Today</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Hygiene Standards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Card 1: Clinic Interior */}
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-teal-primary/10">
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80"
                alt="Clean, Modern Dental Clinic Environment"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-coral-light uppercase tracking-wider">
                  Spa-Like Hygiene Standard
                </span>
                <h4 className="font-heading font-extrabold text-lg text-white">
                  100% Sterilized Dental Equipment
                </h4>
                <p className="text-xs text-teal-soft">
                  Class B autoclave sterilizer for every single patient. Zero compromise on hygiene.
                </p>
              </div>
            </div>

            {/* Reassurance Metric Box */}
            <div className="p-6 rounded-3xl bg-teal-soft border border-teal-primary/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-primary text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-sm text-teal-dark">
                    Zero-Judgment Consultation Guarantee
                  </h5>
                  <p className="text-xs text-charcoal-muted">
                    No scolding, no embarrassment. Just kind, compassionate dental healing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-teal-primary/15 text-xs text-teal-dark font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Free Initial WhatsApp Advice</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Transparent Cost Estimates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Emergency Same-Day Slots</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Gentle Children Dentistry</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
