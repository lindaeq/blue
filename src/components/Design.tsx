const designs = [
  { title: "Design One" },
  { title: "Design Two" },
  { title: "Design Three" },
  { title: "Design Four" },
];

export default function Design() {
  return (
    <section
      id="design"
      className="flex max-w-xl flex-col gap-10 px-8 py-24 sm:px-14 lg:px-20"
    >
      <div>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          design
        </h2>
        <p className="mt-1 font-sans text-sm italic text-white/90">
          what i&apos;ve been designing...
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {designs.map((design) => (
          <div
            key={design.title}
            className="flex aspect-[4/3] w-full items-center justify-center rounded-lg bg-navy-muted transition-opacity hover:opacity-90"
          >
            <span className="sr-only">{design.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}