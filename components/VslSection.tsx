import Reveal from "./Reveal";

export default function VslSection() {
  return (
    <section id="vsl" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
            Watch this <span className="text-gold">before</span> you apply
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
            Moksh breaks down exactly how the Meteoric Boost protocol works —
            and whether it&rsquo;s right for you.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <div className="group relative overflow-hidden rounded-2xl border border-edge transition-all duration-300 hover:border-gold/40 hover:shadow-glow">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/qSNYWCyKGyo"
                title="How the Meteoric Boost protocol works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-fog">
            Most people who apply watch this first.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
