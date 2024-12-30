import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CourseCard } from './CourseCard';
import { CourseModal } from './CourseModal';
import { SectionTitle } from '../shared/SectionTitle';

const getCourses = (t: (key: string) => string) => [
  {
    title: t('courses.interviewPrep.title'),
    description: t('courses.interviewPrep.description'),
    duration: t('courses.interviewPrep.duration'),
    schedule: t('courses.interviewPrep.schedule'),
    price: '$299',
    curriculum: [
      {
        title: t('courses.curriculum.dsa.title'),
        details: t('courses.curriculum.dsa.details', {
          returnObjects: true,
        }) as string[],
      },
      {
        title: t('courses.curriculum.systemDesign.title'),
        details: t('courses.curriculum.systemDesign.details', {
          returnObjects: true,
        }) as string[],
      },
      {
        title: t('courses.curriculum.mockInterviews.title'),
        details: t('courses.curriculum.mockInterviews.details', {
          returnObjects: true,
        }) as string[],
      },
    ],
  },
  {
    title: t('courses.fullStack.title'),
    description: t('courses.fullStack.description'),
    duration: t('courses.fullStack.duration'),
    schedule: t('courses.fullStack.schedule'),
    price: '$499',
    curriculum: [
      {
        title: t('courses.curriculum.frontend.title'),
        details: t('courses.curriculum.frontend.details', {
          returnObjects: true,
        }) as string[],
      },
      {
        title: t('courses.curriculum.backend.title'),
        details: t('courses.curriculum.backend.details', {
          returnObjects: true,
        }) as string[],
      },
      {
        title: t('courses.curriculum.database.title'),
        details: t('courses.curriculum.database.details', {
          returnObjects: true,
        }) as string[],
      },
    ],
  },
  {
    title: t('courses.communication.title'),
    description: t('courses.communication.description'),
    duration: t('courses.communication.duration'),
    schedule: t('courses.communication.schedule'),
    price: '$199',
    curriculum: [
      {
        title: t('courses.curriculum.business.title'),
        details: t('courses.curriculum.business.details', {
          returnObjects: true,
        }) as string[],
      },
      {
        title: t('courses.curriculum.speaking.title'),
        details: t('courses.curriculum.speaking.details', {
          returnObjects: true,
        }) as string[],
      },
      {
        title: t('courses.curriculum.email.title'),
        details: t('courses.curriculum.email.details', {
          returnObjects: true,
        }) as string[],
      },
    ],
  },
];

export function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<
    ReturnType<typeof getCourses>[0] | null
  >(null);
  const { t } = useTranslation();
  const courses = getCourses(t);

  return (
    <section id="courses" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('courses.title')}
          subtitle={t('courses.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              {...course}
              onClick={() => setSelectedCourse(course)}
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
    </section>
  );
}
