import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto show popup hint after 4 seconds if not closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Popup Preview */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-white p-4 shadow-soft-lg border border-teal-primary/20 animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-teal-primary text-white font-bold text-xs flex items-center justify-center">
                  Z
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs text-charcoal">
                  Dr. Zaheer Iqbal
                </h4>
                <p className="text-[10px] text-teal-primary font-medium">
                  Punjab Dental Clinic · Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close WhatsApp chat preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message bubble */}
          <div className="py-3 text-xs text-charcoal-muted leading-relaxed">
            <p className="bg-teal-soft/60 p-2.5 rounded-xl rounded-tl-none border border-teal-primary/10">
              Assalam-o-Alaikum! 👋 Need gentle pain relief or want to inquire about braces in Shahdara? How can we help you today?
            </p>
          </div>

          {/* Direct WhatsApp trigger button */}
          <a
            href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I saw your clinic website and would like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleToggle}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 pulse-ring-wa relative"
        aria-label="Open WhatsApp chat with Dr. Zaheer Iqbal"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Pulse badge notification dot */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-cta opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-coral-cta border-2 border-white"></span>
        </span>
      </button>

    </div>
  );
};
