import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TypewriterText } from './TypewriterText';

export function HeroContent() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <TypewriterText />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
      >
        {t('hero.description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a href="#courses">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            {t('hero.exploreCourses')}
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </a>
        <a
          href="https://youtu.be/msGQOO6f3h0?si=N7R5YwpHNcMhkkvX"
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
          >
            {t('hero.watchDemo')}
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}
