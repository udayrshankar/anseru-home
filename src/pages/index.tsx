import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import ProblemSection from "../components/ProblemSection";
import Features from "../components/Features";
import TwoAgents from "../components/TwoAgents";
import RFPWorkflow from "../components/RFPWorkflow";
import Footer from "../components/Footer";
import Integration from "../components/integration";
import SecurityComplianceDiagram from "../components/SecurityComplianceDiagram";
import Carousel from "../components/Carousel";
import FAQSection from "../components/FAQSection";
import hero from "../assets/hero (3).png";

export default function Index() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <section id="home" className="scroll-mt-12">
        <HeroBanner />
        <img src={hero} alt="hero" />
      </section>

      <ProblemSection />

      <section id="how-it-works" className="scroll-mt-5">
        <Carousel />
      </section>

      <section id="product" className="scroll-mt-20">
        <TwoAgents />
      </section>

      <RFPWorkflow />
      <Integration />
      <SecurityComplianceDiagram />

      <section id="features" className="scroll-mt-12">
        <Features />
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
}
