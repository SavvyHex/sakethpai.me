import React from "react";
import { SiLinkedin, SiGithub, SiHuggingface, SiGmail, SiTryhackme } from "react-icons/si";

export default function FaceContact() {
  return (
    <div className="face-glow flex flex-col items-center justify-center bg-[#18181b] rounded-2xl text-white p-8 w-full h-full shadow-lg">
      <h1 className="text-4xl font-bold mb-6">📞 Contact</h1>
      <p className="mb-8 text-lg opacity-90 text-center">
        Let’s connect and collaborate!
      </p>

      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="mailto:paisaketh@gmail.com"
          className="flex items-center justify-start gap-4 hover:text-yellow-300 transition-colors p-3 rounded-md"
        >
          <SiGmail size={28} />
          <span className="font-medium text-lg">Gmail</span>
        </a>

        <a
          href="https://linkedin.com/in/saketh-pai-53704a310"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-4 hover:text-yellow-300 transition-colors p-3 rounded-md"
        >
          <SiLinkedin size={28} />
          <span className="font-medium text-lg">LinkedIn</span>
        </a>

        <a
          href="https://github.com/SavvyHex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-4 hover:text-yellow-300 transition-colors p-3 rounded-md"
        >
          <SiGithub size={28} />
          <span className="font-medium text-lg">GitHub</span>
        </a>

        <a
          href="https://huggingface.co/SavvyHex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-4 hover:text-yellow-300 transition-colors p-3 rounded-md"
        >
          <SiHuggingface size={28} />
          <span className="font-medium text-lg">HuggingFace</span>
        </a>

        <a
          href="https://tryhackme.com/p/SavvyHex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-4 hover:text-yellow-300 transition-colors p-3 rounded-md"
        >
          <SiTryhackme size={28} />
          <span className="font-medium text-lg">TryHackMe</span>
        </a>
      </div>
    </div>
  );
}
