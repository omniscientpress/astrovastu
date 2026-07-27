import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Divine Jyothi",
  description: "Terms of Service for Divine Jyothi astrology consultations.",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/70 text-sm">Last updated: July 2026</p>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose dark:prose-invert max-w-none space-y-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            By booking a consultation or using this website, you agree to the following terms.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Nature of Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Divine Jyothi provides astrological consultations based on the Krishnamurti Paddhati
              (KP) system, for guidance and informational purposes only. Astrology is a belief
              system and predictive art, not an exact science — we do not guarantee specific
              outcomes, timing, or results. Our consultations are not a substitute for professional
              medical, legal, or financial advice, and important decisions should not be based
              solely on an astrological reading.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Bookings & Payment</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Consultations are booked through our website or Cal.com scheduling link, and confirmed
              via WhatsApp. Payment is collected directly via UPI before or at the time of your
              appointment. Please see our Refund Policy for cancellation terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Accuracy of Information</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You are responsible for providing accurate birth date, time, and place details.
              Charts and predictions are only as accurate as the information provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Confidentiality</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Details you share for your consultation are kept confidential and used only to prepare
              your chart and report, as described in our Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Divine Jyothi and its consultants are not liable for any decisions made, or losses
              incurred, based on guidance provided during a consultation. Our services are offered
              in good faith based on genuine astrological analysis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Changes to These Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update these terms from time to time. Continued use of our services after
              changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Questions about these terms? Reach us at consult@divinejyothi.com or WhatsApp
              +91 98850 99448.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
