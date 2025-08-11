import React from "react";

export default function FaceContact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-contact)] text-white p-6">
      <h1 className="text-4xl font-bold mb-4">📞 Contact</h1>
      <p className="mb-4 text-lg">Feel free to reach out!</p>
      <div className="space-y-2 text-lg">
        <p>Email: example@example.com</p>
        <p>LinkedIn: linkedin.com/in/example</p>
        <p>GitHub: github.com/example</p>
      </div>
    </div>
  );
}
