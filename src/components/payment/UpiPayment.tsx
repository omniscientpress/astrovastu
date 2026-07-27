"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Loader2, Copy, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function buildUpiUri(amount: number, note: string) {
  const params = new URLSearchParams({
    pa: SITE_CONFIG.upiVpa,
    pn: SITE_CONFIG.upiName,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note,
  });
  return `upi://pay?${params.toString()}`;
}

interface UpiPaymentProps {
  amount: number;
  note: string;
}

export function UpiPayment({ amount, note }: UpiPaymentProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const upiUri = buildUpiUri(amount, note);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(upiUri, { width: 240, margin: 1 })
      .then((url) => { if (!cancelled) setQrDataUrl(url); })
      .catch(() => { if (!cancelled) setQrDataUrl(null); });
    return () => { cancelled = true; };
  }, [upiUri]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.upiVpa);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center space-y-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Pay via UPI</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">₹{amount.toLocaleString("en-IN")}</p>
      </div>

      {qrDataUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={qrDataUrl}
          alt="UPI QR code"
          className="mx-auto rounded-xl border border-gray-100 dark:border-gray-700"
          width={200}
          height={200}
        />
      ) : (
        <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      )}

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Scan with any UPI app (GPay, PhonePe, Paytm, BHIM)
      </p>

      <a
        href={upiUri}
        className="sm:hidden block w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all"
      >
        Pay with UPI App
      </a>

      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-500" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" /> {SITE_CONFIG.upiVpa}
          </>
        )}
      </button>

      <p className="text-xs text-gray-400">
        After paying, tap &ldquo;Confirm on WhatsApp&rdquo; below so we can verify and schedule your session.
      </p>
    </div>
  );
}
