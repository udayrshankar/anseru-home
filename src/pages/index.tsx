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

export default function Index() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroBanner />
      <ProblemSection />
      <Carousel />
      <TwoAgents />
      <RFPWorkflow />
      <Features />
      <Integration />
      <SecurityComplianceDiagram />
      <FAQSection />
      <Footer />
    </div>
  );
}
