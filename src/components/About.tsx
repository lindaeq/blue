export default function About() {
  return (
    <section
      id="about"
      className="flex max-w-2xl flex-col gap-10 px-8 py-24 sm:px-14 lg:px-20"
    >
      <div>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          about me
        </h2>
        <p className="mt-1 font-sans text-sm italic text-pink-accent">
          entj • ravenclaw •
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <p className="font-sans text-sm italic leading-relaxed text-white/90 sm:text-base">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          finibus, purus non blandit pellentesque, mauris justo iaculis
          sapien, ac tincidunt elit nulla ornare orci. Suspendisse eget
          elementum quam.
        </p>

        <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg bg-navy sm:aspect-square">
          <span className="font-sans text-sm font-semibold text-white/40">
            photo
          </span>
        </div>
      </div>
    </section>
  );
}