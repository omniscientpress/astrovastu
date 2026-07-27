import { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us - Divine Jyothi",
  description: "Get in touch with Divine Jyothi for astrology consultations and queries.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact <span className="text-gold-400">Us</span>
          </h1>
          <p className="text-lg text-white/80">
            We are here to help. Reach out for consultations or any queries.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Phone className="w-6 h-6 text-saffron-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">{SITE_CONFIG.whatsappNumberDisplay}</p>
                <p className="text-sm text-gray-500">Mon-Sat, 9AM - 9PM IST</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Mail className="w-6 h-6 text-saffron-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">consult@divinejyothi.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <MessageCircle className="w-6 h-6 text-saffron-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                <a
                  href={buildWhatsAppLink("Hi Divine Jyothi, I'd like to know more about your astrology consultations.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400 transition-colors"
                >
                  {SITE_CONFIG.whatsappNumberDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <MapPin className="w-6 h-6 text-saffron-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Available Online Worldwide</p>
                <p className="text-sm text-gray-500">Based in India</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-saffron-500" />
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white font-semibold hover:shadow-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
