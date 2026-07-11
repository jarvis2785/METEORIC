"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COUNTRIES, flagOf, type Country } from "@/lib/countries";
import Reveal from "./Reveal";

const WEBHOOK_URL = "https://hook.us2.make.com/vqt1aunlhj4qk7uasuqsnqwduhzpr4if";

// Budget ranges live here so they can be edited in one place.
const BUDGET_OPTIONS = ["$1,500 – $2,500", "$2,500 – $4,000", "$4,000+"];

const ROLE_OPTIONS = [
  "Founder / CEO",
  "Agency Owner",
  "Coach / Consultant",
  "Content Creator",
];

const GOAL_OPTIONS = [
  "Build my personal brand from scratch",
  "Get more inbound clients from content",
  "Scale my business through social media",
  "Grow my audience and monetise it",
];

const AVAILABILITY_OPTIONS = [
  "Today",
  "Tomorrow",
  "Sometime this week",
  "Not available",
];

type ChoiceKey = "role" | "goal" | "budget" | "availability";

const CHOICE_STEPS: { key: ChoiceKey; question: string; options: string[] }[] =
  [
    { key: "role", question: "What best describes you?", options: ROLE_OPTIONS },
    {
      key: "goal",
      question: "What's your primary goal right now?",
      options: GOAL_OPTIONS,
    },
    {
      key: "budget",
      question: "What's your monthly investment budget for this?",
      options: BUDGET_OPTIONS,
    },
    {
      key: "availability",
      question: "When are you available for a call this week?",
      options: AVAILABILITY_OPTIONS,
    },
  ];

const TOTAL_STEPS = CHOICE_STEPS.length + 1;

const DEFAULT_COUNTRY =
  COUNTRIES.find((c) => c.code === "IN") ?? COUNTRIES[0];

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? -56 : 56, opacity: 0 }),
};

function CountrySelect({
  value,
  onChange,
}: {
  value: Country;
  onChange: (c: Country) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    searchRef.current?.focus();
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dial.replace("+", "").startsWith(q.replace("+", ""))
    );
  }, [query]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Country code: ${value.name} ${value.dial}`}
        className="flex h-full items-center gap-2 rounded-xl border border-edge bg-ink px-4 py-3.5 text-sm text-ivory transition-colors hover:border-gold/40"
      >
        <span aria-hidden="true">{flagOf(value.code)}</span>
        <span>{value.dial}</span>
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 text-fog transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-72 overflow-hidden rounded-xl border border-edge bg-card shadow-2xl">
          <div className="border-b border-edge p-2">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code…"
              className="w-full rounded-lg bg-ink px-3 py-2 text-sm text-ivory placeholder:text-fog focus:outline-none"
            />
          </div>
          <ul className="slim-scroll max-h-60 overflow-y-auto py-1" role="listbox">
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={c.code === value.code}
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-ink ${
                    c.code === value.code ? "text-gold" : "text-ivory"
                  }`}
                >
                  <span aria-hidden="true">{flagOf(c.code)}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-fog">{c.dial}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-fog">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function SuccessState({ onBook }: { onBook?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center px-6 py-16 text-center md:py-20"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold">
        <svg viewBox="0 0 32 32" className="h-10 w-10" fill="none">
          <motion.path
            d="M8 16.5l6 6L24 11"
            stroke="#FCC900"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
      </div>
      <h3 className="mt-8 font-heading text-2xl font-bold text-ivory md:text-3xl">
        Application received.
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog">
        The team will reach out within 24 hours. Want to skip the wait?
      </p>
      {onBook ? (
        <motion.button
          type="button"
          onClick={onBook}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-full bg-gold px-8 py-4 font-heading text-base font-bold text-ink transition-shadow duration-300 hover:shadow-glow"
        >
          Book Your Call Now
        </motion.button>
      ) : (
        <motion.a
          href="#calendly"
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-full bg-gold px-8 py-4 font-heading text-base font-bold text-ink transition-shadow duration-300 hover:shadow-glow"
        >
          Book Your Call Now
        </motion.a>
      )}
    </motion.div>
  );
}

