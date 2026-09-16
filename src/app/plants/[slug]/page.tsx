import { Metadata } from 'next';
import { plants, getPlantBySlug } from '@/data/plants';
import { notFound } from 'next/navigation';
import PlantDetailContent from './PlantDetailContent';

export async function generateStaticParams() {
  return plants.map((plant) => ({ slug: plant.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) return { title: 'Plant Not Found' };
  return {
    title: `${plant.name} — ${plant.tagline}`,
    description: plant.description,
  };
}

export default async function PlantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) notFound();
  return <PlantDetailContent plant={plant} />;
}
