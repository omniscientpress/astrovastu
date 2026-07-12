import type { Metadata } from "next";
import { Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-telugu",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KP Jyotish - Authentic KP Astrology Consultations",
  description: "Expert KP (Krishnamurti Paddhati) astrology consultations for Muhurtham, Career, Marriage, Childbirth, and more. Available in Telugu, Hindi, Tamil, Kannada.",
  keywords: "KP astrology, Krishnamurti Paddhati, Telugu astrology, Muhurtham, Kundali matching, career astrology, marriage astrology, childbirth muhurtham, Gruha Pravesham",
  openGraph: {
    title: "KP Jyotish - Expert Astrology Consultations",
    description: "Get accurate predictions and remedies using KP System astrology",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansTelugu.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatbotWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
