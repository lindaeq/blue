"use client";

import { SkipBack, Play, SkipForward } from "lucide-react";
import Reveal from "./Reveal";

export default function Misc() {
  return (
    <section className="flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-20 sm:px-8 lg:px-12">
      <Reveal className="flex flex-col gap-10">
        <div>
          <h2 className="font-display text-5xl font-bold sm:text-6xl">
            misc
          </h2>
          <p className="mt-1 font-sans text-lg font-semibold italic text-white/90 sm:text-xl">
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
            <button aria-label="Previous track" className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70">
              <SkipBack size={20} fill="currentColor" className="text-grad-top" />
            </button>
            <button aria-label="Play" className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70">
              <Play size={22} fill="currentColor" className="text-grad-top" />
            </button>
            <button aria-label="Next track" className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-70">
              <SkipForward size={20} fill="currentColor" className="text-grad-top" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
