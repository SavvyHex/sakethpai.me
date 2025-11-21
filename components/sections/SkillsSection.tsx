'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export function SkillsSection() {
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
}
