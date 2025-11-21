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
}
