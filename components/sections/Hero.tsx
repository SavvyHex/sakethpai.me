// Hero Section - Racing Start Line

'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Flag, Zap, Trophy, ChevronDown } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

const iconMap: { [key: string]: any } = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden"
    >
      {/* Speed lines background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: [-1000, 1000],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Start Flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-4 border-yellow-400 shadow-2xl shadow-red-600/50">
              <Flag size={36} className="text-yellow-400" fill="currentColor" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-red-600"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="text-xs text-red-600 font-bold tracking-[0.3em]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              STARTING LINE
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              Ready... Set... Code!
            </div>
          </motion.div>

          {/* Name - Racing Style */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
            className="text-5xl md:text-7xl lg:text-8xl font-black relative"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              {personalInfo.name.split(' ')[0]}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 animate-pulse">
              {personalInfo.name.split(' ')[1] || 'RACER'}
            </span>
            
            {/* Racing number */}
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center border-4 border-yellow-400 transform rotate-12">
              <span className="text-2xl md:text-4xl font-black text-white">1</span>
            </div>
          </motion.h1>

          {/* Title with racing badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-lg shadow-lg">
              <div className="text-xs text-yellow-400 font-bold mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                DRIVER
              </div>
              <div className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {personalInfo.title}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 w-full max-w-2xl"
          >
            <div className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur">
              <Trophy size={24} className="text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                11+
              </div>
              <div className="text-xs text-gray-400 uppercase">Years</div>
            </div>
            <div className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur">
              <Zap size={24} className="text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                50+
              </div>
              <div className="text-xs text-gray-400 uppercase">Projects</div>
            </div>
            <div className="bg-black/60 border border-red-600/30 rounded-lg p-4 backdrop-blur">
              <Flag size={24} className="text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                4
              </div>
              <div className="text-xs text-gray-400 uppercase">Countries</div>
            </div>
          </motion.div>

          {/* Social Links - Racing style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/60 border-2 border-red-600/30 rounded flex items-center justify-center hover:border-red-600 hover:bg-red-600/20 transition-all duration-300 group backdrop-blur"
                  aria-label={link.name}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-red-600 transition-colors" />
                </a>
              );
            })}
          </motion.div>

          {/* CTA Button - Race style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-lg font-black text-lg shadow-lg shadow-red-600/50 hover:shadow-red-600/80 transition-all duration-300 text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              START YOUR ENGINE
            </a>
          </motion.div>

          {/* Tech Stack - Racing Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-2 justify-center max-w-3xl"
          >
            {['Node.js', 'React', 'Python', 'TypeScript', 'Google Cloud', 'Docker', 'Kubernetes', 'AWS'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
                className="px-3 py-1.5 bg-black/40 border border-red-600/30 rounded-full text-xs font-bold text-gray-300 hover:border-red-600 hover:text-red-600 transition-all cursor-default backdrop-blur"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator - Animated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Scroll to race
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-red-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
