'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-teal/20 backdrop-blur-sm border border-teal/30 opacity-0"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-golden-pollen" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-teal/20 backdrop-blur-sm border border-teal/30 hover:bg-teal/30 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-teal" />
      ) : (
        <Sun className="w-5 h-5 text-golden-pollen" />
      )}
    </button>
  );
}
