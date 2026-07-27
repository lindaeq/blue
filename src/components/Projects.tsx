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
    title: "digdeep",
    link: "https://github.com/SuhanaAkhter/DigDeep",
    tech: "html - css - python - js - sqlite",
    description:
      "web app for volleyball coaches and players to track and analyze team and individual performance stats, with role-based dashboards, player and game management, and per-set stat tracking.",
    image: "/project-digdeep.png",
    imageAlt: "DigDeep sign up page and logo",
    imageWidth: 1213,
    imageHeight: 658,
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
    title: "frc 8729 sparkling h2o",
    tech: "button pin designs",
    description:
      "pit crew, mentor, media, and scouter button pin designs for FIRST Robotics Competition team 8729 Sparkling H2O.",
    image: "/design-8729-pins.png",
    imageAlt:
      "Pit crew, mentor, media, and scouter button pin badge designs for FRC team 8729 Sparkling H2O",
    imageWidth: 431,
    imageHeight: 120,
  },
  {
    title: "neapolitan web",
    tech: "web design concept",
    description:
      "an alternate pastel neapolitan concept for this portfolio site.",
    image: "/design-neapolitan.png",
    imageAlt: "Neapolitan-themed portfolio web design concept",
    imageWidth: 469,
    imageHeight: 703,
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
    title: "design six",
    tech: "tech stack tbd",
    description: "details coming soon.",
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
                  <span className="font-extrabold text-[#FFD1E0]">
                    making
                  </span>
                  ...
                </>
              ) : (
                <>
                  what i&apos;ve been{" "}
                  <span className="font-extrabold text-[#FFD1E0]">
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