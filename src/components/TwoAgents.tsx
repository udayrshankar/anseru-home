import { useState } from 'react';
import sudIcon from '../assets/Sud.png';
import kgIcon from '../assets/kg.png';

/* ── Agent data ─────────────────────────────────────────────────── */

const agentData = {
  sud: {
    title: "RFP Agent",
    gradient: "linear-gradient(135deg, #1d36a8 0%, #294ae0 40%, #4369fb 70%, #5880ff 100%)",
    tags: ["80% faster drafting", "Understands complex RFPs", "Helps sales close deals"],
    stats: [
      {
        heading: "Instant, deal-ready\nfirst drafts",
        detail: "80% reduction in drafting time",
      },
      {
        heading: "80% reduction in\ndrafting time",
        detail: "Handles messy formats and\nduplicate questions",
      },
      {
        heading: "Human review\nwhere it matters",
        detail: "75% fewer SME touchpoints",
      },
    ],
    switchLabel: "Meet KG",
    switchIcon: kgIcon,
    diamonds: true,
  },
  kg: {
    title: "Security\nQuestionnaire Agent",
    gradient: "linear-gradient(135deg, #3b5bdb 0%, #6f42c1 40%, #d6336c 70%, #fa5252 100%)",
    tags: ["Evidence-backed answers", "No contradictions", "Compliance-ready"],
    stats: [
      {
        heading: "95%+ response\naccuracy",
        subheading: "Evidence-Backed Responses",
        detail: "Answers generated from verified policies and security documentation",
      },
      {
        heading: "70\u201390% faster\nsecurity reviews",
        subheading: "Faster Security Reviews",
        detail: "Eliminate repetitive questionnaires across deals",
      },
      {
        heading: "100% audit-ready\nanswers",
        subheading: "Always Current & Audit-Ready",
        detail: "Automatically detects outdated responses",
      },
    ],
    switchLabel: "Meet SUD",
    switchIcon: sudIcon,
    diamonds: false,
  },
};

/* ── Main component ─────────────────────────────────────────────── */

