"use client";

import { Github, Linkedin } from "lucide-react";

const links = [
  { label: "about me", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "design", href: "#design" },
];

export default function Nav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-end gap-4">
      <nav className="flex gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="rounded-md bg-navy px-4 py-2 text-sm font-bold text-navy-light transition-opacity hover:opacity-80"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-navy transition-opacity hover:opacity-80"
        >
          <Github size={18} className="text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80"
        >
          <Linkedin size={18} className="text-white" fill="white" />
        </a>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold italic text-navy underline decoration-navy underline-offset-2"
      >
        resume
      </a>
    </div>
  );
}
