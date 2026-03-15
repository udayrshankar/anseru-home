import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SocialProof from "../components/SocialProof";
import ProblemSection from "../components/ProblemSection";
import Features from "../components/Features";
import TwoAgents from "../components/TwoAgents";
import RFPWorkflow from "../components/RFPWorkflow";
import FutureSection from "../components/FutureSection";
import DealInfrastructure from "../components/DealInfrastructure";
import Footer from "../components/Footer";
import Integration from "../components/integration";
import SecurityComplianceDiagram from "../components/SecurityComplianceDiagram";
import Carousel from "../components/Carousel";

export default function Index() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroBanner />
      <DealInfrastructure />
      <SocialProof />
      <ProblemSection />
      <Carousel />
      <TwoAgents />
      <RFPWorkflow />
      <Features />
      <Integration />
      <SecurityComplianceDiagram />
      <FutureSection />
      <Footer />
    </div>
  );
}
