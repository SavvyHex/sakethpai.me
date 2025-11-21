// Education Section - Academic background and languages

import { education, languages } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {/* TODO: Map through education array */}
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    📍 {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Languages</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                {/* TODO: Map through languages array */}
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-lg font-medium">{lang.name}</span>
                    {lang.proficiency && (
                      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        {lang.proficiency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (Optional) */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* TODO: Add your certifications here */}
                <p className="text-gray-600 dark:text-gray-400">
                  Add your professional certifications, courses, or awards here.
                </p>
                {/* Example:
                <ul className="space-y-2">
                  <li>• AWS Certified Solutions Architect</li>
                  <li>• Google Cloud Professional Developer</li>
                </ul>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
