import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Divine Jyothi",
  description: "Privacy Policy for Divine Jyothi astrology consultations.",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-sm">Last updated: July 2026</p>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose dark:prose-invert max-w-none space-y-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Divine Jyothi ("we", "us") respects your privacy. This policy explains what information
            we collect when you use this website or book a consultation, and how we use it.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When you book a consultation, we collect your name, phone number, email (optional),
              and birth details (date, time, and place of birth) — these are required to prepare
              an accurate astrological chart and report. We do not collect payment card details;
              payments are made directly via UPI to our published payment address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">How We Use It</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Your details are used solely to prepare your chart, generate your consultation report,
              schedule your appointment, and communicate with you about your booking (typically via
              WhatsApp). We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use WhatsApp for booking confirmations, Cal.com for appointment scheduling, and UPI
              apps for receiving payment. Any information you share through those services is also
              subject to their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Data Retention & Security</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We retain booking and chart details only as long as needed to provide your consultation
              and for reasonable record-keeping afterward. We take reasonable measures to protect your
              data but cannot guarantee absolute security of information transmitted over the internet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You may request access to, correction of, or deletion of your personal data at any time
              by contacting us at consult@divinejyothi.com or via WhatsApp at +91 98850 99448.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
