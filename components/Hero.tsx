"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: (
      <>
        &ldquo;I closed <span className="text-gold">$50k</span> worth of deals
        just by posting 4 videos.&rdquo;
      </>
    ),
    author: "Kevil, Founder, Swiftpay",
  },
  {
    quote: (
      <>
        &ldquo;<span className="text-gold">0 to 13.5k followers</span> within
        one month of joining.&rdquo;
      </>
    ),
    author: "Aryan, AI Architect for Fortune 500s",
  },
  {
    quote: (
      <>
        &ldquo;<span className="text-gold">200k+ views</span> on my first
        video. <span className="text-gold">$6.5k</span> closed in 30
        days.&rdquo;
      </>
    ),
    author: "Daksh, 8-Figure E-com Founder",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      4000
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32"
    >
      {/* Subtle radial yellow glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[640px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(252,201,0,0.06) 0%, rgba(252,201,0,0) 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-gold"
        >
          The Meteoric Boost Protocol
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl"
        >
          We build the <span className="text-gold">top 0.1%</span> personal
          brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fog md:text-lg"
        >
          For founders, operators and experts who have the credibility, the
          clients and the results — but a brand that doesn&rsquo;t show it. We
          turn real-world authority into inbound demand.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mx-auto mt-5 text-xs text-ivory/80 sm:text-sm"
        >
          <span className="text-gold">20+</span> founders scaled &middot;{" "}
          <span className="text-gold">$100k+</span> closed by clients through
          their brands &middot; <span className="text-gold">3.6M</span> views
          on a single client video
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#apply"
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-gold px-8 py-4 font-heading text-base font-bold text-ink transition-shadow duration-300 hover:shadow-glow sm:w-auto"
          >
            Apply to Work With Us
          </motion.a>
          <motion.a
            href="#vsl"
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full border border-ivory/30 px-8 py-4 font-heading text-base font-bold text-ivory transition-colors duration-300 hover:border-ivory/60 sm:w-auto"
          >
            Watch How It Works
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          className="mx-auto mt-14 max-w-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative flex min-h-[84px] items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-center"
              >
                <blockquote className="font-heading text-base font-bold text-ivory md:text-lg">
                  {TESTIMONIALS[index].quote}
                </blockquote>
                <figcaption className="mt-2 text-xs text-fog">
                  — {TESTIMONIALS[index].author}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-edge"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
