const projects = [
  { title: "Project One" },
  { title: "Project Two" },
  { title: "Project Three" },
  { title: "Project Four" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex max-w-xl flex-col gap-10 px-8 py-24 sm:px-14 lg:px-20"
    >
      <div>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          projects
        </h2>
        <p className="mt-1 font-sans text-sm italic text-white/90">
          what i&apos;ve been making...
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex aspect-[4/3] w-full items-center justify-center rounded-lg bg-navy-muted transition-opacity hover:opacity-90"
          >
            <span className="sr-only">{project.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}