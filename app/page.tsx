
import FaceIntro from "./components/FaceIntro";
import FaceSkills from "./components/FaceSkills";
import FaceProjects from "./components/FaceProjects";
import FaceExperience from "./components/FaceExperience";
import FaceEducation from "./components/FaceEducation";
import FaceContact from "./components/FaceContact";

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-color)]">
      <section id="about" className="w-full max-w-3xl my-12">
        <FaceIntro />
      </section>
      <section id="skills" className="w-full max-w-3xl my-12">
        <FaceSkills />
      </section>
      <section id="projects" className="w-full max-w-3xl my-12">
        <FaceProjects />
      </section>
      <section id="experience" className="w-full max-w-3xl my-12">
        <FaceExperience />
      </section>
      <section id="education" className="w-full max-w-3xl my-12">
        <FaceEducation />
      </section>
      <section id="contact" className="w-full max-w-3xl my-12">
        <FaceContact />
      </section>
    </main>
  );
}
