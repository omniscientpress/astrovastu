import type { Metadata } from 'next'
import { Cinzel, Inter, Noto_Sans_Telugu } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/WhatsAppButton'
import { SITE } from '@/lib/config'
import { en } from '@/locales/en'

// Only the weights the UI actually uses — every extra weight is a separate
// font file on the critical path.
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// Telugu is used only for a handful of kinship labels, always at normal weight.
const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ['telugu'],
  weight: ['400'],
  variable: '--font-telugu',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${en.brand.promise}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'Integrated KP Astrology, Vastu, and Numerology consultations with Siva Kola in Hyderabad. Practical guidance for career, marriage, property, and naming decisions.',
  icons: {
    icon: [
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE.name,
    images: [{ url: '/brand/icon-512.png', width: 512, height: 512, alt: SITE.name }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansTelugu.variable} ${cinzel.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-800"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
