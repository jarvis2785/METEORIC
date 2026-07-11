"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./Reveal";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 140, suffix: "K", label: "Followers on the founder's own brand" },
  { value: 20, suffix: "+", label: "Founders scaled through the protocol" },
  {
    value: 100,
    prefix: "$",
    suffix: "k+",
    label: "Closed by clients through their brands",
  },
  {
    value: 3.6,
    decimals: 1,
    suffix: "M",
    label: "Views on a single client video",
  },
];

function CountUp({ value, decimals = 0, prefix = "", suffix = "" }: Stat & { label?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="scroll-mt-24 border-y border-edge bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4 md:px-8">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-heading text-4xl font-bold tracking-tight text-gold md:text-5xl">
              <CountUp {...stat} />
            </p>
            <p className="mx-auto mt-3 max-w-[180px] text-xs leading-relaxed text-fog md:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
