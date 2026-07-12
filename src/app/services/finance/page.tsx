"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, Coins, TrendingUp, Home, Shield, Landmark, Scale, PiggyBank, Sparkles, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Property Purchase Timing",
  "Property Dispute Resolution",
  "Financial Instability Pattern Analysis",
  "Loan & Debt Clearance Timing",
  "Inheritance & Ancestral Property",
  "Investment Timing Guidance",
  "Wealth Accumulation Periods",
];

const financeServices = [
  { icon: Home, title: "Property Purchase Timing", desc: "Buying property is one of life's biggest investments. Our KP analysis identifies the exact period when your 4th house (property) and 11th house (gains) are most favorable—ensuring you buy at the right time for maximum appreciation and peace." },
  { icon: Scale, title: "Property Dispute Resolution", desc: "Stuck in a property dispute? We analyze the 6th house (litigation) and 8th house (sudden events) to predict the outcome and timing of resolution. Know when to settle, when to fight, and when to seek legal action." },
  { icon: TrendingUp, title: "Investment Timing", desc: "Should you invest in stocks, real estate, or gold now? Our analysis of your 2nd, 5th, and 11th houses reveals your most favorable investment periods and asset classes for maximum returns." },
  { icon: Landmark, title: "Loan & Debt Clearance", desc: "Overwhelmed by debt? We identify the Dasha periods when loan clearance is most likely and provide remedies to accelerate your journey to financial freedom." },
  { icon: PiggyBank, title: "Inheritance & Ancestral Property", desc: "Expecting inheritance? Our analysis of the 8th house (inheritance) and 4th house (ancestral property) predicts timing, amount, and potential obstacles—helping you plan accordingly." },
  { icon: Shield, title: "Financial Protection", desc: "We identify periods of financial vulnerability and provide protective remedies. Know when to save aggressively and when it's safe to spend or invest." },
];

const wealthFactors = [
  { title: "2nd House (Income)", desc: "Your primary source of wealth. We analyze its Sub-Lord to understand your earning potential and income patterns." },
  { title: "4th House (Property)", desc: "Real estate, vehicles, and fixed assets. Strong 4th house = stable wealth foundation." },
  { title: "8th House (Sudden Gains)", desc: "Inheritance, windfalls, and unexpected money. We predict when these sudden gains are most likely." },
  { title: "11th House (Gains)", desc: "The house of fulfillment. Strong 11th house connections mean your efforts translate into real financial rewards." },
  { title: "12th House (Expenses)", desc: "We analyze expense patterns to help you control unnecessary outflows and maximize savings." },
  { title: "Dasha Periods", desc: "Your current planetary period determines whether you're in a wealth-building phase or a consolidation phase." },
];

export default function FinancePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-600 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Coins className="w-4 h-4" /> 3,000+ Financial Success Stories
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Finance & Property
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">ధనం & ఆస్తి</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Wealth is not luck—it is cosmic timing. Our KP System analysis decodes your financial blueprint, 
              revealing when to invest, when to buy property, and when to hold back. Turn financial uncertainty 
              into strategic prosperity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=finance" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-amber-700 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Unlock Your Wealth Potential <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Financial Astrology */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Financial Success is <span className="text-gradient">Written in Your Stars</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every person has a unique financial destiny encoded in their birth chart. Some are born to accumulate 
            wealth steadily; others experience sudden windfalls; some struggle with recurring financial instability. 
            Our KP System analysis examines your <strong>2nd (income), 4th (property), 8th (sudden gains), 11th (gains), 
            and 12th (expenses)</strong> houses with Sub-Lord precision to reveal your financial patterns, optimal timing 
            for major decisions, and personalized remedies for wealth accumulation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financeServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wealth Factors */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              6 Cosmic <span className="text-gradient">Wealth Factors</span> We Analyze
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your financial destiny is determined by the interplay of 6 key houses. We examine each one with KP Sub-Lord precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wealthFactors.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-amber-500"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "3,000+", label: "Financial Consultations" },
              { value: "₹50Cr+", label: "Property Guided" },
              { value: "85%", label: "Investment Success Rate" },
              { value: "4.8/5", label: "Client Satisfaction" },
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
              "I was about to buy a property in a hurry. The KP analysis warned me of a 6-month unfavorable period. 
              I waited, and in the next favorable window, I got the same property for 15% less. That one consultation 
              saved me ₹12 lakhs. Astrology is the ultimate financial tool."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">VR</div>
              <div className="text-left">
                <p className="text-white font-semibold">Venkatesh Rao</p>
                <p className="text-white/60 text-sm">Mumbai — Property Purchase Timing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Financial Destiny <span className="text-gradient">Decoded</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Stop making financial decisions in the dark. Our KP analysis illuminates your wealth patterns, optimal timing, 
            and hidden opportunities. One consultation can save you lakhs—or make you lakhs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white text-lg">Rs.2,000 - Rs.4,000</span>
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
            href="/book?service=finance"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Finance Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">100% Confidential • Detailed PDF Report • Investment Timeline Included</p>
        </motion.div>
      </section>
    </div>
  );
}
