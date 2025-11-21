'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { personalInfo, experiences, skills, education, languages, socialLinks } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Mail, Flag, Zap, Trophy, ChevronRight, GraduationCap, Briefcase, Code } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export default function Home() {
  const [currentLap, setCurrentLap] = useState(0);
  const [lapProgress, setLapProgress] = useState(0);
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

  // Auto-advance through laps
  useEffect(() => {
    const lapDuration = 8000; // 8 seconds per lap
    const updateInterval = 50; // Update every 50ms for smooth animation

    const interval = setInterval(() => {
      setLapProgress((prev) => {
        const newProgress = prev + (updateInterval / lapDuration) * 100;
        if (newProgress >= 100) {
          setCurrentLap((lap) => (lap + 1) % totalLaps);
          return 0;
        }
        return newProgress;
      });
    }, updateInterval);

    return () => clearInterval(interval);
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
            className="text-center space-y-6"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-4 border-yellow-400 shadow-2xl shadow-red-600/50">
              <Flag size={48} className="text-yellow-400" fill="currentColor" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-red-600">
                {personalInfo.name.split(' ')[1] || 'RACER'}
              </span>
            </h1>
            <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-lg inline-block">
              <div className="text-xs text-yellow-400 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>DRIVER</div>
              <div className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{personalInfo.title}</div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{personalInfo.location}</p>
          </motion.div>
        );

      case 1: // ABOUT
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-black text-center mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              ABOUT ME
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur text-center">
                <Trophy size={32} className="text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>11+</div>
                <div className="text-xs text-gray-400 uppercase">Years</div>
              </div>
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur text-center">
                <Zap size={32} className="text-red-600 mx-auto mb-2" />
                <div className="text-3xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>50+</div>
                <div className="text-xs text-gray-400 uppercase">Projects</div>
              </div>
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur text-center">
                <Flag size={32} className="text-green-500 mx-auto mb-2" />
                <div className="text-3xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>4</div>
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
            className="space-y-4 max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-black text-center mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              EXPERIENCE
            </h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
              {experiences.slice(0, 3).map((exp, idx) => (
                <div key={idx} className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {exp.title}
                    </h3>
                    <span className="text-xs text-red-600 font-bold">{exp.startDate}</span>
                  </div>
                  <p className="text-red-400 font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.description}</p>
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
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-black text-center mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SKILLS
            </h2>
            <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-4">
              {skills.slice(0, 4).map((category, idx) => (
                <div key={idx} className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur">
                  <h3 className="text-sm font-bold text-red-400 uppercase mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 6).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-2 py-1 bg-black/40 border border-red-600/30 rounded text-xs text-gray-300"
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
            className="space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-black text-center mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              EDUCATION
            </h2>
            <div className="grid gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-black/60 border border-red-600/30 rounded-lg p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-red-400 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.startYear} - {edu.endYear} • {edu.location}</p>
                </div>
              ))}
              <div className="bg-black/60 border border-red-600/30 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span key={idx} className="px-4 py-2 bg-black/40 border border-red-600/30 rounded-full text-sm text-gray-300">
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
            className="text-center space-y-8 max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center border-4 border-yellow-400 shadow-2xl shadow-green-600/50">
              <Flag size={48} className="text-yellow-400" fill="currentColor" />
            </div>
            <h2 className="text-5xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              GET IN TOUCH
            </h2>
            <p className="text-lg text-gray-400">Let's build something amazing together</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-black/60 border-2 border-red-600/30 rounded-lg hover:border-red-600 hover:bg-red-600/20 transition-all duration-300 group backdrop-blur"
                  >
                    <Icon size={24} className="text-gray-400 group-hover:text-red-600 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-lg font-black text-lg text-white shadow-lg shadow-red-600/50 hover:shadow-red-600/80 transition-all duration-300"
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

      {/* Race Track SVG - Fixed */}
      <svg
        viewBox="0 0 1000 1000"
        className="absolute inset-0 w-full h-full opacity-30"
      >
        {/* Track surface */}
        <path
          d="M 250,500 Q 250,250 500,250 Q 750,250 750,500 Q 750,750 500,750 Q 250,750 250,500 Z"
          fill="none"
          stroke="#444"
          strokeWidth="100"
        />
        {/* Center line dashes */}
        <path
          d="M 250,500 Q 250,250 500,250 Q 750,250 750,500 Q 750,750 500,750 Q 250,750 250,500 Z"
          fill="none"
          stroke="#ffff00"
          strokeWidth="2"
          strokeDasharray="20,20"
          opacity="0.6"
        />
        
        {/* Animated racing car */}
        <g
          style={{
            transform: `rotate(${lapProgress * 3.6}deg)`,
            transformOrigin: '500px 500px',
          }}
        >
          <g transform="translate(500, 250)">
            {/* Car body */}
            <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#ff0000" stroke="#000" strokeWidth="1" />
            <rect x="0" y="-5" width="12" height="10" rx="1" fill="#1a1a1a" />
            <rect x="12" y="-6" width="4" height="12" fill="#ff0000" opacity="0.8" />
            <rect x="-16" y="-7" width="2" height="14" fill="#ff0000" opacity="0.8" />
            <circle cx="8" cy="-7" r="2" fill="#1a1a1a" />
            <circle cx="8" cy="7" r="2" fill="#1a1a1a" />
            <circle cx="-8" cy="-7" r="2" fill="#1a1a1a" />
            <circle cx="-8" cy="7" r="2" fill="#1a1a1a" />
            <text x="6" y="2" fontSize="8" fill="#ffffff" fontWeight="bold" textAnchor="middle">1</text>
          </g>
        </g>
      </svg>

      {/* Navigation */}
      <Navigation />

      {/* Content in center of track */}
      <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
        <div className="w-full max-w-4xl h-[500px] flex items-center justify-center">
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
