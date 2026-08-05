import { YantraArt } from './LineArtSvg'

export function YantraWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden text-gold-300/10"
      aria-hidden="true"
    >
      <div className="absolute -right-24 -top-24 h-[420px] w-[420px] lg:-right-12 lg:-top-16">
        <YantraArt />
      </div>
    </div>
  )
}
