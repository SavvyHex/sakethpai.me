'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RaceTrackProps {
  currentSection?: number;
}

export default function RaceTrack({ currentSection = 0 }: RaceTrackProps) {
  const carRef = useRef<SVGGElement>(null);
  const trackRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!carRef.current || !trackRef.current) return;

    // Get the track path
    const path = trackRef.current;
    const pathLength = path.getTotalLength();

    // Animate car along the path based on scroll
    gsap.to(carRef.current, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const point = path.getPointAtLength(progress * pathLength);
          
          // Get tangent for rotation
          const nextPoint = path.getPointAtLength(Math.min((progress * pathLength) + 1, pathLength));
          const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

          gsap.set(carRef.current, {
            x: point.x,
            y: point.y,
            rotation: angle,
            transformOrigin: 'center center'
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <svg
        viewBox="0 0 1000 1000"
        className="w-full h-full"
        style={{ transform: 'scale(1.2)' }}
      >
        {/* Track background */}
        <defs>
          <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          
          <pattern id="asphalt" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#1a1a1a" />
            <circle cx="10" cy="10" r="0.5" fill="#2a2a2a" />
            <circle cx="5" cy="5" r="0.3" fill="#2a2a2a" />
            <circle cx="15" cy="15" r="0.4" fill="#2a2a2a" />
          </pattern>
        </defs>

        {/* Outer track border */}
        <path
          d="M 200,500 Q 200,200 500,200 Q 800,200 800,500 Q 800,800 500,800 Q 200,800 200,500 Z"
          fill="none"
          stroke="#ff0000"
          strokeWidth="4"
          strokeDasharray="10,5"
          opacity="0.5"
        />

        {/* Main racing line path (invisible, used for car movement) */}
        <path
          ref={trackRef}
          d="M 250,500 Q 250,250 500,250 Q 750,250 750,500 Q 750,750 500,750 Q 250,750 250,500 Z"
          fill="none"
          stroke="transparent"
          strokeWidth="2"
        />

        {/* Track surface */}
        <path
          d="M 250,500 Q 250,250 500,250 Q 750,250 750,500 Q 750,750 500,750 Q 250,750 250,500 Z"
          fill="url(#asphalt)"
          stroke="#444"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Center line dashes */}
        <path
          d="M 250,500 Q 250,250 500,250 Q 750,250 750,500 Q 750,750 500,750 Q 250,750 250,500 Z"
          fill="none"
          stroke="#ffff00"
          strokeWidth="2"
          strokeDasharray="20,20"
          opacity="0.6"
        />

        {/* Inner track border */}
        <path
          d="M 300,500 Q 300,300 500,300 Q 700,300 700,500 Q 700,700 500,700 Q 300,700 300,500 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          opacity="0.3"
        />

        {/* Checkered finish line */}
        <g transform="translate(500, 220)">
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x={(i % 2) * 10 - 30}
              y={Math.floor(i / 2) * 10}
              width="10"
              height="10"
              fill={i % 2 === 0 ? '#ffffff' : '#000000'}
              opacity="0.5"
            />
          ))}
        </g>

        {/* Racing car (top view) */}
        <g ref={carRef} transform="translate(250, 500)">
          {/* Car body */}
          <rect
            x="-15"
            y="-8"
            width="30"
            height="16"
            rx="2"
            fill="#ff0000"
            stroke="#000"
            strokeWidth="1"
          />
          {/* Cockpit */}
          <rect
            x="0"
            y="-5"
            width="12"
            height="10"
            rx="1"
            fill="#1a1a1a"
            stroke="#000"
            strokeWidth="0.5"
          />
          {/* Front wing */}
          <rect
            x="12"
            y="-6"
            width="4"
            height="12"
            fill="#ff0000"
            opacity="0.8"
          />
          {/* Rear wing */}
          <rect
            x="-16"
            y="-7"
            width="2"
            height="14"
            fill="#ff0000"
            opacity="0.8"
          />
          {/* Wheels */}
          <circle cx="8" cy="-7" r="2" fill="#1a1a1a" />
          <circle cx="8" cy="7" r="2" fill="#1a1a1a" />
          <circle cx="-8" cy="-7" r="2" fill="#1a1a1a" />
          <circle cx="-8" cy="7" r="2" fill="#1a1a1a" />
          {/* Number */}
          <text
            x="6"
            y="2"
            fontSize="8"
            fill="#ffffff"
            fontWeight="bold"
            textAnchor="middle"
          >
            1
          </text>
        </g>

        {/* Track markers for sections */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
          const radius = 250;
          const x = 500 + Math.cos(angle) * radius;
          const y = 500 + Math.sin(angle) * radius;
          
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill={i === currentSection ? '#00ff00' : '#333'}
                stroke="#666"
                strokeWidth="2"
                opacity="0.6"
              />
              <text
                x={x}
                y={y + 4}
                fontSize="10"
                fill="#fff"
                textAnchor="middle"
                fontWeight="bold"
              >
                {i + 1}
              </text>
            </g>
          );
        })}

        {/* Speed lines for effect */}
        <g opacity="0.2">
          <line x1="150" y1="500" x2="120" y2="500" stroke="#fff" strokeWidth="2" />
          <line x1="850" y1="500" x2="880" y2="500" stroke="#fff" strokeWidth="2" />
          <line x1="500" y1="150" x2="500" y2="120" stroke="#fff" strokeWidth="2" />
          <line x1="500" y1="850" x2="500" y2="880" stroke="#fff" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
