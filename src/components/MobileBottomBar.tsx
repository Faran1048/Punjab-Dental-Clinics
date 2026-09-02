import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-2.5 shadow-2xl safe-bottom">
      <div className="grid grid-cols-2 gap-2">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-teal-soft text-teal-dark font-heading font-bold text-xs border border-teal-primary/30 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-teal-primary" />
          <span>Call Doctor</span>
        </a>

        {/* WhatsApp Consultation Button (Coral Pop) */}
        <a
          href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I want to book a dental consultation via Punjab Dental Clinic website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-coral-cta text-white font-heading font-bold text-xs shadow-coral-glow active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Book WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
