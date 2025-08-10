export default function FaceIntro() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-intro)] text-white p-6">
      <h1 className="text-4xl font-bold mb-2">Saketh Pai</h1>
      <p className="text-lg opacity-80">Cybersecurity & Full-Stack Developer</p>
      <button className="mt-4 px-6 py-2 bg-[var(--face-projects)] rounded-md hover:opacity-90 transition">
        View My Work
      </button>
    </div>
  );
}
