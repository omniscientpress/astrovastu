import { BrandText } from './BrandText'

/** Wrap any string node with brand typography for "Divine Jyothi". */
export function withBrand(
  node: React.ReactNode,
  brandClassName?: string
): React.ReactNode {
  return typeof node === 'string' ? (
    <BrandText brandClassName={brandClassName}>{node}</BrandText>
  ) : (
    node
  )
}

type CopyProps = {
  children: string
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  brandClassName?: string
}

/** Renders copy with brand name highlighted — use for headings, paragraphs, and links. */
export function Copy({
  children,
  as: Tag = 'span',
  className,
  brandClassName,
}: CopyProps) {
  return (
    <Tag className={className}>
      <BrandText brandClassName={brandClassName}>{children}</BrandText>
    </Tag>
  )
}
