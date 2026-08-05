import { Fragment } from 'react'
import { BrandName } from './BrandName'
import { en } from '@/locales/en'

const BRAND = en.brand.name

/** Renders text with every "Divine Jyothi" occurrence in brand typography. */
export function BrandText({
  children,
  brandClassName,
}: {
  children: string
  brandClassName?: string
}) {
  if (!children.includes(BRAND)) return <>{children}</>

  const parts = children.split(BRAND)
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <BrandName className={brandClassName} />}
        </Fragment>
      ))}
    </>
  )
}
