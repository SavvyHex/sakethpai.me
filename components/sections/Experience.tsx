// Experience Section - Timeline of work history

'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My Journey
          </h2>
          <p className="text-center text-gray-400 text-lg">
            Journey Timeline
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-800 pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />

              {/* Content Card */}
              <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-all duration-300">
                {/* Job Title */}
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-400" />
                  {exp.title} @ {exp.company}
                </h3>

                {/* Date Range */}
                <p className="text-sm text-gray-400 mb-3">
                  {exp.startDate} - {exp.endDate}
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Location & Type */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                  {exp.type && (
                    <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 capitalize">
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
