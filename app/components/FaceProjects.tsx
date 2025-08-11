"use client";
import { useEffect, useState } from "react";

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export default function FaceProjects() {
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch repos");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRepos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[var(--face-projects)] text-white p-6 overflow-y-auto">
      <h2 className="text-3xl font-semibold mb-6">📂 Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ repo }: { repo: RepoData }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[var(--face-intro)] rounded-lg shadow-lg p-4 flex flex-col justify-between h-48 transition-transform hover:scale-105"
    >
      <div>
        <h3 className="text-lg font-bold mb-2">{repo.name}</h3>
        <p className="text-sm opacity-80 line-clamp-3">
          {repo.description || "No description available."}
        </p>
      </div>
      <div className="flex justify-between text-xs mt-4 opacity-70">
        <span>{repo.language || "Unknown Language"}</span>
      </div>
    </a>
  );
}
