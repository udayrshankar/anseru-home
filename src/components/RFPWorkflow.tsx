import React from 'react';

export default function RFPWorkflow() {
  const nodes = [
    {
      title: "RFP Shredding",
      cx: 140, 
      cy: 350,
      bullets: [
        "Break RFP into sections",
        "Identify key requirements",
        "Prepare for analysis"
      ],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="#a3e635" />
          <path d="M14 2V8H20" fill="#3b82f6" />
        </svg>
      )
    },
    {
      title: "Bid/No - Bid",
      cx: 340, 
      cy: 180,
      bullets: [
        "Evaluate opportunity fit",
        "Assess win probability",
        "Decide to pursue"
      ],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <circle cx="12" cy="18" r="3" fill="#facc15" />
          <circle cx="6" cy="6" r="3" fill="#facc15" />
          <circle cx="18" cy="6" r="3" fill="#facc15" />
          <path d="M12 16V10 M12 10L7 7 M12 10L17 7" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Requirement Tagging",
      cx: 580, 
      cy: 180,
      bullets: [
        "Categorize RFP questions",
        "Tag by topic",
        "Route to teams"
      ],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" fill="#a3e635" />
          <path d="M7 7h.01" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Proposal Outline",
      cx: 840, 
      cy: 180,
      bullets: [
        "Generate proposal structure",
        "Organize response sections",
        "Define response flow"
      ],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="#a3e635" />
          <path d="M8 13h8 M8 17h5" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "First Winnable Draft",
      cx: 840, 
      cy: 520,
      bullets: [
        "Generate initial responses",
        "Use past knowledge",
        "Create first draft"
      ],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Refine SME Collaboration",
      cx: 580, 
      cy: 520,
      bullets: [
        "SME review inputs",
        "Improve response quality",
        "Finalize proposal draft"
      ],
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="#facc15" />
          <path d="M14 2V8H20" fill="#3b82f6" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-20 md:py-24 bg-[#f8f9fa] font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="space-y-2">
            <p className="text-[14px] font-medium text-gray-500 uppercase tracking-wide">
              The Future Of RFP Responses
            </p>
            <h2 className="text-4xl md:text-[46px] font-medium text-black leading-[1.1] tracking-tight">
              From RFP to<br />Winning Proposal
            </h2>
          </div>
          <p className="text-[16px] text-gray-500 max-w-[550px] leading-relaxed md:mt-6">
            Anseru orchestrates the entire response lifecycle with AI agents analyzing requirements, generating drafts, and enabling teams to refine and deliver high-quality proposals with speed and precision.
          </p>
        </div>

        {/* Workflow Diagram Section */}
        {/* Using horizontal scroll container on small screens to preserve exact SVG layout */}
        <div className="w-full overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="relative min-w-[1050px] h-[700px] mx-auto select-none">
            
            {/* Base SVG Layer for lines and dots */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1050 700" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main curved connection path */}
              <path 
                d="M 140 350 L 20 350 C 250 350, 50 180, 340 180 L 840 180 C 1000 180, 1000 520, 840 520 L 580 520" 
                stroke="#111" 
                strokeWidth="1" 
              />
              
              {/* Dotted Lines and Circles */}
              {nodes.map((node, i) => (
                <g key={`lines-${i}`}>
                  <line 
                    x1={node.cx} y1={node.cy} 
                    x2={node.cx} y2={node.cy + 90} 
                    stroke="#111" 
                    strokeWidth="1" 
                    strokeDasharray="2 3" 
                  />
                  <circle 
                    cx={node.cx} 
                    cy={node.cy + 90} 
                    r="4.5" 
                    fill="#111" 
                  />
                </g>
              ))}
            </svg>

            {/* HTML Layer for absolute positioned Nodes and Lists */}
            {nodes.map((node, i) => (
              <React.Fragment key={`node-${i}`}>
                {/* Black Box Node */}
                <div 
                  className="absolute flex items-center gap-3 bg-[#0a0a0a] rounded-[6px] px-5 py-3 z-10"
                  style={{ 
                    left: node.cx, 
                    top: node.cy, 
                    transform: 'translate(-50%, -50%)' 
                  }}
                >
                  {node.icon}
                  <span className="text-white text-[17px] tracking-[0.01em] whitespace-nowrap">
                    {node.title}
                  </span>
                </div>

                {/* Dotted Bullet List */}
                <div 
                  className="absolute w-[220px]"
                  style={{ 
                    left: node.cx, 
                    top: node.cy + 110, 
                    transform: 'translateX(-50%)' 
                  }}
                >
                  <ul className="flex flex-col gap-[6px]">
                    {node.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-[3px] h-[3px] bg-gray-400 rounded-full mt-[8px] shrink-0"></span>
                        <span className="text-[13px] text-gray-500 leading-snug">
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