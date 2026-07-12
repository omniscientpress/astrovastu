"use client";

import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Clock, Star, Target, TrendingUp, Building2, GraduationCap, Globe, Shield, Award, Users, Sparkles, Briefcase, Store, BarChart3, Lightbulb, Compass, Rocket, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Course/Stream Selection for Students",
  "Government vs Private Job Prediction",
  "Promotion Timing Analysis",
  "Foreign Job/Settlement Possibility",
  "Business vs Job Dilemma Resolution",
  "Competitive Exam Success Prediction",
  "Career Change Timing",
];

const careerScenarios = [
  { icon: GraduationCap, title: "Students & Freshers", desc: "Confused about which stream to choose? Our KP analysis of your 4th, 9th, and 10th houses reveals the academic path that aligns with your innate talents and future success." },
  { icon: Building2, title: "Working Professionals", desc: "Stuck in your current role? We predict exact timing for promotions, salary hikes, and job switches. Know when to ask for that raise or when to jump ship for better opportunities." },
  { icon: Target, title: "Government Job Aspirants", desc: "Dream of a secure government position? Our KP analysis examines your 6th and 10th house significators to predict your chances and the exact period when success is most likely." },
  { icon: Globe, title: "Foreign Career Seekers", desc: "Planning to work abroad? We analyze your 9th and 12th house connections to determine the best time for foreign job applications, visa approvals, and overseas settlement." },
  { icon: TrendingUp, title: "Entrepreneurs", desc: "Should you start a business or stick to a job? Our analysis of your 2nd, 7th, and 10th houses gives you clarity on business potential, partnership compatibility, and optimal launch timing." },
  { icon: Shield, title: "Career Transitions", desc: "Contemplating a major career shift? We identify the most favorable periods for change and warn you about phases where staying put is the wiser choice." },
];

const successStories = [
  { name: "Ramesh K.", role: "Software Engineer → IAS Officer", result: "Predicted exact month of UPSC selection. Now serving as Deputy Collector.", time: "6 months" },
  { name: "Priya S.", role: "Fresher → MNC Placement", result: "Guided to the right company and role. Package doubled within 2 years.", time: "3 months" },
  { name: "Venkatesh R.", role: "Local Business → Export Entrepreneur", result: "Identified the perfect time to expand overseas. Revenue grew 400%.", time: "1 year" },
];

const jobBusinessAnalysis = [
  {
    icon: Briefcase,
    title: "Job vs Business — The Ultimate Dilemma",
    desc: "One of the most critical decisions of your life. Our KP analysis doesn't give generic advice—we examine your 2nd house (wealth accumulation), 7th house (partnerships/business), 10th house (career), and 11th house (gains) to determine whether you are cosmically wired for employment or entrepreneurship.",
    points: [
      "Strong 7th + 10th house connection → Business potential is high",
      "Strong 6th + 10th house → Job/corporate career is your path",
      "Saturn in 10th → Delayed but stable career growth",
      "Mars in 7th → Aggressive business instincts",
      "Jupiter aspect on 10th → Authority positions, leadership roles",
    ]
  },
  {
    icon: Store,
    title: "What Kind of Business Will Succeed for You?",
    desc: "Not every business suits every person. Your birth chart reveals the industry, scale, and business model aligned with your cosmic blueprint. We analyze planetary significators to recommend the business type where success is practically guaranteed.",
    points: [
      "Mercury strong → Trading, communication, IT, media, education",
      "Venus strong → Fashion, beauty, luxury goods, arts, entertainment",
      "Mars strong → Real estate, construction, defense, sports, manufacturing",
      "Jupiter strong → Finance, consulting, teaching, legal, spiritual services",
      "Saturn strong → Manufacturing, agriculture, old-age services, infrastructure",
      "Rahu strong → Technology, innovation, foreign trade, unconventional ventures",
      "Ketu strong → Research, spirituality, healing, occult sciences",
    ]
  },
  {
    icon: Building2,
    title: "What Kind of Job Will Bring You Success?",
    desc: "Your chart reveals whether you thrive in government service, private corporate, startups, or freelancing. We identify the sector, role type, and work environment where your planets guarantee growth and satisfaction.",
    points: [
      "Strong Sun + 10th house → Government, authority, leadership roles",
      "Strong Mercury + 6th house → Analytical jobs: finance, audit, data science",
      "Strong Venus + 10th house → Creative roles: design, marketing, HR",
      "Strong Mars + 6th house → Competitive fields: sales, operations, military",
      "Strong Jupiter + 9th house → Teaching, law, consulting, higher education",
      "Strong Saturn + 10th house → Stable, long-term careers with gradual growth",
      "Strong Rahu → IT, foreign companies, cutting-edge technology roles",
    ]
  },
];

