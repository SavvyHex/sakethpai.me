// About Section - Detailed bio and background

'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          ABOUT
        </motion.h2>

        {/* Bio Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-gray-300">
            {personalInfo.bio}
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            My passion for <span className="text-blue-400 font-semibold">continuous learning</span> and <span className="text-blue-400 font-semibold">innovation</span> is evident through my active presence on various platforms. I thrive on staying updated with the <span className="text-blue-400 font-semibold">latest trends</span> and technologies in the ever-evolving tech landscape.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I bring a unique blend of <span className="text-blue-400 font-semibold">technical expertise</span>, <span className="text-blue-400 font-semibold">leadership qualities</span>, and a genuine enthusiasm for creating <span className="text-blue-400 font-semibold">impactful software solutions</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
