"use client";

import ProjectCard, { Project } from "./ProjectCard";
import Reveal from "./Reveal";
import { useProjectsTab } from "./ProjectsTabContext";
import { playClick } from "@/lib/sound";

const projects: Project[] = [
  {
    title: "auri",
    link: "https://github.com/lindaeq/auri",
    tech: "figma - react - next.js - typescript - edge impulse - google gemini api - arduino - socket.io",
    description:
      "ai-powered wearable that turns important sounds into vibrations and led alerts for deaf and hard-of-hearing users",
    image: "/project-auri.png",
    imageAlt: "Auri wearable prototype and companion app",
    imageWidth: 918,
    imageHeight: 671,
  },
  {
    title: "project two",
    tech: "tech stack tbd",
    description: "details coming soon.",
  },
  {
    title: "project three",
    tech: "tech stack tbd",
    description: "details coming soon.",
  },
  {
    title: "project four",
    tech: "tech stack tbd",
    description: "details coming soon.",
  },
];

const designs: Project[] = [
  {
    title: "mhs senior volleyball",
    tech: "instagram post - hoodie logos",
    description:
      "senior night instagram graphics plus hoodie logo designs for the MHS volleyball program.",
    image: "/design-volleyball.png",
    imageAlt: "MHS Senior Volleyball Instagram graphics and hoodie logos",
    imageWidth: 655,
    imageHeight: 702,
  },
  {
    title: "scrapyard ottawa",
    tech: "instagram posts - badges/lanyards",
    description:
      "instagram posts plus hacker, organizer, mentor, and sponsor badges/lanyards for scrapyard ottawa.",
    image: "/design-scrapyard.png",
    imageAlt: "ScrapYard Ottawa Instagram graphics and badges",
    imageWidth: 1030,
    imageHeight: 835,
  },
  {
    title: "spark of luminosity",
    tech: "event poster - sponsor poster",
    description:
      "event and sponsor poster designs for lunarhacks x syrc's spark of luminosity hackathon.",
    image: "/design-luminosity.png",
    imageAlt: "Spark of Luminosity hackathon event and sponsor posters",
    imageWidth: 975,
    imageHeight: 662,
  },
  {
    title: "neapolitan web",
    tech: "web design concept",
    description:
      "an alternate pastel neapolitan concept for this portfolio site.",
    image: "/design-neapolitan.png",
    imageAlt: "Neapolitan-themed portfolio web design concept",
    imageWidth: 712,
    imageHeight: 765,
  },
];

export default function Projects() {
  const { tab, setTab } = useProjectsTab();

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal className="flex flex-col gap-10">
        <div className="-ml-1 flex flex-wrap items-start justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl font-bold sm:text-6xl">
              projects
            </h2>
            <p className="mt-1 font-sans text-lg font-semibold italic text-pink-accent sm:text-xl">
              {tab === "software" ? (
                <>
                  what i&apos;ve been{" "}
                  <span className="font-extrabold text-pink-accent brightness-90">
                    making
                  </span>
                  ...
                </>
              ) : (
                <>
                  what i&apos;ve been{" "}
                  <span className="font-extrabold text-pink-accent brightness-90">
                    designing
                  </span>
                  ...
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                playClick();
                setTab("software");
              }}
              className={`rounded-md px-4 py-2 text-sm font-bold lowercase transition-all duration-200 hover:-translate-y-0.5 ${
                tab === "software"
                  ? "bg-navy text-navy-light"
                  : "bg-pink-accent text-navy hover:opacity-80"
              }`}
            >
              software
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                setTab("design");
              }}
              className={`rounded-md px-4 py-2 text-sm font-bold lowercase transition-all duration-200 hover:-translate-y-0.5 ${
                tab === "design"
                  ? "bg-navy text-navy-light"
                  : "bg-pink-accent text-navy hover:opacity-80"
              }`}
            >
              design
            </button>
          </div>
        </div>

        {tab === "software" ? (
          <div className="columns-1 gap-8 sm:columns-2">
            {projects.map((project) => (
              <div key={project.title} className="mb-4 break-inside-avoid">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 gap-8 sm:columns-2">
            {designs.map((design) => (
              <div key={design.title} className="mb-4 break-inside-avoid">
                <ProjectCard {...design} />
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
