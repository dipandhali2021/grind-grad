import React from 'react';
import { UserCheck, Code, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../shared/SectionTitle';
import { ServiceCard } from './ServiceCard';

const getServices = (t: (key: string) => string) => [
  {
    icon: UserCheck,
    title: t('services.mentorship.title'),
    description: t('services.mentorship.description'),
  },
  {
    icon: Code,
    title: t('services.projectDev.title'),
    description: t('services.projectDev.description'),
  },
  {
    icon: Compass,
    title: t('services.careerNav.title'),
    description: t('services.careerNav.description'),
  },
];

export function Services() {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
