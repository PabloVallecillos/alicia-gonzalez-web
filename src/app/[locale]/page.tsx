import { useTranslations } from 'next-intl';
import { Hero } from '@/components/home/Hero';
import { StatsBar } from '@/components/home/StatsBar';
import { PracticeAreas } from '@/components/home/PracticeAreas';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsBar />
      <PracticeAreas />
      <FinalCTA />
    </div>
  );
}
