import { cn } from '@/lib/utils'
import { whatsAppEnquiry } from '@/lib/config'
import { en } from '@/locales/en'

/** Inline WhatsApp glyph — avoids pulling a brand-icon dependency. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn('fill-current', className)} aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.696 4.61 1.897 6.484L4 29l7.72-1.855A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.583 1.1 1.12-4.47-.232-.366A9.7 9.7 0 0 1 5.75 15c0-5.653 4.6-10.25 10.254-10.25S26.25 9.347 26.25 15 20.658 24.75 16.004 24.75Zm5.61-7.61c-.307-.154-1.816-.897-2.098-.998-.281-.102-.486-.154-.69.153-.204.307-.79.998-.968 1.204-.179.205-.358.23-.665.077-.307-.154-1.296-.478-2.469-1.523-.913-.814-1.53-1.82-1.708-2.128-.179-.307-.019-.473.135-.626.138-.138.307-.358.46-.537.154-.18.205-.307.307-.512.102-.205.051-.384-.026-.538-.077-.154-.69-1.663-.945-2.278-.249-.598-.502-.517-.69-.527l-.588-.01a1.13 1.13 0 0 0-.818.384c-.281.307-1.074 1.05-1.074 2.559s1.1 2.968 1.253 3.173c.154.205 2.165 3.307 5.245 4.637.733.316 1.305.505 1.751.647.735.234 1.404.201 1.933.122.59-.088 1.816-.742 2.072-1.459.256-.717.256-1.331.18-1.459-.077-.128-.282-.205-.589-.36Z" />
    </svg>
  )
}

interface WhatsAppButtonProps {
  /** Service name folded into the pre-filled message. */
  service?: string
  /** Overrides the generated message entirely. */
  message?: string
  label?: string
  variant?: 'solid' | 'outline'
  className?: string
}

/**
 * WhatsApp green is reserved exclusively for WhatsApp actions (spec §4).
 * Never use this colour for any other CTA.
 */
export function WhatsAppButton({
  service,
  message,
  label,
  variant = 'solid',
  className,
}: WhatsAppButtonProps) {
  const href = message
    ? `https://wa.me/919885099448?text=${encodeURIComponent(message)}`
    : whatsAppEnquiry(service)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors',
        variant === 'solid'
          ? 'bg-whatsapp text-white hover:bg-whatsapp-dark'
          : 'border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white',
        className
      )}
    >
      <WhatsAppGlyph className="h-5 w-5" />
      {label ?? (service ? en.cta.whatsappAbout(service) : en.cta.whatsapp)}
    </a>
  )
}

/** The single floating widget allowed on the site (spec §10). */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsAppEnquiry()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={en.cta.whatsappShort}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  )
}
