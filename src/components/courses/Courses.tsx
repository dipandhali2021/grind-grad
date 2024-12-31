import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CourseCard } from './CourseCard';
import { CourseModal } from './CourseModal';
import { ContactModal } from '../navbar/ContactModal';
import { SectionTitle } from '../shared/SectionTitle';
import { motion } from 'framer-motion';
import { getCourses, CourseType } from './courseData';

const TABS = ['interview', 'regular', 'language', 'spokenEnglish'] as const;
type TabType = typeof TABS[number];

export function Courses() {
  const [activeTab, setActiveTab] = useState<TabType>('interview');
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const { t } = useTranslation();

  const courses = getCourses(t, activeTab);

  // Split tabs into two rows for mobile
  const firstRowTabs = TABS.slice(0, 2);
  const secondRowTabs = TABS.slice(2);

  return (
    <section id="courses" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('courses.title')}
          subtitle={t('courses.subtitle')}
        />

        {/* Mobile tabs (two rows) */}
        <div className="lg:hidden flex flex-col space-y-4 mb-12">
          <div className="grid grid-cols-2 gap-4">
            {firstRowTabs.map((tab) => (
              <TabButton
                key={tab}
                tab={tab}
                activeTab={activeTab}
                onClick={() => setActiveTab(tab)}
                t={t}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {secondRowTabs.map((tab) => (
              <TabButton
                key={tab}
                tab={tab}
                activeTab={activeTab}
                onClick={() => setActiveTab(tab)}
                t={t}
              />
            ))}
          </div>
        </div>

        {/* Desktop tabs (single row) */}
        <div className="hidden lg:flex justify-center space-x-4 mb-12">
          {TABS.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onClick={() => setActiveTab(tab)}
              t={t}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              {...course}
              onViewSyllabus={() => setSelectedCourse(course)}
              onJoinNow={() => setShowContactModal(true)}
              index={index}
            />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CourseModal
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          course={selectedCourse}
        />
      )}

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
}

// TabButton component remains the same
interface TabButtonProps {
  tab: TabType;
  activeTab: TabType;
  onClick: () => void;
  t: (key: string) => string;
}

function TabButton({ tab, activeTab, onClick, t }: TabButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`w-full px-4 py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${
        activeTab === tab
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {t(`courses.tabs.${tab}`)}
    </motion.button>
  );
}