"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// The scene (three, three-globe, react-three-fiber, drei and the GeoJSON) lives in ./Globe.
// It is only requested when this component renders <GlobeScene />, which happens after:
//   1. viewport >= 1024 px, 2. the browser is idle, 3. the container is visible.
const GlobeScene = dynamic(() => import("./Globe"), { ssr: false });

const DESKTOP_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const COARSE_POINTER_QUERY = "(pointer: coarse)";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

function whenIdle(callback: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout: 2000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 300);
  return () => window.clearTimeout(id);
}

type HeroGlobeProps = {
  className?: string;
};

export default function HeroGlobe({ className = "" }: HeroGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery(DESKTOP_QUERY);
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const coarsePointer = useMediaQuery(COARSE_POINTER_QUERY);

  const [idle, setIdle] = useState(false);
  const [inView, setInView] = useState(false);
  const [requested, setRequested] = useState(false); // latches once the globe has been wanted
  const [shown, setShown] = useState(false);

  // Wait for an idle browser, only on desktop widths.
  useEffect(() => {
    if (!desktop) {
      setIdle(false);
      setInView(false);
      setRequested(false);
      setShown(false);
      return;
    }
    return whenIdle(() => setIdle(true));
  }, [desktop]);

  // Wait for the container to be visible; keep tracking it to pause rendering off screen.
  useEffect(() => {
    const container = containerRef.current;
    if (!desktop || !idle || !container) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      setRequested(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        setInView(visible);
        if (visible) setRequested(true);
      },
      { rootMargin: "100px 0px", threshold: 0 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [desktop, idle]);

  const mounted = desktop && requested;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none hidden h-[440px] w-[440px] transition-opacity duration-700 ease-out motion-reduce:transition-none lg:block ${
        shown ? "opacity-100" : "opacity-0"
      } ${coarsePointer ? "" : "lg:pointer-events-auto"} ${className}`}
    >
      {mounted && (
        <GlobeScene
          reducedMotion={reducedMotion}
          active={inView}
          interactive={!coarsePointer}
          onReady={() => requestAnimationFrame(() => setShown(true))}
        />
      )}
    </div>
  );
}
