
// Import slide images
import slide1Img from '../assets/Intro Page.png';
import slide2Img from '../assets/Intro Page (3).png';
import slide3Img from '../assets/Intro Page (2).png';
import slide4Img from '../assets/Intro Page (1).png';
import bulletIcon from '../assets/Vector (2).png';
import noiseImage from '../assets/noise.png';
import watermark from '../assets/Group 1437253216.png'

const slideData = [
  {
    id: 0,
    title: "Connect your knowledge",
    description:
      "Anseru connects to the knowledge sources your team already uses — security documentation, compliance certifications, CRM records, call transcripts, past proposals, and internal wikis — and structures them into a living intelligence layer that improves with every deal.",
    gradientClass: "card-gradient-a1",
    image: slide1Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: "Ask. Find. Respond—Instantly.",
    cardTitle: "Turn complex RFPs into clear, winning responses",
    bullets: [
      "Automatically indexes past RFPs, security docs, and content",
      "Keeps responses accurate with up-to-date sources",
      "Improves continuously as teams use the platform",
    ],
  },
  {
    id: 1,
    title: "Upload RFPs & Security Questionnaires",
    description:
      "Anseru AI offers a centralized hub for all your knowledge sources. Upload previous RFPs, relevant documents, and Q&A from legacy tools or spreadsheets. Seamlessly integrate with internal data systems like Google Drive, SharePoint, and more, pull information directly from your website.",
    gradientClass: "card-gradient-a2",
    image: slide2Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: "Centralized Knowledge Hub",
    cardTitle: "Connect all your sources in one place",
    bullets: [
      "Upload previous RFPs and spreadsheets",
      "Integrate with Google Drive and SharePoint",
      "Pull information directly from company websites",
    ],
  },
  {
    id: 2,
    title: "Generate AI Draft Responses",
    description:
      "Anseru generates accurate response drafts using your knowledge base and past answers—saving hours of manual work.",
    gradientClass: "card-gradient-a3",
    image: slide3Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: "AI-Powered Drafting",
    cardTitle: "Draft accurate responses in seconds",
    bullets: [
      "AI-driven drafting using your private knowledge",
      "Significant reduction in manual work",
      "Maintain consistency across all documents",
    ],
  },
  {
    id: 3,
    title: "SME Review & Approval",
    description:
      "Subject matter experts review, refine, and approve responses before final submission.",
    gradientClass: "card-gradient-a4",
    image: slide4Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: "Expert Review Loop",
    cardTitle: "Ensure every answer is mission-ready",
    bullets: [
      "Streamlined workflow for expert review",
      "Refine and approve responses in real-time",
      "Final submission with full validation",
    ],
  },
];

/* ── Icons ────────────────────────────────────────────────────────── */

const BulletImageIcon = () => (
  <img src={bulletIcon} alt="" width="14" height="14" className="flex-shrink-0 opacity-60" />
);

const StarburstIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 28 26"
    fill="none"
    className="flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 0L14.1938 11.3187C14.2016 11.774 14.7911 12.0007 15.1434 11.6839L23.8995 3.80761L15.4174 11.9384C15.0762 12.2654 15.3203 12.8129 15.8106 12.8201L28 13L15.8106 13.1799C15.3203 13.1872 15.0762 13.7346 15.4174 14.0617L23.8995 22.1924L15.1434 14.3161C14.7911 13.9993 14.2016 14.226 14.1938 14.6813L14 26L13.8063 14.6813C13.7985 14.226 13.2089 13.9993 12.8567 14.3161L4.1005 22.1924L12.5827 14.0617C12.9239 13.7346 12.6797 13.1872 12.1894 13.1799L0 13L12.1894 12.8201C12.6797 12.8129 12.9239 12.2654 12.5827 11.9384L4.1005 3.80761L12.8567 11.6839C13.2089 12.0007 13.7985 11.774 13.8063 11.3187L14 0Z"
      fill="#a1a1aa"
    />
  </svg>
);

/* ── Bullet point ─────────────────────────────────────────────────── */

const BulletPoint = ({
  text,
  style,
}: {
  text: string;
  style: "cross" | "starburst";
}) => (
  <div className="flex gap-3 items-center">
    {style === "cross" ? <BulletImageIcon /> : <StarburstIcon />}
    <span className="text-[#666666] text-[14px] md:text-[15px] font-normal leading-relaxed">
      {text}
    </span>
  </div>
);


/* ── Main component ───────────────────────────────────────────────── */

export default function Carousel() {
  return (
    <div className="w-full bg-white relative">
      <div className="z-20 pt-20 pb-10 bg-white/95 backdrop-blur-sm">
        <div className="text-center space-y-2">
          <p className="anseru-section-tag">
            How It Works
          </p>
          <h2 className="anseru-section-title">
            How Anseru Turns Knowledge
            <br />
            Into Winning Deals
          </h2>
        </div>
      </div>

      {/* Slides rendered as individual page sections */}
      <div className="flex flex-col w-full">
        {slideData.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-screen flex items-center justify-center px-6"
          >
            <div className="max-w-[1300px] mx-auto w-full grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
              {/* ── Left column ──────────────────────────────── */}
              <div className="pr-4">
                <div className="space-y-7">
                  <div className="space-y-4">
                    <h3 className="text-[28px] md:text-[32px] font-normal leading-tight text-[#111111]">
                      {slide.title}
                    </h3>
                    <p className="anseru-section-description max-w-[95%]">
                      {slide.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {slide.bullets.map((text, i) => (
                      <BulletPoint
                        key={i}
                        text={text}
                        style={slide.bulletStyle}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right column – gradient card ─────────────── */}
              <div className="pr-4 md:pr-8 h-full flex items-center py-10 md:py-20">
                <div
                  className={`p-8 md:p-10 pb-0 text-white w-full h-[450px] md:h-[650px] flex flex-col justify-start relative overflow-hidden shadow-lg ${slide.gradientClass}`}
                >
                  <img src={watermark} alt="" className="absolute top-0 right-0 w-[40%] h-[40%] object-contain" />

                  <div
                    className="absolute inset-0 opacity-100 pointer-events-none"
                    style={{
                      backgroundImage: `url(${noiseImage})`,
                      backgroundSize: '200px 200px',
                      mixBlendMode: "overlay"
                    }}
                  />

                  {/* Text content */}
                  <div className="relative z-10 space-y-3 mb-10">
                    <p className="text-[12px] md:text-[14px] font-medium opacity-90 tracking-wide">
                      {slide.cardSubtitle}
                    </p>
                    <h4 className="text-[30px] md:text-[34px] font-medium leading-[1.15] tracking-tight max-w-[320px]">
                      {slide.cardTitle}
                    </h4>
                  </div>

                  {/* Product mockup image */}
                  <div className="absolute z-10 mt-auto rounded-t-lg bottom-0 right-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full scale-100  object-top rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}