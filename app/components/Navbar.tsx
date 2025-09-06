import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 bg-[var(--bg-color)]/80 backdrop-blur border-b border-white/10">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="font-bold text-lg tracking-tight">sakethpai.me</span>
      </Link>
      <ul className="flex gap-6 text-base font-medium">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="hover:text-primary transition-colors duration-200"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
