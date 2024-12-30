import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:shadow-xl dark:shadow-gray-900/50"
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-xl shadow-lg shadow-indigo-500/25"
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}