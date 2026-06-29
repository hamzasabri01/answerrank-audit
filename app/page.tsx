import About from "@/components/About";
import AuditCards from "@/components/AuditCards";
import ContactModal from "@/components/ContactModal";
import Differentiation from "@/components/Differentiation";
import Disclaimer from "@/components/Disclaimer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Methodology from "@/components/Methodology";
import Pricing from "@/components/Pricing";
import ProblemSection from "@/components/ProblemSection";
import SnapshotPreview from "@/components/SnapshotPreview";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <AuditCards />
        <HowItWorks />
        <SnapshotPreview />
        <Differentiation />
        <Pricing />
        <FAQ />
        <Methodology />
        <About />
        <FinalCTA />
        <Disclaimer />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
