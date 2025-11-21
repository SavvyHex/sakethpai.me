// Education Section - Academic background and languages

'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Languages } from 'lucide-react';
import { education, languages } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={32} />
              EDUCATION
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400">
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin size={14} /> {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <Languages className="text-blue-400" size={32} />
              LANGUAGES
            </h2>
            <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-all duration-300">
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
