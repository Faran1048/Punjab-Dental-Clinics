/**
 * Punjab Dental Clinic - Core Business & Contact Constants
 * 
 * NOTE FOR DR. ZAHEER & TEAM:
 * - Real WhatsApp Number: 03007211150 (+923007211150)
 * - Swap in exact clinic address & custom domain whenever ready
 */

export const CLINIC_INFO = {
  name: "Punjab Dental Clinic",
  urduName: "پنجاب ڈینٹل کلینک",
  doctorName: "Dr. Zaheer Iqbal",
  doctorTitle: "BDS, Orthodontic & Dental Implant Specialist",
  tagline: "Painless Dentistry, Real Smiles — Trusted in Shahdara for Years",
  phoneDisplay: "0300 7211150",
  phoneRaw: "+923007211150",
  whatsappNumber: "923007211150",
  
  // Location details for Shahdara, Lahore
  address: "Main GT Road / Station Chowk, Shahdara, Lahore, Punjab, Pakistan",
  shortAddress: "Shahdara, Lahore, Pakistan",
  landmark: "Near Shahdara Railway Station & Metro Bus Terminal",
  googleMapsUrl: "https://maps.google.com/?q=Shahdara+Lahore+Pakistan",
  
  // Timing & Schedule
  schedule: {
    weekdays: "Monday – Saturday: 3:00 PM – 10:00 PM",
    sunday: "Sunday: 5:00 PM – 9:00 PM (Prior Appointment & Emergencies)",
    emergencyNote: "Emergency toothache & pain-relief walk-ins welcomed during open hours",
  },
  
  // Trust statistics
  stats: {
    rating: "4.9",
    reviewCount: "60+",
    experienceYears: "10+",
    successRate: "99.4%",
    painlessRate: "100%",
  }
};

/**
 * Builds a WhatsApp deep-link with pre-filled encoded text
 */
export function getWhatsAppBookingUrl(customMessage?: string): string {
  const defaultText = "Hello Dr. Zaheer, I want to book a free consultation at Punjab Dental Clinic, Shahdara.";
  const message = customMessage || defaultText;
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp message from the lead capture form data
 */
export function buildFormWhatsAppUrl(data: {
  fullName: string;
  phone: string;
  service: string;
  preferredTime: string;
  notes?: string;
}): string {
  const lines = [
    `*New Consultation Request - Punjab Dental Clinic* 🦷`,
    `----------------------------------------`,
    `👤 *Patient Name:* ${data.fullName}`,
    `📱 *Contact Phone:* ${data.phone}`,
    `🩺 *Service Needed:* ${data.service}`,
    `⏰ *Preferred Time:* ${data.preferredTime}`,
    data.notes ? `📝 *Notes/Symptoms:* ${data.notes}` : null,
    `----------------------------------------`,
    `📍 *Location:* Shahdara, Lahore`,
    `_Sent via Punjab Dental Clinic Website_`
  ].filter(Boolean);

  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}
