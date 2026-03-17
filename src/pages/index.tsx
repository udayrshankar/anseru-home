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
    <div className="w-full min-h-screen overflow-y-auto">
      <div>
        <Navbar />
        <HeroBanner />
      </div>
      <div><ProblemSection /></div>
      <Carousel />
      <div><TwoAgents /></div>
      <div><RFPWorkflow /></div>
      <div><Features /></div>
      <div><Integration /></div>
      <div><SecurityComplianceDiagram /></div>
      <div><FAQSection /></div>
      <div><Footer /></div>
    </div>
  );
}
