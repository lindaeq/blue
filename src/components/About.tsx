import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-display text-5xl font-bold sm:text-6xl">
              about me
            </h2>
            <p className="mt-1 font-sans text-lg font-semibold italic text-pink-accent sm:text-xl">
              entj • ravenclaw •
            </p>
          </div>

          <p className="font-sans text-sm italic leading-relaxed text-white/90 sm:text-base">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            finibus, purus non blandit pellentesque, mauris justo iaculis
            sapien, ac tincidunt elit nulla ornare orci. Suspendisse eget
            elementum quam.
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full justify-self-end overflow-hidden rounded-lg border-8 border-navy bg-navy shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:aspect-square">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about-photo.png"
            alt="Linda Qi"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
