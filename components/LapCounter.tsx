'use client';

interface LapCounterProps {
  currentLap: number;
  totalLaps: number;
  trackIndex: number;
  totalTrackPoints: number;
}

export function LapCounter({ currentLap, totalLaps, trackIndex, totalTrackPoints }: LapCounterProps) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-asphalt/90 border-2 border-[#177e89] rounded-lg p-2 sm:p-4 backdrop-blur-sm">
      <div className="text-[10px] sm:text-xs text-foreground/50 mb-1 font-bold uppercase">
        CURRENT LAP
      </div>
      <div className="text-2xl sm:text-3xl font-black text-[#177e89]">
        {currentLap}
      </div>
      <div className="text-[9px] sm:text-[10px] text-foreground/40 mt-1">/ {totalLaps - 1} LAPS</div>
      {/* Progress bar */}
      <div className="mt-1.5 sm:mt-2 w-12 sm:w-16 h-1 bg-track-gray rounded-full overflow-hidden">
        <div
          className="h-full bg-[#177e89] transition-all duration-100"
          style={{ width: `${((trackIndex % totalTrackPoints) / totalTrackPoints) * 100}%` }}
        />
      </div>
    </div>
  );
}
