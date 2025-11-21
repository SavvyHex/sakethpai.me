'use client';

import { Flag } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-red-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-2 border-yellow-400">
            <Flag size={20} className="text-yellow-400" fill="currentColor" />
          </div>
          <div>
            <div className="text-2xl font-black text-red-600" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              RACING PORTFOLIO
            </div>
            <div className="text-xs text-gray-400 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Watch the laps complete to see different sections
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
