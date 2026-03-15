import React from 'react';
// Placeholder import for the logo
import PlaceholderLogo from '../assets/Anseru_3 3.png'; 

export default function RFPWorkflow() {
  const nodes = [
    {
      title: "RFP Shredding",
      cx: 200, 
      cy: 220,
      bullets: [
        "Break RFP into sections",
        "Identify key requirements",
        "Prepare for analysis"
      ],
      iconPath: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    },
    {
      title: "Bid/No Bid",
      cx: 420, 
      cy: 220,
      bullets: [
        "Evaluate opportunity fit",
        "Assess win probability",
        "Decide to pursue"
      ],
      iconPath: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    },
    {
      title: "Requirement Tagging",
      cx: 640, 
      cy: 220,
      bullets: [
        "Categorize RFP questions",
        "Tag by topic",
        "Route to teams"
      ],
      iconPath: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.41zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
    },
    {
      title: "Proposal Outline",
      cx: 860, 
      cy: 220,
      bullets: [
        "Generate proposal structure",
        "Organize response sections",
        "Define response flow"
      ],
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    },
    {
      title: "First Winnable Draft",
      cx: 860, 
      cy: 480,
      bullets: [
        "Generate initial responses",
        "Past knowledge grounded",
        "Create first draft"
      ],
      iconPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
    },
    {
      title: "Refine SME Collaboration",
      cx: 580, 
      cy: 480,
      bullets: [
        "SME review inputs",
        "Improve response quality",
        "Finalize proposal draft"
      ],
      iconPath: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    },
    {
      title: "Win or loss",
      cx: 320, 
      cy: 480,
      bullets: [
        "SME review inputs",
        "Improve response quality",
        "Finalize proposal draft"
      ],
      iconPath: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-[#f8f9fa] font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="space-y-2 w-full md:w-1/2">
            <p className="text-[14px] font-medium text-gray-500 uppercase tracking-wider">
              The Future Of RFP Responses
            </p>
            <h2 className="text-3xl md:text-[46px] font-medium text-[#111827] leading-tight tracking-tight">
              From RFP to<br className="hidden md:block" /> Winning Proposal
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end">
            <p className="text-base text-gray-500 max-w-[480px] leading-relaxed">
              Anseru orchestrates the entire response lifecycle with AI agents analyzing requirements, generating drafts, and enabling teams to refine and deliver high-quality proposals with speed and precision.
            </p>
          </div>
        </div>

        {/* Workflow Diagram Section */}
        <div className="w-full overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          <div className="relative min-w-[1050px] h-[600px] md:h-[750px] mx-auto select-none">
            
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1050 750" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="mainPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d9f99d" />
                  <stop offset="30%" stopColor="#bae6fd" />
                  <stop offset="70%" stopColor="#fbcfe8" />
                  <stop offset="100%" stopColor="#fef08a" />
                </linearGradient>

                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>

              <path 
                d="M 150 220 
                   L 910 220 
                   A 130 130 0 0 1 910 480 
                   L 150 480 
                   A 130 130 0 0 1 150 220 Z" 
                stroke="url(#mainPathGradient)" 
                strokeWidth="8" 
                strokeDasharray="2 6"
                strokeLinecap="round"
                fill="none"
              />
              
              {nodes.map((node, i) => (
                <g key={`lines-${i}`}>
                  <line 
                    x1={node.cx} y1={node.cy + 24} 
                    x2={node.cx} y2={node.cy + 75} 
                    stroke="#111827" 
                    strokeWidth="1.2" 
                    strokeDasharray="2 4" 
                  />
                  <circle cx={node.cx} cy={node.cy + 75} r="2.5" fill="#111827" />
                </g>
              ))}
            </svg>

            {/* Logo Node */}
            <div 
              className="absolute z-20 flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 shadow-xl"
              style={{ left: 40, top: 350, transform: 'translate(-50%, -50%)' }}
            >
                <img src={PlaceholderLogo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
            </div>

            {/* Render Nodes and Bullet Lists */}
            {nodes.map((node, i) => (
              <React.Fragment key={`node-${i}`}>
                <div 
                  className="absolute flex items-center justify-center gap-2.5 bg-white rounded-lg px-4 py-2 z-10 shadow-sm border border-gray-100"
                  style={{ 
                    left: node.cx, 
                    top: node.cy, 
                    transform: 'translate(-50%, -50%)',
                    background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #3b82f6, #ef4444) border-box`,
                    border: '1.5px solid transparent'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="url(#primaryGradient)" className="shrink-0">
                    <path d={node.iconPath} />
                  </svg>
                  <span className="text-[#111827] text-sm md:text-base font-medium whitespace-nowrap">
                    {node.title}
                  </span>
                </div>

                <div 
                  className="absolute w-[200px] md:w-[240px]"
                  style={{ 
                    left: node.cx, 
                    top: node.cy + 95, 
                    transform: 'translateX(-50%)' 
                  }}
                >
                  <ul className="flex flex-col gap-2">
                    {node.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" className="shrink-0 mt-1">
                          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-500 leading-snug">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}