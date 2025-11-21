'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Flag, Zap, GraduationCap, Briefcase, Code, Mail } from 'lucide-react';
import { TRACK_PATH } from '@/components/CarOnTrack';
import { RaceTrack } from '@/components/RaceTrack';
import { LapCounter } from '@/components/LapCounter';
import { Speedometer } from '@/components/Speedometer';
import { NavigationDots } from '@/components/NavigationDots';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  // Sections data
  const sections = [
    { id: 0, title: 'START', subtitle: 'Welcome', icon: Flag },
    { id: 1, title: 'ABOUT', subtitle: 'My Story', icon: Zap },
    { id: 2, title: 'EXPERIENCE', subtitle: 'My Journey', icon: Briefcase },
    { id: 3, title: 'SKILLS', subtitle: 'Tech Stack', icon: Code },
    { id: 4, title: 'EDUCATION', subtitle: 'Background', icon: GraduationCap },
    { id: 5, title: 'CONTACT', subtitle: 'Get in Touch', icon: Mail },
  ];

  const [currentLap, setCurrentLap] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const totalLaps = sections.length; // Now dynamic
  const totalTrackPoints = TRACK_PATH.length;
  const scrollAccumulatorRef = useRef(0);
  const lastUpdateTimeRef = useRef(Date.now());
  const lastScrollEventRef = useRef(Date.now());
  const scrollSpeedDecayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef(0);

  // Scroll-controlled laps - incrementally move car along track with infinite looping
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Accumulate scroll distance
      scrollAccumulatorRef.current += Math.abs(e.deltaY);
      
      // Update last scroll event time
      lastScrollEventRef.current = Date.now();
      
      setTrackIndex((prev) => {
        // Adjust scroll sensitivity (higher = less sensitive)
        const sensitivity = 30;
        const increment = e.deltaY / sensitivity;
        const newIndex = prev + increment;
        
        // Calculate current lap based on track position
        const positionInCycle = newIndex % (totalLaps * totalTrackPoints);
        const normalizedPosition = positionInCycle < 0 
          ? positionInCycle + (totalLaps * totalTrackPoints)
          : positionInCycle;
        const lap = Math.floor(normalizedPosition / totalTrackPoints) % totalLaps;
        
        setCurrentLap(lap);
        return newIndex;
      });
    };

    // Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartRef.current - touchY;
      touchStartRef.current = touchY;

      // Accumulate scroll distance
      scrollAccumulatorRef.current += Math.abs(deltaY);
      
      // Update last scroll event time
      lastScrollEventRef.current = Date.now();
      
      setTrackIndex((prev) => {
        // Adjust scroll sensitivity for touch (higher = less sensitive)
        const sensitivity = 15; // More sensitive for touch
        const increment = deltaY / sensitivity;
        const newIndex = prev + increment;
        
        // Calculate current lap based on track position
        const positionInCycle = newIndex % (totalLaps * totalTrackPoints);
        const normalizedPosition = positionInCycle < 0 
          ? positionInCycle + (totalLaps * totalTrackPoints)
          : positionInCycle;
        const lap = Math.floor(normalizedPosition / totalTrackPoints) % totalLaps;
        
        setCurrentLap(lap);
        return newIndex;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [totalLaps, totalTrackPoints]);

  // Calculate pixels per second and convert to km/h with gradual decay
  useEffect(() => {
    const updateSpeed = () => {
      const currentTime = Date.now();
      const timeDelta = (currentTime - lastUpdateTimeRef.current) / 1000; // Convert to seconds
      const timeSinceLastScroll = currentTime - lastScrollEventRef.current;
      
      if (scrollAccumulatorRef.current > 0 && timeDelta > 0) {
        // Calculate pixels per second
        const pixelsPerSecond = scrollAccumulatorRef.current / timeDelta;
        
        // Convert to km/h (10000 pixels/sec = 400 km/h)
        const kmph = Math.min((pixelsPerSecond / 20000) * 500, 500);
        
        setScrollSpeed(kmph);
        
        // Reset accumulator and time for next measurement
        scrollAccumulatorRef.current = 0;
        lastUpdateTimeRef.current = currentTime;
      } else if (timeSinceLastScroll > 50) {
        // Gradually decay speed when not scrolling
        setScrollSpeed((prevSpeed) => {
          if (prevSpeed === 0) return 0;
          const decayRate = 0.15; // Decay multiplier (lower = faster decay, higher = slower)
          const newSpeed = prevSpeed * decayRate;
          return newSpeed < 1 ? 0 : newSpeed; // Snap to 0 when very low
        });
      }
    };

    const interval = setInterval(updateSpeed, 50); // Update every 50ms for smoother decay
    return () => clearInterval(interval);
  }, []);

  // Render content based on current lap
  const renderContent = () => {
    switch (currentLap) {
      case 0:
        return <HeroSection />;
      case 1:
        return <AboutSection />;
      case 2:
        return <ExperienceSection />;
      case 3:
        return <SkillsSection />;
      case 4:
        return <EducationSection />;
      case 5:
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      {/* Racing Grid Background */}
      <div className="absolute inset-0 racing-grid opacity-10 pointer-events-none" />

      {/* Race Track SVG - NASCAR Oval Style */}
      <RaceTrack trackIndex={trackIndex} />

      {/* Content in center of track - constrained to track interior */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-2xl px-12 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-12 md:py-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>

      {/* Lap Counter */}
      <LapCounter
        currentLap={currentLap}
        totalLaps={totalLaps}
        trackIndex={trackIndex}
        totalTrackPoints={totalTrackPoints}
      />

      {/* Speedometer */}
      <Speedometer speed={scrollSpeed} maxSpeed={400} />

      {/* Manual navigation */}
      <NavigationDots
        sections={sections}
        currentLap={currentLap}
        onNavigate={(sectionId) => {
          setCurrentLap(sectionId);
          setTrackIndex(sectionId * totalTrackPoints);
        }}
      />
    </div>
  );
}
