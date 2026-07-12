"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Briefcase, Heart, Baby, Coins, Stethoscope, HelpCircle, ArrowRight, Clock, IndianRupee } from "lucide-react";

const services = [
  {
    slug: "muhurtham", icon: Calendar, title: "Muhurtham", titleTe: "ముహూర్తం",
    description: "Auspicious timing selection for all important life events using KP Sub-Lord analysis.",
    longDescription: "Muhurtham (auspicious timing) is crucial for the success of any important endeavor. Using KP System's precise Sub-Lord theory, we calculate the most favorable dates and times for your events.",
    price: "Rs.3,000 - Rs.7,000", duration: "30-45 minutes",
    features: ["Childbirth Muhurtham (C-Section timing)", "Marriage Muhurtham", "Gruha Pravesham (Housewarming)", "Vehicle Purchase Muhurtham", "Business Opening Muhurtham", "Namakaranam (Naming Ceremony)", "Annaprashanam & Upanayanam"],
    color: "from-orange-500 to-amber-500",
  },
  {
    slug: "career", icon: Briefcase, title: "Career & Education", titleTe: "ఉద్యోగం & విద్య",
    description: "Guidance for students and professionals using KP's 10th house analysis.",
    longDescription: "Career decisions shape your life. Our KP analysis examines the 4th, 6th, 9th, 10th, and 11th houses to provide accurate guidance for your professional journey.",
    price: "Rs.2,000 - Rs.4,000", duration: "30-45 minutes",
    features: ["Course/Stream Selection for Students", "Government vs Private Job Prediction", "Promotion Timing Analysis", "Foreign Job/Settlement Possibility", "Business vs Job Dilemma Resolution", "Competitive Exam Success Prediction", "Career Change Timing"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    slug: "marriage", icon: Heart, title: "Marriage & Relationships", titleTe: "వివాహం & బంధాలు",
    description: "Comprehensive marriage analysis and matching using KP's 7th cusp Sub-Lord.",
    longDescription: "Marriage is a sacred bond. Our KP analysis examines the 7th cusp Sub-Lord, Venus placement, and Dasha periods to provide clarity on all marriage-related queries.",
    price: "Rs.2,000 - Rs.5,000", duration: "45-60 minutes",
    features: ["Detailed Kundali Matching (Pelli Kuturu)", "Marriage Timing Prediction", "Delayed Marriage Analysis & Remedies", "Post-Marriage Problem Resolution", "Love Marriage vs Arranged Marriage", "Second Marriage Possibility", "Kuja Dosha Analysis"],
    color: "from-pink-500 to-rose-500",
  },
  {
    slug: "childbirth", icon: Baby, title: "Childbirth & Progeny", titleTe: "సంతానం",
    description: "Childbirth prediction and progeny analysis using KP's 5th house significators.",
    longDescription: "The blessing of children is a divine gift. Our KP analysis examines the 5th house (children), 2nd house (family), and 11th house (fulfillment) to predict and guide your progeny journey.",
    price: "Rs.2,500 - Rs.5,000", duration: "45-60 minutes",
    features: ["Childbirth Prediction & Timing", "Progeny Obstacle Analysis", "Conception Window Calculation", "Remedies for Delayed Conception", "Child's Future & Education", "C-Section Muhurtham Selection", "Multiple Pregnancy Analysis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "finance", icon: Coins, title: "Finance & Property", titleTe: "ధనం & ఆస్తి",
    description: "Financial stability and property guidance using KP's 2nd, 4th, and 11th house analysis.",
    longDescription: "Financial security is the foundation of a peaceful life. Our KP analysis examines the 2nd (income), 4th (property), 8th (sudden gains), and 11th (gains) houses.",
    price: "Rs.2,000 - Rs.4,000", duration: "30-45 minutes",
    features: ["Property Purchase Timing", "Property Dispute Resolution", "Financial Instability Pattern Analysis", "Loan & Debt Clearance Timing", "Inheritance & Ancestral Property", "Investment Timing Guidance", "Wealth Accumulation Periods"],
    color: "from-yellow-500 to-amber-600",
  },
  {
    slug: "health", icon: Stethoscope, title: "Health & Well-being", titleTe: "ఆరోగ్యం",
    description: "Health diagnosis and surgery timing using KP's 1st, 6th, 8th, and 12th house analysis.",
    longDescription: "Health is wealth. Our KP analysis examines the 1st (self), 6th (disease), 8th (chronic), and 12th (hospitalization) houses to diagnose and time health-related events.",
    price: "Rs.2,000 - Rs.4,000", duration: "30 minutes",
    features: ["Health Problem Diagnosis", "Surgery Timing Selection", "Mental Stress & Anxiety Analysis", "Chronic Disease Prediction", "Recovery Period Calculation", "Medication Effectiveness Timing", "Preventive Remedies"],
    color: "from-red-500 to-rose-600",
  },
  {
    slug: "prashna", icon: HelpCircle, title: "Horary / Prashna", titleTe: "ప్రశ్న శాస్త్రం",
    description: "Instant answers without birth details using KP's 1-249 number system.",
    longDescription: "Prashna (Horary) astrology provides instant answers to specific questions without requiring birth details. Using the KP 1-249 number system, we can answer Yes/No questions with remarkable accuracy.",
    price: "Rs.500 - Rs.1,000", duration: "15 minutes",
    features: ["Yes/No Question Answers", "Lost Item Location", "Missing Person Prediction", "Exam Result Prediction", "Job Interview Outcome", "Travel Safety Query", "General Life Questions"],
    color: "from-purple-500 to-violet-600",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.titleTe}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.longDescription}</p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-5 h-5 text-saffron-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-saffron-500" />
                      <span className="text-gray-600 dark:text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/book?service=${service.slug}`} className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold hover:shadow-lg transition-all">
                    Book This Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
