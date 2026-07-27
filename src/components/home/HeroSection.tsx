"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Clients" },
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "50,000+", label: "Consultations" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 sacred-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-saffron-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 text-gold-400" />
              <span>Krishnamurti Paddhati (KP) System Expert</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Unlock Your{" "}
              <span className="text-gold-400">Destiny</span>
              <br />
              With <span className="text-saffron-300">Precision</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              Authentic KP Astrology consultations for Muhurtham, Career, Marriage, 
              Childbirth, and Life Guidance. Accurate predictions using the 
              Krishnamurti Paddhati system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-deepblue-900 font-semibold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 rounded-full border-2 border-white/20 flex items-center justify-center"
              >
                <div className="w-80 h-80 rounded-full border border-white/15 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-saffron-500/30 to-gold-500/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-white/90 mb-2">ॐ</div>
                      <div className="text-white/70 text-sm tracking-widest">DIVINE JYOTHI</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-saffron-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-saffron-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Next Slot</div>
                    <div className="text-xs text-gray-500">Available Today</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">500+</div>
                    <div className="text-xs text-gray-500">This Month</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
