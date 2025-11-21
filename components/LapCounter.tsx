'use client';

interface LapCounterProps {
  currentLap: number;
  totalLaps: number;
  trackIndex: number;
  totalTrackPoints: number;
}

export function LapCounter({ currentLap, totalLaps, trackIndex, totalTrackPoints }: LapCounterProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50 bg-black/90 border-2 border-[#177e89] rounded-lg p-4 backdrop-blur-sm">
      <div className="text-xs text-gray-400 mb-1 font-bold uppercase">
        CURRENT LAP
      </div>
      <div className="text-3xl font-black text-[#177e89]">
        {currentLap}
      </div>
      <div className="text-[10px] text-gray-500 mt-1">/ {totalLaps - 1} LAPS</div>
      {/* Progress bar */}
      <div className="mt-2 w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#177e89] transition-all duration-100"
          style={{ width: `${((trackIndex % totalTrackPoints) / totalTrackPoints) * 100}%` }}
        />
      </div>
    </div>
  );
}
