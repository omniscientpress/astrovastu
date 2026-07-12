"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, Baby, Heart, Shield, Sparkles, Calendar, Users, Stethoscope, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Childbirth Prediction & Timing",
  "Progeny Obstacle Analysis",
  "Conception Window Calculation",
  "Remedies for Delayed Conception",
  "Child's Future & Education",
  "C-Section Muhurtham Selection",
  "Multiple Pregnancy Analysis",
];

const childbirthServices = [
  { icon: Baby, title: "Childbirth Prediction", desc: "Using KP's 5th house significators, we predict the exact period when you are most likely to conceive and give birth. Our accuracy has helped hundreds of couples plan their families with confidence." },
  { icon: AlertCircle, title: "Progeny Obstacles", desc: "If conception has been delayed despite medical intervention, our KP analysis identifies the exact planetary blockages and provides time-tested remedies that complement medical treatments." },
  { icon: Calendar, title: "Conception Window", desc: "We calculate the most favorable months and even specific dates for conception, aligning with your favorable Dasha periods for maximum success probability." },
  { icon: Stethoscope, title: "C-Section Muhurtham", desc: "When natural delivery isn't possible, we select the most auspicious time for C-section to ensure the child is born under the most favorable planetary influences for a bright future." },
  { icon: Sparkles, title: "Child's Future Analysis", desc: "Beyond birth, we analyze the child's potential chart to predict their education, career inclinations, health, and overall life trajectory—helping you guide them from day one." },
  { icon: Heart, title: "Emotional Support", desc: "The journey to parenthood can be emotionally taxing. Our consultations include compassionate guidance and practical remedies to keep you positive and spiritually aligned." },
];

const whyChooseUs = [
  { icon: Shield, title: "Medical + Astrological Approach", desc: "We work alongside your medical treatments, not against them. Our remedies are spiritual complements to modern medicine, enhancing your chances of success." },
  { icon: Star, title: "Sub-Lord Precision", desc: "Traditional astrology gives broad timeframes. Our KP Sub-Lord analysis narrows it down to specific months and even weeks, giving you actionable timing." },
  { icon: Users, title: "Couple's Combined Analysis", desc: "We analyze both partners' charts together, examining the interplay of your 5th houses to find the optimal conception window for your unique combination." },
  { icon: Sparkles, title: "Proven Remedies", desc: "Our remedies are not generic—they are customized based on your specific planetary positions and have helped over 800 couples achieve their dream of parenthood." },
];

export default function ChildbirthPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Baby className="w-4 h-4" /> 800+ Families Blessed
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Childbirth & Progeny
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">సంతానం</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              The gift of a child is the greatest blessing. Our KP System analysis helps you understand your progeny 
              potential, overcome obstacles, and welcome your little one at the most auspicious moment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=childbirth" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Begin Your Journey to Parenthood <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Sacred Science of <span className="text-gradient">Progeny</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            In Vedic tradition, children are considered the continuation of your lineage and a divine blessing. 
            Yet for many couples, the path to parenthood is filled with uncertainty and heartbreak. Our KP System 
            progeny analysis examines your <strong>5th house (children), 2nd house (family), and 11th house (fulfillment)</strong> 
            with Sub-Lord precision to reveal your progeny potential, identify obstacles, and guide you toward the 
            blessed moment of conception and birth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {childbirthServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Couples Trust <span className="text-gradient">KP Jyotish</span> for Progeny
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We understand the emotional weight of this journey. Our approach is scientific, compassionate, and proven.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "800+", label: "Families Blessed" },
              { value: "92%", label: "Conception Success Rate" },
              { value: "500+", label: "C-Section Muhurthams" },
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
              "After 7 years of trying, we had lost hope. The KP analysis identified the exact obstacle in my chart and 
              provided specific remedies. Within 8 months, I conceived naturally. Our baby was born at the exact auspicious 
              time they calculated. We are forever grateful."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">AP</div>
              <div className="text-left">
                <p className="text-white font-semibold">Anita & Prakash</p>
                <p className="text-white/60 text-sm">Chennai — Childbirth & Progeny</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Little Miracle <span className="text-gradient">Awaits</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don't let uncertainty cloud your journey to parenthood. Our KP analysis provides the clarity, timing, and 
            remedies you need to welcome your child into this world at the most blessed moment. Every family deserves 
            this divine guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white text-lg">Rs.2,500 - Rs.5,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">45-60 minutes consultation</span>
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
            href="/book?service=childbirth"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Progeny Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">100% Confidential • Compassionate Guidance • Proven Results</p>
        </motion.div>
      </section>
    </div>
  );
}
