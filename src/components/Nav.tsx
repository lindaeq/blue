"use client";

import { useEffect, useState } from "react";
import { useProjectsTab, type ProjectsTab } from "./ProjectsTabContext";
import { playClick } from "@/lib/sound";

const links: { label: string; href: string; tab?: ProjectsTab }[] = [
  { label: "about me", href: "#about" },
  { label: "projects", href: "#projects", tab: "software" },
  { label: "design", href: "#projects", tab: "design" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { setTab } = useProjectsTab();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    tab?: ProjectsTab
  ) => {
    e.preventDefault();
    playClick();
    if (tab) setTab(tab);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "top-4" : "top-[7.5rem]"
      }`}
    >
      <div
        className={`pointer-events-auto flex w-full max-w-4xl items-center justify-end px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "rounded-2xl bg-navy/90 py-3 shadow-xl backdrop-blur-md" : "py-0"
        }`}
      >
        <nav className="flex gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href, link.tab)}
              className="rounded-md bg-navy px-4 py-2 text-sm font-semibold italic text-navy-light transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}