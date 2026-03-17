import Logo from '../assets/Anseru_3 3.png';
import BulletIcon from '../assets/Vector (3).png';

import IconDoc from '../assets/doc.png';
import IconBid from '../assets/bid.png';
import IconReq from '../assets/req.png';
import IconProposal from '../assets/proposal.png';
import IconSme from '../assets/sme.png';
import IconWinLoss from '../assets/winloss.png';
import IconDraft from '../assets/teams.png'; // Using teams as two-persons icon

/* ── Step data ──────────────────────────────────────────────────── */

const nodes = [
  // Top Row
  {
    cx: '16%', cy: '25%', // y=125/500
    title: "RFP Shredding",
    icon: IconDoc,
    bullets: ["Break RFP into sections", "Identify key requirements", "Prepare for analysis"],
  },
  {
    cx: '38%', cy: '25%',
    title: "Bid/No Bid",
    icon: IconBid,
    bullets: ["Evaluate opportunity fit", "Assess win probability", "Decide to pursue"],
  },
  {
    cx: '60%', cy: '25%',
    title: "Requirement Tagging",
    icon: IconReq,
    bullets: ["Categorize RFP questions", "Tag by topic", "Route to teams"],
  },
  {
    cx: '82%', cy: '25%',
    title: "Proposal Outline",
    icon: IconProposal,
    bullets: ["Generate proposal structure", "Organize response sections", "Define response flow"],
  },
  // Bottom Row
  {
    cx: '75%', cy: '75%', // y=375/500
    title: "First Winnable Draft",
    icon: IconDraft,
    bullets: ["Generate initial responses", "Use past knowledge", "Create first draft"],
  },
  {
    cx: '51%', cy: '75%',
    title: "Refine SME Collaboration",
    icon: IconSme,
    bullets: ["SME review inputs", "Improve response quality", "Finalize proposal draft"],
  },
  {
    cx: '27%', cy: '75%',
    title: "Win or loss",
    icon: IconWinLoss,
    bullets: ["SME review inputs", "Improve response quality", "Finalize proposal draft"],
  },
];

/* ── Bullet point with imported icon ────────────────────────────── */

const Bullet = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <img src={BulletIcon} alt="" width="12" height="12" className="shrink-0 mt-0.5 opacity-50" />
    <span className="text-[13px] md:text-[14px] text-gray-500 leading-snug">{text}</span>
  </li>
);

/* ── Step card ──────────────────────────────────────────────────── */

const StepCard = ({ node }: { node: typeof nodes[0] }) => (
  <div
    className="absolute flex flex-col items-center w-[230px]"
    style={{
      left: node.cx,
      top: node.cy,
      transform: 'translate(-50%, -18px)'
    }}
  >
    {/* Title pill */}
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white relative z-10 shadow-sm"
      style={{
        border: '1.2px solid transparent',
        background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #3b82f6, #ef4444) border-box',
      }}
    >
      <img src={node.icon} alt="" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain" />
      <span className="text-[13px] md:text-[15px] font-medium text-[#111] whitespace-nowrap" style={{ letterSpacing: '-0.01em' }}>
        {node.title}
      </span>
    </div>

    {/* Dashed connector + dot */}
    <div className="flex flex-col items-center w-full">
      <div className="w-px h-5 md:h-7 border-l border-dashed border-gray-400" />
      <div className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-gray-800" />
    </div>

    {/* Bullets */}
    <ul className="flex flex-col gap-1 md:gap-1.5 mt-2 md:mt-3 w-full pl-6 md:pl-8">
      {node.bullets.map((b, i) => (
        <Bullet key={i} text={b} />
      ))}
    </ul>
  </div>
);

/* ── Main component ─────────────────────────────────────────────── */

export default function RFPWorkflow() {
  return (
    <div className="w-full bg-[#f8f9fa] overflow-hidden flex flex-col justify-center py-6 md:py-10">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 mb-2">
          <div className="space-y-1 w-full md:w-1/2">
            <p className="text-[13px] md:text-[14px] font-medium text-gray-500 capitalize tracking-wider">
              The Future of RFP Responses
            </p>
            <h2 className="text-2xl md:text-[42px] font-medium text-[#111827] leading-tight" style={{ letterSpacing: '-0.03em' }}>
              From RFP to<br className="hidden md:block" /> Winning Proposal
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end md:pt-4">
            <p className="text-[14px] md:text-[15px] text-gray-500 max-w-[440px] leading-relaxed">
              Anseru orchestrates the entire response lifecycle with AI agents analyzing requirements, generating drafts, and enabling teams to refine and deliver high-quality proposals with speed and precision.
            </p>
          </div>
        </div>

        {/* ── Workflow diagram ────────────────────────────────── */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-[1400/500] mx-auto select-none">

            {/* Curved gradient dashed border – SVG path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F3E21F" />
                  <stop offset="100%" stopColor="#6DA8EF" />
                </linearGradient>
              </defs>
              <path
                d="M 195 125
                   L 1205 125
                   A 125 125 0 0 1 1205 375
                   L 195 375
                   A 125 125 0 0 1 195 125 Z"
                stroke="url(#borderGrad)"
                strokeWidth="8"
                strokeDasharray="4 6"
                fill="none"
                opacity="0.26"
              />
            </svg>

            {/* Logo aligned on the exact center of the left curve of the dashed path (x=70/1400=5%, y=250/500=50%) */}
            <div
              className="absolute z-20 flex items-center justify-center bg-[#f8f9fa] rounded-full px-1"
              style={{ left: '5%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <img src={Logo} alt="Anseru" className="w-[52px] h-[52px] md:w-[68px] md:h-[68px] object-contain" />
            </div>

            {/* Node cards precisely intercepting the dashed line */}
            {nodes.map((node, i) => (
              <StepCard key={i} node={node} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}