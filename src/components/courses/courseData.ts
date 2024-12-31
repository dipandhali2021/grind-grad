import { Clock, Code, Languages, Mic } from 'lucide-react';

export type CourseType = {
  title: string;
  description: string;
  duration: string;
  schedule: string;
  price: string;
  curriculum: {
    title: string;
    details: string[];
  }[];
};

export function getCourses(t: (key: string) => string, activeTab: string): CourseType[] {
  const coursesData = {
    interview: [
      {
        title: t('courses.interviewPrep.title'),
        description: t('courses.interviewPrep.description'),
        duration: t('courses.interviewPrep.duration'),
        schedule: t('courses.interviewPrep.schedule'),
        price: '$299',
        curriculum: [
          {
            title: t('courses.curriculum.dsa.title'),
            details: t('courses.curriculum.dsa.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.systemDesign.title'),
            details: t('courses.curriculum.systemDesign.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.mockInterviews.title'),
            details: t('courses.curriculum.mockInterviews.details', { returnObjects: true }) as string[],
          },
        ],
      },
      {
        title: t('courses.interviewPrep1.title'),
        description: t('courses.interviewPrep1.description'),
        duration: t('courses.interviewPrep1.duration'),
        schedule: t('courses.interviewPrep1.schedule'),
        price: '$299',
        curriculum: [
          {
            title: t('courses.curriculum.dsa.title'),
            details: t('courses.curriculum.dsa.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.systemDesign.title'),
            details: t('courses.curriculum.systemDesign.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.mockInterviews.title'),
            details: t('courses.curriculum.mockInterviews.details', { returnObjects: true }) as string[],
          },
        ],
      },
    ],
    regular: [
      {
        title: t('courses.fullStack.title'),
        description: t('courses.fullStack.description'),
        duration: t('courses.fullStack.duration'),
        schedule: t('courses.fullStack.schedule'),
        price: '$499',
        curriculum: [
          {
            title: t('courses.curriculum.frontend.title'),
            details: t('courses.curriculum.frontend.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.backend.title'),
            details: t('courses.curriculum.backend.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.database.title'),
            details: t('courses.curriculum.database.details', { returnObjects: true }) as string[],
          },
        ],
      },
    ],
    language: [
      {
        title: 'Python Programming',
        description: 'Master Python programming from basics to advanced concepts',
        duration: '10 weeks',
        schedule: '3 sessions per week',
        price: '$399',
        curriculum: [
          {
            title: 'Python Basics',
            details: ['Variables & Data Types', 'Control Flow', 'Functions'],
          },
          {
            title: 'Advanced Python',
            details: ['OOP', 'File Handling', 'Modules & Packages'],
          },
          {
            title: 'Python Projects',
            details: ['Web Scraping', 'Data Analysis', 'API Development'],
          },
        ],
      },
    ],
    spokenEnglish: [
      {
        title: t('courses.communication.title'),
        description: t('courses.communication.description'),
        duration: t('courses.communication.duration'),
        schedule: t('courses.communication.schedule'),
        price: '$199',
        curriculum: [
          {
            title: t('courses.curriculum.business.title'),
            details: t('courses.curriculum.business.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.speaking.title'),
            details: t('courses.curriculum.speaking.details', { returnObjects: true }) as string[],
          },
          {
            title: t('courses.curriculum.email.title'),
            details: t('courses.curriculum.email.details', { returnObjects: true }) as string[],
          },
        ],
      },
    ],
  };

  return coursesData[activeTab as keyof typeof coursesData] || [];
}