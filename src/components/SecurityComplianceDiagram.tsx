import bwlogo from "../assets/Anseru_3 2.png";
import shieldImg from "../assets/shield.png";

import verified from "../assets/material-symbols-light_verified-outline.png"
import accessai from "../assets/ri_ai.png" 
import lock from "../assets/arcticons_secure-tan.png"
import chip from "../assets/material-symbols_switch-access-outline.png"

export default function SecurityComplianceDiagram() {
  return (
    <div className="w-full bg-white overflow-hidden px-6 md:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-15">
          <div className="max-w-[500px]">
            <p className="anseru-section-tag">
              Security And Compliance
            </p>
            <h2 className="anseru-section-title">
              Safely connect agents to<br className="hidden md:block" /> company knowledge
            </h2>
          </div>
         
        </div>

        {/* Diagram Section */}
        <div className="relative w-full flex justify-center pb-16">
          
          {/* Main Diagram Container (Scales on mobile, stays fixed 500x500 on desktop) */}
          <div className="relative w-[500px] h-[500px] shrink-0 transform scale-[0.5] sm:scale-[0.7] md:scale-100">
            
            {/* Soft Background Glows */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#eef2ff] rounded-full blur-[70px] z-0 opacity-80"></div>
            <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#fff1f2] rounded-full blur-[70px] z-0 opacity-80"></div>

            {/* Dashed Connecting Ring */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
              <circle
                cx="250"
                cy="250"
                r="215"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Center Shield Container */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[200px] z-10 flex items-center justify-center">
              <img
                src={shieldImg}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-100"
              />
              {/* Fallback geometric shield shape behind the logo if the image is transparent/missing */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
                 <svg viewBox="0 0 100 110" className="w-[140px] h-[160px] text-[#eee5e7]">
                    <path d="M50 0 L100 20 L100 60 C100 85 50 110 50 110 C50 110 0 85 0 60 L0 20 Z" fill="currentColor" />
                 </svg>
              </div>

              {/* Black Logo Bubble */}
              <div className="relative z-20 w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center overflow-hidden bg-black ">
                <img
                  src={bwlogo}
                  alt="Anseru Logo"
                  className="w-full h-full object-cover scale-60"
                />
              </div>
            </div>

            {/* --- Satellite Nodes --- */}

            {/* Node 1: Access Control & Governance (Top Right) */}
            <div className="absolute z-20" style={{ top: '8%', left: '50%', transform: 'translate(-50%, -80%)' }}>
              <div
                className="relative w-[86px] h-[86px] rounded-full overflow-hidden flex items-center justify-center p-5 translate-y-8"
                style={{ background: 'linear-gradient(135deg, #2837A2 0%, #5B82E2 100%)' }}
              >
                {/* Eye & Star Icon */}
                <img src={accessai} alt="" />
              </div>
              <div className="absolute left-[calc(100%+24px)] top-1/2 -translate-y-1/2 w-[400px] text-left">
                <h4 className="font-medium text-[#111827] mb-1.5 leading-tight">
                  Responsible AI & Model Usage
                </h4>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">
                  Customer data is never used to train shared or public AI models.                </p>
              </div>
            </div>

            {/* Node 2: Responsible AI & Model Usage (Bottom Right) */}
            <div className="absolute z-20" style={{ top: '50%', left: '93%', transform: 'translate(-50%, -50%)' }}>
              <div
                className="relative w-[86px] h-[86px] rounded-full overflow-hidden flex items-center justify-center p-5"
                style={{ background: 'linear-gradient(180deg, #fe404b 0%, #61b6ef 100%)' }}
              >
                {/* Eye & Star Icon */}
                <img src={verified} alt="" />
              </div>
              <div className="absolute left-[calc(100%+24px)] top-1/2 -translate-y-1/2 w-[400px] text-left">
                <h4 className="font-medium text-[#111827] mb-1.5 leading-tight">
                  Verifiable & Trusted Answers
                </h4>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">
                  Every response is grounded in your company knowledge with traceable sources and review workflows.
                </p>
              </div>
            </div>

            {/* Node 3: Verifiable & Trusted Answers (Bottom Left) */}
            <div className="absolute z-20" style={{ top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div
                className="relative w-[86px] h-[86px] rounded-full overflow-hidden flex items-center justify-center p-5 -translate-y-10"
                style={{ background: 'linear-gradient(180deg, #2b2b2bff 0%, #5B21B6 100%)' }}
              >
                {/* Bar Chart Icon */}
                <img src={chip} alt="" />
              </div>
              <div className="absolute right-[calc(100%+24px)] top-1/2 -translate-y-1/2 w-[400px] text-right">
                <h4 className="font-medium text-[#111827] mb-1.5 leading-tight">
                  Access Control & Governance
                </h4>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">
                  Granular permissions and audit logs ensure only authorized users can access sensitive information.
                </p>
              </div>
            </div>

            {/* Node 4: Competitive Intelligence (Top Left) */}
            <div className="absolute z-20" style={{ top: '50%', left: '9%', transform: 'translate(-50%, -50%)' }}>
              <div
                className="relative w-[86px] h-[86px] rounded-full overflow-hidden flex items-center justify-center p-5"
                style={{ background: 'linear-gradient(180deg, #71B2CC 0%, #D4D145 100%)' }}
              >
                {/* Funnel + Check Icon */}
                <img src={lock} alt="" />
              </div>
              <div className="absolute right-[calc(100%+24px)] top-1/2 -translate-y-1/2 w-[400px] text-right">
                <h4 className="font-medium text-[#111827] mb-1.5 leading-tight">
                  Secure Infrastructure
                </h4>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">
                  Your data is protected with encryption, secure storage, and isolated customer environments.                </p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}