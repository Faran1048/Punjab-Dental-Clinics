import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';
import { CLINIC_INFO, getWhatsAppBookingUrl } from '../constants';
import { ReviewItem } from '../types';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'braces' | 'pain' | 'restoration'>('all');

  const filteredReviews = REVIEWS_DATA.filter((item: ReviewItem) => {
    if (filter === 'all') return true;
    if (filter === 'braces') return item.treatment.toLowerCase().includes('braces') || item.treatment.toLowerCase().includes('alignment');
    if (filter === 'pain') return item.treatment.toLowerCase().includes('root canal') || item.treatment.toLowerCase().includes('pain') || item.treatment.toLowerCase().includes('cleaning');
    if (filter === 'restoration') return item.treatment.toLowerCase().includes('implant') || item.treatment.toLowerCase().includes('denture') || item.treatment.toLowerCase().includes('fillings');
    return true;
  });

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-soft text-teal-dark font-bold text-xs uppercase tracking-wider border border-teal-primary/15">
            <Star className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
            <span>Authentic Patient Feedback</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
            Loved by 60+ Patients in Shahdara & Punjab
          </h2>
          
          <p className="text-base sm:text-lg text-charcoal-muted">
            Read genuine experiences from patients who found pain relief, straight teeth, and renewed confidence under Dr. Zaheer Iqbal's care.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="flex items-center text-gold-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
              ))}
            </div>
            <span className="font-heading font-black text-xl text-charcoal">4.9 / 5.0</span>
            <span className="text-xs text-charcoal-muted">Verified Google Reviews</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-teal-primary text-white shadow-teal-glow'
                : 'bg-offwhite text-charcoal hover:bg-teal-soft'
            }`}
          >
            All Reviews ({REVIEWS_DATA.length})
          </button>
          <button
            onClick={() => setFilter('braces')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'braces'
                ? 'bg-teal-primary text-white shadow-teal-glow'
                : 'bg-offwhite text-charcoal hover:bg-teal-soft'
            }`}
          >
            Braces & Alignment 🌟
          </button>
          <button
            onClick={() => setFilter('pain')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'pain'
                ? 'bg-teal-primary text-white shadow-teal-glow'
                : 'bg-offwhite text-charcoal hover:bg-teal-soft'
            }`}
          >
            Painless RCT & Relief 💖
          </button>
          <button
            onClick={() => setFilter('restoration')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'restoration'
                ? 'bg-teal-primary text-white shadow-teal-glow'
                : 'bg-offwhite text-charcoal hover:bg-teal-soft'
            }`}
          >
            Implants & Dentures 🦷
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="rounded-3xl bg-offwhite p-6 border border-gray-100 shadow-soft-sm hover:shadow-soft-md hover:border-teal-primary/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Treatment Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center text-gold-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-soft text-teal-dark">
                    Verified
                  </span>
                </div>

                {/* Treatment Name Tag */}
                <div className="text-xs font-bold text-teal-primary mb-3">
                  🏷️ {review.treatment}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-charcoal font-normal leading-relaxed mb-4 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-charcoal flex items-center gap-1">
                    {review.name}
                    <CheckCircle2 className="w-3 h-3 text-teal-primary" />
                  </h4>
                  <p className="text-[11px] text-charcoal-muted flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-coral-cta" />
                    {review.location || 'Shahdara, Lahore'}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof WhatsApp Action */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I read your 5-star patient reviews and want to book a consultation at Punjab Dental Clinic.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-teal-soft hover:bg-teal-primary text-teal-dark hover:text-white font-bold text-sm border border-teal-primary/20 transition-all shadow-soft-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join 60+ Satisfied Patients — Message on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
