import React from "react";

export default function FaceSkills() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-skills)] text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <ul className="space-y-2 text-lg">
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>SQL & NoSQL Databases</li>
      </ul>
    </div>
  );
}
