'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';

export function ExperienceSection() {
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
}
