// Navigation component - Racing themed navigation

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Flag, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'START', href: '#hero', icon: Flag, lap: 0 },
    { label: 'ABOUT', href: '#about', lap: 1 },
    { label: 'EXPERIENCE', href: '#experience', lap: 2 },
    { label: 'SKILLS', href: '#skills', lap: 3 },
    { label: 'EDUCATION', href: '#education', lap: 4 },
    { label: 'CONTACT', href: '#contact', lap: 5 },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b-2 border-red-600'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Racing Logo */}
            <Link 
              href="#hero" 
              className="flex items-center gap-2 text-2xl font-black hover:text-red-600 transition-colors"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center border-2 border-red-400 racing-pulse">
                <Gauge className="text-white" size={24} />
              </div>
              <span className="hidden sm:inline">RACING</span>
              <span className="text-red-600">|</span>
              <span className="hidden sm:inline text-red-600">PORTFOLIO</span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon || Flag;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 relative flex items-center gap-2 hover:text-red-600"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={14} className="group-hover:text-red-600" />
                      {item.label}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <span className="absolute -top-1 -right-1 text-[10px] text-red-600 font-black">
                        {index}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Speed Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded">
              <Gauge size={16} className="text-red-600" />
              <span className="text-xs font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {Math.round(scrollProgress)}%
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-red-600 transition-colors p-2 border-2 border-red-600 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 via-yellow-400 to-green-500"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed top-[73px] right-0 bottom-0 w-64 bg-black/98 backdrop-blur-md border-l-2 border-red-600 z-40 md:hidden"
          >
            <ul className="p-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon || Flag;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 p-3 text-sm font-bold hover:bg-red-600/20 hover:text-red-600 transition-all rounded border border-gray-800 hover:border-red-600"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={16} />
                      {item.label}
                      <span className="ml-auto text-xs text-red-600">LAP {index}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
