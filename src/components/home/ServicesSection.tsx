"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Briefcase, Heart, Baby, Home, Coins, Stethoscope, HelpCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Muhurtham",
    titleTe: "ముహూర్తం",
    description: "Auspicious timing for childbirth, marriage, Gruha Pravesham, vehicle purchase, business opening, and ceremonies.",
    href: "/services/muhurtham",
    color: "from-orange-500 to-amber-500",
    features: ["Childbirth Muhurtham", "Marriage Muhurtham", "Gruha Pravesham", "Vehicle Purchase", "Business Opening"],
  },
  {
    icon: Briefcase,
    title: "Career & Education",
    titleTe: "ఉద్యోగం & విద్య",
    description: "Course selection, job predictions, promotion timing, government vs private job, foreign career, and competitive exams.",
    href: "/services/career",
    color: "from-blue-500 to-indigo-500",
    features: ["Course Selection", "Job Prediction", "Promotion Timing", "Govt vs Private", "Competitive Exams"],
  },
  {
    icon: Heart,
    title: "Marriage & Relationships",
    titleTe: "వివాహం & బంధాలు",
    description: "Kundali matching, marriage timing, delayed marriage analysis, post-marriage issues, love marriage, and second marriage.",
    href: "/services/marriage",
    color: "from-pink-500 to-rose-500",
    features: ["Kundali Matching", "Marriage Timing", "Delayed Marriage", "Love Marriage", "Post-Marriage Issues"],
  },
  {
    icon: Baby,
    title: "Childbirth & Progeny",
    titleTe: "సంతానం",
    description: "Childbirth prediction and timing, progeny obstacle analysis, remedies for delayed conception, and child's future prospects.",
    href: "/services/childbirth",
    color: "from-green-500 to-emerald-500",
    features: ["Birth Prediction", "Progeny Obstacles", "Conception Timing", "Child's Future", "Remedies"],
  },
  {
    icon: Coins,
    title: "Finance & Property",
    titleTe: "ధనం & ఆస్తి",
    description: "Property purchase timing, financial instability analysis, loan clearance, inheritance, and property dispute resolution.",
    href: "/services/finance",
    color: "from-yellow-500 to-amber-600",
    features: ["Property Purchase", "Financial Analysis", "Loan Clearance", "Inheritance", "Disputes"],
  },
  {
    icon: Stethoscope,
    title: "Health & Well-being",
    titleTe: "ఆరోగ్యం",
    description: "Health diagnosis through KP, surgery timing, mental stress analysis, and chronic disease prediction.",
    href: "/services/health",
    color: "from-red-500 to-rose-600",
    features: ["Health Diagnosis", "Surgery Timing", "Mental Stress", "Chronic Issues", "Remedies"],
  },
  {
    icon: HelpCircle,
    title: "Horary / Prashna",
    titleTe: "ప్రశ్న శాస్త్రం",
    description: "Instant answers without birth details. Yes/No questions, lost items, missing persons, and exam result predictions.",
    href: "/services/prashna",
    color: "from-purple-500 to-violet-600",
    features: ["Yes/No Questions", "Lost Items", "Missing Persons", "Exam Results", "Quick Answers"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive <span className="text-gradient">Astrology Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert consultations using the Krishnamurti Paddhati (KP) system for precise predictions and effective remedies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <div className="service-card h-full bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-gray-700 hover:border-saffron-200 dark:hover:border-saffron-800">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-saffron-600 dark:text-saffron-400 font-medium mb-3">
                    {service.titleTe}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-saffron-600 dark:text-saffron-400 font-semibold text-sm group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
