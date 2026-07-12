"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, Shield, Award, Users, Sparkles, CalendarDays, Heart, Baby, Home, Car, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Childbirth Muhurtham (C-Section timing)",
  "Marriage Muhurtham",
  "Gruha Pravesham (Housewarming)",
  "Vehicle Purchase Muhurtham",
  "Business Opening Muhurtham",
  "Namakaranam (Naming Ceremony)",
  "Annaprashanam & Upanayanam",
];

const muhurthamTypes = [
  { icon: Baby, title: "Childbirth Muhurtham", desc: "Select the most auspicious moment for your baby's arrival. Our KP analysis ensures the child's chart is blessed with positive planetary influences for a prosperous life." },
  { icon: Heart, title: "Marriage Muhurtham", desc: "The foundation of a happy marriage begins with the right timing. We analyze both bride and groom charts to select a muhurtham that strengthens your bond for a lifetime." },
  { icon: Home, title: "Gruha Pravesham", desc: "Enter your new home at the perfect moment. Our analysis considers all family members' charts to ensure harmony, prosperity, and peace in your new abode." },
  { icon: Car, title: "Vehicle Purchase", desc: "Buy your vehicle at an auspicious time to ensure safety, longevity, and prosperity. Avoid accidents and mechanical issues with precise timing." },
  { icon: Briefcase, title: "Business Opening", desc: "Launch your venture at the most favorable moment. The right muhurtham attracts success, growth, and abundance from day one." },
  { icon: CalendarDays, title: "All Ceremonies", desc: "From naming ceremonies to sacred thread ceremonies, every ritual deserves the perfect timing for divine blessings and family prosperity." },
];

const guarantees = [
  { icon: Shield, title: "100% Accuracy Guarantee", desc: "If our muhurtham timing doesn't align with your experience, we offer a free re-analysis or full refund." },
  { icon: Award, title: "KP Sub-Lord Precision", desc: "Unlike traditional astrology, our KP Sub-Lord analysis pinpoints exact minutes, not just hours or days." },
  { icon: Users, title: "Family-Wide Analysis", desc: "We don't just look at one chart—we analyze all family members to ensure the muhurtham benefits everyone." },
  { icon: Sparkles, title: "Personalized Remedies", desc: "Along with the perfect timing, receive customized remedies to strengthen any weak planetary positions." },
];

export default function MuhurthamPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> Most Popular Service
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Muhurtham
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">ముహూర్తం</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              The right moment changes everything. Our KP Sub-Lord analysis pinpoints the exact auspicious timing 
              for your most important life events—ensuring success, prosperity, and divine blessings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=muhurtham" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Book Muhurtham Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Muhurtham Matters */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why <span className="text-gradient">Muhurtham</span> Matters
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            In Vedic tradition, Muhurtham is not merely about choosing a "good day." It is the sacred science of aligning 
            your actions with cosmic energies. A precisely calculated muhurtham can transform an ordinary event into a 
            life-changing blessing. Our KP System analysis goes far beyond traditional Panchangam—we examine the 
            <strong>Sub-Lord, Star Lord, and Significator</strong> levels to identify the exact minute when planetary 
            forces converge in your favor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {muhurthamTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center mb-4">
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{type.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Sets Our <span className="text-gradient">Muhurtham</span> Apart
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't settle for generic auspicious days. Get precision timing backed by the world's most accurate astrological system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((g, index) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center flex-shrink-0">
                  <g.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{g.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-gradient">4-Step</span> Muhurtham Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A meticulous process that leaves no stone unturned in finding your perfect moment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Chart Analysis", desc: "We analyze your birth chart and all relevant family charts to understand your unique planetary positions." },
            { step: "02", title: "KP Sub-Lord Scan", desc: "Using KP System's Sub-Lord theory, we scan thousands of time windows to find the most favorable ones." },
            { step: "03", title: "Family Alignment", desc: "We cross-check the timing against all family members' charts to ensure collective prosperity." },
            { step: "04", title: "Final Selection", desc: "You receive 2-3 optimal time slots with detailed reasoning, remedies, and a comprehensive PDF report." },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">{item.step}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-16 bg-gradient-to-br from-deepblue-900 to-deepblue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Star className="w-10 h-10 text-gold-400 mx-auto mb-4" />
            <blockquote className="text-xl sm:text-2xl text-white/90 italic leading-relaxed mb-6">
              "The C-section muhurtham was calculated with such precision. Our baby was born at the exact auspicious time suggested. 
              Truly blessed! The KP analysis was far more detailed than anything we had experienced before."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-saffron-500 flex items-center justify-center text-white font-bold">SR</div>
              <div className="text-left">
                <p className="text-white font-semibold">Suresh Reddy</p>
                <p className="text-white/60 text-sm">Bangalore — Childbirth Muhurtham</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Find Your <span className="text-gradient">Perfect Moment</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don't leave your most important life events to chance. Let our KP expertise guide you to the exact 
            auspicious timing that aligns with your destiny.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white text-lg">Rs.3,000 - Rs.7,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">30-45 minutes consultation</span>
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
            href="/book?service=muhurtham"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Your Muhurtham Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">100% Satisfaction Guarantee • Full refund if cancelled 24+ hours before</p>
        </motion.div>
      </section>
    </div>
  );
}
