import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecialtyPage } from "@/components/sections/SpecialtyPage";
import {
  getAllSpecialties,
  getSpecialty,
  isSpecialtySlug,
  type SpecialtySlug,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSpecialties().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isSpecialtySlug(slug)) return { title: "Service" };
  const specialty = getSpecialty(slug);
  return {
    title: specialty.seo.title,
    description: specialty.seo.description,
  };
}

export default async function SpecialtyRoutePage({ params }: PageProps) {
  const { slug } = await params;
  if (!isSpecialtySlug(slug)) notFound();
  const specialty = getSpecialty(slug as SpecialtySlug);
  return <SpecialtyPage specialty={specialty} />;
}
