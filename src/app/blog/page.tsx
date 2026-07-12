import { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - KP Jyotish",
  description: "Articles and insights on KP astrology, Muhurtham, and Vedic wisdom.",
};

const posts = [
  { title: "Understanding KP Sub-Lord Theory", excerpt: "Learn how the Sub-Lord theory in KP astrology provides precise timing predictions...", date: "June 15, 2024", category: "KP System", slug: "understanding-kp-sub-lord-theory" },
  { title: "Auspicious Muhurtham for Childbirth", excerpt: "How to select the perfect timing for C-section delivery using KP astrology...", date: "June 10, 2024", category: "Muhurtham", slug: "auspicious-muhurtham-childbirth" },
  { title: "Career Prediction Using KP System", excerpt: "Analyzing the 10th house and its significators for accurate career guidance...", date: "June 5, 2024", category: "Career", slug: "career-prediction-kp-system" },
  { title: "Marriage Matching in KP Astrology", excerpt: "The importance of 7th cusp Sub-Lord in determining marital compatibility...", date: "May 28, 2024", category: "Marriage", slug: "marriage-matching-kp-astrology" },
  { title: "Progeny Analysis: 5th House Significators", excerpt: "Understanding childbirth timing through KP's 5th house analysis...", date: "May 20, 2024", category: "Childbirth", slug: "progeny-analysis-5th-house" },
  { title: "Horary Astrology: The 1-249 Number System", excerpt: "How Prashna astrology works without birth details using KP's unique number system...", date: "May 15, 2024", category: "Prashna", slug: "horary-astrology-249-system" },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Astrology <span className="text-gold-400">Blog</span>
          </h1>
          <p className="text-lg text-white/80">
            Insights, articles, and wisdom from the world of KP astrology.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-saffron-100 to-gold-100 dark:from-saffron-900/30 dark:to-gold-900/20 flex items-center justify-center">
                  <span className="text-6xl">🕉️</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 text-xs font-medium">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-saffron-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-saffron-600 text-sm font-medium mt-4">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
