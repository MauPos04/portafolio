import type { Metadata } from "next";
import ProjectsSections from "@/components/ProjectsSections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Applied AI, forecasting, and retrieval systems built around real workflows, with evaluation and human oversight.",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 tabIndex={-1} className="mx-auto max-w-6xl px-4 pt-12 text-4xl font-semibold leading-tight tracking-[-0.03em] md:px-8 md:text-5xl">
        Projects
      </h1>
      <ProjectsSections />
    </>
  );
}
