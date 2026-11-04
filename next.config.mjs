// import {withSentryConfig} from '@sentry/nextjs';
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));

// Build info shown in the footer: version, build date and a 7-character commit, never the full hash.
const buildInfo = () => {
  const vercelSha = process.env.VERCEL_GIT_COMMIT_SHA;
  if (vercelSha) return { commit: vercelSha.slice(0, 7), kind: "vercel" };
  try {
    const run = (cmd) => execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    const commit = run("git rev-parse --short=7 HEAD");
    const dirty = run("git status --porcelain").length > 0;
    return { commit, kind: dirty ? "local-dirty" : "local" };
  } catch {
    return { commit: "", kind: "local" };
  }
};

const build = buildInfo();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: pkg.version,
    NEXT_PUBLIC_BUILD_DATE: new Date().toLocaleDateString("en-CA", { timeZone: "America/Bogota" }),
    NEXT_PUBLIC_COMMIT_SHA: build.commit,
    NEXT_PUBLIC_BUILD_KIND: build.kind,
  },
};

// export default withSentryConfig(nextConfig, {
//   org: "quantum-technologies",
//   project: "javascript-nextjs",
//   silent: !process.env.CI,
//   widenClientFileUpload: true,
//   reactComponentAnnotation: {
//     enabled: true,
//   },
//   hideSourceMaps: true,
//   disableLogger: true,
//   automaticVercelMonitors: true,
// });
export default nextConfig;
