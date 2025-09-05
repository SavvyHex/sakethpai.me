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
  <div className="face-glow flex flex-col items-center justify-center w-full h-full p-[5%] bg-[#18181b] rounded-2xl text-white overflow-y-auto shadow-lg">
      <h2 className="text-[clamp(1rem,2vw,2rem)] font-semibold mb-[4%]">
        📂 Projects
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(40%,1fr))] gap-[3%] w-full place-items-stretch">
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
  className="bg-[#232326] rounded-lg shadow-lg p-[4%] flex flex-col justify-between min-h-[30%] transition-transform hover:scale-105"
    >
      <div>
        <h3 className="text-[clamp(0.9rem,1.5vw,1.25rem)] font-bold mb-[2%]">
          {repo.name}
        </h3>
        <p className="text-[clamp(0.75rem,1vw,1rem)] opacity-80 line-clamp-3">
          {repo.description || "No description available."}
        </p>
      </div>
      <div className="flex justify-between text-[clamp(0.65rem,0.9vw,0.75rem)] mt-[4%] opacity-70">
        <span>{repo.language || "Unknown Language"}</span>
      </div>
    </a>
  );
}
