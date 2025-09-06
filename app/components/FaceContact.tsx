import React from "react";
import { SiLinkedin, SiGithub, SiHuggingface, SiGmail } from "react-icons/si";

export default function FaceContact() {
  return (
    <div className="face-glow flex flex-col items-center justify-center bg-[#18181b] rounded-2xl text-white p-8 w-full h-full shadow-lg">
      <h1 className="text-4xl font-bold mb-6">📞 Contact</h1>
      <p className="mb-8 text-lg opacity-90 text-center">
        Let’s connect and collaborate!
      </p>

      <div className="space-y-6 w-full max-w-md">
        <a
          href="mailto:paisaketh@gmail.com"
          className="flex items-center justify-center gap-4 hover:text-yellow-300 transition-colors"
        >
          <SiGmail size={28} />
          <span className="font-medium text-lg text-center">
            paisaketh@gmail.com
          </span>
        </a>

        <a
          href="https://linkedin.com/in/saketh-pai-53704a310"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 hover:text-yellow-300 transition-colors"
        >
          <SiLinkedin size={28} />
          <span className="font-medium text-lg text-center">Saketh Pai</span>
        </a>

        <a
          href="https://github.com/SavvyHex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 hover:text-yellow-300 transition-colors"
        >
          <SiGithub size={28} />
          <span className="font-medium text-lg text-center">SavvyHex</span>
        </a>

        <a
          href="https://huggingface.co/SavvyHex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 hover:text-yellow-300 transition-colors"
        >
          <SiHuggingface size={28} />
          <span className="font-medium text-lg text-center">SavvyHex</span>
        </a>
      </div>
    </div>
  );
}
