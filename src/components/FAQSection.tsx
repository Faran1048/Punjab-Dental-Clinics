import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { getWhatsAppBookingUrl } from '../constants';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-offwhite relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-soft text-teal-dark font-bold text-xs uppercase tracking-wider border border-teal-primary/15">
            <HelpCircle className="w-3.5 h-3.5 text-coral-cta" />
            <span>Got Questions? We Have Answers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="text-sm sm:text-base text-charcoal-muted">
            Find quick answers regarding our pain-free treatments, braces plans, and appointments.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200/80 shadow-soft-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-charcoal hover:text-teal-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-teal-soft text-teal-primary text-xs flex items-center justify-center flex-shrink-0 font-extrabold">
                      Q{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-muted transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-teal-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-gray-100 bg-teal-soft/10">
                    <p className="pl-9">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions footer */}
        <div className="mt-10 text-center p-6 rounded-3xl bg-white border border-teal-primary/20 shadow-soft-sm space-y-3">
          <p className="font-heading font-bold text-sm text-charcoal">
            Have a specific dental question or need an emergency estimate?
          </p>
          <a
            href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I have a dental question I would like to ask you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-coral-cta hover:bg-coral-hover text-white font-bold text-xs sm:text-sm shadow-coral-glow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Dr. Zaheer Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
