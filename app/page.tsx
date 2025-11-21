'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import RaceTrack from '@/components/RaceTrack';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = 6; // Total number of sections
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const section = Math.floor(scrollPercentage * sections);
      setCurrentSection(Math.min(section, sections - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Racing Grid Background */}
      <div className="fixed inset-0 racing-grid opacity-10 pointer-events-none" />
      
      {/* Race Track with animated car */}
      <RaceTrack currentSection={currentSection} />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Start Line */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50" />
          <Hero />
        </div>

        {/* About Section - Lap 1 */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-30" />
          <About />
        </div>

        {/* Experience Section - Lap 2 */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-30" />
          <Experience />
        </div>

        {/* Skills Section - Lap 3 */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-30" />
          <Skills />
        </div>

        {/* Education Section - Lap 4 */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-30" />
          <Education />
        </div>

        {/* Contact Section - Lap 5 / Finish Line */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-2 checkered-bg opacity-20" />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lap Counter */}
      <div className="fixed bottom-8 right-8 z-50 bg-black/90 border-2 border-red-600 rounded-lg p-4 backdrop-blur-sm">
        <div className="text-xs text-gray-400 mb-1 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          CURRENT LAP
        </div>
        <div className="text-3xl font-black text-red-600" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {currentSection}
        </div>
        <div className="text-[10px] text-gray-500 mt-1">
          / 5 LAPS
        </div>
      </div>
    </div>
  );
}
