import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { BookForm } from '@/components/BookForm'
import { en } from '@/locales/en'

export const metadata: Metadata = {
  title: en.bookPage.title,
  description: en.bookPage.metaDescription,
}

export default function BookPage() {
  return (
    <Section tone="navy" innerClassName="max-w-2xl">
      <h1 className="text-3xl font-semibold leading-tight text-cream-50 sm:text-4xl">
        {en.bookPage.heading}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-cream-200/90">{en.bookPage.lead}</p>
      <div className="mt-10">
        <BookForm />
      </div>
    </Section>
  )
}
