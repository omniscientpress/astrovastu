import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - KP Jyotish",
  description: "Refund Policy for KP Jyotish astrology consultations.",
};

export default function Page() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Refund Policy</h1>
        </div>
      </section>
      <section className="py-20 max-w-4xl mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-400">This page will contain the refund policy for KP Jyotish.</p>
      </section>
    </div>
  );
}
