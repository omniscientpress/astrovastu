import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/Section'
import { blogPosts } from '@/data/blog'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.blogPage.title,
  description: en.blogPage.metaDescription,
}

export default function BlogPage() {
  return (
    <>
      <Section tone="navy">
        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {en.blogPage.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200/90">
          {en.blogPage.lead}
        </p>
      </Section>

      <Section tone="white">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6 transition-colors hover:border-gold-400"
              >
                <h2 className="text-lg font-semibold text-navy-700">{post.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-navy-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
                  {en.cta.readMore}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
