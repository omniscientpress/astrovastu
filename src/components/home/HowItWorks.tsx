"use client";

import { motion } from "framer-motion";
import { MessageSquare, CreditCard, Calendar, Video, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Share Your Details",
    titleTe: "మీ వివరాలు పంచుకోండి",
    description: "Chat with our AI assistant or fill the form with your birth details and specific questions.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Make Payment",
    titleTe: "చెల్లింపు చేయండి",
    description: "Secure payment via UPI, Card, or Net Banking. Full refund available if cancelled 24+ hours before.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Book Your Slot",
    titleTe: "మీ స్లాట్ బుక్ చేయండి",
    description: "Choose from available time slots. You'll receive confirmation via WhatsApp and email instantly.",
    color: "from-saffron-500 to-gold-500",
  },
  {
    icon: Video,
    number: "04",
    title: "Get Consultation",
    titleTe: "సంప్రదింపు పొందండి",
    description: "Join via Google Meet/Zoom at scheduled time. Receive detailed KP analysis and personalized remedies.",
    color: "from-purple-500 to-violet-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple <span className="text-gradient">4-Step Process</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get your KP astrology consultation in minutes. No complicated procedures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700" />
              )}

              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl mb-6 relative`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-sm flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-saffron-600 dark:text-saffron-400 font-medium mb-3">
                  {step.titleTe}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: FileText, text: "Detailed PDF Report" },
            { icon: Sparkles, text: "Personalized Remedies" },
            { icon: Video, text: "Video Recording Available" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300">
              <badge.icon className="w-4 h-4 text-saffron-500" />
              {badge.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
