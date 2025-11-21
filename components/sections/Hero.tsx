// Hero Section - Main landing section with introduction

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowDown, Coffee } from 'lucide-react';
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
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Greeting */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-400"
          >
            Hi there! 👋
          </motion.p>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            I'm <span className="text-blue-400">{personalInfo.name}</span>.
          </motion.h1>

          {/* Location & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-gray-300">
              Based in {personalInfo.location}, I'm a {personalInfo.title}.
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center items-center"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium shadow-lg shadow-blue-500/20"
            >
              Get in Touch!
            </a>
            <a
              href="https://www.paypal.com/paypalme/YourPayPal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <Coffee size={20} />
              Buy me a coffee
            </a>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-blue-500/20 overflow-hidden">
              {personalInfo.avatar ? (
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <span>{personalInfo.name.charAt(0)}</span>
              )}
            </div>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-3 justify-center max-w-2xl"
          >
            {['Full-Stack Ninja', 'Node.js', 'React', 'Python', 'JavaScript', 'TypeScript', 'Google Cloud', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={32} className="text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
