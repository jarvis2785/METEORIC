import Image from "next/image";
import Reveal from "./Reveal";

export default function Founder() {
  return (
    <section id="founder" className="border-t border-edge py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-edge">
                <Image
                  src="/images/moksh-portrait-villa.jpg"
                  alt="Moksh Vasant on a villa balcony"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden w-40 overflow-hidden rounded-2xl border border-edge shadow-2xl sm:block md:-right-8 md:w-52">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/moksh-workspace-standing.jpg"
                    alt="Moksh standing at his workspace"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-gold">
              The Founder
            </p>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
              Moksh Vasant
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-fog md:text-base">
              Moksh built his own personal brand to{" "}
              <span className="text-gold">140,000 followers</span> before ever
              selling brand-building. Today he leads Meteoric Boost — working
              1:1 with founders, operators and experts across multiple
              countries to turn real-world credibility into online authority
              that compounds. The protocol isn&rsquo;t theory. It&rsquo;s the
              exact system behind his own brand and every result on this page.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="https://www.instagram.com/moksh.vasant/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-gold transition-opacity hover:opacity-80"
              >
                @moksh.vasant <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="https://www.instagram.com/meteoric.boost/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-gold transition-opacity hover:opacity-80"
              >
                @meteoric.boost <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
