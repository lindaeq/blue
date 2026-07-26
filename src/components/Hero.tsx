"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { playClick, playKeyTick } from "@/lib/sound";

function TypingSubtitle({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      playKeyTick();
      if (i >= text.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="mt-2 font-display text-2xl font-semibold text-pink-accent sm:text-3xl">
      {displayed}
      <span className="animate-blink">|</span>
    </p>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute right-4 top-44 flex flex-col items-end gap-3 sm:right-8 lg:right-12">
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/lindaeq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onClick={playClick}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Github size={18} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/lnda-qi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={playClick}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
          >
            <Linkedin size={18} className="text-white" fill="white" />
          </a>
        </div>

        <span className="relative inline-block pr-2 pt-1">
          <span className="absolute right-0 top-0 h-0 w-0 border-b-[7px] border-r-[7px] border-b-transparent border-r-current text-navy" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="text-sm font-bold italic text-navy underline decoration-navy underline-offset-2 transition-opacity hover:opacity-70"
          >
            resume
          </a>
        </span>
      </div>

      <div className="mt-8 flex animate-fade-in-up flex-col gap-6">
        <div>
          <h1 className="font-display text-7xl font-bold leading-none sm:text-8xl">
            linda qi
          </h1>
          <TypingSubtitle text="cs @ uwaterloo" />
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-lg bg-navy px-6 py-5 font-sans text-sm font-medium italic leading-relaxed transition-transform duration-300 hover:-translate-y-0.5 sm:whitespace-nowrap sm:text-base">
            <p className="text-pink-accent/90">
              1st year CS student at the University of Waterloo
            </p>
            <p>
              <span className="font-bold">Current obsession:</span>{" "}
              <a
                href="https://open.spotify.com/album/3WZZF72ihlKPZBS4zSsNHl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink-accent underline decoration-pink-accent underline-offset-2"
              >
                Olivia Rodrigo&apos;s new album
              </a>
            </p>
          </div>

          <div className="w-full shrink-0 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-0.5 sm:w-48">
            <iframe
              title="honeybee by Olivia Rodrigo on Spotify"
              src="https://open.spotify.com/embed/track/4kX7xkopoXZCfE1D6fNwl2?utm_source=generator&theme=0"
              width="100%"
              height="80"
              style={{ border: 0, display: "block" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
