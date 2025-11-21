// Hero Section - Main landing section with introduction

import Image from 'next/image';
import { personalInfo, socialLinks } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
              {/* TODO: Add a greeting like "Hi there! 👋" */}
              Hi there! 👋
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {/* TODO: Add your introduction text */}
              I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>.
            </h1>

            {/* Title/Tagline */}
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              {/* TODO: Fill in from personalInfo.title */}
              {personalInfo.title}
            </p>

            {/* Location */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {/* TODO: Fill in from personalInfo.location */}
              📍 {personalInfo.location}
            </p>

            {/* Short Bio */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {/* TODO: Add a short 1-2 sentence tagline about yourself */}
              Add a compelling tagline here that summarizes what you do and what you're passionate about.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              {/* TODO: Map through socialLinks and create icon buttons */}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {/* TODO: Replace with actual icons (use lucide-react or another icon library) */}
                  {link.name.charAt(0)}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex-1 flex justify-center">
            {/* TODO: Add your avatar image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                {/* Placeholder - replace with actual image */}
                {personalInfo.name.charAt(0)}
              </div>
              {/* Uncomment and use when you have an avatar image
              <Image
                src={personalInfo.avatar || '/images/avatar.png'}
                alt={personalInfo.name}
                fill
                className="rounded-full object-cover"
                priority
              />
              */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          {/* TODO: Add a down arrow icon */}
          <span className="text-3xl">↓</span>
        </div>
      </div>
    </section>
  );
}
