"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, Phone, Mail, MapPin, MessageSquare, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { UpiPayment } from "@/components/payment/UpiPayment";
import { SITE_CONFIG, buildWhatsAppLink } from "@/lib/config";

const services = [
  { id: "muhurtham", name: "Muhurtham", fee: 3000 },
  { id: "career", name: "Career & Education", fee: 2000 },
  { id: "marriage", name: "Marriage & Relationships", fee: 3000 },
  { id: "childbirth", name: "Childbirth & Progeny", fee: 5000 },
  { id: "finance", name: "Finance & Property", fee: 3000 },
  { id: "health", name: "Health & Well-being", fee: 2000 },
  { id: "prashna", name: "Horary / Prashna", fee: 500 },
];

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookPageContent />
    </Suspense>
  );
}

function BookPageContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: preselectedService || "",
    name: "",
    email: "",
    phone: "",
    dob: "",
    birthTime: "",
    birthPlace: "",
    question: "",
  });

  const selectedService = services.find((s) => s.id === formData.service);
  const fee = selectedService?.fee || 0;

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const whatsAppConfirmLink = buildWhatsAppLink(
    `Hi Divine Jyothi, I've booked a ${selectedService?.name} consultation and completed the UPI payment of Rs.${fee}.\n\n` +
      `Name: ${formData.name}\nPhone: ${formData.phone}\nDOB: ${formData.dob}\nBirth Time: ${formData.birthTime}\nBirth Place: ${formData.birthPlace}\n` +
      (formData.question ? `Question: ${formData.question}\n` : "") +
      `\nPlease confirm my appointment slot.`
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your <span className="text-gold-400">Consultation</span>
          </h1>
          <p className="text-white/80">Fill in your details, pick a slot, and confirm on WhatsApp.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                    step >= s ? "bg-saffron-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  )}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={cn("w-24 sm:w-32 h-1 mx-2", step > s ? "bg-saffron-500" : "bg-gray-200 dark:bg-gray-700")} />
                )}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Select Service</h2>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => updateField("service", service.id)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                        formData.service === service.id
                          ? "border-saffron-500 bg-saffron-50 dark:bg-saffron-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-saffron-300"
                      )}
                    >
                      <p className="font-semibold text-gray-900 dark:text-white">{service.name}</p>
                      <span className="font-bold text-saffron-600">Rs.{service.fee}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.service}
                  className="w-full py-3 rounded-xl bg-saffron-500 text-white font-semibold hover:bg-saffron-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <User className="w-4 h-4 inline mr-1" /> Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Phone className="w-4 h-4 inline mr-1" /> WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                        placeholder="9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Mail className="w-4 h-4 inline mr-1" /> Email (optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Calendar className="w-4 h-4 inline mr-1" /> Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => updateField("dob", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Birth Time</label>
                      <input
                        type="time"
                        value={formData.birthTime}
                        onChange={(e) => updateField("birthTime", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <MapPin className="w-4 h-4 inline mr-1" /> Birth Place
                    </label>
                    <input
                      type="text"
                      value={formData.birthPlace}
                      onChange={(e) => updateField("birthPlace", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <MessageSquare className="w-4 h-4 inline mr-1" /> Your Question
                    </label>
                    <textarea
                      value={formData.question}
                      onChange={(e) => updateField("question", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500"
                      placeholder="Describe your specific question or concern..."
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.name || !formData.phone || !formData.dob}
                    className="flex-1 py-3 rounded-xl bg-saffron-500 text-white font-semibold hover:bg-saffron-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Pick a Slot</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Choose a time that works for you — this opens our live scheduling calendar.
                  </p>
                  <a
                    href={`https://cal.com/${SITE_CONFIG.calcomLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-saffron-500 text-saffron-600 dark:text-saffron-400 font-semibold hover:bg-saffron-50 dark:hover:bg-saffron-900/20 transition-colors mb-4"
                  >
                    <Calendar className="w-4 h-4" /> Open Scheduling Calendar <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <iframe
                      src={`https://cal.com/${SITE_CONFIG.calcomLink}`}
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      title="Book a slot"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Pay via UPI</h2>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-4 flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">{selectedService?.name}</span>
                    <span className="font-bold text-saffron-600">Rs.{fee}</span>
                  </div>
                  <UpiPayment amount={fee} note={`Divine Jyothi - ${selectedService?.name || "Consultation"}`} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Confirm on WhatsApp</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    After picking your slot and paying, send us your details so we can confirm your appointment.
                  </p>
                  <a
                    href={whatsAppConfirmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all"
                  >
                    <Check className="w-4 h-4" /> Confirm Booking via WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
