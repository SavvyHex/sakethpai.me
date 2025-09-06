import AnimatedBackground from "./components/AnimatedBackground";
import FaceIntro from "./components/FaceIntro";
import FaceSkills from "./components/FaceSkills";
import FaceProjects from "./components/FaceProjects";
import FaceExperience from "./components/FaceExperience";
import FaceEducation from "./components/FaceEducation";
import FaceContact from "./components/FaceContact";

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-color)] relative">
      <AnimatedBackground />
        <section
          id="about"
          className="w-full max-w-3xl my-12 scroll-mt-24"
      >
        <FaceIntro />
      </section>
      <section
        id="skills"
    className="w-full max-w-3xl my-12 scroll-mt-24"
      >
        <FaceSkills />
      </section>
      <section
        id="projects"
    className="w-full max-w-3xl my-12 scroll-mt-24"
      >
        <FaceProjects />
      </section>
      <section
        id="experience"
    className="w-full max-w-3xl my-12 scroll-mt-24"
      >
        <FaceExperience />
      </section>
      <section
        id="education"
    className="w-full max-w-3xl my-12 scroll-mt-24"
      >
        <FaceEducation />
      </section>
      <section
        id="contact"
    className="w-full max-w-3xl my-12 scroll-mt-24"
      >
        <FaceContact />
      </section>
    </main>
  );
}
