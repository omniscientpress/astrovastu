import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Section } from '@/components/Section'
import { BrandText } from '@/components/BrandText'
import { BookingBand } from '@/components/BookingBand'
import { blogPosts, getBlogPost } from '@/data/blog'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <>
      <Section tone="navy">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {'Blog'}
        </Link>
        <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
          {post.title}
        </h1>
      </Section>

      <Section tone="white">
        <div className="prose prose-lg mx-auto max-w-3xl text-navy-700">
          {post.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>
              <BrandText>{p}</BrandText>
            </p>
          ))}
        </div>
      </Section>

      <BookingBand />
    </>
  )
}
