import { useState, useEffect, useRef } from 'react';

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
      "Your single living source of truth. Anseru connects to where your knowledge already lives. Sync Google Drive, SharePoint, Teams, Jira, Slack, and Dropbox or upload your internal documents directly. Your answer library builds itself and stays current automatically.",
    gradientClass: "card-gradient-a1",
    image: slide1Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: [
      { text: "Connect", isBold: true },
      { text: " - ", isBold: true },
      { text: "Upload", isBold: false },
      { text: " - ", isBold: false },
      { text: "Respond", isBold: false },
      { text: " - ", isBold: false },
      { text: "Approve", isBold: false }
    ],
    cardTitle: "Turn complex RFPs into clear, winning responses",
    bullets: [
      "Indexes past RFPs, security docs, and compliance content automatically",
      "Integrates with your existing storage and communication systems",
      "Improves continuously as your team uses and approves new answers",
    ],
  },
  {
    id: 1,
    title: "Upload RFPs & Security Questionnaires",
    description:
      "Drop in any document in any format. Anseru reads the full document, identifies every requirement, and maps each question to your verified knowledge base, in seconds.",
    gradientClass: "card-gradient-a2",
    image: slide2Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: [
      { text: "Connect", isBold: false },
      { text: " - ", isBold: false },
      { text: "Upload", isBold: true },
      { text: " - ", isBold: true },
      { text: "Respond", isBold: false },
      { text: " - ", isBold: false },
      { text: "Approve", isBold: false }
    ],
    cardTitle: "Turn complex RFPs into clear, winning responses",
    bullets: [
      "Accepts PDF, DOCX, XLSX documents.",
      "Automatically identifies and classifies every question and sub-requirement",
      "Maps each item to your verified answer library before you begin",
    ],
  },
  {
    id: 2,
    title: "Generate AI Draft Responses",
    description:
      "Anseru generates a full response draft using your verified documentation and past approved answers. Every answer is traceable to a real source, so drafts arrive ready for review, not ready to be rewritten from scratch.",
    gradientClass: "card-gradient-a3",
    image: slide3Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: [
      { text: "Connect", isBold: false },
      { text: " - ", isBold: false },
      { text: "Upload", isBold: false },
      { text: " - ", isBold: false },
      { text: "Respond", isBold: true },
      { text: " - ", isBold: true },
      { text: "Approve", isBold: false }
    ],
    cardTitle: "Turn complex RFPs into clear, winning responses",
    bullets: [
      "Drafts complete responses from your verified internal knowledge base",
      "Flags low-confidence answers for SME review before submission",
      "Saves hours of manual writing and cross-referencing per deal",
    ],
  },
  {
    id: 3,
    title: "SME Review & Approval",
    description:
      "Anseru focuses your experts on what only they can answer. Standard questions arrive pre-drafted and ready to approve. Novel, flagged, and high-risk items are surfaced for review before anything leaves the building.",
    gradientClass: "card-gradient-a4",
    image: slide4Img,
    bulletStyle: "starburst" as const,
    cardSubtitle: [
      { text: "Connect", isBold: false },
      { text: " - ", isBold: false },
      { text: "Upload", isBold: false },
      { text: " - ", isBold: false },
      { text: "Respond", isBold: false },
      { text: " - ", isBold: false },
      { text: "Approve", isBold: true }
    ],
    cardTitle: "Turn complex RFPs into clear, winning responses",
    bullets: [
      "Routes only flagged and novel questions to subject matter experts",
      "Full audit trail of every review, edit, and approval decision",
      "Every submission is clean, compliant, and signed off before it goes out",
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

const AUTO_ADVANCE_MS = 5000;

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHovered = useRef(false);

  const goTo = (index: number) => {
    setActiveSlide(index);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovered.current) {
        setActiveSlide((prev) => (prev + 1) % slideData.length);
      }
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

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

      <div
        className="w-full px-6 pb-16 relative"
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; }}
      >
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slideData.map((slide) => (
              <div key={slide.id} className="min-w-full flex-shrink-0">
                <div className="max-w-[1300px] mx-auto w-full">
                  <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-stretch">
                    {/* ── Left column ──────────────────────────────── */}
                    <div className="pr-4 flex flex-row h-full py-2 md:py-10">
                      {/* Gutter to sync with scroll indicator */}
                      <div className="flex w-[20px] md:w-[30px] flex-shrink-0 mr-4 md:mr-6"></div>
                      <div className="flex flex-col flex-grow">
                        <div className="space-y-7 flex-grow">
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

                        {/* Invisible spacer to maintain layout layout for fixed indicators overlay */}
                        <div className="flex items-center gap-2 mt-25 w-full md:w-[80%] shrink-0 opacity-0 pointer-events-none translate-y-[10px]">
                          <div className="h-[3px] w-full" />
                        </div>
                      </div>
                    </div>

                    {/* ── Right column – gradient card ─────────────── */}
                    <div className="pr-4 md:pr-8 h-full flex items-center py-2 md:py-10">
                      <div
                        className={`p-8 md:p-10 pb-0 text-white w-full h-[450px] md:h-[650px] flex flex-col justify-start relative overflow-hidden shadow-lg rounded-[10px] ${slide.gradientClass}`}
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
                          <p className="text-[12px] md:text-[14px] font-medium tracking-wide">
                            {Array.isArray(slide.cardSubtitle) ? (
                              slide.cardSubtitle.map((item, idx) => (
                                <span key={idx} className={item.isBold ? "font-bold text-white opacity-100" : "font-normal opacity-70"}>
                                  {item.text}
                                </span>
                              ))
                            ) : (
                              <span className="opacity-90">{slide.cardSubtitle as string}</span>
                            )}
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
                            className="w-full h-full scale-100 object-top rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Fixed Static Indicators Overlay ─────────────────────── */}
        <div className="absolute inset-x-6 top-0 bottom-16 pointer-events-none">
          <div className="max-w-[1300px] mx-auto w-full h-full">
            <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-stretch h-full">
              <div className="pr-4 flex flex-row h-full py-2 md:py-10">

                {/* ── Scroll Down Indicator ───────────────────────────── */}
                <div className="flex flex-col items-center w-[20px] md:w-[30px] h-[240px] pointer-events-auto flex-shrink-0 mr-4 md:mr-6">
                  <span
                    className="whitespace-nowrap text-[#FF3F49] text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    Scroll Down
                  </span>
                  <div className="w-[1px] bg-[#FF3F49] flex-grow mb-1"></div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3F49" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[-1px]">
                    <line x1="12" y1="0" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>

                <div className="flex flex-col flex-grow relative">
                  <div className="flex-grow"></div>
                  <div className="flex items-center gap-2 mt-25 w-full md:w-[80%] shrink-0 pointer-events-auto translate-y-[3px]">
                    {slideData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          goTo(index);
                          startTimer();
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                        style={{
                          flex: index === activeSlide ? 2.5 : 1,
                          height: '3px',
                          borderRadius: '999px',
                          backgroundColor: index === activeSlide ? '#111111' : '#d1d5db',
                          transition: 'flex 0.35s ease, background-color 0.35s ease',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}