export default function ApplicationForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<ChoiceKey, string>>({
    role: "",
    goal: "",
    budget: "",
    availability: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [fieldError, setFieldError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      if (successTimer.current) clearTimeout(successTimer.current);
    };
  }, []);

  // Show the success check briefly, then hand control back to the funnel.
  const succeed = () => {
    setStatus("success");
    if (onSuccess) successTimer.current = setTimeout(onSuccess, 1800);
  };

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setStep(next);
  };

  const selectOption = (key: ChoiceKey, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(() => {
      setStep((s) => {
        setDirection(1);
        return Math.min(s + 1, TOTAL_STEPS - 1);
      });
    }, 280);
  };

  const validateContact = (): string => {
    if (!name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return "Please enter a valid email address.";
    if (phone.replace(/\D/g, "").length < 6)
      return "Please enter a valid phone number.";
    return "";
  };

  const handleSubmit = async () => {
    const error = validateContact();
    if (error) {
      setFieldError(error);
      return;
    }
    setFieldError("");
    setStatus("loading");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: `${country.dial}${phone.replace(/\D/g, "")}`,
      role: answers.role,
      goal: answers.goal,
      budget: answers.budget,
      availability: answers.availability,
      submittedAt: new Date().toISOString(),
      source: "landing-page",
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      succeed();
    } catch (err) {
      console.error("[Meteoric] Application submit failed:", err);
      setStatus("error");
    }
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;
  const isContactStep = step === TOTAL_STEPS - 1;
  const currentChoice = !isContactStep ? CHOICE_STEPS[step] : null;

  return (
    <section id="apply" className="scroll-mt-24 border-t border-edge py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ivory md:text-5xl">
            Apply to <span className="text-gold">work with us</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-fog md:text-base">
            Fill in the form below — the team will reach out within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <p className="mb-6 text-center text-sm text-fog">
            Reviewed by Moksh&rsquo;s team within 24 hours. Serious applicants
            only.
          </p>
          <div className="overflow-hidden rounded-2xl border border-edge bg-card">
            {status === "success" ? (
              <SuccessState onBook={onSuccess} />
            ) : (
              <>
                {/* Progress bar */}
                <div className="h-1.5 w-full bg-ink">
                  <motion.div
                    className="h-full bg-gold"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <div className="p-7 md:p-10">
                  <p className="text-xs font-medium uppercase tracking-widest text-fog">
                    Step {step + 1} of {TOTAL_STEPS}
                  </p>

                  <div className="relative mt-4 overflow-hidden">
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                      custom={direction}
                    >
                      <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        {currentChoice ? (
                          <>
                            <h3 className="font-heading text-xl font-bold text-ivory md:text-2xl">
                              {currentChoice.question}
                            </h3>
                            <div className="mt-7 flex flex-col gap-3">
                              {currentChoice.options.map((option) => {
                                const selected =
                                  answers[currentChoice.key] === option;
                                return (
                                  <motion.button
                                    key={option}
                                    type="button"
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() =>
                                      selectOption(currentChoice.key, option)
                                    }
                                    className={`flex w-full items-center gap-4 rounded-full border px-6 py-4 text-left text-sm transition-all duration-200 md:text-base ${
                                      selected
                                        ? "border-gold bg-gold/5 text-ivory"
                                        : "border-edge bg-ink text-ivory/90 hover:border-gold/40"
                                    }`}
                                  >
                                    <span
                                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                        selected
                                          ? "border-gold"
                                          : "border-edge"
                                      }`}
                                      aria-hidden="true"
                                    >
                                      {selected && (
                                        <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                                      )}
                                    </span>
                                    {option}
                                  </motion.button>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          <>
                            <h3 className="font-heading text-xl font-bold text-ivory md:text-2xl">
                              Where can the team reach you?
                            </h3>
                            <div className="mt-7 flex flex-col gap-4">
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                autoComplete="name"
                                className="w-full rounded-xl border border-edge bg-ink px-5 py-3.5 text-sm text-ivory placeholder:text-fog transition-colors focus:border-gold/60 focus:outline-none"
                              />
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                autoComplete="email"
                                className="w-full rounded-xl border border-edge bg-ink px-5 py-3.5 text-sm text-ivory placeholder:text-fog transition-colors focus:border-gold/60 focus:outline-none"
                              />
                              <div className="flex gap-3">
                                <CountrySelect
                                  value={country}
                                  onChange={setCountry}
                                />
                                <input
                                  type="tel"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  placeholder="Phone number"
                                  autoComplete="tel"
                                  className="w-full min-w-0 flex-1 rounded-xl border border-edge bg-ink px-5 py-3.5 text-sm text-ivory placeholder:text-fog transition-colors focus:border-gold/60 focus:outline-none"
                                />
                              </div>

                              {fieldError && (
                                <p className="text-sm text-gold" role="alert">
                                  {fieldError}
                                </p>
                              )}
                              {status === "error" && (
                                <p className="text-sm text-gold" role="alert">
                                  Something went wrong sending your
                                  application. Please try again — or DM
                                  @meteoric.boost on Instagram.
                                </p>
                              )}

                              <motion.button
                                type="button"
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                disabled={status === "loading"}
                                className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-heading text-base font-bold text-ink transition-shadow duration-300 hover:shadow-glow disabled:opacity-70"
                              >
                                {status === "loading" && (
                                  <span
                                    className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
                                    aria-hidden="true"
                                  />
                                )}
                                {status === "loading"
                                  ? "Submitting…"
                                  : status === "error"
                                    ? "Try Again"
                                    : "Submit Application"}
                              </motion.button>
                            </div>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => goTo(step - 1, -1)}
                      className="mt-7 inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-ivory"
                    >
                      <span aria-hidden="true">&larr;</span> Back
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
