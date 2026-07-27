"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, Heart, CircleDot, Baby, Shield, AlertTriangle, Sparkles, Users, User, Home, Handshake, Gem, Award, BookOpen, Flame, ThumbsUp, ThumbsDown, ShieldAlert, AlertCircle, UserPlus, Trees, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Detailed Kundali Matching (Pelli Kuturu & Pelli Koduku)",
  "Marriage Timing Prediction for Both Partners",
  "Delayed Marriage Analysis & Remedies",
  "Post-Marriage Problem Resolution",
  "Love Marriage vs Arranged Marriage",
  "Second Marriage Possibility",
  "Kuja Dosha Analysis",
];

const marriageServices = [
  { icon: CircleDot, title: "Kundali Matching", desc: "We don't just count gunas. Our KP analysis examines the 7th cusp Sub-Lord, Venus placement, Jupiter's strength, and Dasha periods for both Pelli Koothuru and Pelli Koduku to determine true compatibility at the deepest level." },
  { icon: Heart, title: "Marriage Timing", desc: "When will you get married? We analyze both partners' 7th houses, their Sub-Lords, and current Dasha periods to predict the exact timeframe when marriage is most likely—often down to the month." },
  { icon: AlertTriangle, title: "Delayed Marriage", desc: "If marriage has been delayed despite efforts, we identify the exact planetary obstacles in both charts and provide powerful, time-tested remedies that have helped hundreds find their life partner." },
  { icon: Handshake, title: "Post-Marriage Issues", desc: "Marital conflicts, misunderstandings, or lack of harmony? Our analysis pinpoints the root cause from both Pelli Koothuru and Pelli Koduku perspectives and provides remedies to restore love, trust, and peace." },
  { icon: Sparkles, title: "Love Marriage Analysis", desc: "Wondering if your love will culminate in marriage? We analyze both partners' 5th houses (love) and 7th houses (marriage) connection to predict the outcome with remarkable accuracy." },
  { icon: Baby, title: "Progeny After Marriage", desc: "Along with marriage timing, we examine both charts' 5th houses to predict when children are most likely, ensuring you plan your family with cosmic wisdom." },
];

const familyCompatibility = [
  {
    icon: Gem,
    title: "Mother-in-Law (Athagaru) Compatibility",
    desc: "The relationship with your mother-in-law can make or break a marriage. For the Pelli Koothuru (bride), we analyze her Moon (emotions) and the mother-in-law's Saturn (authority) placement. For the Pelli Koduku (groom), we examine his Venus (relationships) and the mother-in-law's Jupiter (wisdom) to predict harmony or conflict. Our remedies have transformed the most strained relationships into loving bonds.",
    points: [
      "Bride: Moon-Saturn analysis — emotional compatibility with mother-in-law",
      "Groom: Venus-Jupiter analysis — relationship dynamics with mother-in-law",
      "4th house (home) cross-analysis — how both charts influence the household",
      "Dasha timing — when conflicts peak and when reconciliation is most likely",
      "Remedies: Specific mantras, fasting days, and behavioral adjustments for harmony",
    ]
  },
  {
    icon: UserPlus,
    title: "Father-in-Law (Mavagaru) Compatibility",
    desc: "The father-in-law sets the tone for the entire family's relationship with the new member. For the Pelli Koothuru, we examine her Mars (energy) and the father-in-law's Sun (authority). For the Pelli Koduku, we analyze his Jupiter (wisdom) and the father-in-law's Saturn (discipline) to understand respect dynamics, financial interference, and decision-making conflicts.",
    points: [
      "Bride: Mars-Sun analysis — energy and authority alignment with father-in-law",
      "Groom: Jupiter-Saturn analysis — wisdom and discipline compatibility",
      "10th house (career) cross-check — professional expectations and interference",
      "2nd house (family) compatibility — financial values and tradition alignment",
      "Remedies: Respect rituals, auspicious meeting timings, gemstone recommendations",
    ]
  },
  {
    icon: Users,
    title: "Sister-in-Law (Maradalu) Compatibility",
    desc: "Sister-in-law relationships affect daily family life. For the Pelli Koothuru, we analyze her Mercury (communication) and the sister-in-law's Venus (love). For the Pelli Koduku, we examine his Mars (energy) and the sister-in-law's Moon (emotions) to predict jealousy, competition, or sisterly bonding potential.",
    points: [
      "Bride: Mercury-Venus analysis — communication and love patterns",
      "Groom: Mars-Moon analysis — energy and emotional compatibility",
      "3rd house (siblings) cross-analysis — sibling rivalry or support",
      "11th house (friendship) check — genuine friendship potential",
      "Remedies: Gift-giving auspicious days, shared activities, color therapy",
    ]
  },
  {
    icon: Home,
    title: "Brother-in-Law (Bava) Compatibility",
    desc: "Brother-in-law relationships affect family gatherings, property, and sibling loyalty. For the Pelli Koothuru, we examine her Jupiter (wisdom) and the brother-in-law's Mars (energy). For the Pelli Koduku, we analyze his Saturn (stability) and the brother-in-law's Sun (authority) to predict cooperation or competition.",
    points: [
      "Bride: Jupiter-Mars analysis — wisdom and energy dynamics",
      "Groom: Saturn-Sun analysis — stability and authority alignment",
      "Property and inheritance compatibility — 4th and 8th house cross-analysis",
      "Business partnership potential — 7th and 10th house examination",
      "Remedies: Joint activity timing, respect rituals, protective gemstones",
    ]
  },
  {
    icon: Trees,
    title: "Extended Family Harmony",
    desc: "Aunts, uncles, cousins, and grandparents all influence the marital ecosystem. Our comprehensive analysis examines both partners' charts against the collective family energy to predict overall acceptance and support for both the Pelli Koothuru and Pelli Koduku.",
    points: [
      "Collective family chart energy analysis — overall vibration for both partners",
      "Elder blessing analysis — grandparents' influence on marriage longevity",
      "Family event timing — auspicious dates for first visits and ceremonies",
      "Remedies: Family puja, collective donations, home Vastu tips",
      "Cultural adaptation — aligning with traditions while maintaining identity",
    ]
  },
  {
    icon: Award,
    title: "Complete Family Compatibility Report",
    desc: "Our signature offering — a comprehensive 360-degree analysis of both Pelli Koothuru and Pelli Koduku with up to 8 family members. This is the most thorough pre-marital compatibility assessment available in KP astrology, ensuring no relationship stone is left unturned for either partner.",
    points: [
      "Up to 10 charts analyzed — bride, groom, both parents, siblings, relatives",
      "Conflict matrix — compatibility grid between every pair of family members",
      "Power dynamics map — navigating family hierarchies for both partners",
      "Crisis prediction — periods when tensions may arise, with strategies",
      "Lifetime harmony plan — ongoing remedies for sustained family peace",
    ]
  },
];

