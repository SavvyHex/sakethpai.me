import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  // Blog will be inserted before Contact
  { id: "contact", label: "Contact" },
];

const navLinks = [
  ...sections.slice(0, 5).map((section) => ({
    href: `#${section.id}`,
    label: section.label,
  })),
  {
    href: "/blog",
    label: "Blog",
  },
  ...sections.slice(5).map((section) => ({
    href: `#${section.id}`,
    label: section.label,
  })),
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 bg-[var(--bg-color)]/80 backdrop-blur border-b border-white/10">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="font-bold text-lg tracking-tight">sakethpai.me</span>
      </Link>
      <ul className="flex gap-6 text-base font-medium">
        {navLinks.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("#") ? (
              <a
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
