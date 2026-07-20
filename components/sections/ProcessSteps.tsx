import { Section } from "@/components/ui/Section";

type Step = {
  step: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  title?: string;
  subtitle?: string;
  steps: Step[];
};

export function ProcessSteps({
  title = "How it works",
  subtitle,
  steps,
}: ProcessStepsProps) {
  return (
    <Section>
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-primary-900">{title}</h2>
        {subtitle ? <p className="mt-3 text-neutral-600">{subtitle}</p> : null}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-sm font-bold text-accent-300">
              {item.step}
            </div>
            <h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
