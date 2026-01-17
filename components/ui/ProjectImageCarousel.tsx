"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@/utils/cn";

type ProjectImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  autoPlay?: boolean;
  intervalMs?: number;
};

export const ProjectImageCarousel = ({
  images,
  alt,
  className,
  imageClassName,
  autoPlay = false,
  intervalMs = 4500,
}: ProjectImageCarouselProps) => {
  const safeImages = React.useMemo(
    () => images.filter((src): src is string => Boolean(src)),
    [images]
  );
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (activeIndex >= safeImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeImages.length]);

  React.useEffect(() => {
    if (!autoPlay || paused || safeImages.length <= 1) {
      return;
    }
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, paused, safeImages.length]);

  if (safeImages.length === 0) {
    return null;
  }

  const showControls = safeImages.length > 1;

  const goPrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  const goNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % safeImages.length);
  };

  const goTo =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setActiveIndex(index);
    };

  return (
    <div
      className={cn("relative h-full w-full", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {safeImages.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt={alt}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500 ease-out",
            index === activeIndex ? "opacity-100" : "opacity-0",
            imageClassName
          )}
          draggable={false}
        />
      ))}
      {showControls && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
            onClick={goPrev}
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
            onClick={goNext}
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-3 py-1">
            {safeImages.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  index === activeIndex ? "bg-white" : "bg-white/50"
                )}
                onClick={goTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
