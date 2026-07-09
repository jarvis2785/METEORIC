"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BomberIcon from "./BomberIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-edge bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <BomberIcon className="h-9 w-9 rounded-lg" />
          <span className="font-heading text-lg font-bold tracking-tight text-ivory">
            METEORIC
          </span>
        </a>
        <motion.a
          href="#apply"
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-gold px-5 py-2.5 font-heading text-sm font-bold text-ink transition-shadow duration-300 hover:shadow-glow"
        >
          Apply Now
        </motion.a>
      </nav>
    </header>
  );
}
