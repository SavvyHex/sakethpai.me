export default function FaceIntro() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--face-intro)] text-white p-6">
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-4xl mb-2">
          👋 Hi! I'm <strong>Saketh Pai</strong>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed text-center">
          Cybersecurity & Full-Stack Developer
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-2 items-center justify-center">
        <h2 className="text-2xl font-bold">🙋‍♂️ About Me</h2>
        <p className="text-center leading-relaxed">
          I'm a proud Linux user with a passion for cybersecurity and full-stack
          development. I love building{" "}
          <strong>secure, scalable applications</strong>, exploring{" "}
          <strong>new technologies</strong> and contributing to{" "}
          <strong>open source projects</strong>. When I'm not coding, you can
          find me playing <strong>chess</strong>, watching{" "}
          <strong>motorsports</strong> or <strong>3D modelling</strong>.
        </p>
      </div>
    </div>
  );
}
