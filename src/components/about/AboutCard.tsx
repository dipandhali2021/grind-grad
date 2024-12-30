import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function AboutCard({ icon: Icon, title, description, index }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </motion.div>
  );
}