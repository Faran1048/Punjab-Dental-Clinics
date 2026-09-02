import React from 'react';
import { MapPin, Clock, Phone, Navigation, AlertCircle, CheckCircle } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';

export const LocationAndHours: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-soft text-teal-dark font-bold text-xs uppercase tracking-wider border border-teal-primary/15">
            <MapPin className="w-3.5 h-3.5 text-coral-cta" />
            <span>Clinic Location & Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
            Conveniently Located in Shahdara, Lahore
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted">
            Easily accessible from GT Road, Shahdara Railway Station, Metro Bus Terminal, and surrounding towns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Timing & Contact Box */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address & Landmark Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-offwhite border border-gray-200/80 shadow-soft-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-coral-cta" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-charcoal">
                    Punjab Dental Clinic
                  </h3>
                  <p className="text-xs font-semibold text-teal-primary">
                    Dr. Zaheer Iqbal
                  </p>
                  <p className="text-sm text-charcoal-muted mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-charcoal-muted font-medium mt-1">
                    📍 Landmark: {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Directions Button */}
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-soft hover:bg-teal-primary text-teal-dark hover:text-white font-bold text-xs sm:text-sm border border-teal-primary/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 sm:p-7 rounded-3xl bg-offwhite border border-gray-200/80 shadow-soft-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-soft text-teal-primary flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-charcoal">
                    Clinic Operating Hours
                  </h4>
                  <p className="text-xs text-teal-primary font-semibold">
                    Evening Consultations & Weekend Slots
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm border-t border-gray-200/60 pt-3">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-bold text-charcoal">Monday – Saturday:</span>
                  <span className="font-semibold text-teal-dark bg-teal-soft/80 px-2.5 py-0.5 rounded-md">
                    3:00 PM – 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-bold text-charcoal">Sunday:</span>
                  <span className="font-semibold text-charcoal-muted bg-gray-100 px-2.5 py-0.5 rounded-md">
                    5:00 PM – 9:00 PM (Prior Appt)
                  </span>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-coral-light border border-coral-cta/20 text-xs text-coral-dark font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-coral-cta" />
                <span>
                  <strong>Emergency Walk-ins:</strong> Patients in acute pain are prioritized during operating hours.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map Card */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-soft-md relative flex flex-col justify-between p-6">
              
              {/* Stylized Map View Graphic */}
              <div className="absolute inset-0 bg-slate-100 overflow-hidden">
                <iframe
                  title="Punjab Dental Clinic Shahdara Lahore Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Shahdara%20Lahore%20Punjab%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full opacity-90 filter contrast-105"
                />
              </div>

              {/* Top Floating Badge on Map */}
              <div className="relative z-10 self-start bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-soft-md border border-teal-primary/20 flex items-center gap-2.5 max-w-xs">
                <div className="w-8 h-8 rounded-xl bg-teal-primary text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-coral-cta" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Punjab Dental Clinic</p>
                  <p className="text-[11px] text-charcoal-muted">Main GT Road, Shahdara Lahore</p>
                </div>
              </div>

              {/* Bottom Floating Quick Route Note */}
              <div className="relative z-10 self-end bg-teal-dark/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-soft-md border border-teal-light/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-coral-cta flex items-center justify-center flex-shrink-0 text-white">
                  <Navigation className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Visiting from outside Shahdara?</p>
                  <p className="text-teal-soft text-[11px]">Direct road link via Ravi Bridge & Metro Bus</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
