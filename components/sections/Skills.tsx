// Skills Section - Technical skills organized by category

'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          SKILLS
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wide">
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
