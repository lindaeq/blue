import GalleryGrid from "./GalleryGrid";
import Reveal from "./Reveal";

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
      className="flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-20 sm:px-8 lg:px-12"
    >
      <Reveal className="flex flex-col gap-10">
        <div>
          <h2 className="font-display text-5xl font-bold sm:text-6xl">
            design
          </h2>
          <p className="mt-1 font-sans text-lg font-semibold italic text-pink-accent sm:text-xl">
            what i&apos;ve been designing...
          </p>
        </div>

        <GalleryGrid items={designs} />
      </Reveal>
    </section>
  );
}
