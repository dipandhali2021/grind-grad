import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  schedule: string;
  price: string;
  onClick: () => void;
  index: number;
}

export function CourseCard({
  title,
  description,
  duration,
  schedule,
  price,
  onClick,
  index,
}: CourseCardProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        <div className="space-y-3">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock className="h-5 w-5 mr-3 text-indigo-600 dark:text-indigo-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar className="h-5 w-5 mr-3 text-indigo-600 dark:text-indigo-400" />
            <span>{schedule}</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            {price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            {t('courses.button')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
