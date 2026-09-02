import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, Heart, Shield } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-deep text-white pt-16 pb-24 sm:pb-16 border-t border-teal-light/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-primary flex items-center justify-center text-white border border-teal-light/30">
                <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
                  <path d="M30 35C30 25 40 22 50 26C60 22 70 25 70 35C70 48 66 60 58 74C56 77 52 77 50 72C48 77 44 77 42 74C34 60 30 48 30 35Z" fill="#FAFAF9" stroke="#E6F5F3" strokeWidth="3"/>
                  <path d="M40 45C44 50 56 50 60 45" stroke="#FF7A59" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white">
                  Punjab Dental Clinic
                </h3>
                <p className="text-xs text-teal-soft">Dr. Zaheer Iqbal · Shahdara Lahore</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-teal-soft/80 leading-relaxed">
              Providing pain-free, gentle, and economical dental healthcare to families in Shahdara, Lahore, and patients traveling from across Punjab.
            </p>

            <div className="flex items-center gap-2 text-xs text-gold-accent font-semibold bg-teal-dark/60 p-2.5 rounded-xl border border-white/5 w-max">
              <Star className="w-4 h-4 fill-gold-accent" />
              <span>4.9 / 5.0 Rating from 60+ Verified Patients</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-teal-soft/80">
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Our Treatments</a></li>
              <li><a href="#why-us" className="hover:text-coral-cta transition-colors">Why Choose Us</a></li>
              <li><a href="#meet-doctor" className="hover:text-coral-cta transition-colors">Dr. Zaheer Iqbal</a></li>
              <li><a href="#testimonials" className="hover:text-coral-cta transition-colors">Patient Reviews</a></li>
              <li><a href="#gallery" className="hover:text-coral-cta transition-colors">Smile Transformations</a></li>
              <li><a href="#faqs" className="hover:text-coral-cta transition-colors">Frequently Asked</a></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Featured Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-teal-soft/80">
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Orthodontics & Braces Specialist</a></li>
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Painless Root Canal Treatment (RCT)</a></li>
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Permanent Dental Implants</a></li>
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Custom Dentures & Prosthetics</a></li>
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Ultrasonic Teeth Cleaning & Scaling</a></li>
              <li><a href="#services" className="hover:text-coral-cta transition-colors">Aesthetic Tooth Fillings</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Visit & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-teal-soft/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-coral-cta flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-coral-cta flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-coral-cta font-bold">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href={getWhatsAppBookingUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-coral-cta font-bold">
                  WhatsApp: {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Sat: 3:00 PM – 10:00 PM</p>
                  <p className="text-[11px] text-teal-soft/70">Sunday: Prior Appointment</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-soft/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Punjab Dental Clinic (Dr. Zaheer Iqbal). All Rights Reserved. Shahdara, Lahore, Pakistan.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-teal-soft/40">Painless Dentistry · Real Smiles</span>
            <span>•</span>
            <span className="text-coral-light/80 font-medium">
              Lead Generation Landing Page
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
