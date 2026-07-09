import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import VslSection from "@/components/VslSection";
import Protocol from "@/components/Protocol";
import CaseStudies from "@/components/CaseStudies";
import Founder from "@/components/Founder";
import FitSection from "@/components/FitSection";
import ApplicationForm from "@/components/ApplicationForm";
import CalendlySection from "@/components/CalendlySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <VslSection />
      <Protocol />
      <CaseStudies />
      <Founder />
      <FitSection />
      <ApplicationForm />
      <CalendlySection />
      <Footer />
    </main>
  );
}
