"use client";

import { SkipBack, Play, SkipForward } from "lucide-react";

export default function Misc() {
  return (
    <section className="flex max-w-2xl flex-col gap-10 px-8 py-24 sm:px-14 lg:px-20">
      <div>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          miscellaneous
        </h2>
        <p className="mt-1 font-sans text-sm italic text-white/90">
          welcome home.
        </p>
      </div>

      <div className="flex justify-end">
        <div className="text-right">
          <p className="font-display text-7xl font-bold leading-none text-grad-top/70 sm:text-8xl">
            689
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-grad-top/70 sm:text-2xl">
            duolingo streak
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-sans text-sm font-semibold text-white/70">
          currently playing
        </p>

        <div className="flex w-full max-w-sm items-center justify-center gap-8 rounded-lg bg-navy px-6 py-6">
          <button aria-label="Previous track" className="transition-opacity hover:opacity-70">
            <SkipBack size={20} fill="currentColor" className="text-grad-top" />
          </button>
          <button aria-label="Play" className="transition-opacity hover:opacity-70">
            <Play size={22} fill="currentColor" className="text-grad-top" />
          </button>
          <button aria-label="Next track" className="transition-opacity hover:opacity-70">
            <SkipForward size={20} fill="currentColor" className="text-grad-top" />
          </button>
        </div>
      </div>
    </section>
  );
}