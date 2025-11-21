'use client';

import { CarOnTrack } from './CarOnTrack';
import { useEffect, useState } from 'react';

interface RaceTrackProps {
  trackIndex: number;
}

export function RaceTrack({ trackIndex }: RaceTrackProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <svg
      viewBox={isMobile ? "0 -100 1600 1300" : "0 0 1600 1100"}
      className="absolute inset-0 w-full h-full p-0 sm:p-6 md:p-8 rotate-90 sm:rotate-0"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Track outer border - NASCAR oval shape */}
      <path
        d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
        fill="none"
        stroke="#666"
        strokeWidth="4"
        opacity="0.8"
      />
      {/* Track surface */}
      <path
        d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
        fill="none"
        stroke="#333"
        strokeWidth="160"
        opacity="0.6"
      />
      {/* Track inner border */}
      <path
        d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
        fill="none"
        stroke="#555"
        strokeWidth="2"
        opacity="0.9"
      />
      {/* Center line dashes */}
      <path
        d="M 250,150 L 1350,150 Q 1520,150 1520,320 L 1520,780 Q 1520,950 1350,950 L 250,950 Q 80,950 80,780 L 80,320 Q 80,150 250,150 Z"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="3"
        strokeDasharray="30,20"
        opacity="0.4"
      />
      
      {/* Start/Finish line */}
      <rect x="230" y="70" width="20" height="160" fill="var(--foreground)" opacity="0.2" />
      <rect x="250" y="70" width="20" height="160" fill="var(--asphalt)" opacity="0.4" />
      <rect x="270" y="70" width="20" height="160" fill="var(--foreground)" opacity="0.2" />
      
      {/* Scroll-controlled racing car */}
      <CarOnTrack trackIndex={trackIndex} />
    </svg>
  );
}
