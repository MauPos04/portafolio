// // @sentry/nextjs (disabled)
// import { register } from "../instrumentation"; // disabled
// register(); // disabled

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import ContactFooter from "@/components/ContactFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Mauricio Posada Palma",
    template: "%s · Mauricio Posada Palma",
  },
  description:
    "Hi, I'm Mauricio. I build AI systems and software that turn information into useful products, from RAG workflows to machine learning platforms.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="absolute left-4 top-[-60px] z-50 rounded-lg bg-foreground px-3.5 py-2.5 text-sm font-medium text-background focus:top-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="relative">
          {children}
        </main>
        <ContactFooter />
      </body>
    </html>
  );
}
