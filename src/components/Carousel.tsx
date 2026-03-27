import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Import slide images
import slide1Img from "../assets/Intro Page.png";
import slide2Img from "../assets/Intro Page (3).png";
import slide3Img from "../assets/Intro Page (8).png";
import slide4Img from "../assets/Intro Page (1).png";
import bulletIcon from "../assets/Vector (2).png";
import noiseImage from "../assets/noise.png";
import watermark from "../assets/Group 1437253216.png";

const slideData = [
  {
    id: 0,
    title: "1. Connect your knowledge",
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
      { text: "Approve", isBold: false },
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
    title: "2. Upload RFPs & Security Questionnaires",
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
      { text: "Approve", isBold: false },
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
    title: "3. Generate AI Draft Responses",
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
      { text: "Approve", isBold: false },
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
    title: "4. SME Review & Approval",
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
      { text: "Approve", isBold: true },
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
  <img
    src={bulletIcon}
    alt=""
    width="14"
    height="14"
    className="flex-shrink-0 opacity-60"
  />
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
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isSnappingRef = useRef(false);

  // Indicators mapping
  const indicators = ["Connect", "Upload", "Respond", "Approve"];

  // Handle scroll to update active slide
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Calculate which slide is most visible
      const newActiveSlide = Math.round(scrollLeft / clientWidth);
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeSlide]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = scrollContainerRef.current;
      if (!container || isSnappingRef.current) return;

      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar?.offsetHeight || 80;

      const { scrollLeft, clientWidth, scrollWidth } = container;

      const rect = container.getBoundingClientRect();

      //VISIBILITY
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      const visibilityRatio = visibleHeight / rect.height;

      const currentIndex = Math.round(scrollLeft / clientWidth);
      const maxIndex = Math.floor(scrollWidth / clientWidth) - 1;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // WHEN TO LOCK (this is the main fix)
      const shouldLock =
        visibilityRatio >= 0.99 && rect.top <= navbarHeight + 10;

      if (!shouldLock) {
        return; // allow normal scroll
      }

      // LOCK IMMEDIATELY
      e.preventDefault();

      document.body.style.overflow = "hidden";

      // EDGE EXIT (after locking decision)
      if (
        (currentIndex === 0 && scrollingUp) ||
        (currentIndex === maxIndex && scrollingDown)
      ) {
        document.body.style.overflow = "";
        return;
      }

      let nextIndex = currentIndex;

      if (scrollingDown) nextIndex++;
      if (scrollingUp) nextIndex--;

      nextIndex = Math.max(0, Math.min(nextIndex, maxIndex));

      isSnappingRef.current = true;

      container.scrollTo({
        left: nextIndex * clientWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        isSnappingRef.current = false;
        document.body.style.overflow = "";
      }, 600);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const goTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: clientWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white relative pt-8 pb-10">
      {/* Header */}
      <div className="z-20 pt-15 pb-5 bg-white/95 backdrop-blur-sm shrink-0">
        <div className="text-center space-y-2">
          <p className="anseru-section-tag">How It Works</p>
          <h2 className="anseru-section-title mb-8">
            How Anseru Turns Knowledge
            <br />
            Into Winning Deals
          </h2>

          {/* corousel bars */}
          <div className="hidden md:flex fixed left-1/11 top-[250%] -translate-y-1/2 flex-col gap-3 z-30">
            {slideData.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`flex flex-col items-center gap-1.5 group`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-1 bg-gray-200 rounded-full overflow-hidden relative transition-all duration-500 ${
                    activeSlide === index ? "h-[120px]" : "h-[72px]"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeSlide === index
                        ? "h-full bg-gray-600"
                        : "h-0 bg-gray-300"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-0 max-w-[600px] mx-auto px-6 mb-2 mt-4">
            {indicators.map((indicator, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => goTo(index)}
                  className={`text-[15px] font-medium transition-colors cursor-pointer px-4 py-2 rounded-full z-10 ${
                    activeSlide === index
                      ? "text-black bg-gray-100"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {indicator}
                </button>
                {index < indicators.length - 1 && (
                  <div className="w-5 h-[1px] bg-gray-200 -mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Webkit scrollbar hide needs to be in global CSS, but adding class here for clarity */}
          <div className="flex items-stretch min-w-[max-content]">
            {slideData.map((slide) => (
              <div
                key={slide.id}
                className="w-[100vw] snap-center snap-always flex-shrink-0"
              >
                <div className="max-w-[1300px] mx-auto w-full px-4 md:px-6">
                  <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-stretch">
                    {/* ── Left column ──────────────────────────────── */}
                    <div className="pr-4 flex flex-row h-full py-2 md:py-10">
                      <div className="hidden md:flex w-[30px] flex-shrink-0 mr-6"></div>
                      <motion.div
                        className="flex flex-col flex-grow"
                        initial={false}
                        animate={{
                          opacity: activeSlide === slide.id ? 1 : 0.3,
                          y: activeSlide === slide.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="space-y-7 flex-grow">
                          <div className="space-y-4">
                            <h2 className="font-normal text-[#111111]">
                              {slide.title}
                            </h2>
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

                        <div className="flex items-center gap-2 mt-25 w-full md:w-[80%] shrink-0 opacity-0 pointer-events-none translate-y-[10px]">
                          <div className="h-[3px] w-full" />
                        </div>
                      </motion.div>
                    </div>

                    {/* ── Right column – gradient card ─────────────── */}
                    <motion.div
                      className="pr-4 md:pr-8 h-full flex items-center py-2 md:py-10"
                      initial={false}
                      animate={{
                        opacity: activeSlide === slide.id ? 1 : 0.5,
                        scale: activeSlide === slide.id ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        className={`p-8 md:p-10 pb-0 text-white w-full h-[380px] md:h-[550px] flex flex-col justify-start relative overflow-hidden shadow-lg rounded-[10px] ${slide.gradientClass}`}
                      >
                        <img
                          src={watermark}
                          alt=""
                          className="absolute top-0 right-0 w-[40%] h-[40%] object-contain"
                        />

                        <div
                          className="absolute inset-0 opacity-100 pointer-events-none"
                          style={{
                            backgroundImage: `url(${noiseImage})`,
                            backgroundSize: "200px 200px",
                            mixBlendMode: "overlay",
                          }}
                        />

                        <div className="relative z-10 space-y-3 mb-10">
                          <p className="text-[12px] md:text-[14px] font-medium tracking-wide">
                            {Array.isArray(slide.cardSubtitle) ? (
                              slide.cardSubtitle.map((item, idx) => (
                                <span
                                  key={idx}
                                  className={
                                    item.isBold
                                      ? "font-bold text-white opacity-100"
                                      : "font-normal opacity-70"
                                  }
                                >
                                  {item.text}
                                </span>
                              ))
                            ) : (
                              <span className="opacity-90">
                                {slide.cardSubtitle as string}
                              </span>
                            )}
                          </p>
                          <h2 className="font-medium max-w-[380px]">
                            {slide.cardTitle}
                          </h2>
                        </div>

                        <div className="absolute z-10 mt-auto rounded-t-lg bottom-0 right-0 flex justify-end">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className={`h-auto object-top rounded-lg ${
                              slide.id >= 2 ? "w-[85%]" : "w-[75%]"
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>
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
