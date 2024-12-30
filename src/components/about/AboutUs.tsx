import React from 'react';
import { Users, School, TrendingUp, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../shared/SectionTitle';
import { AboutCard } from './AboutCard';

const getChallenges = (t: (key: string) => string) => [
  {
    icon: Users,
    title: t('about.challenges.largeClasses.title'),
    description: t('about.challenges.largeClasses.description'),
  },
  {
    icon: School,
    title: t('about.challenges.outdatedCurriculum.title'),
    description: t('about.challenges.outdatedCurriculum.description'),
  },
  {
    icon: TrendingUp,
    title: t('about.challenges.skillsGap.title'),
    description: t('about.challenges.skillsGap.description'),
  },
  {
    icon: Building,
    title: t('about.challenges.industryConnect.title'),
    description: t('about.challenges.industryConnect.description'),
  },
];

export function AboutUs() {
  const { t } = useTranslation();
  const challenges = getChallenges(t);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((item, index) => (
            <AboutCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}