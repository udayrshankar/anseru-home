import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SocialProof from "../components/SocialProof";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import TwoAgents from "../components/TwoAgents";
import RFPWorkflow from "../components/RFPWorkflow";
import FutureSection from "../components/FutureSection";
import DealInfrastructure from "../components/DealInfrastructure";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroBanner />
      <SocialProof />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <TwoAgents />
      <RFPWorkflow />
      <FutureSection />
      <DealInfrastructure />
      <Footer />
    </div>
  );
}
