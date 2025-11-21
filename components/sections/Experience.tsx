// Experience Section - Timeline of work history

import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My Journey
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Professional Experience Timeline
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    {/* Job Title */}
                    <h3 className="text-xl font-bold mb-2">
                      {/* TODO: Fill from experiences array */}
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>

                    {/* Date Range */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.startDate} - {exp.endDate}
                    </p>

                    {/* Location */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-1">
                      📍 {exp.location}
                      {exp.type && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                          {exp.type}
                        </span>
                      )}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-black" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
