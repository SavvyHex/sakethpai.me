"use client";

import React from "react";

export default function FaceExperience() {
  return (
    <div className="face-glow flex h-full w-full flex-col items-center justify-center bg-[#18181b] rounded-2xl text-white p-6 overflow-y-auto shadow-lg">
      <h1 className="text-4xl font-bold mb-6">💼 Experience</h1>
      <div className="space-y-4 max-w-md w-full">

        <div className="bg-white/10 rounded-2xl p-4 shadow-lg flex items-start gap-4 hover:bg-white/15 transition">
          <div className="w-8 h-8 flex items-center justify-center text-yellow-300 font-bold text-lg">
            🏆
          </div>
          <div>
            <h2 className="font-semibold text-xl">Hacknight 6.0</h2>
            <p className="text-sm text-white/80">
              Placed <span className="font-bold text-yellow-300">15th</span> out
              of 300 participants (Top 5%) in an overnight hackathon by PES
              University.
            </p>
          </div>
        </div>

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

        <div className="bg-white/10 rounded-2xl p-4 shadow-lg flex items-start gap-4 hover:bg-white/15 transition">
          <div className="w-8 h-8 flex items-center justify-center text-green-300 font-bold text-lg">
            💻
          </div>
          <div>
            <h2 className="font-semibold text-xl">Hashcode 13.0</h2>
            <p className="text-sm text-white/80">
              Placed <span className="font-bold text-yellow-300">10th</span> out
              of over 150 registered teams in a national level overnight hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
