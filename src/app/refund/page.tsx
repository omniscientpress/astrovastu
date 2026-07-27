import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Divine Jyothi",
  description: "Refund Policy for Divine Jyothi astrology consultations.",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Refund Policy</h1>
          <p className="text-white/70 text-sm">Last updated: July 2026</p>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose dark:prose-invert max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Before Your Consultation</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you cancel or reschedule at least 24 hours before your scheduled appointment time,
              you are eligible for a full refund or a free reschedule, whichever you prefer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Late Cancellations & No-Shows</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Cancellations made less than 24 hours before the appointment, or missed appointments
              without prior notice, are not eligible for a refund. We're happy to offer one free
              reschedule per booking if you let us know as soon as possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">After Your Consultation</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Once a consultation has been delivered or a report has been sent, the service is
              considered complete and is not eligible for a refund. Astrological guidance reflects
              our honest professional analysis; we cannot guarantee specific outcomes or predictions,
              and dissatisfaction with a prediction itself is not grounds for a refund.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Incorrect Birth Details</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Since charts are calculated from the birth date, time, and place you provide, please
              double-check these before your appointment. If incorrect details were provided, we can
              redo the chart, but this does not qualify for a refund.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">How to Request a Refund</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Message us on WhatsApp at +91 98850 99448 or email consult@divinejyothi.com with your
              booking details. Approved refunds are sent back to the original UPI account within
              3–5 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
