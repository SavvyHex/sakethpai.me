'use client';

interface SpeedometerProps {
  speed: number;
  maxSpeed?: number;
}

export function Speedometer({ speed, maxSpeed = 400 }: SpeedometerProps) {
  return (
    <div className="fixed bottom-8 left-8 z-50 bg-black/90 border-2 border-[#177e89] rounded-lg p-4 backdrop-blur-sm">
      <div className="text-xs text-gray-400 mb-2 font-bold uppercase text-center">
        SPEED
      </div>
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {/* Speedometer background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#1a1a1a"
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
          <div className="text-3xl font-black text-[#177e89]">
            {Math.round(speed)}
          </div>
          <div className="text-[8px] text-gray-500 uppercase">KM/H</div>
        </div>
      </div>
    </div>
  );
}