const compatibilityFactors = [
  { title: "7th Cusp Sub-Lord", desc: "The most critical factor in KP astrology. Determines the quality, timing, and nature of your marriage for both Pelli Koothuru and Pelli Koduku." },
  { title: "Venus & Jupiter", desc: "Venus governs love and attraction; Jupiter governs wisdom and expansion in relationships. Their strength is vital in both partners' charts." },
  { title: "Dasha Periods", desc: "Both partners' current planetary periods (Dasha) determine when marriage events unfold. Wrong Dasha = delays or problems." },
  { title: "Kuja/Mangal Dosha", desc: "We don't just detect it—we analyze its intensity, cancellation factors, and provide precise remedies if needed for both charts." },
  { title: "Nakshatra Compatibility", desc: "Beyond Rasi matching, we examine Nakshatra (star) compatibility for emotional and spiritual harmony between both partners." },
  { title: "Ashtakoota + KP", desc: "We combine traditional Ashtakoota (36-point) matching with KP Sub-Lord analysis for the most comprehensive compatibility report." },
];

export default function MarriagePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-700 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" /> Trusted by 5,000+ Couples
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Marriage & Relationships
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">వివాహం & బంధాలు</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Marriage is not just a union of two people—it is a cosmic contract between a Pelli Koothuru and Pelli Koduku. 
              Our KP System analysis ensures both partners enter this sacred bond at the right time, with the right person, 
              and under the most favorable stars.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=marriage" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-rose-600 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Find Your Perfect Match <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Marriage Astrology */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Marriage Needs <span className="text-gradient">Astrological Precision</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A happy marriage is the foundation of a fulfilling life for both Pelli Koothuru and Pelli Koduku. Yet countless marriages fail because the couple 
            was incompatible at a cosmic level—or they married at the wrong time. Our KP System marriage analysis 
            goes far beyond traditional matching. We examine the <strong>7th cusp Sub-Lord, Venus-Jupiter dynamics, 
            Dasha periods, and Nakshatra compatibility</strong> for both partners to ensure your marriage is built on a foundation of 
            cosmic harmony.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marriageServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Family Compatibility Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 text-sm font-semibold mb-4">
              <Users className="w-4 h-4" /> Exclusive to Divine Jyothi — India's First
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Family Compatibility — <span className="text-gradient">The Missing Piece</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <strong>Most marriages don't fail because the couple is incompatible—they fail because the families are.</strong> 
              A difficult mother-in-law, a jealous sister-in-law, or an interfering father-in-law can destroy even the 
              strongest love. Our revolutionary <strong>Family Compatibility Analysis</strong> is the first of its kind in India, 
              examining compatibility not just between Pelli Koothuru and Pelli Koduku, but with every key family member. This is the 
              insurance policy your marriage deserves.
            </p>
          </motion.div>

          <div className="space-y-8">
            {familyCompatibility.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index === 5 ? 'from-saffron-500 to-gold-500' : 'from-pink-500 to-rose-600'} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.points.map((point, pidx) => (
                        <div key={pidx} className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20">
                          <Check className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Family Compatibility Matters */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The <span className="text-gradient">Hard Truth</span> About Marital Breakdown
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Studies show that <strong>over 60% of marital conflicts stem from family interference</strong>, not couple incompatibility. 
            Yet no traditional astrology service addresses this. At Divine Jyothi, we believe marriage is not just between two people—
            it is between two families. Our Family Compatibility Analysis ensures both Pelli Koothuru and Pelli Koduku enter their new family with eyes wide open, 
            armed with knowledge, remedies, and strategies for lifelong harmony.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: AlertTriangle, title: "Mother-in-Law Conflicts", desc: "The #1 cause of marital stress in Indian households — affecting both Pelli Koothuru and Pelli Koduku equally. Our analysis predicts the exact nature of potential conflict from both perspectives and provides preemptive remedies before the first argument ever happens." },
            { icon: ShieldAlert, title: "Sister-in-Law & Brother-in-Law Tensions", desc: "Hidden resentment, competition for attention, and property disputes affect both partners. We identify these patterns in both charts and provide strategies to convert rivalry into genuine family bonds." },
            { icon: ThumbsDown, title: "Father-in-Law Disapproval", desc: "Professional expectations, cultural differences, and authority clashes can strain either the bride's or groom's relationship. Our analysis helps both partners understand his perspective and earn respect from day one." },
            { icon: ThumbsUp, title: "Building Lifelong Bonds", desc: "It's not all about avoiding conflict. We identify family members who will be the biggest supporters of both Pelli Koothuru and Pelli Koduku, guiding each partner on nurturing those key relationships." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
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

      {/* Compatibility Factors */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              6 Critical <span className="text-gradient">Compatibility Factors</span> We Analyze
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Traditional matching checks 36 points. We go deeper—analyzing 6 cosmic dimensions that determine true marital bliss for both partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compatibilityFactors.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-pink-500"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-gradient-to-br from-rose-500 to-pink-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "5,000+", label: "Couples Matched" },
              { value: "98%", label: "Marriage Success Rate" },
              { value: "1,200+", label: "Delayed Marriages Resolved" },
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
              "We were worried about kuja dosha in our charts before marriage. The detailed KP analysis for both 
              Pelli Koothuru and Pelli Koduku not only gave us clarity but also provided simple remedies. 
              The matching was perfect and the wedding went smoothly. Today, we are the happiest couple I know."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">LD</div>
              <div className="text-left">
                <p className="text-white font-semibold">Lakshmi Devi</p>
                <p className="text-white/60 text-sm">Vijayawada — Marriage Matching</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Soulmate is <span className="text-gradient">Written in the Stars</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Don't leave the most important decision of your life to chance. Whether you're a <strong>Pelli Koothuru (bride)</strong> or <strong>Pelli Koduku (groom)</strong>, our KP analysis provides the clarity and guidance you need for a lifetime of happiness.
          </p>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            {/* Basic - Individual */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Individual</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pelli Koothuru or Pelli Koduku</p>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-saffron-600">Rs.2,000</span>
                <span className="text-gray-500 text-sm"> - Rs.5,000</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Personal 7th house analysis</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Marriage timing prediction</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Kuja dosha check</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Basic compatibility</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Family member analysis</li>
              </ul>
              <Link href="/book?service=marriage&plan=individual" className="block w-full py-3 rounded-xl border-2 border-saffron-500 text-saffron-600 font-semibold text-center hover:bg-saffron-50 dark:hover:bg-saffron-900/20 transition-colors">
                Book Individual
              </Link>
            </div>

            {/* Couple - Bride + Groom */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-2xl p-6 border-2 border-rose-300 dark:border-rose-800 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-500 text-white text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="text-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Couple Package</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pelli Koothuru + Pelli Koduku</p>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-rose-600">Rs.5,000</span>
                <span className="text-gray-500 text-sm"> - Rs.8,000</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Both partners' 7th house analysis</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Detailed Kundali matching</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Marriage timing for both</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Dasha alignment check</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Post-marriage guidance</li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />Extended family analysis</li>
              </ul>
              <Link href="/book?service=marriage&plan=couple" className="block w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold text-center hover:shadow-lg transition-all">
                Book Couple Package
              </Link>
            </div>

            {/* Family Package - Special */}
            <div className="bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-saffron-950/30 dark:to-gold-950/30 rounded-2xl p-6 border-2 border-saffron-400 dark:border-saffron-700 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-saffron-500 to-gold-500 text-white text-xs font-bold">
                COMPLETE FAMILY
              </div>
              <div className="text-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Family Package</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Pelli Koothuru + Pelli Koduku + Family</p>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-saffron-600">Rs.10,000</span>
                <span className="text-gray-500 text-sm"> - Rs.15,000</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Everything in Couple Package</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Mother-in-law compatibility</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Father-in-law compatibility</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Sister-in-law & Brother-in-law</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Extended family harmony</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Up to 10 charts analyzed</li>
              </ul>
              <Link href="/book?service=marriage&plan=family" className="block w-full py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold text-center hover:shadow-lg transition-all">
                Book Family Package
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-saffron-500" />
              <span className="text-gray-600 dark:text-gray-400">45-90 minutes consultation</span>
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
            href="/book?service=marriage"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Marriage Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">100% Satisfaction Guarantee • Detailed Compatibility Report • Family Analysis for Both Partners • Remedies Included</p>
        </motion.div>
      </section>
    </div>
  );
}