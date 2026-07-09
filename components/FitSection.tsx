import Reveal from "./Reveal";

const FOR_YOU = [
  "You're a founder, operator or expert with real results that nobody can see online",
  "You want inbound clients and opportunities — not vanity followers",
  "You're ready to show up on camera and put in consistent reps",
  "You treat your personal brand as an asset worth investing in",
];

const NOT_FOR_YOU = [
  "You're looking for a cheap shortcut or overnight virality",
  "You want followers but don't have (or want to build) a real offer",
  "You won't commit to consistent content for at least 90 days",
  "You're not in a position to invest in premium execution",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-fog"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FitSection() {
  return (
    <section className="border-t border-edge py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
            Is this <span className="text-gold">for you</span>?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-gold/30 bg-card p-8 md:p-10">
              <h3 className="font-heading text-xl font-bold text-ivory">
                This is <span className="text-gold">for you</span> if
              </h3>
              <ul className="mt-7 flex flex-col gap-5">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-4">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-ivory/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-edge bg-card/60 p-8 md:p-10">
              <h3 className="font-heading text-xl font-bold text-fog">
                This is NOT for you if
              </h3>
              <ul className="mt-7 flex flex-col gap-5">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-4">
                    <XIcon />
                    <span className="text-sm leading-relaxed text-fog">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
