import bwlogo from "../assets/Anseru_3 2.png"
import leadEvalImg from "../assets/lead_eval.png"
import compIntImg from "../assets/comp_int.png"
import custInsightsImg from "../assets/cust_insights.png"
import shieldImg from "../assets/shield.png"

export default function SecurityComplianceDiagram() {
  return (
    <div className="w-full bg-white overflow-hidden py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 md:mb-16">
          <div className="max-w-[500px]">
            <p className="text-[#6b7280] text-sm md:text-[15px] font-medium mb-3 uppercase tracking-wider">
              Security Compliance
            </p>
            <h2 className="text-[#111827] text-3xl md:text-[44px] font-medium leading-tight tracking-tight">
              Safely connect agents to<br className="hidden md:block" /> company knowledge.
            </h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-[#6b7280] text-base md:text-[16px] leading-relaxed md:mt-8">
              Connect agents directly to live company data, enforce permissions automatically, and choose the right LLM for each use case — all while keeping your information up-to-date and protected.
            </p>
          </div>
        </div>

        {/* Diagram Section */}
        <div className="relative w-full overflow-hidden flex justify-center py-10">
          <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] shrink-0 transform scale-[0.85] sm:scale-100 -translate-y-16">

            {/* Subtle Center Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[320px] md:h-[320px] bg-[#fbfde9] rounded-full blur-[40px] md:blur-[60px] opacity-80 z-0"></div>

            {/* Textured Dashed Ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 480 480">
              <circle
                cx="240"
                cy="240"
                r="180"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
                strokeDasharray="4 6"
                opacity="0.8"
              />
            </svg>

            {/* Center Shield Container */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[180px] md:w-[220px] md:h-[240px] z-10 flex items-center justify-center">
              <img
                src={shieldImg}
                alt="Security Shield"
                className="absolute inset-0 w-full h-full object-contain"
              />

              <div className="relative z-20 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full shadow-md flex items-center justify-center overflow-hidden bg-black p-2">
                <img
                  src={bwlogo}
                  alt="Anseru Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Satellite Nodes */}

            {/* Node 1: Lead Evaluation (Left) */}
            <div className="absolute z-20" style={{ left: '15%', top: '40%', transform: 'translate(-50%, -50%)' }}>
              <div
                className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full shadow-lg overflow-hidden flex items-center justify-center p-4 md:p-5"
                style={{ background: 'linear-gradient(135deg, #6AA4EE 0%, #201CAE 100%)' }}
              >
                <img src={leadEvalImg} alt="Lead Evaluation" className="w-full h-full object-contain" />
              </div>
              <div className="absolute right-[110%] top-1/2 -translate-y-1/2 whitespace-nowrap text-right">
                <h3 className="text-sm md:text-xl font-medium leading-tight text-black">
                  Lead<br />Evaluation
                </h3>
              </div>
            </div>

            {/* Node 2: Competitive Intelligence (Right) */}
            <div className="absolute z-20" style={{ right: '15%', top: '40%', transform: 'translate(50%, -50%)' }}>
              <div
                className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full shadow-lg overflow-hidden flex items-center justify-center p-4 md:p-5"
                style={{ background: 'linear-gradient(135deg, #1D80F9 0%, #E74F62 100%)' }}
              >
                <img src={compIntImg} alt="Competitive Intelligence" className="w-full h-full object-contain" />
              </div>
              <div className="absolute left-[110%] top-1/2 -translate-y-1/2 whitespace-nowrap text-left">
                <h3 className="text-sm md:text-xl font-medium leading-tight text-black">
                  Competitive<br />Intelligence
                </h3>
              </div>
            </div>

            {/* Node 3: Customer Insights (Bottom) */}
            <div className="absolute z-20" style={{ left: '50%', bottom: '10%', transform: 'translate(-50%, 50%)' }}>
              <div
                className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full shadow-lg overflow-hidden flex items-center justify-center p-4 md:p-5"
                style={{ background: 'linear-gradient(135deg, #F3E21F 0%, #6DA8EF 100%)' }}
              >
                <img src={custInsightsImg} alt="Customer Insights" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <h3 className="text-sm md:text-xl font-medium leading-tight text-black">
                  Customer<br />Insights
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}