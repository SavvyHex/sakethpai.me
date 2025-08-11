import React, { useEffect, useState } from "react";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export default function FaceExperience() {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(
    null
  );

  useEffect(() => {
    async function fetchLeetCode() {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/SavvyHex"
        );
        if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
        const data = await res.json();

        setLeetcodeStats({
          totalSolved: data.totalSolved || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchLeetCode();
  }, []);

  // Compute percentages for bar widths
  const easyPct =
    leetcodeStats && leetcodeStats.totalSolved > 0
      ? (leetcodeStats.easySolved / leetcodeStats.totalSolved) * 100
      : 0;
  const mediumPct =
    leetcodeStats && leetcodeStats.totalSolved > 0
      ? (leetcodeStats.mediumSolved / leetcodeStats.totalSolved) * 100
      : 0;
  const hardPct =
    leetcodeStats && leetcodeStats.totalSolved > 0
      ? (leetcodeStats.hardSolved / leetcodeStats.totalSolved) * 100
      : 0;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-experience)] text-white p-6 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-6">💼 Experience</h1>

      <div className="space-y-4 max-w-md w-full">
        {/* Hacknight Achievement */}
        <div className="bg-white/10 rounded-2xl p-4 shadow-lg flex items-start gap-4 hover:bg-white/15 transition">
          <div className="w-8 h-8 flex items-center justify-center text-yellow-300 font-bold text-lg">
            🏆
          </div>
          <div>
            <h2 className="font-semibold text-xl">Hacknight 3.0</h2>
            <p className="text-sm text-white/80">
              Placed <span className="font-bold text-yellow-300">15th</span> out
              of 300 participants (Top 5%) in an overnight hackathon by PES
              University.
            </p>
          </div>
        </div>

        {/* Event Organization */}
        <div className="bg-white/10 rounded-2xl p-4 shadow-lg flex items-start gap-4 hover:bg-white/15 transition">
          <div className="w-8 h-8 flex items-center justify-center text-pink-300 font-bold text-lg">
            🎯
          </div>
          <div>
            <h2 className="font-semibold text-xl">Event Organizer</h2>
            <p className="text-sm text-white/80">
              Organized <span className="font-bold">Deltatime 2.0</span> (Game
              Jam) and <span className="font-bold">Heal-o-Code</span>{" "}
              (HealthTech Hackathon), coordinating participants, mentors, and
              judging panels.
            </p>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="bg-white/10 rounded-2xl p-4 shadow-lg flex items-start gap-4 hover:bg-white/15 transition">
          <div className="w-8 h-8 flex items-center justify-center text-green-300 font-bold text-lg">
            💻
          </div>
          <div>
            <h2 className="font-semibold text-xl">Academic Projects</h2>
            <p className="text-sm text-white/80">
              Developed full-stack applications, implemented web security
              solutions, and crafted creative, user-focused web designs.
            </p>
          </div>
        </div>

        {/* LeetCode Stats */}
        {leetcodeStats && (
          <a
            href="https://leetcode.com/u/SavvyHex/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 rounded-2xl p-4 shadow-lg flex flex-col gap-4 hover:bg-white/15 transition cursor-pointer"
          >
            <h2 className="font-semibold text-xl flex items-center gap-2">
              <span>🧩</span> LeetCode Stats
            </h2>
            <div className="text-white/80">
              <p className="mb-2">
                Total Problems Solved: {leetcodeStats.totalSolved}
              </p>

              <div className="w-full h-6 bg-white/20 rounded-full overflow-hidden flex text-xs font-semibold select-none">
                <div
                  className="bg-green-500"
                  style={{ width: `${easyPct}%` }}
                  title={`Easy: ${leetcodeStats.easySolved}`}
                ></div>
                <div
                  className="bg-yellow-400"
                  style={{ width: `${mediumPct}%` }}
                  title={`Medium: ${leetcodeStats.mediumSolved}`}
                ></div>
                <div
                  className="bg-red-600"
                  style={{ width: `${hardPct}%` }}
                  title={`Hard: ${leetcodeStats.hardSolved}`}
                ></div>
              </div>

              <div className="flex justify-between text-xs mt-1 select-none text-white/70">
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