export default function TwoAgents() {
  const [activeAgent, setActiveAgent] = useState<'sud' | 'kg'>('sud');
  const agent = agentData[activeAgent];

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Proven Results</p>
            <h2 className="text-3xl md:text-[44px] font-medium text-black" style={{ letterSpacing: '-0.03em' }}>
              Two Super Agents
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveAgent('sud')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[15px] transition-all cursor-pointer ${activeAgent === 'sud'
                ? 'bg-black text-white'
                : 'bg-transparent text-black hover:bg-gray-100'
                }`}
            >
              Meet Sud
              <img src={sudIcon} alt="Sud" width="18" height="18" className={activeAgent === 'sud' ? 'brightness-0 invert' : ''} />
            </button>
            <button
              onClick={() => setActiveAgent('kg')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[15px] transition-all cursor-pointer ${activeAgent === 'kg'
                ? 'bg-black text-white'
                : 'bg-transparent text-black hover:bg-gray-100'
                }`}
            >
              Meet Kg
              <img src={kgIcon} alt="Kg" width="18" height="18" className={activeAgent === 'kg' ? 'brightness-0 invert' : ''} />
            </button>
          </div>
        </div>

        {/* ── Main content – bordered container ───────────────── */}
        <div className="border border-gray-300 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* LEFT: Agent visual card — with margin */}
            <div className="lg:w-[42%] p-3 md:p-4 relative">
              <div
                className="relative flex flex-col justify-between p-8 md:p-10 h-[460px] md:h-[520px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
                style={{ background: agent.gradient }}
              >
                {/* Noise texture */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Decorative shapes — outline only, no fill */}
                <div className="relative pt-4 pl-4">
                  {agent.diamonds ? (
                    <div className="relative w-28 h-28 md:w-36 md:h-36">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 border-2 border-white/40 rounded-[10px] rotate-45" />
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 border-2 border-white/40 rounded-[10px] rotate-45" />
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 border-2 border-white/40 rounded-[10px] rotate-45" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 border-2 border-white/40 rounded-[10px] rotate-45" />
                    </div>
                  ) : (
                    <div className="relative w-36 h-36 md:w-44 md:h-44 flex">
                      <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white/40 rounded-[18px] relative z-10" />
                      <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] border-2 border-white/40 rounded-[18px] absolute bottom-0 right-0 z-0" />
                    </div>
                  )}
                </div>

                {/* Agent name + tags — unfilled, border-only pills */}
                <div className="relative mt-auto pt-10">
                  <h3 className="text-white text-2xl md:text-[32px] font-semibold tracking-tight mb-5 leading-tight whitespace-pre-line transition-all duration-500 ease-in-out">
                    {agent.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {agent.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-white text-[12px] md:text-[13px] px-3.5 py-1.5 rounded-[5px] border border-white/30 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 1px vertical divider line */}
            <div className="hidden lg:block w-px bg-gray-300 flex-shrink-0" />

            {/* RIGHT: Stats grid — #F3F3F1 at 68% opacity */}
            <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 transition-all duration-500 ease-in-out">
              {/* Top Left */}
              <div className="p-7 md:p-8 flex flex-col justify-between border-b border-r border-gray-200 h-full" style={{ backgroundColor: 'rgba(243, 243, 241, 0.68)' }}>
                <h4 className="text-[22px] md:text-[25.73px] font-medium text-black whitespace-pre-line transition-all duration-500 ease-in-out" style={{ lineHeight: '100%', letterSpacing: '-0.04em' }}>
                  {agent.stats[0].heading}
                </h4>
                <div className="mt-8">
                  {'subheading' in agent.stats[0] && agent.stats[0].subheading && (
                    <p className="text-[14px] md:text-[16px] text-black font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>
                      {agent.stats[0].subheading}
                    </p>
                  )}
                  <p className="text-[13px] md:text-[14px] text-gray-500 font-normal" style={{ lineHeight: '1.4', letterSpacing: '-0.01em' }}>
                    {agent.stats[0].detail}
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="p-7 md:p-8 flex flex-col justify-between border-b border-gray-200 h-full" style={{ backgroundColor: 'rgba(243, 243, 241, 0.68)' }}>
                <h4 className="text-[22px] md:text-[25.73px] font-medium text-black whitespace-pre-line transition-all duration-500 ease-in-out" style={{ lineHeight: '100%', letterSpacing: '-0.04em' }}>
                  {agent.stats[1].heading}
                </h4>
                <div className="mt-8">
                  {'subheading' in agent.stats[1] && agent.stats[1].subheading && (
                    <p className="text-[14px] md:text-[16px] text-black font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>
                      {agent.stats[1].subheading}
                    </p>
                  )}
                  <p className="text-[13px] md:text-[14px] text-gray-500 font-normal" style={{ lineHeight: '1.4', letterSpacing: '-0.01em' }}>
                    {agent.stats[1].detail}
                  </p>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="p-7 md:p-8 flex flex-col justify-between border-r border-gray-200 h-full" style={{ backgroundColor: 'rgba(243, 243, 241, 0.68)' }}>
                <h4 className="text-[22px] md:text-[25.73px] font-medium text-black whitespace-pre-line transition-all duration-500 ease-in-out" style={{ lineHeight: '100%', letterSpacing: '-0.04em' }}>
                  {agent.stats[2].heading}
                </h4>
                <div className="mt-8">
                  {'subheading' in agent.stats[2] && agent.stats[2].subheading && (
                    <p className="text-[14px] md:text-[16px] text-black font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>
                      {agent.stats[2].subheading}
                    </p>
                  )}
                  <p className="text-[13px] md:text-[14px] text-gray-500 font-normal" style={{ lineHeight: '1.4', letterSpacing: '-0.01em' }}>
                    {agent.stats[2].detail}
                  </p>
                </div>
              </div>

              {/* Bottom Right – Switch button */}
              <div className="p-7 md:p-8 flex flex-col justify-end items-end h-full" style={{ backgroundColor: 'rgba(243, 243, 241, 0.68)' }}>
                <button
                  onClick={() => setActiveAgent(activeAgent === 'sud' ? 'kg' : 'sud')}
                  className="flex items-center gap-2 bg-black text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                >
                  {agent.switchLabel}
                  <img src={agent.switchIcon} alt="" width="16" height="16" className="brightness-0 invert" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}