import React from 'react';
import { Users, Award, ShieldCheck, Banknote } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "60+ Verified",
      label: "5-Star Happy Patients",
      description: "4.9/5 Average Rating on Google Maps with genuine reviews",
    },
    {
      icon: Award,
      value: "10+ Years",
      label: "Clinical Experience",
      description: "Specialized orthodontic & gentle dental expertise by Dr. Zaheer",
    },
    {
      icon: ShieldCheck,
      value: "100% Painless",
      label: "Comfort Procedures",
      description: "Advanced gentle micro-anesthesia for zero pain during RCT & surgery",
    },
    {
      icon: Banknote,
      value: "Affordable",
      label: "Economical Pricing",
      description: "Transparent rates, installment plans for braces & no hidden charges",
    },
  ];

  return (
    <section className="bg-teal-primary text-white py-12 relative z-20 shadow-soft-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-teal-dark/50 border border-teal-light/20 hover:bg-teal-dark transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-light/30 flex items-center justify-center flex-shrink-0 text-coral-cta border border-white/10">
                  <Icon className="w-6 h-6 text-coral-cta" />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-black text-white tracking-tight">
                    {item.value}
                  </h4>
                  <p className="text-sm font-bold text-coral-light mt-0.5">
                    {item.label}
                  </p>
                  <p className="text-xs text-teal-soft/80 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
