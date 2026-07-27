export const SITE_CONFIG = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919885099448",
  whatsappNumberDisplay: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_DISPLAY || "+91 98850 99448",
  upiVpa: process.env.NEXT_PUBLIC_UPI_VPA || "divinejyothi@upi",
  upiName: process.env.NEXT_PUBLIC_UPI_NAME || "Divine Jyothi",
  calcomLink: process.env.NEXT_PUBLIC_CALCOM_LINK || "divinejyothi",
};

export function buildWhatsAppLink(message: string) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?${params.toString()}`;
}
