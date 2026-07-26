interface GalleryItem {
  title: string;
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-navy-muted shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl"
        >
          <span className="absolute inset-0 flex items-center justify-center bg-navy/0 font-sans text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:bg-navy/50 group-hover:opacity-100">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}