const progressRemedies = [
  {
    icon: Rocket,
    title: "Already in a Job? — Accelerate Your Growth",
    desc: "If you're already employed but feel stuck, our KP analysis identifies the exact obstacles blocking your promotion and provides targeted remedies to unlock your career trajectory.",
    points: [
      "Identify your 'promotion window' — the exact months when asking for a raise or new role has highest success probability",
      "Boss compatibility analysis — understand your relationship with authority figures and how to improve it",
      "Department/team transfer timing — know when switching teams or projects will benefit you most",
      "Side-hustle feasibility — can you grow a parallel income stream without risking your job?",
      "Job switch timing — the precise period when leaving your current job will lead to a better opportunity",
    ]
  },
  {
    icon: TrendingUp,
    title: "Already in Business? — Scale & Prosper",
    desc: "Running a business but hitting a plateau? Our analysis reveals why growth has stalled and provides the cosmic roadmap to break through to the next level.",
    points: [
      "Expansion timing — the exact period when opening new branches, launching new products, or entering new markets will succeed",
      "Partnership analysis — should you bring in a partner? Who is cosmically compatible with you?",
      "Investment timing — when to reinvest profits vs. when to hold cash reserves",
      "Competition analysis — understand your competitive landscape through planetary influences",
      "Crisis prediction & mitigation — identify upcoming challenging periods and prepare with preemptive remedies",
      "Succession planning — the right time to hand over or bring in next-generation leadership",
    ]
  },
  {
    icon: Sparkles,
    title: "Powerful Remedies for Career Progress",
    desc: "Generic advice doesn't work. Our remedies are customized based on your specific planetary positions and current Dasha period—designed to strengthen weak career houses and amplify your natural strengths.",
    points: [
      "Gemstone recommendation — the exact stone, carat, metal, and finger for maximum career benefit",
      "Mantra & puja — specific mantras timed to your Dasha for professional growth",
      "Favorable directions — the direction you should face while working or the direction for your office desk",
      "Auspicious days & colors — specific days of the week and colors that enhance your professional energy",
      "Donation & charity — the right causes and timing for charitable acts that strengthen your 10th house",
      "Name correction — if your name vibrations are blocking career growth, we suggest phonetic adjustments",
    ]
  },
];

