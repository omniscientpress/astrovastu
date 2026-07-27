import { Metadata } from "next";
import { Award, Users, BookOpen, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Divine Jyothi",
  description: "Learn about Divine Jyothi and our expertise in Krishnamurti Paddhati astrology system.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-gold-400">Divine Jyothi</span>
          </h1>
          <p className="text-lg text-white/80">
            Dedicated to providing authentic and accurate KP astrology consultations.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            At Divine Jyothi, we are dedicated to providing authentic and accurate astrology consultations
            using the Krishnamurti Paddhati (KP) system. Our mission is to help individuals navigate 
            life's challenges with clarity and confidence through precise astrological guidance.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is KP System?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            The Krishnamurti Paddhati (KP) system is a revolutionary method of astrological prediction 
            developed by the legendary astrologer K.S. Krishnamurti. Unlike traditional Vedic astrology, 
            KP system uses a unique Sub-Lord theory that provides remarkably accurate predictions with 
            precise timing of events.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 my-12">
            {[
              { icon: Award, title: "15+ Years", desc: "Of astrology experience" },
              { icon: Users, title: "10,000+", desc: "Happy clients worldwide" },
              { icon: BookOpen, title: "50,000+", desc: "Consultations completed" },
              { icon: Star, title: "4.9/5", desc: "Average client rating" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <item.icon className="w-10 h-10 text-saffron-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
