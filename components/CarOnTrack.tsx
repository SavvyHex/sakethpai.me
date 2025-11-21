'use client';

import { useState, useEffect, useRef } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

// Define track path once - shared between components
export const TRACK_PATH = [
  // Top straight (y=150) - starting at finish line
  { x: 240, y: 150 },
  { x: 280, y: 150 },
  { x: 320, y: 150 },
  { x: 440, y: 150 },
  { x: 480, y: 150 },
  { x: 520, y: 150 },
  { x: 560, y: 150 },
  { x: 600, y: 150 },
  { x: 640, y: 150 },
  { x: 680, y: 150 },
  { x: 720, y: 150 },
  { x: 760, y: 150 },
  { x: 800, y: 150 },
  { x: 840, y: 150 },
  { x: 880, y: 150 },
  { x: 920, y: 150 },
  { x: 960, y: 150 },
  { x: 1000, y: 150 },
  { x: 1040, y: 150 },
  { x: 1080, y: 150 },
  { x: 1120, y: 150 },
  { x: 1160, y: 150 },
  { x: 1200, y: 150 },
  { x: 1240, y: 150 },
  { x: 1280, y: 150 },
  
  // Right turn top
  { x: 1350, y: 150 },
  { x: 1390, y: 165 },
  { x: 1430, y: 190 },
  { x: 1460, y: 220 },
  { x: 1485, y: 255 },
  { x: 1505, y: 290 },
  { x: 1520, y: 330 },
  
  // Right straight (x=1520)
  { x: 1520, y: 380 },
  { x: 1520, y: 430 },
  { x: 1520, y: 480 },
  { x: 1520, y: 530 },
  { x: 1520, y: 580 },
  { x: 1520, y: 630 },
  { x: 1520, y: 680 },
  { x: 1520, y: 730 },
  { x: 1520, y: 780 },
  { x: 1520, y: 830 },
  
  // Bottom right turn
  { x: 1520, y: 870 },
  { x: 1505, y: 905 },
  { x: 1480, y: 930 },
  { x: 1450, y: 945 },
  { x: 1410, y: 952 },
  { x: 1370, y: 955 },
  
  // Bottom straight (y=950)
  { x: 1320, y: 950 },
  { x: 1270, y: 950 },
  { x: 1220, y: 950 },
  { x: 1170, y: 950 },
  { x: 1120, y: 950 },
  { x: 1070, y: 950 },
  { x: 1020, y: 950 },
  { x: 970, y: 950 },
  { x: 920, y: 950 },
  { x: 870, y: 950 },
  { x: 820, y: 950 },
  { x: 770, y: 950 },
  { x: 720, y: 950 },
  { x: 670, y: 950 },
  { x: 620, y: 950 },
  { x: 570, y: 950 },
  { x: 520, y: 950 },
  { x: 470, y: 950 },
  { x: 420, y: 950 },
  { x: 370, y: 950 },
  { x: 320, y: 950 },
  { x: 270, y: 950 },
  { x: 220, y: 950 },
  { x: 180, y: 950 },
  
  // Bottom left turn
  { x: 140, y: 945 },
  { x: 110, y: 930 },
  { x: 90, y: 905 },
  { x: 80, y: 870 },
  { x: 80, y: 830 },
  
  // Left straight (x=80)
  { x: 80, y: 780 },
  { x: 80, y: 730 },
  { x: 80, y: 680 },
  { x: 80, y: 630 },
  { x: 80, y: 580 },
  { x: 80, y: 530 },
  { x: 80, y: 480 },
  { x: 80, y: 430 },
  { x: 80, y: 380 },
  { x: 80, y: 330 },
  
  // Top left turn - back to start/finish line
  { x: 80, y: 290 },
  { x: 90, y: 255 },
  { x: 105, y: 220 },
  { x: 130, y: 190 },
  { x: 160, y: 170 },
  { x: 190, y: 158 },
  { x: 220, y: 152 },
  { x: 240, y: 150 }, // Complete the loop at start/finish
];

interface CarOnTrackProps {
  trackIndex: number;
}

