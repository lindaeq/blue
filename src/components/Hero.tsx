import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="flex max-w-2xl flex-col gap-16 px-8 pb-24 pt-20 sm:px-14 sm:pt-28 lg:px-20">
      <div className="flex justify-end">
        <Nav />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-6xl font-bold leading-none sm:text-7xl">
            linda qi
          </h1>
          <p className="mt-2 font-display text-xl font-semibold text-pink-accent sm:text-2xl">
            cs @ uwaterloo
          </p>
        </div>

        <div className="max-w-md rounded-lg bg-navy px-6 py-5 font-sans text-sm font-bold leading-relaxed sm:text-base">
          <p>1st year CS student at the University of Waterloo</p>
          <p>
            Current obsession:{" "}
            <a
              href="#"
              className="text-pink-accent underline decoration-pink-accent underline-offset-2"
            >
              Olivia Rodrigo&apos;s new album
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}