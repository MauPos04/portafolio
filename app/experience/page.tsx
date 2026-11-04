import type { Metadata } from "next";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import Technologies from "@/components/Technologies";
import { PageToc } from "@/components/ui/PageToc";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <>
      <h1 tabIndex={-1} className="mx-auto max-w-6xl px-4 pt-12 text-4xl font-semibold leading-tight tracking-[-0.03em] md:px-8 md:text-5xl">
        Experience
      </h1>
      <PageToc
        links={[
          { href: "#work", label: "Work" },
          { href: "#certifications", label: "Certifications" },
          { href: "#technologies", label: "Technologies" },
          { href: "#recommendations", label: "Recommendations" },
        ]}
      />
      <Experience />
      <Certifications />
      <Technologies />
      <Recommendations />
    </>
  );
}
