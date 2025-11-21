'use client';

import { motion } from 'framer-motion';
import { education, languages } from '@/data/portfolio';

export function EducationSection() {
  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-2 sm:space-y-3 w-full"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-3 sm:mb-4">
        EDUCATION
      </h2>
      <div className="grid gap-2 sm:gap-3 max-h-[300px] sm:max-h-[350px] overflow-y-auto pr-2">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-black/60 border border-[#177e89]/30 rounded-lg p-2.5 sm:p-3 backdrop-blur">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">{edu.degree}</h3>
            <p className="text-[#177e89] font-semibold mb-1 text-xs sm:text-sm">{edu.institution}</p>
            <p className="text-[10px] sm:text-xs text-gray-400">{edu.startYear} - {edu.endYear} • {edu.location}</p>
          </div>
        ))}
        <div className="bg-black/60 border border-[#177e89]/30 rounded-lg p-2.5 sm:p-3 backdrop-blur">
          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Languages</h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {languages.map((lang, idx) => (
              <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/40 border border-[#177e89]/30 rounded-full text-[10px] sm:text-xs text-gray-300">
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
