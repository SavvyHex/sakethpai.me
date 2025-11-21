'use client';

import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function HeroSection() {
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
}
