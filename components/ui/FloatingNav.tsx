"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const FloatingNav = ({ navItems, className }: { navItems: { name: string; link: string; icon?: JSX.Element }[]; className?: string; }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll to target with a dynamic offset so the fixed nav doesn't cover the section.
  const handleScroll = (link: string) => {
    if (link === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(link);
    if (target) {
      const navHeight = navRef.current?.getBoundingClientRect().height ?? 0;
      const gap = 16;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const top = Math.max(0, targetTop - navHeight - gap);
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          ref={navRef}
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed floating-nav-safe-top inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleScroll(navItem.link)}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
