'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { personalInfo, experiences, skills, education, languages, socialLinks } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Mail, Flag, Zap, Trophy, ChevronRight, GraduationCap, Briefcase, Code } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

// Define track path once - shared between components
const TRACK_PATH = [
    // Top straight (y=150) - starting at finish line
    { x: 240, y: 150 },
    { x: 280, y: 150 },
    { x: 320, y: 150 },
    { x: 440, y: 150 },
    { x: 480, y: 150 },
    { x: 520, y: 150 },
    { x: 560, y: 150 },
    { x: 600, y: 150 },
    { x: 640, y: 150 },
    { x: 680, y: 150 },
    { x: 720, y: 150 },
    { x: 760, y: 150 },
    { x: 800, y: 150 },
    { x: 840, y: 150 },
    { x: 880, y: 150 },
    { x: 920, y: 150 },
    { x: 960, y: 150 },
    { x: 1000, y: 150 },
    { x: 1040, y: 150 },
    { x: 1080, y: 150 },
    { x: 1120, y: 150 },
    { x: 1160, y: 150 },
    { x: 1200, y: 150 },
    { x: 1240, y: 150 },
    { x: 1280, y: 150 },
    
    // Right turn top
    { x: 1350, y: 150 },
    { x: 1390, y: 165 },
    { x: 1430, y: 190 },
    { x: 1460, y: 220 },
    { x: 1485, y: 255 },
    { x: 1505, y: 290 },
    { x: 1520, y: 330 },
    
    // Right straight (x=1520)
    { x: 1520, y: 380 },
    { x: 1520, y: 430 },
    { x: 1520, y: 480 },
    { x: 1520, y: 530 },
    { x: 1520, y: 580 },
    { x: 1520, y: 630 },
    { x: 1520, y: 680 },
    { x: 1520, y: 730 },
    { x: 1520, y: 780 },
    { x: 1520, y: 830 },
    
    // Bottom right turn
    { x: 1520, y: 870 },
    { x: 1505, y: 905 },
    { x: 1480, y: 930 },
    { x: 1450, y: 945 },
    { x: 1410, y: 952 },
    { x: 1370, y: 955 },
    
    // Bottom straight (y=950)
    { x: 1320, y: 950 },
    { x: 1270, y: 950 },
    { x: 1220, y: 950 },
    { x: 1170, y: 950 },
    { x: 1120, y: 950 },
    { x: 1070, y: 950 },
    { x: 1020, y: 950 },
    { x: 970, y: 950 },
    { x: 920, y: 950 },
    { x: 870, y: 950 },
    { x: 820, y: 950 },
    { x: 770, y: 950 },
    { x: 720, y: 950 },
    { x: 670, y: 950 },
    { x: 620, y: 950 },
    { x: 570, y: 950 },
    { x: 520, y: 950 },
    { x: 470, y: 950 },
    { x: 420, y: 950 },
    { x: 370, y: 950 },
    { x: 320, y: 950 },
    { x: 270, y: 950 },
    { x: 220, y: 950 },
    { x: 180, y: 950 },
    
    // Bottom left turn
    { x: 140, y: 945 },
    { x: 110, y: 930 },
    { x: 90, y: 905 },
    { x: 80, y: 870 },
    { x: 80, y: 830 },
    
    // Left straight (x=80)
    { x: 80, y: 780 },
    { x: 80, y: 730 },
    { x: 80, y: 680 },
    { x: 80, y: 630 },
    { x: 80, y: 580 },
    { x: 80, y: 530 },
    { x: 80, y: 480 },
    { x: 80, y: 430 },
    { x: 80, y: 380 },
    { x: 80, y: 330 },
    
    // Top left turn - back to start/finish line
    { x: 80, y: 290 },
    { x: 90, y: 255 },
    { x: 105, y: 220 },
    { x: 130, y: 190 },
    { x: 160, y: 170 },
    { x: 190, y: 158 },
    { x: 220, y: 152 },
    { x: 240, y: 150 }, // Complete the loop at start/finish
];

