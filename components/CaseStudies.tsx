"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

/** Renders a quote string, wrapping [bracketed] fragments in gold. */
function highlight(text: string): ReactNode[] {
  const curly = text.replace(/^"/, "“").replace(/"$/, "”");
  return curly.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="text-gold">
        {part.slice(1, -1)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

type GalleryImage = { src: string; alt: string };

type CaseStudy = {
  name: string;
  title: string;
  quote: string;
  story: string;
  link: string;
  images: GalleryImage[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Daksh Manocha",
    title: "8-Figure E-com Founder",
    quote:
      '"Got [200k+ views] on my first video and closed [$6.5k] within 30 days of launching a fresh offer."',
    story:
      "Daksh came in with the credibility already built — an 8-figure e-com founder. But his personal brand showed none of it. He had the attention, and no system to convert it: no offer clarity, no conversion funnel, no lean team. We got him clear on his offer, built the system around it, and got him posting. His first-ever video hit 200k+ views. Within 30 days of launching a fresh offer he'd closed $6.5k, then multiple 4-figure deals on top. He's now scaling his e-commerce info coaching offer through the brand.",
    link: "https://www.instagram.com/p/DWyNSfwiXxk/",
    images: [
      {
        src: "/images/daksh-quote-card.jpg",
        alt: "Daksh Manocha result quote card",
      },
      {
        src: "/images/daksh-zoom-call.jpg",
        alt: "Daksh Manocha on a Zoom call with the Meteoric team",
      },
    ],
  },
  {
    name: "Aryan Mahajan",
    title: "AI Architect for Fortune 500s",
    quote:
      '"I scaled my personal brand from [0 to 13.5k followers] within just one month of joining the program."',
    story:
      "Aryan closes Fortune 500 deals and builds enterprise AI infrastructure — but he was invisible online in a space where visibility is leverage. Inside the program we rebuilt the brand from the ground up: positioned him as the go-to AI infrastructure operator, engineered a clean, premium visual identity, and built an editor system matching the pace of his output. The outcome: 0 to 13.5k followers in one month. 100k–200k views per video, consistently. A single video at 3.6M views, 4.3M total — and the enterprise rooms that brand opens.",
    link: "https://www.instagram.com/p/DWWBYY0CRg6/",
    images: [
      {
        src: "/images/aryan-quote-card.jpg",
        alt: "Aryan Mahajan result quote card",
      },
      {
        src: "/images/aryan-zoom-call.jpg",
        alt: "Aryan Mahajan on a Zoom call with the Meteoric team",
      },
      {
        src: "/images/aryan-video-stats.jpg",
        alt: "View statistics from Aryan Mahajan's videos",
      },
    ],
  },
  {
    name: "Kevil Zalavadia",
    title: "Founder, Swiftpay",
    quote:
      '"I closed [$50k] worth of deals for my company just by posting [4 videos] on my page."',
    story:
      "When Kevil first spoke to us, his Instagram was a private account — no idea what to post, no visual identity, no roadmap to attract the right merchants. We rebuilt everything around his personal brand and Swiftpay's mission: wide top-of-funnel content for business owners, a lean team executing for him, and quality checks on every video. The results: 70k views on his second video ever, 173k+ profile views in under a month, 1,300 new followers in 40 days, enterprise merchants reaching out — and $50k closed in new deals.",
    link: "https://www.instagram.com/meteoric.boost/",
    images: [
      {
        src: "/images/kevil-quote-card.jpg",
        alt: "Kevil Zalavadia result quote card",
      },
      {
        src: "/images/kevil-enterprise-clients.jpg",
        alt: "Enterprise clients reaching out to Kevil Zalavadia",
      },
      {
        src: "/images/kevil-engagement-stats.jpg",
        alt: "Engagement statistics from Kevil Zalavadia's page",
      },
      {
        src: "/images/kevil-results-visible.jpg",
        alt: "Visible results from Kevil Zalavadia's brand",
      },
    ],
  },
  {
    name: "Manav Chawla",
    title: "Founder & CEO, nvm.os",
    quote: '"I hit [$40,000] within the first [3 months] of posting."',
    story:
      "Manav had his team built and his visual identity dialed — but no idea how to scale a personal brand, no posting schedule, no roadmap, no accountability. Week one, we refined his positioning, storytelling framework and content formats — 11K views on his first video. Week two, we implemented the Cash Cow methodology: strategic formats, a client-attraction funnel, systematic authority building. Now he's closed the biggest names in his industry, hit 168K+ total views, and did $40,000 in his first 3 months of posting.",
    link: "https://www.instagram.com/meteoric.boost/",
    images: [
      {
        src: "/images/manav-quote-card.jpg",
        alt: "Manav Chawla result quote card",
      },
      {
        src: "/images/manav-biggest-names.jpg",
        alt: "Manav Chawla closing the biggest names in his industry",
      },
      {
        src: "/images/manav-views-stats.jpg",
        alt: "View statistics from Manav Chawla's content",
      },
    ],
  },
];

const QUOTE_TILES = [
  {
    quote:
      '"Made [$13k] and scaled to [12k followers] within 4 months of launching my offer."',
    author: "Dhanil Shah, Founder @peakformhq",
  },
  {
    quote:
      '"I made over [$20k] with my info coaching offer just by creating intentional content."',
    author: "Alex Hitchman, Archive Tribe",
  },
  {
    quote: '"I went from 3k views to [100k views] within two weeks."',
    author: "Karanbir Sethi, Founder @zerotoone.store",
  },
  {
    quote:
      '"I closed a [$50k client] for my business within 1 month of posting consistently."',
    author: "Devesh Arora",
  },
  {
    quote:
      '"In 30 days of posting, I built a community of female founders — with [VCs reaching out]."',
    author: "Milli Patel",
  },
  {
    quote: '"I made [$6k] just within 1 month of joining the program."',
    author: "Basit Oyebanji",
  },
  {
    quote:
      '"I got [3 clients] for my business within [3 hours] of posting my first video."',
    author: "Yatin Jindal",
  },
  {
    quote:
      '"I made over [$6.5k within 24 hours], without even launching my offer properly."',
    author: "Anas Syed",
  },
];

function CaseStudyCard({
  study,
  open,
  onToggle,
}: {
  study: CaseStudy;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className={`overflow-hidden rounded-2xl border bg-card transition-colors duration-300 ${
        open ? "border-gold/40" : "border-edge hover:border-gold/25"
      }`}
    >
      <motion.button
        layout="position"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full flex-col gap-6 p-7 text-left md:p-9"
      >
        <blockquote className="font-heading text-xl font-bold leading-snug text-ivory md:text-2xl">
          {highlight(study.quote)}
        </blockquote>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-heading text-sm font-bold text-ivory">
              {study.name}
            </p>
            <p className="mt-0.5 text-xs text-fog">{study.title}</p>
          </div>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-edge text-gold transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
              <path
                d="M8 2v12M2 8h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="story"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-edge px-7 py-7 md:px-9">
              <p className="text-sm leading-relaxed text-fog">{study.story}</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                className="no-scrollbar -mx-7 mt-6 flex gap-3 overflow-x-auto px-7 md:-mx-9 md:px-9"
              >
                {study.images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={280}
                    height={280}
                    className="h-[280px] w-auto min-w-[200px] shrink-0 rounded-xl border border-gold/30 object-cover"
                  />
                ))}
              </motion.div>
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-gold transition-opacity hover:opacity-80"
              >
                View on Instagram
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="results" className="border-t border-edge py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_minmax(0,320px)]">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Results from inside the program
            </p>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
              Real founders. <span className="text-gold">Real numbers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-edge">
              <Image
                src="/images/moksh-cafe-conversation.jpg"
                alt="Moksh in conversation with a founder"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.name} delay={(i % 2) * 0.1}>
              <CaseStudyCard
                study={study}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTE_TILES.map((tile, i) => (
            <Reveal key={tile.author} delay={(i % 4) * 0.06}>
              <figure className="flex h-full flex-col justify-between gap-5 rounded-2xl border border-edge bg-card p-6 transition-colors duration-300 hover:border-gold/25">
                <blockquote className="font-heading text-sm font-bold leading-snug text-ivory">
                  {highlight(tile.quote)}
                </blockquote>
                <figcaption className="text-xs text-fog">
                  — {tile.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="https://www.instagram.com/meteoric.boost/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-base font-bold text-gold transition-opacity hover:opacity-80"
          >
            See every result on Instagram
            <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