export function CarOnTrack({ trackIndex }: CarOnTrackProps) {
  const carRef = useRef<SVGGElement>(null);
  const prevAngleRef = useRef(0);
  const prevNormalizedRef = useRef(0);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Use a spring to smooth out the movement along the track index
  // This prevents the car from cutting corners when scrolling fast
  const indexMotionValue = useMotionValue(0);
  const smoothIndex = useSpring(indexMotionValue, { stiffness: 100, damping: 25, mass: 0.8 });

  // Initialize car position immediately on mount
  useEffect(() => {
    if (!isInitialized && carRef.current) {
      // Set initial position without animation
      const startPoint = TRACK_PATH[0];
      const nextPoint = TRACK_PATH[1];
      const dx = nextPoint.x - startPoint.x;
      const dy = nextPoint.y - startPoint.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      prevAngleRef.current = angle;
      carRef.current.setAttribute("transform", `translate(${startPoint.x}, ${startPoint.y}) rotate(${angle})`);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    indexMotionValue.set(trackIndex);
  }, [trackIndex, indexMotionValue]);

  useEffect(() => {
    const unsubscribe = smoothIndex.on("change", (latest) => {
      if (!carRef.current) return;

      const totalPoints = TRACK_PATH.length;
      
      // Calculate normalized index within a single lap (0 to totalPoints)
      const rawNormalized = latest % totalPoints;
      let normalizedIndex = rawNormalized < 0 ? rawNormalized + totalPoints : rawNormalized;
      
      // Detect wrap-around for smooth looping
      const prevNormalized = prevNormalizedRef.current;
      const diff = normalizedIndex - prevNormalized;
      
      // If we detect a large jump (wrap around), adjust for smooth animation
      if (diff > totalPoints / 2) {
        // Wrapped backwards
        normalizedIndex -= totalPoints;
      } else if (diff < -totalPoints / 2) {
        // Wrapped forwards
        normalizedIndex += totalPoints;
      }
      
      prevNormalizedRef.current = normalizedIndex % totalPoints;
      
      const index = Math.floor(normalizedIndex);
      const nextIndex = index + 1;
      const fraction = normalizedIndex - index;

      // Get points with proper wrapping
      const currentPoint = TRACK_PATH[((index % totalPoints) + totalPoints) % totalPoints];
      const nextPoint = TRACK_PATH[((nextIndex % totalPoints) + totalPoints) % totalPoints];

      // Interpolate position
      const x = currentPoint.x + (nextPoint.x - currentPoint.x) * fraction;
      const y = currentPoint.y + (nextPoint.y - currentPoint.y) * fraction;
      
      // Calculate angle based on direction of movement
      const dx = nextPoint.x - currentPoint.x;
      const dy = nextPoint.y - currentPoint.y;
      
      // Raw direction angle
      let angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Prevent spins by choosing shortest turning direction
      let prevAngle = prevAngleRef.current;
      let delta = angle - prevAngle;
      // Normalize delta to [-180, 180] range to get shortest rotation
      delta = ((delta + 180) % 360 + 360) % 360 - 180;
      angle = prevAngle + delta;
      prevAngleRef.current = angle;

      carRef.current.setAttribute("transform", `translate(${x}, ${y}) rotate(${angle})`);
    });

    return unsubscribe;
  }, [smoothIndex]);

  return (
    <g ref={carRef}>
      {/* NASCAR-style car body */}
      <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#177e89" stroke="#000" strokeWidth="1.5" />
      <rect x="0" y="-7" width="16" height="14" rx="2" fill="#084c61" />
      <rect x="16" y="-8" width="6" height="16" fill="#177e89" opacity="0.8" />
      <rect x="-22" y="-9" width="3" height="18" fill="#177e89" opacity="0.8" />
      <circle cx="10" cy="-9" r="3" fill="#1a1a1a" />
      <circle cx="10" cy="9" r="3" fill="#1a1a1a" />
      <circle cx="-10" cy="-9" r="3" fill="#1a1a1a" />
      <circle cx="-10" cy="9" r="3" fill="#1a1a1a" />
      <text x="8" y="3" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">1</text>
    </g>
  );
}
