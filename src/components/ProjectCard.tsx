import Image from "next/image";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  link?: string;
  tech?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function ProjectCard({
  title,
  link,
  tech,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: Project) {
  const ratio = imageWidth && imageHeight ? imageWidth / imageHeight : 4 / 3;

  return (
    <div className="group -mx-4 rounded-xl px-4 py-4 transition-colors duration-300 hover:bg-navy-muted">
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display text-xl font-bold lowercase text-white">
              {title}
            </h3>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} repository`}
                className="text-white/60 transition-colors hover:text-pink-accent"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
          {tech && (
            <p className="mt-1 font-sans text-xs italic lowercase text-white/60 sm:text-sm">
              {tech}
            </p>
          )}
        </div>

        {description && (
          <p className="font-sans text-xs italic leading-relaxed text-white/90 sm:text-sm">
            {description}
          </p>
        )}

        <div
          className="relative w-full max-w-md overflow-hidden rounded-lg bg-navy-muted shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
          style={{ aspectRatio: ratio }}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 640px) 20rem, 100vw"
              className="object-cover"
            />
          ) : (
            <span className="sr-only">{title}</span>
          )}
        </div>
      </div>
    </div>
  );
}
