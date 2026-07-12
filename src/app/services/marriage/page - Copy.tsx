"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock } from "lucide-react";

export default function MarriagePage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-pink-500 to-rose-500 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Marriage & Relationships
          </h1>
          <p className="text-xl text-white/80 mb-2">వివాహం & బంధాలు</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive marriage analysis and matching using KP's 7th cusp Sub-Lord.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Service</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Marriage is a sacred bond. Our KP analysis examines the 7th cusp Sub-Lord, Venus placement, and Dasha periods to provide clarity on all marriage-related queries.
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white">Rs.2,000 - Rs.5,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">45-60 minutes</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s Included</h3>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Detailed Kundali Matching (Pelli Kuturu)</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Marriage Timing Prediction</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Delayed Marriage Analysis & Remedies</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Post-Marriage Problem Resolution</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Love Marriage vs Arranged Marriage</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Second Marriage Possibility</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Kuja Dosha Analysis</span></div>
          </div>

          <Link 
            href="/book?service=marriage" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold hover:shadow-lg transition-all"
          >
            Book This Service
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-saffron-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Share Details</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Provide your birth details and specific questions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-saffron-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Get Analysis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive detailed KP astrology analysis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-saffron-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Remedies</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Get personalized remedies and guidance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
