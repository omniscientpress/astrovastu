"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RazorpayPaymentProps {
  amount: number;
  serviceName: string;
  clientData: Record<string, string>;
  onSuccess?: (paymentId: string, orderId: string) => void;
  onFailure?: (error: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function RazorpayPayment({ amount, serviceName, clientData, onSuccess, onFailure }: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");
  const [paymentDetails, setPaymentDetails] = useState<{paymentId: string; orderId: string} | null>(null);

  const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_xxx";

  const handlePayment = async () => {
    if (!scriptLoaded || !window.Razorpay) {
      alert("Payment system is loading. Please try again in a moment.");
      return;
    }
    setIsLoading(true);
    try {
      const orderResponse = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount * 100,
          currency: "INR",
          receipt: `KP_${Date.now()}`,
          notes: {
            service: serviceName,
            client_name: clientData.name || "",
            client_phone: clientData.phone || "",
            client_email: clientData.email || "",
            birth_date: clientData.dob || "",
            birth_time: clientData.birthTime || "",
            birth_place: clientData.birthPlace || "",
            consultation_question: clientData.question || "",
          },
        }),
      });
      if (!orderResponse.ok) throw new Error("Failed to create order");
      const orderData = await orderResponse.json();

      const options = {
        key: RAZORPAY_KEY,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "KP Jyotish",
        description: `${serviceName} - Astrology Consultation`,
        image: "/logo.png",
        order_id: orderData.id,
        method: { upi: true, card: true, netbanking: true, wallet: true, emi: false, paylater: false },
        upi: { flow: "collect" },
        prefill: { name: clientData.name || "", email: clientData.email || "", contact: clientData.phone || "" },
        notes: { address: "Online Astrology Consultation" },
        theme: { color: "#FF6B35", hide_topbar: false, backdrop_color: "#000000" },
        modal: { ondismiss: () => setIsLoading(false), escape: false, backdropclose: false, confirm_close: true, animation: true },
        handler: async function (response: any) {
          try {
            const verifyResponse = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                clientData,
                serviceName,
                amount,
              }),
            });
            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              setStatus("success");
              setPaymentDetails({ paymentId: response.razorpay_payment_id, orderId: response.razorpay_order_id });
              onSuccess?.(response.razorpay_payment_id, response.razorpay_order_id);
            } else throw new Error("Payment verification failed");
          } catch (error) {
            setStatus("failed");
            onFailure?.(error);
          } finally { setIsLoading(false); }
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response: any) => { setStatus("failed"); setIsLoading(false); onFailure?.(response.error); });
      rzp.open();
    } catch (error) {
      setStatus("failed");
      setIsLoading(false);
      onFailure?.(error);
    }
  };

  if (status === "success" && paymentDetails) {
    return (
      <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">Payment Successful!</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Your consultation has been booked.</p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-left text-sm space-y-2">
          <p><strong>Payment ID:</strong> {paymentDetails.paymentId}</p>
          <p><strong>Order ID:</strong> {paymentDetails.orderId}</p>
          <p><strong>Amount:</strong> Rs.{amount}</p>
        </div>
        <p className="mt-4 text-sm text-gray-500">You will receive a WhatsApp confirmation shortly.</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Payment Failed</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Please try again or contact us for assistance.</p>
        <button onClick={() => { setStatus("idle"); setIsLoading(false); }} className="px-6 py-3 rounded-xl bg-saffron-500 text-white font-semibold hover:bg-saffron-600 transition-colors">Try Again</button>
      </div>
    );
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" onLoad={() => setScriptLoaded(true)} strategy="lazyOnload" />
      <button onClick={handlePayment} disabled={isLoading || !scriptLoaded} className={cn("w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300", isLoading || !scriptLoaded ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl hover:scale-[1.02]")}>
        {isLoading ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" />Processing...</span> : !scriptLoaded ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-5 h-5 animate-spin" />Loading Payment System...</span> : `Pay Rs.${amount} via UPI / Card / Net Banking`}
      </button>
      <p className="text-xs text-gray-500 text-center mt-3">Secured by Razorpay • 256-bit SSL Encryption</p>
    </>
  );
}
