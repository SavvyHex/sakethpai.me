// Footer component

import { personalInfo } from '@/data/portfolio';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Name & Title */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-1">{personalInfo.name}</h3>
            <p className="text-sm text-gray-400">{personalInfo.title}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#hero"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} {personalInfo.name}</p>
            <a
              href="/terminal.html"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Terminal size={16} />
              Terminal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
