import type { Metadata } from "next";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <h1 tabIndex={-1} className="mx-auto max-w-6xl px-4 pt-16 text-4xl font-semibold leading-tight tracking-[-0.03em] md:px-8 md:text-5xl">
        Page not found
      </h1>
      <div className="mx-auto max-w-6xl px-4 pt-4 md:px-8">
        <ArrowLink href="/">Go to Overview</ArrowLink>
      </div>
    </>
  );
}
