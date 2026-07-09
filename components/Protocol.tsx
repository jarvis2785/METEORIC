import Image from "next/image";
import Reveal from "./Reveal";

const LAYERS = [
  {
    title: "Positioning",
    body: "We position you as the go-to operator in your niche — not another generic creator. Your brand finally matches the caliber of your real-world work.",
  },
  {
    title: "Visual identity",
    body: "Clean, tasteful, immediately premium. No influencer energy. No noise. Engineered so the right people take you seriously in 3 seconds.",
  },
  {
    title: "Content & editor system",
    body: "An A-player editor system that matches the quality of your thinking and the pace of your output — so publishing never bottlenecks on you.",
  },
  {
    title: "Distribution strategy",
    body: "Storytelling frameworks and algorithm-aware formats built around leverage, not follower counts. Views that compound into authority.",
  },
  {
    title: "Monetization backend",
    body: "Offer building, appointment setting, DM systems, pre-sale assets, onboarding flows and sales scripts. The machine that turns attention into revenue.",
  },
];

export default function Protocol() {
  return (
    <section id="protocol" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
            Attention is worthless without a{" "}
            <span className="text-gold">system</span> to convert it.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-fog md:text-base">
            Most founders don&rsquo;t have a content problem. They have a
            positioning, identity and backend problem. The Meteoric Boost
            protocol fixes all five layers:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-4">
            {LAYERS.map((layer, i) => (
              <Reveal key={layer.title} delay={i * 0.08}>
                <div className="flex gap-6 rounded-2xl border border-edge bg-card p-6 transition-colors duration-300 hover:border-gold/30 md:p-8">
                  <span className="font-heading text-3xl font-bold text-gold md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ivory md:text-xl">
                      {layer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">
                      {layer.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge">
                <Image
                  src="/images/meteoric-desk-setup.jpg"
                  alt="The Meteoric system running on a golden-hour desk setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge">
                <Image
                  src="/images/moksh-client-conversation.jpg"
                  alt="Moksh working through the protocol with a client"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
