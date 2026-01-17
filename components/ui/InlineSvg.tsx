import fs from "fs";
import path from "path";
import React from "react";

const svgCache = new Map<string, string>();

const loadSvg = (src: string) => {
  if (!src.endsWith(".svg")) {
    return null;
  }

  const normalized = src.startsWith("/") ? src.slice(1) : src;
  const filePath = path.join(process.cwd(), "public", normalized);

  const cached = svgCache.get(filePath);
  if (cached) {
    return cached;
  }

  try {
    const contents = fs.readFileSync(filePath, "utf8");
    svgCache.set(filePath, contents);
    return contents;
  } catch {
    return null;
  }
};

type InlineSvgProps = {
  src: string;
  className?: string;
  title?: string;
};

export const InlineSvg = ({ src, className, title }: InlineSvgProps) => {
  const svgMarkup = loadSvg(src);

  if (!svgMarkup) {
    return <img src={src} alt={title ?? ""} className={className} />;
  }

  const ariaProps = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": true };

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
      {...ariaProps}
    />
  );
};
