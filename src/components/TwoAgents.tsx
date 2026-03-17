import { useState, useRef, useEffect } from 'react';
import knoxIcon from '../assets/Sud.png';
import kgIcon from '../assets/kg.png';
import noiseImage from '../assets/noise.png';
import frame9 from '../assets/Frame (9).png';
import frame10 from '../assets/Frame (10).png';


const agentData = {
  archer: {
    title: "RFP Agent",
    gradient: "linear-gradient(180deg, #201cae 0%, #6aa4ee 100%)",
    tags: ["Instant RFP breakdown", "Terminology translation", "Proposal-ready answers"],
    stats: [
      {
        heading: "Instant RFP\nintelligence",
        detail: "Automatically extracts key requirements, timelines, stakeholders, and evaluation criteria.",
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
    switchLabel: "Meet archer",
    switchIcon: knoxIcon,
    decorativeImage: frame9,
  },
  knox: {
    title: "Security\nQuestionnaire Agent",
    gradient: "linear-gradient(45deg, #1d80f9 0%, #e74f62 100%)",
    tags: ["Evidence-backed answers", "No contradictions", "Compliance-ready"],
    stats: [
      {
        heading: "95%+ response\naccuracy",
        detail: "Generated from verified security documentation.",
      },
      {
        heading: "70–90% faster\nsecurity reviews",
        detail: "Eliminates repetitive questionnaires saving SME time",
      },
      {
        heading: "Audit-ready\nanswers",
        detail: "Aligned with current policies and controls.",
      },
    ],
    switchLabel: "Meet knox",
    switchIcon: kgIcon,
    decorativeImage: frame10,
  },
};


export default function TwoAgents() {
  const [activeAgent, setActiveAgent] = useState<'archer' | 'knox'>('archer');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const slideWidth = scrollContainerRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    const newAgent = newIndex === 0 ? 'archer' : 'knox';
    if (newAgent !== activeAgent) setActiveAgent(newAgent);
  };

  useEffect(() => {
  }, []);

  const scrollToAgent = (agent: 'archer' | 'knox') => {
    if (!scrollContainerRef.current) return;
    const slideWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: agent === 'archer' ? 0 : slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div className="space-y-1">
            <p className="anseru-section-tag">Proven Results</p>
            <h2 className="anseru-section-title">
              Two Super Agents
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => scrollToAgent('archer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[16px] transition-all cursor-pointer ${
                activeAgent === 'archer'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-gray-200'
              }`}
            >
              Meet archer
              <img
                src={knoxIcon}
                alt="archer"
                width="16"
                height="16"
                className={activeAgent === 'archer' ? '' : 'invert-0'}
              />
            </button>
            <button
              onClick={() => scrollToAgent('knox')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[16px] transition-all cursor-pointer ${
                activeAgent === 'knox'
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-gray-200'
              }`}
            >
              Meet knox
              <img
                src={kgIcon}
                alt="knox"
                width="16"
                height="16"
                className={activeAgent === 'knox' ? 'brightness-0 invert' : ''}
              />
            </button>
          </div>
        </div>

        {/* ── Main content – bordered container ───────────────── */}
        <div className="border border-[#e5e7eb] rounded-xl overflow-hidden bg-white">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: 'smooth' }}
          >
            {Object.entries(agentData).map(([key, agent]) => (
              <div key={key} className="min-w-full w-full flex flex-col lg:flex-row flex-shrink-0 items-stretch">

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
                <div className='p-4 relative overflow-hidden'>
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.1]" 
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
                        <h4 className="text-[24px] font-normal text-black whitespace-pre-line leading-[1.2] tracking-[-0.03em]">
                          {agent.stats[0].heading}
                        </h4>
                        <p className="anseru-section-description">
                          {agent.stats[0].detail}
                        </p>
                      </div>
                      {/* Top Right */}
                      <div className="p-8 md:p-10 flex flex-col justify-between border-b border-[#e5e7eb] ">
                        <h4 className="text-[24px] font-normal text-black whitespace-pre-line leading-[1.2] tracking-[-0.03em]">
                          {agent.stats[1].heading}
                        </h4>
                        <p className="anseru-section-description">
                          {agent.stats[1].detail}
                        </p>
                      </div>
                      {/* Bottom Left */}
                      <div className="p-8 md:p-10 flex flex-col justify-between border-r border-[#e5e7eb]">
                        <h4 className="text-[24px] font-normal text-black whitespace-pre-line leading-[1.2] tracking-[-0.03em]">
                          {agent.stats[2].heading}
                        </h4>
                        <p className="anseru-section-description">
                          {agent.stats[2].detail}
                        </p>
                      </div>
                      {/* Bottom Right – Switch button */}
                      <div className="p-8 md:p-10 flex flex-col justify-end items-end">
                        <button
                          onClick={() => scrollToAgent(key === 'archer' ? 'knox' : 'archer')}
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