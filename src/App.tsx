import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { CompanyLogos } from './components/CompanyLogos';
import { Features } from './components/features/Features';
import { AboutUs } from './components/AboutUs';
import { Courses } from './components/courses/Courses';
import { Services } from './components/services/Services';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CompanyLogos />
        <Features />
        <AboutUs />
        <Courses />
        <Services />
      </main>
    </div>
  );
}

export default App;
