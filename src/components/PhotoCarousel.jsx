import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PhotoCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="bg-tertiary py-16 px-4">
      <div className="container">
        <h2 className="text-3xl text-montserrat font-bold text-white mb-8">
          Our Work
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden bg-gray-800">
            <img
              src={`/${images[current]}`}
              alt={`${title} example ${current + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeftIcon className="size-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRightIcon className="size-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-white/50 text-sm tabular-nums">
              {current + 1} / {images.length}
            </span>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6 h-2.5" : "bg-white/30 size-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
