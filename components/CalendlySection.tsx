"use client";

import { InlineWidget } from "react-calendly";
import Reveal from "./Reveal";

export default function CalendlySection() {
  return (
    <section id="calendly" className="scroll-mt-24 border-t border-edge py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
            Prefer to <span className="text-gold">book directly</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fog md:text-base">
            Pick a slot that works for you — the team will come prepared having
            reviewed your brand.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-edge bg-card p-3 md:p-6">
            <div className="overflow-hidden rounded-xl">
              <InlineWidget
                url="https://calendly.com/arjun-meteoricboost/60min"
                styles={{ height: "700px", width: "100%" }}
                pageSettings={{
                  hideLandingPageDetails: true,
                  hideGdprBanner: true,
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
