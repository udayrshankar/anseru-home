import React, { useState } from "react";

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
      iconSvg: (
        <path
          d="M32.6329 40.7918C37.1387 40.7918 40.7913 37.1392 40.7913 32.6334C40.7913 28.1277 37.1387 24.4751 32.6329 24.4751C28.1272 24.4751 24.4746 28.1277 24.4746 32.6334C24.4746 37.1392 28.1272 40.7918 32.6329 40.7918Z M32.6329 24.4751V15 M32.6329 40.7918V50 M24.4746 32.6334H15 M40.7913 32.6334H50"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
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
      iconSvg: (
        <>
          <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="42" cy="24" r="5" stroke="white" strokeWidth="2" fill="none" />
          <path d="M20 44 Q 33 34 46 44" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      ),
    },
    {
      title: "Evidence & Citation\nEngine",
      description: "Every response is backed by\ntrusted sources.",
      blueHex: "#1C36E4",
      iconPos: "top-right",
      textPos: "bottom",
      bullets: [
        "Link directly to source documents for every answer",
        "Verify claims with side-by-side document views",
        "Flag outdated information automatically",
      ],
      iconSvg: (
        <path
          d="M35 5H15C13.6739 5 12.4021 5.52678 11.4645 6.46447C10.5268 7.40215 10 8.67392 10 10V50C10 51.3261 10.5268 52.5979 11.4645 53.5355C12.4021 54.4732 13.6739 55 15 55H45C46.3261 55 47.5979 54.4732 48.5355 53.5355C49.4732 52.5979 50 51.3261 50 50V20L35 5Z M35 5V20H50 M22 35 L30 43 L42 27"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
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
      iconSvg: (
        <path
          d="M15 52.5V26.25M27 52.5V10.5M39 52.5V36.75M51 52.5V21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ];

  const AsteriskIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  );

  return (
    <div className="w-full py-20 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="space-y-3">
            <p className="text-[15px] font-medium text-gray-500">Platform Features</p>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.15] tracking-tight">
              Powerful Capabilities for<br />Modern Deal Teams
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Centralize knowledge, generate accurate responses,
            and collaborate seamlessly across teams.
          </p>
        </div>

        {/* Feature Cards Grid (Flex for transition) */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[480px]">
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className="relative bg-[#f8f9fa] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden w-full cursor-pointer"
                style={{
                  flex: hoveredIndex === -1 ? 1 : isHovered ? 2.8 : 0.85,
                }}
              >
                {/* Content Block depending on text position */}
                {feature.textPos === "top" ? (
                  <>
                    <div className="p-8 pb-4 flex-grow flex flex-col">
                      <h3 className="text-[24px] font-medium text-gray-900 mb-3 whitespace-pre-line leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] text-gray-500 leading-relaxed whitespace-pre-line">
                        {feature.description}
                      </p>

                      {/* Animated List */}
                      <div className={`grid transition-all duration-500 ease-in-out ${isHovered ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"}`}>
                        <div className="overflow-hidden">
                          <ul className="flex flex-col gap-4 pb-2">
                            {feature.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <AsteriskIcon />
                                <span className="text-[15px] text-gray-600 leading-snug">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-[104px] flex w-full shrink-0">
                      {feature.iconPos === "bottom-left" ? (
                        <>
                          <div
                            className="w-[104px] h-[104px] flex items-center justify-center shrink-0"
                            style={{ backgroundColor: feature.blueHex }}
                          >
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                              {feature.iconSvg}
                            </svg>
                          </div>
                          <div className="flex-grow h-full" style={stripedStyle}></div>
                        </>
                      ) : (
                        <>
                          <div className="flex-grow h-full" style={stripedStyle}></div>
                          <div
                            className="w-[104px] h-[104px] flex items-center justify-center shrink-0"
                            style={{ backgroundColor: feature.blueHex }}
                          >
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                              {feature.iconSvg}
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-[104px] flex w-full shrink-0">
                      {feature.iconPos === "top-left" ? (
                        <>
                          <div
                            className="w-[104px] h-[104px] flex items-center justify-center shrink-0"
                            style={{ backgroundColor: feature.blueHex }}
                          >
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                              {feature.iconSvg}
                            </svg>
                          </div>
                          <div className="flex-grow h-full" style={stripedStyle}></div>
                        </>
                      ) : (
                        <>
                          <div className="flex-grow h-full" style={stripedStyle}></div>
                          <div
                            className="w-[104px] h-[104px] flex items-center justify-center shrink-0"
                            style={{ backgroundColor: feature.blueHex }}
                          >
                            <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
                              {feature.iconSvg}
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="flex-grow" />
                    
                    <div className="p-8 pt-4 flex flex-col justify-end">
                      <h3 className="text-[24px] font-medium text-gray-900 mb-3 whitespace-pre-line leading-tight shrink-0">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] text-gray-500 leading-relaxed whitespace-pre-line shrink-0">
                        {feature.description}
                      </p>

                      {/* Animated List */}
                      <div className={`grid transition-all duration-500 ease-in-out ${isHovered ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"}`}>
                        <div className="overflow-hidden">
                          <ul className="flex flex-col gap-4 pb-2">
                            {feature.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <AsteriskIcon />
                                <span className="text-[15px] text-gray-600 leading-snug">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}