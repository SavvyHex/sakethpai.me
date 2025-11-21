// Contact Section - Get in touch form and information

'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

const iconMap: { [key: string]: any } = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name] || Mail;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 group"
              >
                <Icon size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                  {link.name}
                </span>
              </a>
            );
          })}
        </motion.div>

        {/* Email */}
        {personalInfo.email && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium text-lg shadow-lg shadow-blue-500/20"
            >
              <Mail size={20} />
              Send me an email
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
