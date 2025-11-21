// Skills Section - Technical skills organized by category

import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* TODO: Map through skills categories */}
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {/* TODO: Map through individual skills */}
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section (Optional) */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {/* TODO: Add note about continuous learning */}
            Always learning and exploring new technologies to stay current in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
