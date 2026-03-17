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
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
      <div className="snap-start">
        <Navbar />
        <HeroBanner />
      </div>
      <div className="snap-start"><ProblemSection /></div>
      <Carousel />
      <div className="snap-start"><TwoAgents /></div>
      <div className="snap-start"><RFPWorkflow /></div>
      <div className="snap-start"><Features /></div>
      <div className="snap-start"><Integration /></div>
      <div className="snap-start"><SecurityComplianceDiagram /></div>
      <div className="snap-start"><FAQSection /></div>
      <div className="snap-start"><Footer /></div>
    </div>
  );
}
