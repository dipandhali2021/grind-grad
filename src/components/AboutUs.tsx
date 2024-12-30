import React from 'react';
import { Users, School, TrendingUp, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from './shared/SectionTitle';
import { useTranslation } from 'react-i18next';

const challenges = [
  {
    icon: Users,
    titleKey: 'about.challenges.largeClasses.title',
    descriptionKey: 'about.challenges.largeClasses.description',
  },
  {
    icon: School,
    titleKey: 'about.challenges.outdatedCurriculum.title',
    descriptionKey: 'about.challenges.outdatedCurriculum.description',
  },
  {
    icon: TrendingUp,
    titleKey: 'about.challenges.skillsGap.title',
    descriptionKey: 'about.challenges.skillsGap.description',
  },
  {
    icon: Building,
    titleKey: 'about.challenges.industryConnect.title',
    descriptionKey: 'about.challenges.industryConnect.description',
  },
];

export function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-gradient-to-b dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {challenges.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-gray-900/50"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/25"
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {t(item.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
