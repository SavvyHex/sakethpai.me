'use client';

import { motion } from 'framer-motion';
import { Trophy, Zap, Flag } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function AboutSection() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4 w-full"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4 text-foreground">
        ABOUT ME
      </h2>
      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed text-center">
        {personalInfo.bio}
      </p>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
        <div className="bg-track-gray/60 border border-[#177e89]/30 rounded-lg p-2 sm:p-3 backdrop-blur text-center">
          <Trophy size={20} className="text-[#177e89] mx-auto mb-1 sm:mb-2 sm:w-7 sm:h-7" />
          <div className="text-xl sm:text-2xl font-black text-foreground">2</div>
          <div className="text-[10px] sm:text-xs text-foreground/50 uppercase">Years of learning</div>
        </div>
        <div className="bg-track-gray/60 border border-[#177e89]/30 rounded-lg p-2 sm:p-3 backdrop-blur text-center">
          <Zap size={20} className="text-[#177e89] mx-auto mb-1 sm:mb-2 sm:w-7 sm:h-7" />
          <div className="text-xl sm:text-2xl font-black text-foreground">30+</div>
          <div className="text-[10px] sm:text-xs text-foreground/50 uppercase">Projects</div>
        </div>
        <div className="bg-track-gray/60 border border-[#177e89]/30 rounded-lg p-2 sm:p-3 backdrop-blur text-center">
          <Flag size={20} className="text-[#177e89] mx-auto mb-1 sm:mb-2 sm:w-7 sm:h-7" />
          <div className="text-xl sm:text-2xl font-black text-foreground">500+</div>
          <div className="text-[10px] sm:text-xs text-foreground/50 uppercase">Github Commits</div>
        </div>
      </div>
    </motion.div>
  );
}
