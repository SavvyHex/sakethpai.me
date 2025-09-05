export default function FaceSkills() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#18181b] rounded-2xl text-white p-6 overflow-y-auto shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">⚙️ Skills</h2>

      {/* Languages */}
      <Category title="Languages">
        <Devicon icon="python" />
        <Devicon icon="javascript" />
        <Devicon icon="typescript" />
        <Devicon icon="rust" />
        <Devicon icon="go" />
        <Devicon icon="java" />
        <Devicon icon="c" />
      </Category>

      {/* Web Dev */}
      <Category title="Web Dev">
        <Devicon icon="html5" />
        <Devicon icon="css3" />
        <Devicon icon="react" />
        <Devicon icon="nextjs" colored={false} /> {/* Next.js has no color */}
        <Devicon icon="nodejs" />
        <Devicon icon="tailwindcss" />
        <Devicon icon="bootstrap" colored={false} />
        <Devicon icon="sass" />
        <Devicon icon="threejs" />
        <Devicon icon="graphql" />
      </Category>

      {/* Databases / Backend */}
      <Category title="Databases / Backend">
        <Devicon icon="mongodb" />
        <Devicon icon="mysql" />
        <Devicon icon="postgresql" />
        <Devicon icon="firebase" />
      </Category>

      {/* Tools */}
      <Category title="Tools">
        <Devicon icon="linux" />
        <Devicon icon="git" />
        <Devicon icon="docker" />
        <Devicon icon="vscode" />
        <Devicon icon="bash" />
        <Devicon icon="trello" />
        <Devicon icon="figma" />
      </Category>

      {/* Game Dev */}
      <Category title="Game Dev">
        <Devicon icon="godot" />
        <Devicon icon="csharp" />
        <Devicon icon="unity" />
      </Category>
    </div>
  );
}

/* Category wrapper */
function Category({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 w-full">
      <h3 className="text-xl font-medium mb-3 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">{children}</div>
    </div>
  );
}

/* Devicon icon component */
function Devicon({
  icon,
  colored = true,
}: {
  icon: string;
  colored?: boolean;
}) {
  // Nicely formatted name
  const prettyName = icon
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace("Js", "JS");

  // Special-case display names
  const nameOverrides: Record<string, string> = {
    nodejs: "Node.js",
    nextjs: "Next.js",
    csharp: "C#",
    unity: "Unity",
    html5: "HTML5",
    css3: "CSS3",
    godot: "Godot",
    threejs: "Three.js",
  };

  // Special-case links
  const linkMap: Record<string, string> = {
    python: "https://www.python.org/",
    javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    typescript: "https://www.typescriptlang.org/",
    rust: "https://www.rust-lang.org/",
    go: "https://go.dev/",
    java: "https://www.java.com/",
    c: "https://en.wikipedia.org/wiki/C_(programming_language)",
    nodejs: "https://nodejs.org/",
    nextjs: "https://nextjs.org/",
    react: "https://react.dev/",
    html5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tailwindcss: "https://tailwindcss.com/",
    bootstrap: "https://getbootstrap.com/",
    sass: "https://sass-lang.com/",
    threejs: "https://threejs.org/",
    graphql: "https://graphql.org/",
    mongodb: "https://www.mongodb.com/",
    mysql: "https://www.mysql.com/",
    postgresql: "https://www.postgresql.org/",
    firebase: "https://firebase.google.com/",
    linux: "https://www.kernel.org/",
    git: "https://git-scm.com/",
    docker: "https://www.docker.com/",
    vscode: "https://code.visualstudio.com/",
    bash: "https://www.gnu.org/software/bash/",
    trello: "https://trello.com/",
    figma: "https://figma.com/",
    godot: "https://godotengine.org/",
    csharp: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    unity: "https://unity.com/",
  };

  const displayName = nameOverrides[icon] || prettyName;
  const link = linkMap[icon] || "#";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={displayName}
      className="inline-block"
    >
      <i
        className={`devicon-${icon}-plain${colored ? " colored" : ""} text-5xl drop-shadow-[0_0_2px_black] cursor-pointer`}
      ></i>
    </a>
  );
}


/* Emoji fallback for unsupported icons */
function Emoji({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="text-4xl" role="img" aria-label={label} title={label}>
      {icon}
    </span>
  );
}
