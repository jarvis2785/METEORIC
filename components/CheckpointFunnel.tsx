"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BomberIcon from "./BomberIcon";
import Hero from "./Hero";
import VslSection from "./VslSection";
import StatsBar from "./StatsBar";
import Protocol from "./Protocol";
import CaseStudies from "./CaseStudies";
import Founder from "./Founder";
import FitSection from "./FitSection";
import ApplicationForm from "./ApplicationForm";
import CalendlySection from "./CalendlySection";
import Footer from "./Footer";

const TOTAL_STEPS = 9;

// Continue-button label per step; null = no button (form advances on
// success, Calendly is the final step).
const CONTINUE_LABELS: (string | null)[] = [
  "Watch How It Works →",
  "I’ve watched it — Continue →",
  "See How It Works →",
  "See Real Results →",
  "Meet the Founder →",
  "Is This For You? →",
  "Apply to Work With Us →",
  null,
  null,
];

// Seconds the VSL step waits before revealing its Continue button.
const VSL_UNLOCK_MS = 8000;

export default function CheckpointFunnel() {
  const [step, setStep] = useState(0);
  const [vslReady, setVslReady] = useState(false);

  const goTo = useCallback((target: number) => {
    setStep(Math.max(0, Math.min(target, TOTAL_STEPS - 1)));
  }, []);

  const next = useCallback(() => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }, []);

  useEffect(() => {
    if (step !== 1) return;
    setVslReady(false);
    const id = setTimeout(() => setVslReady(true), VSL_UNLOCK_MS);
    return () => clearTimeout(id);
  }, [step]);

  const label = CONTINUE_LABELS[step];
  const showContinue = label !== null && (step !== 1 || vslReady);
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Hero gated />;
      case 1:
        return <VslSection />;
      case 2:
        return <StatsBar />;
      case 3:
        return <Protocol />;
      case 4:
        return <CaseStudies />;
      case 5:
        return <Founder />;
      case 6:
        return <FitSection onAdvance={next} />;
      case 7:
        return <ApplicationForm onSuccess={() => goTo(8)} />;
      default:
        return (
          <>
            <CalendlySection />
            <Footer />
          </>
        );
    }
  };

  return (
    <main className="relative h-[100svh] overflow-hidden bg-ink">
      {/* Progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-edge">
        <motion.div
          className="h-full bg-gold"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Logo */}
      <div className="fixed left-5 top-5 z-50 flex items-center gap-3 md:left-8">
        <BomberIcon className="h-9 w-9 rounded-lg" />
        <span className="font-heading text-lg font-bold tracking-tight text-ivory">
          METEORIC
        </span>
      </div>

      {/* Current checkpoint */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="h-[100svh] w-full overflow-y-auto"
        >
          <div
            className={`flex min-h-full w-full flex-col justify-center ${
              label !== null ? "pb-28" : ""
            }`}
          >
            {renderStep()}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Continue button */}
      <div className="pointer-events-none fixed inset-x-0 bottom-8 z-40 flex justify-center px-5">
        <AnimatePresence>
          {showContinue && (
            <motion.button
              key={`continue-${step}`}
              type="button"
              onClick={next}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileTap={{ scale: 0.98 }}
              className="pointer-events-auto rounded-full bg-gold px-8 py-4 font-heading text-base font-bold text-ink shadow-lg transition-shadow duration-300 hover:shadow-glow"
            >
              {label}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
