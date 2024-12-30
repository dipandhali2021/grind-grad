import React from 'react';
import { Rocket, Target, Users, Book } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../shared/SectionTitle';
import { FeatureCard } from './FeatureCard';

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Rocket,
    title: t('features.personalTutor.title'),
    description: t('features.personalTutor.description'),
  },
  {
    icon: Target,
    title: t('features.careerCounseling.title'),
    description: t('features.careerCounseling.description'),
  },
  {
    icon: Users,
    title: t('features.projectCreation.title'),
    description: t('features.projectCreation.description'),
  },
  {
    icon: Book,
    title: t('features.latestCurriculum.title'),
    description: t('features.latestCurriculum.description'),
  },
];

export function Features() {
  const { t } = useTranslation();
  const features = getFeatures(t);

  return (
    <section className="py-24 bg-gradient-to-b dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('features.title')}
          subtitle={t('features.subtitle')}
        />

        <div className="mt-24 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}