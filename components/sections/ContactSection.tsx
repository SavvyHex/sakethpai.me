'use client';

import { motion } from 'framer-motion';
import { Flag, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

const iconMap: { [key: string]: any } = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export function ContactSection() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center space-y-3 sm:space-y-4 w-full"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#177e89] flex items-center justify-center border-2 sm:border-4 border-[#084c61] shadow-2xl shadow-[#177e89]/50">
        <Flag size={32} className="text-[#084c61] sm:w-10 sm:h-10" fill="currentColor" />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
        GET IN TOUCH
      </h2>
      <p className="text-xs sm:text-sm text-gray-400">Let's build something amazing together</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.name] || Mail;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60 border-2 border-[#177e89]/30 rounded-lg hover:border-[#177e89] hover:bg-[#177e89]/20 transition-all duration-300 group backdrop-blur"
            >
              <Icon size={16} className="text-gray-400 group-hover:text-[#177e89] transition-colors sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white font-medium">{link.name}</span>
            </a>
          );
        })}
      </div>
      {personalInfo.email && (
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-[#177e89] border-2 border-[#084c61] rounded-lg font-black text-sm sm:text-base text-white shadow-lg shadow-[#177e89]/50 hover:shadow-[#177e89]/80 transition-all duration-300 uppercase"
        >
          SEND EMAIL
        </a>
      )}
    </motion.div>
  );
}
