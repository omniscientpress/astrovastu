"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Calendar, Star, Globe, Award, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Happy Clients", labelTe: "సంతోషమైన క్లయింట్లు" },
  { icon: Calendar, value: 50000, suffix: "+", label: "Consultations Done", labelTe: "పూర్తి చేసిన సంప్రదింపులు" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Average Rating", labelTe: "సగటు రేటింగ్" },
  { icon: Globe, value: 25, suffix: "+", label: "Countries Served", labelTe: "సేవలందించిన దేశాలు" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience", labelTe: "సంవత్సరాల అనుభవం" },
  { icon: Heart, value: 98, suffix: "%", label: "Client Satisfaction", labelTe: "క్లయింట్ సంతృప్తి" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-white">
      {value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-deepblue-900 via-deepblue-800 to-saffron-900 relative overflow-hidden">
      <div className="absolute inset-0 sacred-pattern opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-gold-400">Thousands</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Numbers that reflect our commitment to authentic KP astrology guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="w-8 h-8 text-gold-400" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white font-medium mt-2">{stat.label}</p>
              <p className="text-white/60 text-sm">{stat.labelTe}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
