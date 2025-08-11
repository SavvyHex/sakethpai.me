import Cube from "./components/Cube";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg-color)]">
      <AnimatedBackground />
      <Cube />
    </main>
  );
}
