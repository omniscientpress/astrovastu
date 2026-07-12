"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deepblue-900 via-deepblue-800 to-saffron-900" />
      <div className="absolute inset-0 sacred-pattern opacity-20" />
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10 w-40 h-40 bg-saffron-500/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Unlock Your <span className="text-gold-400">Destiny</span>?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Book your KP astrology consultation today. Get accurate predictions, auspicious timings, and effective remedies from an expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-deepblue-900 font-semibold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300">
              Book Consultation Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-semibold text-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+91 98765 43210</span></div>
            <div className="flex items-center gap-2"><span>✓ Instant Booking</span></div>
            <div className="flex items-center gap-2"><span>✓ 100% Secure Payment</span></div>
            <div className="flex items-center gap-2"><span>✓ Money Back Guarantee</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
