"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock } from "lucide-react";

export default function HealthPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-red-500 to-rose-600 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Health & Well-being
          </h1>
          <p className="text-xl text-white/80 mb-2">ఆరోగ్యం</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Health diagnosis and surgery timing using KP's 1st, 6th, 8th, and 12th house analysis.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Service</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Health is wealth. Our KP analysis examines the 1st (self), 6th (disease), 8th (chronic), and 12th (hospitalization) houses to diagnose and time health-related events.
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white">Rs.2,000 - Rs.4,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">30 minutes</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s Included</h3>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Health Problem Diagnosis</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Surgery Timing Selection</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Mental Stress & Anxiety Analysis</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Chronic Disease Prediction</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Recovery Period Calculation</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Medication Effectiveness Timing</span></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="text-gray-700 dark:text-gray-300">Preventive Remedies</span></div>
          </div>

          <Link 
            href="/book?service=health" 
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
