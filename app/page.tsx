'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, experiences, skills, education, languages, socialLinks } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Mail, Flag, Zap, Trophy, ChevronRight, GraduationCap, Briefcase, Code } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

// Component to position car on track based on progress
function CarOnTrack({ progress }: { progress: number }) {
  // Calculate position along the track path based on progress (0-100)
  // Following center line of track - matches yellow dashed line
  const getCarPosition = (progress: number) => {
    // Center line coordinates following the track path exactly
    const trackPath = [
      // Top straight (y=150)
      { x: 250, y: 150, angle: 0 },
      { x: 600, y: 150, angle: 0 },
      { x: 950, y: 150, angle: 0 },
      { x: 1250, y: 150, angle: 0 },
      
      // Right turn top
      { x: 1350, y: 150, angle: 10 },
      { x: 1430, y: 180, angle: 35 },
      { x: 1480, y: 240, angle: 60 },
      { x: 1520, y: 320, angle: 85 },
      
      // Right straight (x=1520)
      { x: 1520, y: 450, angle: 90 },
      { x: 1520, y: 550, angle: 90 },
      { x: 1520, y: 650, angle: 90 },
      { x: 1520, y: 780, angle: 90 },
      
      // Bottom right turn
      { x: 1520, y: 860, angle: 95 },
      { x: 1480, y: 910, angle: 125 },
      { x: 1400, y: 940, angle: 155 },
      { x: 1350, y: 950, angle: 170 },
      
      // Bottom straight (y=950)
      { x: 1100, y: 950, angle: 180 },
      { x: 800, y: 950, angle: 180 },
      { x: 500, y: 950, angle: 180 },
      { x: 250, y: 950, angle: 180 },
      
      // Bottom left turn
      { x: 150, y: 950, angle: 190 },
      { x: 100, y: 910, angle: 215 },
      { x: 80, y: 850, angle: 245 },
      { x: 80, y: 780, angle: 270 },
      
      // Left straight (x=80)
      { x: 80, y: 650, angle: 270 },
      { x: 80, y: 550, angle: 270 },
      { x: 80, y: 450, angle: 270 },
      { x: 80, y: 320, angle: 270 },
      
      // Top left turn
      { x: 80, y: 240, angle: 285 },
      { x: 100, y: 190, angle: 305 },
      { x: 140, y: 160, angle: 330 },
      { x: 200, y: 150, angle: 355 },
    ];

    const totalPoints = trackPath.length;
    const progressIndex = (progress / 100) * totalPoints;
    const index = Math.floor(progressIndex);
    const fraction = progressIndex - index;

    const currentPoint = trackPath[index % totalPoints];
    const nextPoint = trackPath[(index + 1) % totalPoints];

    // Smooth interpolation between points
    const x = currentPoint.x + (nextPoint.x - currentPoint.x) * fraction;
    const y = currentPoint.y + (nextPoint.y - currentPoint.y) * fraction;
    
    // Handle angle interpolation to prevent spinning at lap completion
    let angleDiff = nextPoint.angle - currentPoint.angle;
    
    // If we're wrapping from end to start (355° to 0°), adjust the angle difference
    if (angleDiff > 180) {
      angleDiff -= 360;
    } else if (angleDiff < -180) {
      angleDiff += 360;
    }
    
    const angle = currentPoint.angle + angleDiff * fraction;

    return { x, y, angle };
  };

  const { x, y, angle } = getCarPosition(progress);

  return (
    <g 
      transform={`translate(${x}, ${y}) rotate(${angle})`}
      style={{
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* NASCAR-style car body */}
      <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
      <rect x="0" y="-7" width="16" height="14" rx="2" fill="#1a1a1a" />
      <rect x="16" y="-8" width="6" height="16" fill="#ff0000" opacity="0.8" />
      <rect x="-22" y="-9" width="3" height="18" fill="#ff0000" opacity="0.8" />
      <circle cx="10" cy="-9" r="3" fill="#1a1a1a" />
      <circle cx="10" cy="9" r="3" fill="#1a1a1a" />
      <circle cx="-10" cy="-9" r="3" fill="#1a1a1a" />
      <circle cx="-10" cy="9" r="3" fill="#1a1a1a" />
      <text x="8" y="3" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">1</text>
    </g>
  );
}

export default function Home() {
  const [currentLap, setCurrentLap] = useState(0);
  const [lapProgress, setLapProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalLaps = 6;

  // Sections data
  const sections = [
    { id: 0, title: 'START', subtitle: 'Welcome', icon: Flag },
    { id: 1, title: 'ABOUT', subtitle: 'My Story', icon: Zap },
    { id: 2, title: 'EXPERIENCE', subtitle: 'My Journey', icon: Briefcase },
    { id: 3, title: 'SKILLS', subtitle: 'Tech Stack', icon: Code },
    { id: 4, title: 'EDUCATION', subtitle: 'Background', icon: GraduationCap },
    { id: 5, title: 'CONTACT', subtitle: 'Get in Touch', icon: Mail },
  ];

  // Scroll-controlled laps
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      setScrollProgress((prev) => {
        // Adjust scroll sensitivity (higher = less sensitive)
        const sensitivity = 15;
        const newProgress = prev + (e.deltaY / sensitivity);
        
        // Clamp between 0 and total laps * 100
        const maxProgress = totalLaps * 100;
        const clampedProgress = Math.max(0, Math.min(maxProgress, newProgress));
        
        // Calculate current lap and lap progress
        const lap = Math.floor(clampedProgress / 100);
        const progress = clampedProgress % 100;
        
        setCurrentLap(Math.min(lap, totalLaps - 1));
        setLapProgress(progress);
        
        return clampedProgress;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [totalLaps]);

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
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-4 border-yellow-400 shadow-2xl shadow-red-600/50">
              <Flag size={40} className="text-yellow-400" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-red-600">
                {personalInfo.name.split(' ')[1] || 'RACER'}
              </span>
            </h1>
            <div className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-lg inline-block">
              <div className="text-xs text-yellow-400 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>DRIVER</div>
              <div className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{personalInfo.title}</div>
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
            <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              ABOUT ME
            </h2>
            <p className="text-base text-gray-300 leading-relaxed text-center">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur text-center">
                <Trophy size={28} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>11+</div>
                <div className="text-xs text-gray-400 uppercase">Years</div>
              </div>
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur text-center">
                <Zap size={28} className="text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>50+</div>
                <div className="text-xs text-gray-400 uppercase">Projects</div>
              </div>
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur text-center">
                <Flag size={28} className="text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>4</div>
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
            <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              EXPERIENCE
            </h2>
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">
              {experiences.slice(0, 3).map((exp, idx) => (
                <div key={idx} className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {exp.title}
                    </h3>
                    <span className="text-xs text-red-600 font-bold">{exp.startDate}</span>
                  </div>
                  <p className="text-red-400 font-semibold mb-1 text-sm">{exp.company}</p>
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
            <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SKILLS
            </h2>
            <div className="grid grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2">
              {skills.slice(0, 4).map((category, idx) => (
                <div key={idx} className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur">
                  <h3 className="text-xs font-bold text-red-400 uppercase mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.slice(0, 6).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-2 py-0.5 bg-black/40 border border-red-600/30 rounded text-xs text-gray-300"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
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
            <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              EDUCATION
            </h2>
            <div className="grid gap-3 max-h-[350px] overflow-y-auto pr-2">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur">
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-red-400 font-semibold mb-1 text-sm">{edu.institution}</p>
                  <p className="text-xs text-gray-400">{edu.startYear} - {edu.endYear} • {edu.location}</p>
                </div>
              ))}
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-3 backdrop-blur">
                <h3 className="text-lg font-bold text-white mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/40 border border-red-600/30 rounded-full text-xs text-gray-300">
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
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center border-4 border-yellow-400 shadow-2xl shadow-green-600/50">
              <Flag size={40} className="text-yellow-400" fill="currentColor" />
            </div>
            <h2 className="text-4xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
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
                    className="flex items-center gap-2 px-4 py-2 bg-black/60 border-2 border-red-600/30 rounded-lg hover:border-red-600 hover:bg-red-600/20 transition-all duration-300 group backdrop-blur"
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-red-600 transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-white font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-lg font-black text-base text-white shadow-lg shadow-red-600/50 hover:shadow-red-600/80 transition-all duration-300"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
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
          stroke="#ffff00"
          strokeWidth="3"
          strokeDasharray="30,20"
          opacity="0.7"
        />
        
        {/* Start/Finish line */}
        <rect x="230" y="70" width="20" height="160" fill="white" opacity="0.2" />
        <rect x="250" y="70" width="20" height="160" fill="black" opacity="0.2" />
        <rect x="270" y="70" width="20" height="160" fill="white" opacity="0.2" />
        
        {/* Scroll-controlled racing car */}
        <CarOnTrack progress={lapProgress} />
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
      <div className="fixed bottom-8 right-8 z-50 bg-black/90 border-2 border-red-600 rounded-lg p-4 backdrop-blur-sm">
        <div className="text-xs text-gray-400 mb-1 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          CURRENT LAP
        </div>
        <div className="text-3xl font-black text-red-600" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {currentLap}
        </div>
        <div className="text-[10px] text-gray-500 mt-1">/ {totalLaps - 1} LAPS</div>
        {/* Progress bar */}
        <div className="mt-2 w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-yellow-400 transition-all duration-100"
            style={{ width: `${lapProgress}%` }}
          />
        </div>
      </div>

      {/* Section indicator */}
      <div className="fixed bottom-8 left-8 z-50 bg-black/90 border-2 border-red-600 rounded-lg p-4 backdrop-blur-sm">
        <div className="text-xs text-gray-400 mb-1 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          {sections[currentLap].title}
        </div>
        <div className="text-sm text-white">{sections[currentLap].subtitle}</div>
      </div>

      {/* Manual navigation */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              setCurrentLap(section.id);
              setLapProgress(0);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentLap === section.id
                ? 'bg-red-600 scale-125'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            title={section.title}
          />
        ))}
      </div>
    </div>
  );
}
