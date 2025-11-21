// About Section - Detailed bio and background

import { personalInfo } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        {/* Bio Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* TODO: Fill in your detailed bio from personalInfo.bio */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            {personalInfo.bio}
          </p>

          {/* Additional paragraphs */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            {/* TODO: Add more details about your background, what drives you, etc. */}
            Add more paragraphs about your professional journey, what technologies 
            excite you, and what kind of problems you love solving.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {/* TODO: Conclude with your values, approach to work, or future goals */}
            Talk about your approach to software development, your values, 
            or what you're looking to achieve in your career.
          </p>
        </div>

        {/* Highlights/Stats (Optional) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {/* TODO: Add stats like years of experience, projects completed, etc. */}
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              20+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
