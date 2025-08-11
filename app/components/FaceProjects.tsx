export default function FaceProjects() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-projects)] text-white p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">📂 Projects</h2>
      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="bg-[var(--face-intro)] rounded-lg p-4">
          <h3 className="font-bold">Cube Portfolio</h3>
          <p className="text-sm opacity-80">
            3D portfolio site built with Next.js & React Three Fiber.
          </p>
        </div>
        <div className="bg-[var(--face-intro)] rounded-lg p-4">
          <h3 className="font-bold">AutoChain</h3>
          <p className="text-sm opacity-80">
            Blockchain marketplace for car parts.
          </p>
        </div>
      </div>
    </div>
  );
}
