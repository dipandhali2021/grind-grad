import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-gray-900">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}