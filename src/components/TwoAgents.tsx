import { useState, useRef, useEffect } from 'react';
import sudIcon from '../assets/Sud.png';
import kgIcon from '../assets/kg.png';
import noiseImage from '../assets/noise.png';
import frame9 from '../assets/Frame (9).png';
import frame10 from '../assets/Frame (10).png';

/* ── Agent data ─────────────────────────────────────────────────── */

const agentData = {
  KG: {
    title: "RFP Agent",
    gradient: "linear-gradient(180deg, #201cae 0%, #6aa4ee 100%)",
    tags: ["Instant RFP breakdown", "Terminology translation", "Proposal-ready answers"],
    stats: [
      {
        heading: "Instant RFP\nintelligence",
        detail: "Automatically extracts key\nrequirements, timelines,\nstakeholders, and evaluation criteria.",
      },
      {
        heading: "Terminology\nmapping",
        detail: "Translates feature requirements to\nyour internal product language.",
      },
      {
        heading: "Bid / No-\nBid clarity",
        detail: "Helps teams decide whether to\npursue..",
      },
    ],
    switchLabel: "Meet KG",
    switchIcon: sudIcon,
    decorativeImage: frame9,
  },
  SUD: {
    title: "Security\nQuestionnaire Agent",
    gradient: "linear-gradient(45deg, #1d80f9 0%, #e74f62 100%)",
    tags: ["Evidence-backed answers", "No contradictions", "Compliance-ready"],
    stats: [
      {
        heading: "95%+ response\naccuracy",
        detail: "Answers generated from verified policies and security documentation",
      },
      {
        heading: "70–90% faster\nsecurity reviews",
        detail: "Eliminate repetitive questionnaires across deals",
      },
      {
        heading: "100% audit-ready\nanswers",
        detail: "Automatically detects outdated responses",
      },
    ],
    switchLabel: "Meet SUD",
    switchIcon: kgIcon,
    decorativeImage: frame10,
  },
};

/* ── Main component ─────────────────────────────────────────────── */

export default function TwoAgents() {
  const [activeAgent, setActiveAgent] = useState<'KG' | 'SUD'>('KG');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const slideWidth = scrollContainerRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    const newAgent = newIndex === 0 ? 'KG' : 'SUD';
    if (newAgent !== activeAgent) setActiveAgent(newAgent);
  };

  useEffect(() => {
    // Component uses native horizontal scrolling with snap-x.
  }, []);

  const scrollToAgent = (agent: 'KG' | 'SUD') => {
    if (!scrollContainerRef.current) return;
    const slideWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: agent === 'KG' ? 0 : slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div className="space-y-1">
            <p className="text-[14px] text-gray-500 font-medium">Proven Results</p>
            <h2 className="text-3xl md:text-[42px] font-medium text-black" style={{ letterSpacing: '-0.02em' }}>
              Two Super Agents
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => scrollToAgent('KG')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[16px] transition-all cursor-pointer ${
                activeAgent === 'KG'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-gray-200'
              }`}
            >
              Meet KG
              <img
                src={sudIcon}
                alt="KG"
                width="16"
                height="16"
                className={activeAgent === 'KG' ? '' : 'invert-0'}
              />
            </button>
            <button
              onClick={() => scrollToAgent('SUD')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[16px] transition-all cursor-pointer ${
                activeAgent === 'SUD'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-gray-200'
              }`}
            >
              Meet SUD
              <img
                src={kgIcon}
                alt="SUD"
                width="16"
                height="16"
                className={activeAgent === 'SUD' ? 'brightness-0 invert' : ''}
              />
            </button>
          </div>
        </div>

        {/* ── Main content – bordered container ───────────────── */}
        <div className="border border-[#e5e7eb] rounded-xl overflow-hidden bg-white">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: 'smooth' }}
          >
            {Object.entries(agentData).map(([key, agent]) => (
              <div key={key} className="min-w-full w-full flex flex-col lg:flex-row flex-shrink-0 snap-start items-stretch">

                {/* LEFT: Agent visual card */}
                <div className="lg:w-[48%] p-3.5 bg-white border-b lg:border-b-0 lg:border-r border-[#e5e7eb] flex-shrink-0">
                  <div
                    className="relative flex flex-col justify-between p-10 h-[500px] md:h-[540px] overflow-hidden"
                    style={{ background: agent.gradient }}
                  >
                    {/* Noise texture */}
                    <div
                      className="absolute inset-0 opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: `url(${noiseImage})`,
                        backgroundSize: '200px 200px',
                      }}
                    />

                    {/* Decorative image */}
                    <div className="relative">
                      <img
                        src={agent.decorativeImage}
                        alt=""
                        className="w-36 h-auto opacity-90"
                      />
                    </div>

                    {/* Agent name + tags */}
                    <div className="relative mt-auto">
                      <h3 className="text-white text-[32px] md:text-[36px] font-medium tracking-tight mb-2 leading-tight whitespace-pre-line">
                        {agent.title}
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {agent.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-white text-[13px] md:text-[14px] px-3.5 py-1.5 bg-white/20 rounded-[4px] border border-white/40 font-normal"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Stats grid */}
                <div className='p-4 border border-l-black relative overflow-hidden'>
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.2]" 
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #000 1px, transparent 1px),
                        linear-gradient(to bottom, #000 1px, transparent 1px)
                      `,
                      backgroundSize: '150px 150px'
                    }}
                  />
                  
                    <div className="h-full grid grid-cols-2 grid-rows-2 bg-[#f4f4f5] relative z-10">
                      {/* Top Left */}
                      <div className="p-8 md:p-10 flex flex-col justify-between border-b border-r border-[#e5e7eb]">
                        <h4 className="text-[24px] font-medium text-black whitespace-pre-line" style={{ lineHeight: '1.2', letterSpacing: '-0.03em' }}>
                          {agent.stats[0].heading}
                        </h4>
                        <p className="text-[14px] text-black font-medium leading-relaxed">
                          {agent.stats[0].detail}
                        </p>
                      </div>
                      {/* Top Right */}
                      <div className="p-8 md:p-10 flex flex-col justify-between border-b border-[#e5e7eb] ">
                        <h4 className="text-[24px] font-medium text-black whitespace-pre-line" style={{ lineHeight: '1.2', letterSpacing: '-0.03em' }}>
                          {agent.stats[1].heading}
                        </h4>
                        <p className="text-[14px] text-black font-medium leading-relaxed">
                          {agent.stats[1].detail}
                        </p>
                      </div>
                      {/* Bottom Left */}
                      <div className="p-8 md:p-10 flex flex-col justify-between border-r border-[#e5e7eb]">
                        <h4 className="text-[24px] font-medium text-black whitespace-pre-line" style={{ lineHeight: '1.2', letterSpacing: '-0.03em' }}>
                          {agent.stats[2].heading}
                        </h4>
                        <p className="text-[14px] text-black font-medium leading-relaxed">
                          {agent.stats[2].detail}
                        </p>
                      </div>
                      {/* Bottom Right – Switch button */}
                      <div className="p-8 md:p-10 flex flex-col justify-end items-end">
                        <button
                          onClick={() => scrollToAgent(key === 'KG' ? 'SUD' : 'KG')}
                          className="flex items-center gap-2 bg-black text-white text-[14px] font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                        >
                          {agent.switchLabel}
                          <img src={agent.switchIcon} alt="" width="16" height="16" />
                        </button>
                      </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}