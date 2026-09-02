export interface ServiceItem {
  id: string;
  title: string;
  popular?: boolean;
  shortBenefit: string;
  description: string;
  patientHighlight: string;
  features: string[];
  iconName: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role?: string;
  verified: boolean;
  location?: string;
  rating: number;
  treatment: string;
  quote: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'braces' | 'pain' | 'pricing';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'smile' | 'clinic' | 'equipment';
  beforeImage?: string;
  afterImage?: string;
  singleImage?: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredTime: string;
  notes?: string;
}
