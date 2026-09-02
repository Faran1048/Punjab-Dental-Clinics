import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'braces',
    title: 'Braces & Orthodontics',
    popular: true,
    shortBenefit: 'Straight teeth, real results — patients travel from Okara & across Punjab',
    description: 'Specialist teeth alignment using modern metal, ceramic, and invisible aligners. Dr. Zaheer creates personalized treatment plans for adults, teens, and children to correct overbites, gaps, and crowding.',
    patientHighlight: '“Traveled from Okara for Dr. Zaheer’s braces treatment. Best decision ever — gentle adjustments and astonishing smile change!”',
    features: [
      'Custom metallic & ceramic braces options',
      'Gentle monthly adjustments with zero discomfort',
      'Affordable monthly installment plans',
      'Invisible aligners / clear retainer options'
    ],
    iconName: 'Sparkles',
    whatsappMessage: 'Hello Dr. Zaheer, I want to inquire about Braces & Orthodontics treatment at Punjab Dental Clinic.'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    popular: false,
    shortBenefit: 'Permanent, lifelike tooth replacement that looks and bites like real teeth',
    description: 'Restore missing teeth with premium titanium implants anchored securely into the jawbone. Regain full chewing power and natural facial structure with gentle, painless placement.',
    patientHighlight: '“Got 2 dental implants placed without feeling any sharp pain. Chewing feels 100% natural again.”',
    features: [
      'High-grade biocompatible titanium implants',
      'Painless localized anesthesia technique',
      'Crown matching your exact natural tooth shade',
      'Lifetime durability with proper oral hygiene'
    ],
    iconName: 'ShieldCheck',
    whatsappMessage: 'Hello Dr. Zaheer, I want to book a consultation for Dental Implants.'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    popular: false,
    shortBenefit: 'Instant relief from severe toothache while saving your natural tooth',
    description: 'Stop agonizing tooth infections in their tracks. Using modern rotary endodontics, Dr. Zaheer cleans and seals the root canal painlessly in 1–2 comfortable sessions.',
    patientHighlight: '“Came in with unbearable nighttime toothache. Dr. Zaheer relieved the pain within 20 minutes with zero hurt.”',
    features: [
      'Gentle, 100% painless rotary RCT procedure',
      'Saves natural tooth from extraction',
      'High-durability zirconia & porcelain crowns',
      'Same-day emergency pain relief available'
    ],
    iconName: 'HeartPulse',
    whatsappMessage: 'Hello Dr. Zaheer, I have tooth pain and need an urgent Root Canal consultation.'
  },
  {
    id: 'dentures',
    title: 'Dentures & Prosthetics',
    popular: false,
    shortBenefit: 'Comfortable, natural-fitting complete & partial dentures made for eating ease',
    description: 'Custom-crafted full and partial dentures designed to fit comfortably against your gums without slipping or causing painful friction ulcers.',
    patientHighlight: '“My father can eat his favorite foods again without slipping dentures. The fitting is exceptionally snug.”',
    features: [
      'Precision gum impressions for snug fit',
      'Flexible, unbreakable lightweight partials',
      'Complete full-mouth restoration sets',
      'Quick adjustments & repair support'
    ],
    iconName: 'Smile',
    whatsappMessage: 'Hello Dr. Zaheer, I want to inquire about Dentures & Prosthetics for myself / family member.'
  },
  {
    id: 'cleaning-whitening',
    title: 'Teeth Cleaning & Whitening',
    popular: false,
    shortBenefit: 'Deep ultrasonic scaling & professional stain removal for a gleaming smile',
    description: 'Remove stubborn tartar, tobacco/tea stains, and plaque buildup. Combined with safe clinical whitening to lift your smile multiple shades brighter without enamel sensitivity.',
    patientHighlight: '“No sensitivity at all after ultrasonic cleaning! Removed years of tea stains completely.”',
    features: [
      'Gentle ultrasonic scaling without enamel wear',
      'Air polishing for coffee, tea & smoking stains',
      'Safe peroxide-free enamel brightening',
      'Fresh breath therapy and gum health check'
    ],
    iconName: 'Zap',
    whatsappMessage: 'Hello Dr. Zaheer, I want to book an appointment for Teeth Cleaning & Whitening.'
  },
  {
    id: 'general-checkups',
    title: 'General Checkups & Fillings',
    popular: false,
    shortBenefit: 'Preventative family dental exams & tooth-colored invisible composite fillings',
    description: 'Comprehensive oral evaluations, cavity detection, and natural tooth-matching composite fillings that seal decay seamlessly with zero metallic look.',
    patientHighlight: '“Super gentle with my nervous 8-year-old child. The clinic feels calm like a wellness spa.”',
    features: [
      'Tooth-colored composite aesthetic fillings',
      'Digital diagnostic examination',
      'Children & family-friendly dental care',
      'Preventative fluoride protection'
    ],
    iconName: 'Stethoscope',
    whatsappMessage: 'Hello Dr. Zaheer, I would like to book a routine dental checkup & filling consultation.'
  }
];
