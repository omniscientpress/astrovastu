"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, HelpCircle, Zap, Search, Eye, FileQuestion, MapPin, GraduationCap, Plane, Shield, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Yes/No Question Answers",
  "Lost Item Location",
  "Missing Person Prediction",
  "Exam Result Prediction",
  "Job Interview Outcome",
  "Travel Safety Query",
  "General Life Questions",
];

const prashnaTypes = [
  { icon: FileQuestion, title: "Yes/No Questions", desc: "Will I get the job? Should I make this investment? Will the deal go through? Our KP 1-249 number system provides definitive Yes/No answers with remarkable accuracy—no birth details needed." },
  { icon: Search, title: "Lost Items", desc: "Lost your jewelry, documents, or valuables? The Prashna chart reveals not just whether you'll find them, but also the direction, distance, and approximate time of recovery." },
  { icon: Eye, title: "Missing Persons", desc: "When someone goes missing, every minute counts. Our Prashna analysis can indicate their current status, direction of movement, and likelihood of safe return." },
  { icon: GraduationCap, title: "Exam Results", desc: "Waiting for exam results? We can predict your performance and outcome before the results are announced, helping you plan your next steps with confidence." },
  { icon: Target, title: "Job Interview Outcome", desc: "Nervous about an upcoming interview? Our analysis predicts the outcome based on the moment of your query, giving you peace of mind and strategic guidance." },
  { icon: Plane, title: "Travel Safety", desc: "Planning a journey? We analyze the safety and success of your travel plans, identifying any potential obstacles and advising on the best travel dates." },
];

const howItWorks = [
  { step: "01", title: "Ask Your Question", desc: "Think deeply about your question. The sincerity and clarity of your query directly influence the accuracy of the answer." },
  { step: "02", title: "Give a Number (1-249)", desc: "Choose any number between 1 and 249. This number becomes the seed for your Prashna chart. Don't overthink it—let your intuition guide you." },
  { step: "03", title: "KP Chart Casting", desc: "We cast a horary chart based on the exact moment of your query and your chosen number. The KP Sub-Lord system then decodes the planetary answer." },
  { step: "04", title: "Receive Your Answer", desc: "Within minutes, you receive a clear, definitive answer with supporting reasoning. No vague predictions—just precise cosmic guidance." },
];

export default function PrashnaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> Instant Answers — No Birth Details Needed
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Horary / Prashna
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">ప్రశ్న శాస్త్రం</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              When you need an answer NOW, Prashna astrology delivers. Using the revolutionary KP 1-249 number system, 
              we provide instant, accurate answers to your most pressing questions—without needing your birth details.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=prashna" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-violet-700 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Get Your Answer Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Prashna */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Answers When You Need Them <span className="text-gradient">Most</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Life doesn't wait for perfect timing. Sometimes you need an answer TODAY. Traditional astrology requires 
            birth details, complex calculations, and hours of analysis. <strong>Prashna (Horary) astrology bypasses all of that.</strong> 
            Using the KP 1-249 number system, we cast a chart based on the exact moment of your query and provide 
            definitive answers in minutes. No birth time needed. No date of birth needed. Just your sincere question 
            and a number from 1 to 249.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prashnaTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How <span className="text-gradient">Prashna</span> Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A simple 4-step process that delivers cosmic clarity in minutes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Prashna */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Prashna is <span className="text-gradient">Revolutionary</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Zap, title: "Instant Answers", desc: "No waiting for complex calculations. Get your answer within minutes of asking your question." },
            { icon: Shield, title: "No Birth Details Needed", desc: "Don't know your birth time? No problem. Prashna works purely on the moment of your query." },
            { icon: Target, title: "Specific Questions Only", desc: "Unlike general horoscope readings, Prashna answers ONE specific question with laser focus." },
            { icon: Sparkles, title: "KP 1-249 Precision", desc: "The KP 1-249 number system is the most accurate horary method in astrology, developed by K.S. Krishnamurti himself." },
            { icon: Star, title: "High Accuracy Rate", desc: "Our Prashna consultations boast a 90%+ accuracy rate for Yes/No questions and specific queries." },
            { icon: HelpCircle, title: "Affordable & Accessible", desc: "At just Rs.500-Rs.1,000, Prashna is the most accessible way to get astrological guidance when you need it most." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-purple-500 to-violet-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Prashna Queries Answered" },
              { value: "90%+", label: "Accuracy Rate" },
              { value: "15 min", label: "Average Response Time" },
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
              "I had lost my grandmother's gold chain and was devastated. The Prashna reading not only predicted I would find it 
              but also gave the exact direction—northwest—and said it was near water. I found it in the bathroom, behind the 
              sink, the very next morning. I still get goosebumps thinking about it."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">VR</div>
              <div className="text-left">
                <p className="text-white font-semibold">Venkatesh Rao</p>
                <p className="text-white/60 text-sm">Mumbai — Lost Item Prashna</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Answer <span className="text-gradient">In Minutes</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don't let uncertainty paralyze you. Whether it's a lost item, a pending decision, or a burning question—
            Prashna astrology provides the clarity you need, when you need it. Fast, accurate, and affordable.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-saffron-500" />
              <span className="font-bold text-gray-900 dark:text-white text-lg">Rs.500 - Rs.1,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">15 minutes consultation</span>
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
            href="/book?service=prashna"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Ask Your Question Now <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">No Birth Details Required • Instant Answers • 90%+ Accuracy</p>
        </motion.div>
      </section>
    </div>
  );
}