// Component to position car on track based on track index
function CarOnTrack({ trackIndex }: { trackIndex: number }) {
  const carRef = useRef<SVGGElement>(null);
  const prevAngleRef = useRef(0);
  const prevNormalizedRef = useRef(0);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Use a spring to smooth out the movement along the track index
  // This prevents the car from cutting corners when scrolling fast
  const indexMotionValue = useMotionValue(0);
  const smoothIndex = useSpring(indexMotionValue, { stiffness: 100, damping: 25, mass: 0.8 });

  // Initialize car position immediately on mount
  useEffect(() => {
    if (!isInitialized && carRef.current) {
      // Set initial position without animation
      const startPoint = TRACK_PATH[0];
      const nextPoint = TRACK_PATH[1];
      const dx = nextPoint.x - startPoint.x;
      const dy = nextPoint.y - startPoint.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      prevAngleRef.current = angle;
      carRef.current.setAttribute("transform", `translate(${startPoint.x}, ${startPoint.y}) rotate(${angle})`);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    indexMotionValue.set(trackIndex);
  }, [trackIndex, indexMotionValue]);

  useEffect(() => {
    const unsubscribe = smoothIndex.on("change", (latest) => {
      if (!carRef.current) return;

      const totalPoints = TRACK_PATH.length;
      
      // Calculate normalized index within a single lap (0 to totalPoints)
      const rawNormalized = latest % totalPoints;
      let normalizedIndex = rawNormalized < 0 ? rawNormalized + totalPoints : rawNormalized;
      
      // Detect wrap-around for smooth looping
      const prevNormalized = prevNormalizedRef.current;
      const diff = normalizedIndex - prevNormalized;
      
      // If we detect a large jump (wrap around), adjust for smooth animation
      if (diff > totalPoints / 2) {
        // Wrapped backwards
        normalizedIndex -= totalPoints;
      } else if (diff < -totalPoints / 2) {
        // Wrapped forwards
        normalizedIndex += totalPoints;
      }
      
      prevNormalizedRef.current = normalizedIndex % totalPoints;
      
      const index = Math.floor(normalizedIndex);
      const nextIndex = index + 1;
      const fraction = normalizedIndex - index;

      // Get points with proper wrapping
      const currentPoint = TRACK_PATH[((index % totalPoints) + totalPoints) % totalPoints];
      const nextPoint = TRACK_PATH[((nextIndex % totalPoints) + totalPoints) % totalPoints];

      // Interpolate position
      const x = currentPoint.x + (nextPoint.x - currentPoint.x) * fraction;
      const y = currentPoint.y + (nextPoint.y - currentPoint.y) * fraction;
      
      // Calculate angle based on direction of movement
      const dx = nextPoint.x - currentPoint.x;
      const dy = nextPoint.y - currentPoint.y;
      
      // Raw direction angle
      let angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Prevent spins by choosing shortest turning direction
      let prevAngle = prevAngleRef.current;
      let delta = angle - prevAngle;
      // Normalize delta to [-180, 180] range to get shortest rotation
      delta = ((delta + 180) % 360 + 360) % 360 - 180;
      angle = prevAngle + delta;
      prevAngleRef.current = angle;

      carRef.current.setAttribute("transform", `translate(${x}, ${y}) rotate(${angle})`);
    });

    return unsubscribe;
  }, [smoothIndex]);

  return (
    <g ref={carRef}>
      {/* NASCAR-style car body */}
      <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#177e89" stroke="#000" strokeWidth="1.5" />
      <rect x="0" y="-7" width="16" height="14" rx="2" fill="#084c61" />
      <rect x="16" y="-8" width="6" height="16" fill="#177e89" opacity="0.8" />
      <rect x="-22" y="-9" width="3" height="18" fill="#177e89" opacity="0.8" />
      <circle cx="10" cy="-9" r="3" fill="#1a1a1a" />
      <circle cx="10" cy="9" r="3" fill="#1a1a1a" />
      <circle cx="-10" cy="-9" r="3" fill="#1a1a1a" />
      <circle cx="-10" cy="9" r="3" fill="#1a1a1a" />
      <text x="8" y="3" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">1</text>
    </g>
  );
}

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
  const lastScrollTimeRef = useRef(Date.now());
  const scrollSpeedDecayRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll-controlled laps - incrementally move car along track with infinite looping
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Calculate scroll speed (0-300 km/h scale for speedometer)
      const currentTime = Date.now();
      const timeDelta = Math.max(currentTime - lastScrollTimeRef.current, 1);
      const scrollDelta = Math.abs(e.deltaY);
      
      // Convert to speed with logarithmic scaling for more realistic feel
      // Higher speeds require exponentially more scroll effort
      const rawSpeed = scrollDelta / timeDelta;
      // Scale with diminishing returns - makes reaching 300 km/h challenging
      const scaledSpeed = Math.min(Math.pow(rawSpeed * 15, 0.85), 300);
      setScrollSpeed(scaledSpeed);
      lastScrollTimeRef.current = currentTime;
      
      // Clear existing decay timeout
      if (scrollSpeedDecayRef.current) {
        clearTimeout(scrollSpeedDecayRef.current);
      }
      
      // Decay speed after scrolling stops
      scrollSpeedDecayRef.current = setTimeout(() => {
        setScrollSpeed(0);
      }, 150);
      
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

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollSpeedDecayRef.current) {
        clearTimeout(scrollSpeedDecayRef.current);
      }
    };
  }, [totalLaps, totalTrackPoints]);

  // Render content based on current lap
  const renderContent = () => {
    switch (currentLap) {
      case 0: // START / HERO
        return (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-4 w-full"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#177e89] flex items-center justify-center border-4 border-[#084c61] shadow-2xl shadow-[#177e89]/50">
              <Flag size={40} className="text-[#084c61]" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black">
              <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-[#177e89]">
                {personalInfo.name.split(' ')[1] || 'RACER'}
              </span>
            </h1>
            <div className="px-5 py-2 bg-[#084c61] border-2 border-[#177e89] rounded-lg inline-block">
              <div className="text-xs text-[#177e89] font-bold">DRIVER</div>
              <div className="text-lg font-bold text-white">{personalInfo.title}</div>
            </div>
            <p className="text-base text-gray-300 mx-auto">{personalInfo.location}</p>
          </motion.div>
        );

      case 1: // ABOUT
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4 w-full"
          >
            <h2 className="text-4xl font-black text-center mb-4">
              ABOUT ME
            </h2>
            <p className="text-base text-gray-300 leading-relaxed text-center">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur text-center">
                <Trophy size={28} className="text-[#177e89] mx-auto mb-2" />
                <div className="text-2xl font-black text-white">11+</div>
                <div className="text-xs text-gray-400 uppercase">Years</div>
              </div>
              <div className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur text-center">
                <Zap size={28} className="text-[#177e89] mx-auto mb-2" />
                <div className="text-2xl font-black text-white">50+</div>
                <div className="text-xs text-gray-400 uppercase">Projects</div>
              </div>
              <div className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur text-center">
                <Flag size={28} className="text-[#177e89] mx-auto mb-2" />
                <div className="text-2xl font-black text-white">4</div>
                <div className="text-xs text-gray-400 uppercase">Countries</div>
              </div>
            </div>
          </motion.div>
        );

      case 2: // EXPERIENCE
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-3 w-full"
          >
            <h2 className="text-4xl font-black text-center mb-4">
              EXPERIENCE
            </h2>
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">
              {experiences.slice(0, 3).map((exp, idx) => (
                <div key={idx} className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-[#177e89] font-bold">{exp.startDate}</span>
                  </div>
                  <p className="text-[#177e89] font-semibold mb-1 text-sm">{exp.company}</p>
                  <p className="text-xs text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 3: // SKILLS
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-4 w-full"
          >
            <h2 className="text-4xl font-black text-center mb-4">
              SKILLS
            </h2>
            <div className="grid grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2">
              {skills.slice(0, 4).map((category, idx) => (
                <div key={idx} className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur">
                  <h3 className="text-xs font-bold text-[#177e89] uppercase mb-2">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.slice(0, 6).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-2 py-0.5 bg-black/40 border border-[#177e89]/30 rounded text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 4: // EDUCATION
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-3 w-full"
          >
            <h2 className="text-4xl font-black text-center mb-4">
              EDUCATION
            </h2>
            <div className="grid gap-3 max-h-[350px] overflow-y-auto pr-2">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur">
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-[#177e89] font-semibold mb-1 text-sm">{edu.institution}</p>
                  <p className="text-xs text-gray-400">{edu.startYear} - {edu.endYear} • {edu.location}</p>
                </div>
              ))}
              <div className="bg-black/60 border border-[#177e89]/30 rounded-lg p-3 backdrop-blur">
                <h3 className="text-lg font-bold text-white mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/40 border border-[#177e89]/30 rounded-full text-xs text-gray-300">
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 5: // CONTACT
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-4 w-full"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#177e89] flex items-center justify-center border-4 border-[#084c61] shadow-2xl shadow-[#177e89]/50">
              <Flag size={40} className="text-[#084c61]" fill="currentColor" />
            </div>
            <h2 className="text-4xl font-black">
              GET IN TOUCH
            </h2>
            <p className="text-sm text-gray-400">Let's build something amazing together</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black/60 border-2 border-[#177e89]/30 rounded-lg hover:border-[#177e89] hover:bg-[#177e89]/20 transition-all duration-300 group backdrop-blur"
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-[#177e89] transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-white font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block px-6 py-3 bg-[#177e89] border-2 border-[#084c61] rounded-lg font-black text-base text-white shadow-lg shadow-[#177e89]/50 hover:shadow-[#177e89]/80 transition-all duration-300 uppercase"
              >
                SEND EMAIL
              </a>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      {/* Racing Grid Background */}
      <div className="absolute inset-0 racing-grid opacity-10 pointer-events-none" />

      {/* Race Track SVG - NASCAR Oval Style - Wider and taller oval */}
      <svg
        viewBox="0 0 1600 1100"
        className="absolute inset-0 w-full h-full p-8"
      >
        {/* Track outer border - NASCAR oval shape */}
        <path
          d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
          fill="none"
          stroke="#666"
          strokeWidth="4"
          opacity="0.8"
        />
        {/* Track surface */}
        <path
          d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
          fill="none"
          stroke="#333"
          strokeWidth="160"
          opacity="0.6"
        />
        {/* Track inner border */}
        <path
          d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
          fill="none"
          stroke="#555"
          strokeWidth="2"
          opacity="0.9"
        />
        {/* Center line dashes */}
        <path
          d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="30,20"
          opacity="0.8"
        />
        
        {/* Start/Finish line */}
        <rect x="230" y="70" width="20" height="160" fill="white" opacity="0.2" />
        <rect x="250" y="70" width="20" height="160" fill="black" opacity="0.2" />
        <rect x="270" y="70" width="20" height="160" fill="white" opacity="0.2" />
        
        {/* Scroll-controlled racing car */}
        <CarOnTrack trackIndex={trackIndex} />
      </svg>

      {/* Content in center of track - constrained to track interior */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-2xl px-20 py-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>

      {/* Lap Counter */}
      <div className="fixed bottom-8 right-8 z-50 bg-black/90 border-2 border-[#177e89] rounded-lg p-4 backdrop-blur-sm">
        <div className="text-xs text-gray-400 mb-1 font-bold uppercase">
          CURRENT LAP
        </div>
        <div className="text-3xl font-black text-[#177e89]">
          {currentLap}
        </div>
        <div className="text-[10px] text-gray-500 mt-1">/ {totalLaps - 1} LAPS</div>
        {/* Progress bar */}
        <div className="mt-2 w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#177e89] transition-all duration-100"
            style={{ width: `${((trackIndex % totalTrackPoints) / totalTrackPoints) * 100}%` }}
          />
        </div>
      </div>

      {/* Speedometer */}
      <div className="fixed bottom-8 left-8 z-50 bg-black/90 border-2 border-[#177e89] rounded-lg p-4 backdrop-blur-sm">
        <div className="text-xs text-gray-400 mb-2 font-bold uppercase text-center">
          SPEED
        </div>
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {/* Speedometer background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="8"
            />
            {/* Speed indicator circle - fills based on speed */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#177e89"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * scrollSpeed) / 300}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>
          {/* Speed value in center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-black text-[#177e89]">
              {Math.round(scrollSpeed)}
            </div>
            <div className="text-[8px] text-gray-500 uppercase">KM/H</div>
          </div>
        </div>
      </div>

      {/* Manual navigation */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              setCurrentLap(section.id);
              setTrackIndex(section.id * totalTrackPoints);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentLap === section.id
                ? 'bg-[#177e89] scale-125'
                : 'bg-gray-600 hover:bg-[#177e89]'
            }`}
            title={section.title}
          />
        ))}
      </div>
    </div>
  );
}
