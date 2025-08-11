import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function FaceContact() {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--face-contact)] text-white p-8 w-full h-full shadow-lg">
      <h1 className="text-4xl font-bold mb-6">📞 Contact</h1>
      <p className="mb-8 text-lg opacity-90 text-center">
        Let’s connect and collaborate!
      </p>

      <div className="space-y-6 w-full max-w-md">
        <a
          href="mailto:paisaketh@gmail.com"
          className="flex items-center justify-center gap-4 hover:text-yellow-300 transition-colors"
        >
          <MdEmail size={28} />
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
          <FaLinkedin size={28} />
          <span className="font-medium text-lg text-center">
            Saketh Pai
          </span>
        </a>

        <a
          href="https://github.com/SavvyHex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 hover:text-yellow-300 transition-colors"
        >
          <FaGithub size={28} />
          <span className="font-medium text-lg text-center">
            SavvyHex
          </span>
        </a>
      </div>
    </div>
  );
}
