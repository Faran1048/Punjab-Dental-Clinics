import React, { useState } from 'react';
import { Sparkles, Eye, Camera, Info, ArrowRight, MessageCircle } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { getWhatsAppBookingUrl } from '../constants';

export const BeforeAfterGallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section id="gallery" className="py-20 bg-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-soft text-teal-dark font-bold text-xs uppercase tracking-wider border border-teal-primary/15">
            <Sparkles className="w-3.5 h-3.5 text-coral-cta" />
            <span>Smile Transformations & Clinic Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
            Real Results & Modern Sterilized Environment
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted">
            See how precision orthodontic alignment and gentle cosmetic restorations create life-changing smiles.
          </p>
        </div>

        {/* Interactive Before / After Feature Showcase */}
        <div className="mb-14 rounded-3xl bg-white p-6 sm:p-8 border border-teal-primary/15 shadow-soft-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Comparison Slider */}
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden select-none border-2 border-teal-soft shadow-inner">
                
                {/* AFTER Image (Background) */}
                <img
                  src={GALLERY_DATA[0].afterImage}
                  alt="After orthodontic alignment treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-teal-primary text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-md z-10">
                  ✨ AFTER (Dr. Zaheer Alignment)
                </div>

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={GALLERY_DATA[0].beforeImage}
                    alt="Before orthodontic treatment"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', minWidth: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-charcoal text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-md z-10">
                    BEFORE Treatment
                  </div>
                </div>

                {/* Slider divider line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-coral-cta z-20 cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-coral-cta text-white flex items-center justify-center shadow-lg font-black text-xs">
                    ↔
                  </div>
                </div>

                {/* Slider Input overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Before and after image slider comparison"
                />
              </div>

              <p className="text-center text-xs text-charcoal-muted mt-2 font-medium">
                👈 Drag the slider left or right to compare Before & After results 👉
              </p>
            </div>

            {/* Transformation Details */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-teal-primary uppercase tracking-wider bg-teal-soft px-3 py-1 rounded-full">
                Featured Case Study
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                {GALLERY_DATA[0].title}
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {GALLERY_DATA[0].description}
              </p>

              <div className="space-y-2 text-xs font-semibold text-charcoal pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Gentle non-extraction alignment approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Affordable monthly installment plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-primary" />
                  <span>Completed with high patient comfort</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppBookingUrl("Hello Dr. Zaheer, I saw your smile transformation gallery and would like a consultation for my teeth alignment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coral-cta hover:bg-coral-hover text-white font-bold text-xs sm:text-sm shadow-coral-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire About Smile Transformation</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Clinic Interior & Equipment Grid (Clearly Labeled Placeholders) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-heading font-bold text-charcoal flex items-center gap-2">
              <Camera className="w-5 h-5 text-teal-primary" />
              <span>Clinic Environment & Equipment Showcase</span>
            </h3>
            <span className="text-xs text-charcoal-muted font-medium hidden sm:inline">
              * Ready to be updated with direct clinic photography
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_DATA.slice(1).map((item) => (
              <div 
                key={item.id}
                className="rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-soft-sm hover:shadow-soft-md transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={item.singleImage || item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    {item.category}
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-heading font-bold text-sm text-charcoal">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
