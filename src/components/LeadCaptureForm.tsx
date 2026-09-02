import React, { useState } from 'react';
import { Calendar, MessageCircle, Clock, User, Phone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_INFO, buildFormWhatsAppUrl } from '../constants';
import { AppointmentFormData } from '../types';

export const LeadCaptureForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    service: 'Braces & Orthodontics',
    preferredTime: 'Evening (5:00 PM - 8:00 PM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const servicesOptions = [
    'Braces & Orthodontics (Most Popular)',
    'Dental Implants',
    'Root Canal Treatment (Painless RCT)',
    'Dentures & Bite Restoration',
    'Teeth Cleaning & Whitening',
    'General Dental Checkup & Fillings',
    'Emergency Tooth Pain Relief',
    'Other Dental Problem'
  ];

  const timeSlotOptions = [
    'Evening (5:00 PM – 8:00 PM)',
    'Night (8:00 PM – 10:00 PM)',
    'Afternoon (3:00 PM – 5:00 PM)',
    'Urgent / Same-Day Walk-in'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    // Build the WhatsApp URL with pre-filled structured message
    const url = buildFormWhatsAppUrl(formData);
    setWhatsAppUrl(url);
    setIsSubmitted(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0F6B66', '#FF7A59', '#D4AF37', '#14857F']
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenWhatsApp = () => {
    window.open(whatsAppUrl, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      service: 'Braces & Orthodontics',
      preferredTime: 'Evening (5:00 PM - 8:00 PM)',
      notes: ''
    });
  };

  return (
    <section id="book-appointment" className="py-20 bg-gradient-to-b from-white via-teal-soft/30 to-offwhite relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border-2 border-teal-primary/20 shadow-soft-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Decorative Corner Badge */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-teal-soft rounded-full -z-0 pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-light text-coral-cta font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Priority Booking</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-charcoal tracking-tight">
              Get Your Free Consultation & Price Estimate
            </h2>
            
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Connect directly with Dr. Zaheer Iqbal. No obligations, zero judgment, and fast response.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                    Your Full Name <span className="text-coral-cta">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-muted">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-offwhite border border-gray-200 text-charcoal text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone-input" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                    WhatsApp / Phone Number <span className="text-coral-cta">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-muted">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-offwhite border border-gray-200 text-charcoal text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Service Interested In */}
                <div className="space-y-1.5">
                  <label htmlFor="service-select" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                    Service Interested In <span className="text-coral-cta">*</span>
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-offwhite border border-gray-200 text-charcoal text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                  >
                    {servicesOptions.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-1.5">
                  <label htmlFor="time-select" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                    Preferred Time Slot <span className="text-coral-cta">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="time-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-offwhite border border-gray-200 text-charcoal text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                    >
                      {timeSlotOptions.map((time, idx) => (
                        <option key={idx} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label htmlFor="notes-textarea" className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                  Describe Any Symptoms / Questions <span className="text-charcoal-muted text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="notes-textarea"
                  rows={2}
                  placeholder="e.g. Tooth sensitivity, crooked teeth, previous dental history..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-offwhite border border-gray-200 text-charcoal text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Big Coral Submit Button */}
              <button
                id="submit-consultation-btn"
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-coral-cta hover:bg-coral-hover text-white font-heading font-black text-base sm:text-lg shadow-coral-glow hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Get My Free Consultation on WhatsApp</span>
              </button>

              {/* Reassurance Microcopy */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 text-center text-xs text-charcoal-muted">
                <div className="flex items-center gap-1.5 text-teal-primary font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Privacy Protected</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <p>
                  ⚡ We will WhatsApp or call you within <strong className="text-charcoal font-bold">30 minutes</strong> during clinic hours.
                </p>
              </div>

            </form>
          ) : (
            /* Submission Success State */
            <div className="text-center py-6 space-y-6 relative z-10 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-soft text-teal-primary mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-heading font-black text-charcoal">
                  Consultation Request Ready!
                </h3>
                <p className="text-sm text-charcoal-muted">
                  Thank you, <strong className="text-charcoal">{formData.fullName}</strong>. Click below to instantly send your appointment details to <strong className="text-teal-primary">Dr. Zaheer Iqbal</strong> on WhatsApp.
                </p>
              </div>

              {/* Direct 1-Click WhatsApp Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-coral-cta hover:bg-coral-hover text-white font-bold text-sm shadow-coral-glow transition-all pulse-ring-coral"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send On WhatsApp (0300 7211150)</span>
                </button>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-bold text-charcoal-muted hover:text-charcoal transition-colors"
                >
                  Edit Information
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