export default function CareerPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 sacred-pattern opacity-10" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-10 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> #1 Career Astrology Service
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Career & Education
            </h1>
            <p className="text-2xl text-white/90 mb-2 font-telugu">ఉద్యోగం & విద్య</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your career is not a gamble—it is written in the stars. Our KP System analysis decodes your professional 
              destiny with pinpoint accuracy, guiding you toward the success you were born to achieve.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/book?service=career" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all">
                Unlock Your Career Destiny <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Career Astrology */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Career Decisions Need <span className="text-gradient">Astrological Precision</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every career choice—from the course you study to the company you join—shapes your entire life trajectory. 
            Yet most people make these decisions blindly, without understanding their cosmic blueprint. Our KP System 
            career analysis examines your <strong>4th (education), 6th (service), 9th (fortune), 10th (career), and 11th (gains)</strong> houses 
            with Sub-Lord precision to reveal the career path where success is not just possible—it is inevitable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerScenarios.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JOB VS BUSINESS — NEW SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-4">
              <Compass className="w-4 h-4" /> Most Requested Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Job vs Business — <span className="text-gradient">Your Cosmic Calling</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This is the question that keeps millions awake at night. Should you chase the security of a job or take the 
              leap into entrepreneurship? <strong>Your birth chart holds the definitive answer.</strong> Our KP System analysis 
              doesn't guess—we decode your planetary blueprint to reveal whether you are destined for employment excellence 
              or entrepreneurial empire-building. This one consultation can save you years of trial, error, and regret.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobBusinessAnalysis.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.points.map((point, pidx) => (
                        <div key={pidx} className="flex items-start gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
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

      {/* PROGRESS REMEDIES — NEW SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-sm font-semibold mb-4">
            <Lightbulb className="w-4 h-4" /> For Those Already on Their Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stuck in Your Current Role? — <span className="text-gradient">Break Through</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            You don't need to change careers to change your fortune. Whether you're in a job or running a business, 
            our KP analysis identifies the exact cosmic blocks holding you back and provides powerful, personalized 
            remedies to accelerate your progress. <strong>Most of our clients see tangible improvements within 3-6 months 
            of following our guidance.</strong>
          </p>
        </motion.div>

        <div className="space-y-8">
          {progressRemedies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-green-500 to-emerald-600' : index === 1 ? 'from-amber-500 to-orange-600' : 'from-purple-500 to-violet-600'} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.points.map((point, pidx) => (
                      <div key={pidx} className="flex items-start gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These are not coincidences. These are destinies aligned through precise KP analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{story.name}</p>
                    <p className="text-xs text-saffron-600 dark:text-saffron-400">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{story.result}</p>
                <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                  <TrendingUp className="w-3 h-3" /> Result in {story.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What You <span className="text-gradient">Receive</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive career blueprint that leaves no question unanswered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Exact Career Path", desc: "Not generic advice—specific career fields, industries, and roles where your planets guarantee success." },
            { icon: Clock, title: "Timing Precision", desc: "Know the exact months and years when job offers, promotions, and salary hikes are most likely. Plan your moves accordingly." },
            { icon: Shield, title: "Risk Warnings", desc: "We identify periods of career instability and advise when NOT to make major decisions. Avoid costly mistakes." },
            { icon: Sparkles, title: "Remedies for Success", desc: "If your career houses are weak, receive powerful, personalized remedies to strengthen your professional destiny." },
            { icon: Award, title: "Competitive Edge", desc: "For exam aspirants, we predict success probability and optimal preparation periods. Know if IAS, GATE, or CAT is in your stars." },
            { icon: Users, title: "Boss & Colleague Analysis", desc: "Understand your compatibility with authority figures and team dynamics. Navigate office politics with cosmic wisdom." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
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

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-deepblue-900 to-deepblue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Star className="w-10 h-10 text-gold-400 mx-auto mb-4" />
            <blockquote className="text-xl sm:text-2xl text-white/90 italic leading-relaxed mb-6">
              "I was stuck in a dead-end job for 5 years. The KP analysis predicted my promotion window with shocking accuracy. 
              I applied for a transfer in that exact period and got a 3x salary hike. This is not astrology—this is science."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">RK</div>
              <div className="text-left">
                <p className="text-white font-semibold">Ramesh Kumar</p>
                <p className="text-white/60 text-sm">Hyderabad — Career Guidance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Dream Career is <span className="text-gradient">Written in the Stars</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Stop guessing. Stop hoping. Know with certainty what your professional future holds and when to make your move. 
            Whether you're choosing between job and business, seeking growth in your current role, or planning a complete 
            career transformation—one consultation can change the trajectory of your entire professional life.
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
            href="/book?service=career"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-bold text-lg shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Career Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 mt-4">100% Satisfaction Guarantee • Detailed PDF Report Included • Video Recording Available</p>
        </motion.div>
      </section>
    </div>
  );
}
