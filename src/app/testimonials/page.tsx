import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - Divine Jyothi",
  description: "Read what our clients say about their KP astrology consultation experience.",
};

const testimonials = [
  { name: "Ramesh K.", location: "Hyderabad", text: "Incredibly accurate predictions for my career. The KP analysis was spot on!", rating: 5 },
  { name: "Lakshmi D.", location: "Vijayawada", text: "The marriage matching was detailed and gave us complete clarity.", rating: 5 },
  { name: "Suresh R.", location: "Bangalore", text: "Childbirth muhurtham was perfect. Our baby was born at the exact auspicious time.", rating: 5 },
  { name: "Priya S.", location: "Chennai", text: "Gruha Pravesham timing was calculated considering all family charts. Very thorough.", rating: 5 },
  { name: "Venkatesh R.", location: "Mumbai", text: "Prashna reading helped me find my lost gold chain. Amazing accuracy!", rating: 5 },
  { name: "Anita M.", location: "Delhi", text: "Career guidance helped me choose the right path. Got promoted within 6 months.", rating: 5 },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Client <span className="text-gold-400">Testimonials</span>
          </h1>
          <p className="text-lg text-white/80">
            Real experiences from real clients who trusted Divine Jyothi.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
