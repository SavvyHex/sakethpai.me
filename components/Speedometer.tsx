'use client';

interface SpeedometerProps {
  speed: number;
  maxSpeed?: number;
}

export function Speedometer({ speed, maxSpeed = 400 }: SpeedometerProps) {
  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50 bg-asphalt/90 border-2 border-[#177e89] rounded-lg p-2 sm:p-4 backdrop-blur-sm">
      <div className="text-[10px] sm:text-xs text-foreground/50 mb-1 sm:mb-2 font-bold uppercase text-center">
        SPEED
      </div>
      <div className="relative w-20 h-20 sm:w-32 sm:h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {/* Speedometer background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--track-gray)"
            strokeWidth="8"
          />
          {/* Speed indicator circle - fills based on speed */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#177e89"
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * speed) / maxSpeed}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>
        {/* Speed value in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-xl sm:text-3xl font-black text-[#177e89]">
            {Math.round(speed)}
          </div>
          <div className="text-[7px] sm:text-[8px] text-foreground/40 uppercase">KM/H</div>
        </div>
      </div>
    </div>
  );
}
