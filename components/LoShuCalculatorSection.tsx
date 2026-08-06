import { Section, SectionHeading } from '@/components/Section'
import { LoShuCalculator } from '@/components/LoShuCalculator'

interface LoShuCalculatorSectionProps {
  tone: 'navy' | 'cream'
  title: string
  lead: string
  source: string
}

export function LoShuCalculatorSection({
  tone,
  title,
  lead,
  source,
}: LoShuCalculatorSectionProps) {
  return (
    <Section tone={tone}>
      <SectionHeading tone={tone} title={title} lead={lead} />
      <LoShuCalculator source={source} className="mt-10" />
    </Section>
  )
}
