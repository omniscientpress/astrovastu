"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MapPin, MessageSquare, Check, Loader2, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { id: "muhurtham", name: "Muhurtham", fee: 3000 },
  { id: "career", name: "Career & Education", fee: 2000 },
  { id: "marriage", name: "Marriage & Relationships", fee: 3000 },
  { id: "childbirth", name: "Childbirth & Progeny", fee: 5000 },
  { id: "finance", name: "Finance & Property", fee: 3000 },
  { id: "health", name: "Health & Well-being", fee: 2000 },
  { id: "prashna", name: "Horary / Prashna", fee: 500 },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
];

export default function BookPage() {
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
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedService = services.find(s => s.id === formData.service);
  const fee = selectedService?.fee || 0;

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-8 max-w-md">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Booking Request Received!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">We will contact you shortly on WhatsApp to confirm your appointment and complete payment.</p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-left text-sm space-y-2 mb-6">
            <p><strong>Service:</strong> {selectedService?.name}</p>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
          </div>
          <button onClick={() => window.location.href = "/"} className="px-6 py-3 rounded-xl bg-saffron-500 text-white font-semibold hover:bg-saffron-600 transition-colors">Back to Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Book Your <span className="text-gold-400">Consultation</span></h1>
          <p className="text-white/80">Fill in your details and preferred time slot. We will confirm via WhatsApp.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors", step >= s ? "bg-saffron-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500")}>{s}</div>
                {s < 3 && <div className={cn("w-24 sm:w-32 h-1 mx-2", step > s ? "bg-saffron-500" : "bg-gray-200 dark:bg-gray-700")} />}
              </div>
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Select Service</h2>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <button key={service.id} onClick={() => updateField("service", service.id)} className={cn("flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left", formData.service === service.id ? "border-saffron-500 bg-saffron-50 dark:bg-saffron-900/20" : "border-gray-200 dark:border-gray-700 hover:border-saffron-300")}>
                      <div><p className="font-semibold text-gray-900 dark:text-white">{service.name}</p></div>
                      <span className="font-bold text-saffron-600">Rs.{service.fee}</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(2)} disabled={!formData.service} className="w-full py-3 rounded-xl bg-saffron-500 text-white font-semibold hover:bg-saffron-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Continue</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><User className="w-4 h-4 inline mr-1" /> Full Name</label>
                    <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" placeholder="Your name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><Phone className="w-4 h-4 inline mr-1" /> WhatsApp</label>
                      <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" placeholder="9876543210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><Mail className="w-4 h-4 inline mr-1" /> Email (optional)</label>
                      <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><Calendar className="w-4 h-4 inline mr-1" /> Date of Birth</label>
                      <input type="date" value={formData.dob} onChange={(e) => updateField("dob", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><Clock className="w-4 h-4 inline mr-1" /> Birth Time</label>
                      <input type="time" value={formData.birthTime} onChange={(e) => updateField("birthTime", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><MapPin className="w-4 h-4 inline mr-1" /> Birth Place</label>
                    <input type="text" value={formData.birthPlace} onChange={(e) => updateField("birthPlace", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" placeholder="City, State" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"><MessageSquare className="w-4 h-4 inline mr-1" /> Your Question</label>
                    <textarea value={formData.question} onChange={(e) => updateField("question", e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" placeholder="Describe your specific question or concern..." />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Back</button>
                  <button onClick={() => setStep(3)} disabled={!formData.name || !formData.phone || !formData.dob} className="flex-1 py-3 rounded-xl bg-saffron-500 text-white font-semibold hover:bg-saffron-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Continue</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Select Date & Time</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"><Calendar className="w-4 h-4 inline mr-1" /> Preferred Date</label>
                  <input type="date" value={formData.date} min={new Date().toISOString().split('T')[0]} onChange={(e) => updateField("date", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"><Clock className="w-4 h-4 inline mr-1" /> Preferred Time Slot</label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {timeSlots.map((slot) => (
                      <button key={slot} onClick={() => updateField("time", slot)} className={cn("py-2 px-3 rounded-lg text-sm font-medium transition-colors", formData.time === slot ? "bg-saffron-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-saffron-100 dark:hover:bg-saffron-900/30")}>{slot}</button>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Service</span><span className="font-semibold">{selectedService?.name}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Consultation Fee</span><span className="font-bold text-saffron-600">Rs.{fee}</span></div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Back</button>
                  <button onClick={handleSubmit} disabled={!formData.date || !formData.time || isSubmitting} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
                    {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Processing...</> : `Pay Rs.${fee} & Book`}
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">You will be redirected to Razorpay for secure payment. UPI, Cards, and Net Banking accepted.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
