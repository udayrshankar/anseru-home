import { useState } from "react";

import IconLiving from "../assets/living.png";
import IconFrame from "../assets/Frame.png";
import IconEvidence from "../assets/evidence.png";
import IconGovernance from "../assets/governance.png";

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const stripedStyle = {
    backgroundImage:
      "repeating-linear-gradient(90deg, #f3f4f6 0px, #f3f4f6 1px, transparent 1px, transparent 12px)",
  };

  const features = [
    {
      title: "Living\nKnowledge Graph",
      description: "Centralize and continuously improve\nyour RFP knowledge.",
      blueHex: "#1C36E4",
      iconPos: "top-left",
      textPos: "bottom",
      bullets: [
        "Automatically indexes past RFPs, security docs, and content",
        "Keeps responses accurate with up-to-date sources",
        "Improves continuously as teams use the platform",
      ],
      iconPng: IconLiving,
    },
    {
      title: "Cross-Team\nCollaboration",
      description: "Work together across teams to deliver winning\nresponses.",
      blueHex: "#1C36E4",
      iconPos: "bottom-right",
      textPos: "top",
      bullets: [
        "Assign questions to Subject Matter Experts effortlessly",
        "Track progress and approvals in real-time",
        "Integrate directly with your existing workspace tools",
      ],
      iconPng: IconFrame,
    },
    {
      title: "Evidence & Citation engine",
      description: "Every response is backed by\ntrusted sources.",
      blueHex: "#1C36E4",
      iconPos: "top-right",
      textPos: "bottom",
      bullets: [
        "Link directly to source documents for every answer",
        "Verify claims with side-by-side document views",
        "Flag outdated information automatically",
      ],
      iconPng: IconEvidence,
    },
    {
      title: "Governance &\nAnalytics",
      description: "Maintain control and visibility across\nthe entire process.",
      blueHex: "#1C36E4",
      iconPos: "bottom-right",
      textPos: "top",
      bullets: [
        "Monitor team performance and response times",
        "Set up role-based access control and permissions",
        "Export detailed reports and audit logs for review",
      ],
      iconPng: IconGovernance,
    },
  ];

  const AsteriskIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  );

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="space-y-3">
            <p className="anseru-section-tag">Platform Features</p>
            <h2 className="anseru-section-title">
              Powerful Capabilities for<br className="hidden md:block" /> Modern Deal Teams
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
            Centralize knowledge, generate accurate responses,
            and collaborate seamlessly across teams.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-4">
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className={`relative bg-[#f8f9fa] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden w-full cursor-pointer lg:h-[480px] ${isHovered ? 'min-h-[400px] lg:min-h-0' : 'min-h-[200px] lg:min-h-0'}`}
                style={{
                  flex: hoveredIndex === -1 ? 1 : isHovered ? 2.8 : 0.85,
                }}
              >
                {/* Content Block */}
                <div className="flex flex-col flex-grow h-full">
                  {feature.textPos === "top" && !isHovered ? (
                    <>
                      <div className={`p-6 md:p-8 flex-grow transition-all duration-500 ${isHovered ? 'md:pl-4' : ''}`}>
                        <h3 className="text-xl md:text-[24px] font-medium text-gray-900 mb-3 whitespace-pre-line leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed whitespace-pre-line">
                          {feature.description}
                        </p>

                        {/* Animated List */}
                        <div className={`grid transition-all duration-500 ease-in-out ${isHovered ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"}`}>
                          <div className="overflow-hidden">
                            <ul className="flex flex-col gap-4 pb-4">
                              {feature.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <AsteriskIcon />
                                  <span className="text-sm md:text-[15px] text-gray-600 leading-snug">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="h-20 md:h-[104px] flex w-full shrink-0 mt-auto">
                        <div className={`flex-grow h-full ${feature.iconPos === "bottom-left" ? "order-2" : "order-1"}`} style={stripedStyle}></div>
                        <div
                          className={`w-20 md:w-[104px] h-20 md:h-[104px] flex items-center justify-center shrink-0 ${feature.iconPos === "bottom-left" ? "order-1" : "order-2"}`}
                          style={{ backgroundColor: feature.blueHex }}
                        >
                          <img src={feature.iconPng} alt="" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="h-20 md:h-[104px] flex w-full shrink-0">
                        <div
                          className={`w-20 md:w-[104px] h-20 md:h-[104px] flex items-center justify-center shrink-0 ${ (isHovered || feature.iconPos === "top-left") ? "order-1" : "order-2"}`}
                          style={{ backgroundColor: feature.blueHex }}
                        >
                          <img src={feature.iconPng} alt="" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
                        </div>
                        <div className={`flex-grow h-full ${ (isHovered || feature.iconPos === "top-left") ? "order-2" : "order-1"}`} style={stripedStyle}></div>
                      </div>

                      <div className={`p-6 md:p-8 flex flex-col justify-end flex-grow transition-all duration-500 ${isHovered ? 'md:pl-20' : ''}`}>
                        <h3 className="text-xl md:text-[24px] font-medium text-gray-900 mb-3 whitespace-pre-line leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed whitespace-pre-line">
                          {feature.description}
                        </p>

                        {/* Animated List */}
                        <div className={`grid transition-all duration-500 ease-in-out ${isHovered ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"}`}>
                          <div className="overflow-hidden">
                            <ul className="flex flex-col gap-4 pb-4">
                              {feature.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <AsteriskIcon />
                                  <span className="text-sm md:text-[15px] text-gray-600 leading-snug">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}