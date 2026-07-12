"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    nameTe: "రమేష్ కుమార్",
    location: "Hyderabad, Telangana",
    service: "Career Guidance",
    rating: 5,
    text: "The KP analysis for my government job query was incredibly accurate. The astrologer predicted the exact month I would get selected. Highly recommended!",
    textTe: "నా ప్రభుత్వ ఉద్యోగం కోసం KP విశ్లేషణ అద్భుతంగా ఖచ్చితమైనది. నేను ఎంపికయ్యే నెలను ఖచ్చితంగా చెప్పారు.",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    nameTe: "లక్ష్మీ దేవి",
    location: "Vijayawada, Andhra Pradesh",
    service: "Marriage Matching",
    rating: 5,
    text: "We were worried about kuja dosha in my daughter's horoscope. The detailed KP analysis gave us clarity and the matching was perfect. Wedding went smoothly!",
    textTe: "నా కూతురి జాతకంలో కుజ దోషం గురించి ఆందోళనగా ఉన్నాం. వివరణాత్మక KP విశ్లేషణ మాకు స్పష్టత ఇచ్చింది.",
    avatar: "LD",
  },
  {
    id: 3,
    name: "Suresh Reddy",
    nameTe: "సురేష్ రెడ్డి",
    location: "Bangalore, Karnataka",
    service: "Childbirth Muhurtham",
    rating: 5,
    text: "The C-section muhurtham selection was done with such precision. Our baby was born at the exact auspicious time suggested. Truly blessed!",
    textTe: "సిజేరియన్ ముహూర్తం ఎంపిక చాలా ఖచ్చితంగా చేశారు. మా బాబు సూచించిన శుభ సమయానికి జన్మించాడు.",
    avatar: "SR",
  },
  {
    id: 4,
    name: "Priya Sharma",
    nameTe: "ప్రియా శర్మ",
    location: "Chennai, Tamil Nadu",
    service: "Gruha Pravesham",
    rating: 5,
    text: "The Gruha Pravesham muhurtham was perfectly calculated considering all family members' charts. Our new home feels truly blessed.",
    textTe: "గృహప్రవేశ ముహూర్తం కుటుంబ సభ్యుల అన్ని జాతకాలను పరిగణనలోకి తీసుకుని ఖచ్చితంగా లెక్కించారు.",
    avatar: "PS",
  },
  {
    id: 5,
    name: "Venkatesh Rao",
    nameTe: "వెంకటేష్ రావు",
    location: "Mumbai, Maharashtra",
    service: "Horary / Prashna",
    rating: 5,
    text: "I had lost my gold chain and was devastated. The Prashna reading not only predicted I would find it but also gave the exact direction. Found it the next day!",
    textTe: "నా బంగారు చెయిన్ పోయింది. ప్రశ్న శాస్త్రం కనుగొంటానని మరియు ఖచ్చిత దిశను చెప్పింది. మరుసటి రోజు దొరికింది!",
    avatar: "VR",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState<"en" | "te">("en");

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                lang === "en" ? "bg-saffron-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              )}
            >
              English
            </button>
            <button
              onClick={() => setLang("te")}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                lang === "te" ? "bg-saffron-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              )}
            >
              తెలుగు
            </button>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-saffron-100 dark:text-saffron-900/30" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={cn("w-5 h-5", i < current.rating ? "text-gold-400 fill-gold-400" : "text-gray-300")} />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 min-h-[100px]">
                &ldquo;{lang === "te" ? current.textTe : current.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white font-bold text-lg">
                  {current.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {lang === "te" ? current.nameTe : current.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{current.location}</p>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-saffron-50 dark:bg-saffron-900/20 text-xs text-saffron-600 dark:text-saffron-400 font-medium">
                    {current.service}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-saffron-50 dark:hover:bg-saffron-900/20 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn("w-3 h-3 rounded-full transition-all", idx === currentIndex ? "bg-saffron-500 w-8" : "bg-gray-300 dark:bg-gray-600")}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-saffron-50 dark:hover:bg-saffron-900/20 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
