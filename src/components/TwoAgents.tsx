import React, { useState } from 'react';

export default function TwoAgents() {
  const [activeAgent, setActiveAgent] = useState('sud'); // 'sud' or 'kg'

  return (
    <div className="w-full py-24 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Proven Results</p>
            <h2 className="text-4xl md:text-[44px] tracking-tight font-medium text-black">
              Two Super Agents
            </h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-[#f4f4f5] rounded-xl p-1 h-12">
            <button 
              onClick={() => setActiveAgent('sud')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-[15px] transition shadow-sm ${
                activeAgent === 'sud' ? 'bg-black text-white' : 'text-black hover:bg-gray-200 shadow-none'
              }`}
            >
              Meet KG
              <div className="flex -space-x-[6px] opacity-90">
                <div className={`w-[10px] h-[10px] rounded-sm transform rotate-45 ${activeAgent === 'sud' ? 'bg-[#93c5fd]' : 'bg-[#60a5fa]'}`}></div>
                <div className={`w-[10px] h-[10px] rounded-sm transform rotate-45 mt-[6px] ${activeAgent === 'sud' ? 'bg-[#eab308]' : 'bg-[#ca8a04]'}`}></div>
              </div>
            </button>
            <button 
              onClick={() => setActiveAgent('kg')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-[15px] transition ${
                activeAgent === 'kg' ? 'bg-black text-white shadow-sm' : 'text-black hover:bg-gray-200'
              }`}
            >
              Meet SUD 
              <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[2px]">
                <path d="M17.4266 14.0744C16.8526 14.6484 15.9217 14.6484 15.3477 14.0744L12.8133 11.5399C12.2392 10.9658 12.2392 10.0351 12.8133 9.46104L15.3477 6.92661C15.9217 6.35253 16.8526 6.35253 17.4266 6.92661L19.9611 9.46103C20.5351 10.0351 20.5351 10.9658 19.9611 11.5399L17.4266 14.0744Z" fill={activeAgent === 'kg' ? "white" : "black"} />
                <path d="M5.65325 14.0744C5.07918 14.6484 4.14842 14.6484 3.57435 14.0744L1.03993 11.5399C0.465858 10.9658 0.465857 10.0351 1.03993 9.46104L3.57435 6.92661C4.14842 6.35253 5.07918 6.35253 5.65325 6.92661L8.18767 9.46103C8.76174 10.0351 8.76174 10.9658 8.18767 11.5399L5.65325 14.0744Z" fill={activeAgent === 'kg' ? "#a3b800" : "black"} />
                <path d="M11.54 19.961C10.9658 20.5351 10.0351 20.5351 9.46103 19.961L6.9266 17.4266C6.35254 16.8526 6.35254 15.9217 6.9266 15.3477L9.46103 12.8133C10.0351 12.2392 10.9658 12.2392 11.54 12.8133L14.0744 15.3477C14.6484 15.9217 14.6484 16.8526 14.0744 17.4266L11.54 19.961Z" fill={activeAgent === 'kg' ? "#a3b800" : "black"} />
                <path d="M11.54 8.18767C10.9658 8.76174 10.0351 8.76175 9.46103 8.18767L6.9266 5.65324C6.35254 5.07918 6.35254 4.14843 6.9266 3.57435L9.46103 1.03993C10.0351 0.465858 10.9658 0.465857 11.54 1.03993L14.0744 3.57435C14.6484 4.14843 14.6484 5.07918 14.0744 5.65324L11.54 8.18767Z" fill={activeAgent === 'kg' ? "white" : "black"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] relative">
            
          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-[-20px] bottom-[-20px] w-px bg-gray-300 transform -translate-x-1/2 z-10"></div>

          {/* LEFT: Agent Visual */}
          <div className="lg:w-1/2 lg:pr-14 flex flex-col relative z-20">
            {activeAgent === 'sud' ? (
              // SUD VISUAL (RFP Agent)
              <div
                className="relative flex-grow flex flex-col justify-between p-10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1d36a8 0%, #294ae0 40%, #4369fb 70%, #5880ff 100%)",
                  backgroundSize: "cover",
                }}
              >
                {/* Noise texture overlay */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Top Left Diamonds */}
                <div className="relative pt-4 pl-4">
                   <div className="relative w-32 h-32">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/40 rounded-[10px] rotate-45 backdrop-blur-sm"></div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-14 h-14 bg-white/40 rounded-[10px] rotate-45 backdrop-blur-sm"></div>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-14 h-14 bg-white/40 rounded-[10px] rotate-45 backdrop-blur-sm"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/40 rounded-[10px] rotate-45 backdrop-blur-sm"></div>
                   </div>
                </div>

                {/* Bottom Details */}
                <div className="relative mt-auto pt-20">
                  <h3 className="text-white text-[32px] font-medium tracking-tight mb-5">RFP Agent</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-white text-[13px] px-3 py-1.5 rounded-[4px] border border-white/30 bg-white/10 backdrop-blur-sm font-medium">
                      80% faster drafting
                    </span>
                    <span className="text-white text-[13px] px-3 py-1.5 rounded-[4px] border border-white/30 bg-white/10 backdrop-blur-sm font-medium">
                      Understands complex RFPs
                    </span>
                    <span className="text-white text-[13px] px-3 py-1.5 rounded-[4px] border border-white/30 bg-white/10 backdrop-blur-sm font-medium">
                      Helps sales close deals
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              // KG VISUAL (Security Questionnaire Agent)
              <div
                className="relative flex-grow flex flex-col justify-between p-10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #3b5bdb 0%, #6f42c1 40%, #d6336c 70%, #fa5252 100%)", // Matches the uploaded image gradient
                  backgroundSize: "cover",
                }}
              >
                {/* Noise texture overlay */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Top Left Shape (Connecting Squares) */}
                <div className="relative pt-4 pl-4">
                   <div className="relative w-40 h-40 flex">
                      <div className="w-[85px] h-[85px] bg-white/40 rounded-[20px] backdrop-blur-sm relative z-10"></div>
                      <div className="w-[85px] h-[85px] bg-white/40 rounded-[20px] backdrop-blur-sm absolute bottom-0 right-0 z-0"></div>
                   </div>
                </div>

                {/* Bottom Details */}
                <div className="relative mt-auto pt-20">
                  <h3 className="text-white text-[32px] font-medium tracking-tight mb-5 leading-tight">
                    Security<br/>Questionnaire Agent
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-white text-[13px] px-3 py-1.5 rounded-[4px] border border-white/30 bg-white/10 backdrop-blur-sm font-medium">
                      Evidence-backed answers
                    </span>
                    <span className="text-white text-[13px] px-3 py-1.5 rounded-[4px] border border-white/30 bg-white/10 backdrop-blur-sm font-medium">
                      No contradictions
                    </span>
                    <span className="text-white text-[13px] px-3 py-1.5 rounded-[4px] border border-white/30 bg-white/10 backdrop-blur-sm font-medium mt-1">
                      Compliance-ready
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Stats Grid */}
          <div className="lg:w-1/2 lg:pl-4 flex flex-col relative z-0">
             <div className="flex-grow grid grid-cols-2 grid-rows-2">
                
                {/* Top Left */}
                <div className="bg-[#f4f4f5] p-8 pb-10 flex flex-col justify-between border-r border-b border-gray-200">
                    <h4 className="text-[22px] font-medium text-black leading-[1.2] tracking-tight">
                        {activeAgent === 'sud' ? "Instant, deal-ready\nfirst drafts" : "95%+ response\naccuracy"}
                    </h4>
                    <div className="mt-16">
                      {activeAgent === 'kg' && <h5 className="text-[14px] text-black font-medium mb-1">Evidence-Backed Responses</h5>}
                      <p className="text-[13px] text-gray-600 font-medium">
                          {activeAgent === 'sud' 
                            ? "80% reduction in drafting time" 
                            : "Answers generated from verified policies and security documentation"}
                      </p>
                    </div>
                </div>

                {/* Top Right */}
                <div className="bg-[#f4f4f5] p-8 pb-10 flex flex-col justify-between border-b border-gray-200 relative">
                     {/* Horizontal extend lines for design */}
                    <div className="absolute top-1/4 -right-10 w-10 h-px bg-gray-200 hidden lg:block"></div>
                    <div className="absolute top-1/2 -right-10 w-10 h-px bg-gray-200 hidden lg:block"></div>
                    <div className="absolute top-3/4 -right-10 w-10 h-px bg-gray-200 hidden lg:block"></div>

                    <h4 className="text-[22px] font-medium text-black leading-[1.2] tracking-tight">
                        {activeAgent === 'sud' ? "80% reduction in\ndrafting time" : "70-90% faster\nsecurity reviews"}
                    </h4>
                    <div className="mt-16 pr-4">
                      {activeAgent === 'kg' && <h5 className="text-[14px] text-black font-medium mb-1">Faster Security Reviews</h5>}
                      <p className="text-[13px] text-gray-600 font-medium">
                          {activeAgent === 'sud' 
                            ? "Handles messy formats and duplicate questions" 
                            : "Eliminate repetitive questionnaires across deals"}
                      </p>
                    </div>
                </div>

                {/* Bottom Left */}
                <div className="bg-[#f4f4f5] p-8 pb-10 flex flex-col justify-between border-r border-gray-200 relative">
                    {/* Vertical extend lines for design */}
                    <div className="absolute bottom-[-20px] left-1/4 w-px h-5 bg-gray-200 hidden lg:block"></div>
                    <div className="absolute bottom-[-20px] right-1/4 w-px h-5 bg-gray-200 hidden lg:block"></div>

                    <h4 className="text-[22px] font-medium text-black leading-[1.2] tracking-tight">
                        {activeAgent === 'sud' ? "Human review\nwhere it matters" : "100% audit-ready\nanswers"}
                    </h4>
                    <div className="mt-16">
                      {activeAgent === 'kg' && <h5 className="text-[14px] text-black font-medium mb-1">Always Current & Audit-Ready</h5>}
                      <p className="text-[13px] text-gray-600 font-medium">
                          {activeAgent === 'sud' 
                            ? "75% fewer SME touchpoints" 
                            : "Automatically detects outdated responses"}
                      </p>
                    </div>
                </div>

                {/* Bottom Right - Empty space with button */}
                <div className="bg-[#f4f4f5] p-8 pb-10 flex flex-col justify-end items-end relative">
                     <div className="absolute bottom-[-20px] left-1/4 w-px h-5 bg-gray-200 hidden lg:block"></div>
                     <div className="absolute top-1/4 -right-10 w-10 h-px bg-gray-200 hidden lg:block"></div>

                    <button 
                      onClick={() => setActiveAgent(activeAgent === 'sud' ? 'kg' : 'sud')}
                      className="flex items-center gap-2 bg-black text-white text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-800 transition shadow-sm"
                    >
                        {activeAgent === 'sud' ? "Meet KG" : "Meet SUD"}
                        {activeAgent === 'sud' ? (
                          <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1px]">
                              <path d="M17.4266 14.0744C16.8526 14.6484 15.9217 14.6484 15.3477 14.0744L12.8133 11.5399C12.2392 10.9658 12.2392 10.0351 12.8133 9.46104L15.3477 6.92661C15.9217 6.35253 16.8526 6.35253 17.4266 6.92661L19.9611 9.46103C20.5351 10.0351 20.5351 10.9658 19.9611 11.5399L17.4266 14.0744Z" fill="white" />
                              <path d="M5.65325 14.0744C5.07918 14.6484 4.14842 14.6484 3.57435 14.0744L1.03993 11.5399C0.465858 10.9658 0.465857 10.0351 1.03993 9.46104L3.57435 6.92661C4.14842 6.35253 5.07918 6.35253 5.65325 6.92661L8.18767 9.46103C8.76174 10.0351 8.76174 10.9658 8.18767 11.5399L5.65325 14.0744Z" fill="#a3b800" />
                              <path d="M11.54 19.961C10.9658 20.5351 10.0351 20.5351 9.46103 19.961L6.9266 17.4266C6.35254 16.8526 6.35254 15.9217 6.9266 15.3477L9.46103 12.8133C10.0351 12.2392 10.9658 12.2392 11.54 12.8133L14.0744 15.3477C14.6484 15.9217 14.6484 16.8526 14.0744 17.4266L11.54 19.961Z" fill="#a3b800" />
                              <path d="M11.54 8.18767C10.9658 8.76174 10.0351 8.76175 9.46103 8.18767L6.9266 5.65324C6.35254 5.07918 6.35254 4.14843 6.9266 3.57435L9.46103 1.03993C10.0351 0.465858 10.9658 0.465857 11.54 1.03993L14.0744 3.57435C14.6484 4.14843 14.6484 5.07918 14.0744 5.65324L11.54 8.18767Z" fill="white" />
                          </svg>
                        ) : (
                          <div className="flex -space-x-[6px] opacity-90 mt-[1px]">
                            <div className="w-[8px] h-[8px] bg-[#93c5fd] rounded-sm transform rotate-45"></div>
                            <div className="w-[8px] h-[8px] bg-[#eab308] rounded-sm transform rotate-45 mt-[4px]"></div>
                          </div>
                        )}
                    </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}