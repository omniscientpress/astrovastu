import { Section, SectionHeading } from '@/components/Section'
import { RelationshipBlueprint } from '@/components/RelationshipBlueprint'

interface RelationshipBlueprintSectionProps {
  tone: 'navy' | 'cream' | 'white'
  title: string
  lead: string
  source: string
}

export function RelationshipBlueprintSection({
  tone,
  title,
  lead,
  source,
}: RelationshipBlueprintSectionProps) {
  return (
    <Section tone={tone} id="relationship-blueprint">
      <SectionHeading tone={tone} title={title} lead={lead} />
      <RelationshipBlueprint source={source} className="mt-10" />
    </Section>
  )
}
