import React from 'react';
import { Star, Award, Heart, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

export const MeetDoctor: React.FC = () => {
  return (
    <section id="meet-doctor" className="py-20 bg-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-teal-primary/15 shadow-soft-lg p-8 sm:p-12 lg:p-14 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Doctor Photo & Badges */}
            <div className="lg:col-span-5 text-center sm:text-left">
              <div className="relative inline-block max-w-sm w-full mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-soft-md border-4 border-teal-soft">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                    alt="Dr. Zaheer Iqbal - Lead Dental Surgeon at Punjab Dental Clinic Shahdara Lahore"
                    className="w-full h-96 object-cover object-top"
                  />
                </div>

                {/* Verified Doctor Badge */}
                <div className="absolute -bottom-4 left-1/2 sm:left-6 transform -translate-x-1/2 sm:translate-x-0 bg-teal-primary text-white py-2 px-4 rounded-xl shadow-teal-glow flex items-center gap-2 text-xs font-bold whitespace-nowrap">
                  <Award className="w-4 h-4 text-coral-cta" />
                  <span>Dr. Zaheer Iqbal (BDS)</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-soft-sm flex items-center gap-1.5 text-xs font-bold text-charcoal border border-gray-100">
                  <Star className="w-4 h-4 fill-gold-accent text-gold-accent" />
                  <span>4.9 / 5.0</span>
                </div>
              </div>

              <div className="mt-8 text-center sm:text-left space-y-1">
                <p className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
                  Serving Shahdara, Lahore & Punjab
                </p>
                <p className="text-sm font-bold text-teal-dark flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-4 h-4 text-coral-cta" />
                  Punjab Dental Clinic, Shahdara Lahore
                </p>
              </div>
            </div>

            {/* Doctor Bio & Quote */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-coral-cta uppercase tracking-wider bg-coral-light px-3 py-1 rounded-full inline-block">
                  Meet Your Doctor
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
                  Dr. Zaheer Iqbal
                </h2>
                <p className="text-sm sm:text-base font-semibold text-teal-primary">
                  Orthodontics, Dental Implants & Painless Dentistry Specialist
                </p>
              </div>

              {/* Patient Review Language Based Bio */}
              <div className="space-y-4 text-charcoal-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Known by patients across Shahdara and travelers from cities like <strong className="text-charcoal font-semibold">Okara and Sheikhupura</strong> for his extraordinarily gentle touch and humble, reassuring demeanor. 
                </p>
                <p>
                  Dr. Zaheer believes that visiting a dentist should never be an experience filled with anxiety or pain. He treats every patient with absolute patience, zero judgment, and transparent, economical treatment options.
                </p>
              </div>

              {/* Pull Quote Line */}
              <div className="p-5 rounded-2xl bg-teal-soft/60 border-l-4 border-teal-primary relative">
                <p className="font-heading font-semibold text-base sm:text-lg text-teal-dark italic leading-snug">
                  “My promise to every patient is simple: you will receive honest advice, gentle hands, and treatment that relieves your pain without breaking your family's budget.”
                </p>
                <p className="text-xs font-bold text-teal-primary mt-2">
                  — Dr. Zaheer Iqbal
                </p>
              </div>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary flex-shrink-0" />
                  <span>Orthodontic Braces Master Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary flex-shrink-0" />
                  <span>Immediate RCT Pain Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary flex-shrink-0" />
                  <span>Precision Biocompatible Implants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary flex-shrink-0" />
                  <span>High-Comfort Custom Dentures</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I would like to book a direct consultation with you at Punjab Dental Clinic.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral-cta hover:bg-coral-hover text-white font-bold text-sm shadow-coral-glow transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Consultation With Dr. Zaheer</span>
                </a>
                <a
                  href="#testimonials"
                  className="w-full sm:w-auto text-center text-xs font-bold text-teal-primary hover:text-teal-dark px-4 py-3"
                >
                  Read 60+ Patient Reviews ↓
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
