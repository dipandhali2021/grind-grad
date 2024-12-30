import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-20">
          <Lightbulb className="h-12 w-12 text-blue-400 opacity-20" />
        </div>
        <div className="animate-float-delayed absolute bottom-20 right-20">
          <Lightbulb className="h-12 w-12 text-green-400 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Begin Your Journey to Success with{' '}
          <span className="text-blue-600">GrindGrads!</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Graduate with High-Paying Jobs. Stay Ahead with the Latest Trends.
        </p>
        <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
          Explore Courses
          <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
