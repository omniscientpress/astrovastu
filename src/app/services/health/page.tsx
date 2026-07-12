"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, Stethoscope, Heart, Shield, AlertTriangle, Activity, Pill, Brain, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Health Problem Diagnosis",
  "Surgery Timing Selection",
  "Mental Stress & Anxiety Analysis",
  "Chronic Disease Prediction",
  "Recovery Period Calculation",
  "Medication Effectiveness Timing",
  "Preventive Remedies",
];

const healthServices = [
  { icon: Activity, title: "Health Diagnosis", desc: "Your 1st house (self), 6th house (disease), 8th house (chronic), and 12th house (hospitalization) reveal your health patterns. Our KP analysis identifies potential health issues before they manifest, giving you time to prevent them." },
  { icon: Stethoscope, title: "Surgery Timing", desc: "Timing surgery correctly can mean the difference between quick recovery and complications. We analyze your current Dasha and transits to select the most favorable date and time for any surgical procedure." },
  { icon: Brain, title: "Mental Health Analysis", desc: "Depression, anxiety, and stress often have astrological roots. We examine your Moon, Mercury, and 5th house to understand your mental patterns and provide remedies for emotional balance." },
  { icon: AlertTriangle, title: "Chronic Disease Prediction", desc: "Long-term health issues often show up in the birth chart years before symptoms appear. Our analysis helps you take preventive measures and choose the right treatment timing." },
  { icon: Pill, title: "Medication Timing", desc: "Even the right medicine works better at the right time. We identify periods when your body is most receptive to treatment, enhancing the effectiveness of your medications." },
  { icon: Shield, title: "Preventive Remedies", desc: "Prevention is better than cure. Our personalized remedies—mantras, gemstones, and lifestyle adjustments—strengthen your weak planetary positions and boost your overall vitality." },
];

const healthHouses = [
  { title: "1st House (Self)", desc: "Your overall health, vitality, and physical constitution. A strong 1st house = strong immunity and resilience." },
  { title: "6th House (Disease)", desc: "Acute illnesses, infections, and daily health challenges. Weak 6th house = frequent minor ailments." },
  { title: "8th House (Chronic)", desc: "Long-term diseases, surgeries, and life-threatening conditions. We analyze this for early warning signs." },
  { title: "12th House (Hospitalization)", desc: "Hospital stays, confinement, and hidden health issues. Strong 12th house connections can indicate recurring health expenses." },
  { title: "Moon & Mercury", desc: "Moon governs your mind and emotions; Mercury governs your nervous system. Their strength determines mental health." },
  { title: "Saturn & Rahu", desc: "Saturn brings chronic issues; Rahu brings mysterious ailments. Their placement reveals your vulnerability areas." },
];

export default function HealthPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-500 via-rose-500 to-red-700 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" /> 2,500+ Health Consultations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Health & Well-being
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">ఆరోగ్యం</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Health is not just the absence of disease—it is the harmony of body, mind, and cosmic energies. 
              Our KP System health analysis reveals your vulnerability patterns, optimal treatment timing, and 
              personalized remedies for lifelong vitality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=health" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-red-600 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Prioritize Your Health <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Health Astrology */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Body Speaks Through <span className="text-gradient">the Stars</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Modern medicine treats symptoms. Astrological medicine treats root causes. Your birth chart is a cosmic 
            health map that reveals your innate strengths, vulnerability patterns, and the timing of health events. 
            Our KP System analysis examines your <strong>1st (self), 6th (disease), 8th (chronic), and 12th (hospitalization)</strong> 
            houses with Sub-Lord precision to provide insights that complement your medical treatment—not replace it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Health Houses */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              6 Cosmic <span className="text-gradient">Health Dimensions</span> We Analyze
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your health is governed by the interplay of 6 key astrological factors. We examine each one with KP Sub-Lord precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthHouses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-red-500"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-1">Important Medical Disclaimer</h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                Our astrological health analysis is designed to complement, not replace, professional medical care. 
                Always consult qualified healthcare providers for diagnosis and treatment. Astrology provides timing 
                insights and preventive guidance that work alongside modern medicine for holistic well-being.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-red-500 to-rose-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,500+", label: "Health Consultations" },
              { value: "89%", label: "Early Prediction Accuracy" },
              { value: "1,800+", label: "Successful Surgery Timings" },
              { value: "4.9/5", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-deepblue-900 to-deepblue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Star className="w-10 h-10 text-gold-400 mx-auto mb-4" />
            <blockquote className="text-xl sm:text-2xl text-white/90 italic leading-relaxed mb-6">
              "My doctor recommended surgery but couldn't commit to a date. The KP analysis identified the most favorable 
              3-day window. I scheduled the surgery accordingly and had the fastest recovery my surgeon had ever seen. 
              The nurses were amazed. This is not superstition—this is cosmic science."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">SK</div>
              <div className="text-left">
                <p className="text-white font-semibold">Srinivas Kumar</p>
                <p className="text-white/60 text-sm">Bangalore — Surgery Timing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Health is Your <span className="text-gradient">Greatest Wealth</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don't wait for illness to strike. Our KP health analysis reveals your vulnerability patterns, optimal treatment 
            timing, and preventive remedies—empowering you to take charge of your well-being with cosmic wisdom.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white text-lg">Rs.2,000 - Rs.4,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">30 minutes consultation</span>
            </div>
          </div>

          <div className="space-y-3 mb-8 max-w-md mx-auto text-left">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
              </div>
            ))}
          </div>

          <Link
            href="/book?service=health"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Health Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">Complements Medical Care • Detailed Health Report • Preventive Remedies Included</p>
        </motion.div>
      </section>
    </div>
  );
}
