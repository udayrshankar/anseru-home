import { useState, useRef } from 'react';

// Import your actual images here
import slide1Img from '../assets/Intro Page.png';
import slide2Img from '../assets/Intro Page (3).png';
import slide3Img from '../assets/Intro Page (2).png';
import slide4Img from '../assets/Intro Page (1).png';

const slideData = [
  {
    id: 0,
    title: "Connect your knowledge",
    description: "Anseru AI offers a centralized hub for all your knowledge sources. Upload previous RFPs, relevant documents, and Q&A from legacy tools or spreadsheets. Seamlessly integrate with internal data systems like Google Drive, SharePoint, and more, pull information directly from your website.",
    gradientClass: "gradient-a2",
    image: slide1Img
  },
  {
    id: 1,
    title: "Upload RFPs & Security Questionnaires",
    description: "Anseru AI offers a centralized hub for all your knowledge sources. Upload previous RFPs, relevant documents, and Q&A from legacy tools or spreadsheets. Seamlessly integrate with internal data systems like Google Drive, SharePoint, and more, pull information directly from your website.",
    gradientClass: "gradient-a3",
    image: slide2Img
  },
  {
    id: 2,
    title: "Generate AI Draft Responses",
    description: "Anseru generates accurate response drafts using your knowledge base and past answers—saving hours of manual work.",
    gradientClass: "gradient-a4",
    image: slide3Img
  },
  {
    id: 3,
    title: "SME Review & Approval",
    description: "Subject matter experts review, refine, and approve responses before final submission.",
    gradientClass: "gradient-a3", 
    image: slide4Img
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle manual scroll to update the active pagination dash
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const slideWidth = scrollContainerRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Handle clicking a pagination dash to scroll to that slide
  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const slideWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  // The bullets remain consistent across all slides
  const BulletPoint = ({ text }: { text: string }) => (
    <div className="flex gap-3 items-center">
      <svg width="24" height="24" viewBox="0 0 28 26" fill="none" className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0L14.1938 11.3187C14.2016 11.774 14.7911 12.0007 15.1434 11.6839L23.8995 3.80761L15.4174 11.9384C15.0762 12.2654 15.3203 12.8129 15.8106 12.8201L28 13L15.8106 13.1799C15.3203 13.1872 15.0762 13.7346 15.4174 14.0617L23.8995 22.1924L15.1434 14.3161C14.7911 13.9993 14.2016 14.226 14.1938 14.6813L14 26L13.8063 14.6813C13.7985 14.226 13.2089 13.9993 12.8567 14.3161L4.1005 22.1924L12.5827 14.0617C12.9239 13.7346 12.6797 13.1872 12.1894 13.1799L0 13L12.1894 12.8201C12.6797 12.8129 12.9239 12.2654 12.5827 11.9384L4.1005 3.80761L12.8567 11.6839C13.2089 12.0007 13.7985 11.774 13.8063 11.3187L14 0Z" fill="#a1a1aa" />
      </svg>
      <span className="text-gray-600 font-medium">{text}</span>
    </div>
  );

  return (
    <div className="w-full py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Global Header */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-[14px] font-medium text-gray-500 uppercase tracking-wide">
            How It Works
          </p>
          <h2 className="text-4xl md:text-[42px] font-normal text-black leading-[1.2] tracking-tight">
            How Anseru Turns Knowledge<br />Into Winning Deals
          </h2>
        </div>

        <div className="flex relative">
          
          {/* Main Carousel Content Container */}
          <div className="flex-1 w-full overflow-hidden">
            
            {/* Scrollable Track */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {slideData.map((slide) => (
                <div 
                  key={slide.id} 
                  className="min-w-full w-full snap-start grid md:grid-cols-2 gap-16 items-center min-h-[500px]"
                >
                  
                  {/* Left Column - Text Content */}
                  <div className="space-y-8 pr-4">
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-[38px] font-normal text-black leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-[16px] text-gray-500 leading-relaxed max-w-[90%]">
                        {slide.description}
                      </p>
                    </div>

                    <div className="space-y-5 pt-2">
                      <BulletPoint text="Automatically indexes past RFPs, security docs, and content" />
                      <BulletPoint text="Keeps responses accurate with up-to-date sources" />
                      <BulletPoint text="Improves continuously as teams use the platform" />
                    </div>
                  </div>

                  {/* Right Column - Gradient Card & Image */}
                  <div className={`rounded-[12px] p-10 md:p-14 text-white min-h-[550px] flex flex-col justify-start relative overflow-hidden ${slide.gradientClass}`}>
                    
                    {/* Texture overlay */}
                    <div className="absolute inset-0 opacity-20 gradient-a3">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/d26bb697857f6dfdecc5fd729678160d30796f2e?width=1114"
                        alt="background"
                        className="w-full h-full object-cover"
                        style={{ mixBlendMode: "overlay" }}
                      />
                    </div>                
                    
                    <div className="relative z-10 space-y-3 mb-10">
                      <p className="text-[15px] font-medium opacity-90">Ask. Find. Respond—Instantly.</p>
                      <h4 className="text-[32px] md:text-[36px] font-normal leading-[1.1] tracking-tight max-w-[300px]">
                        Turn complex RFPs into clear, winning responses
                      </h4>
                    </div>

                    {/* Inner Card / Image Container */}
                    <div className="relative z-10 mt-auto shadow-2xl rounded-t-lg overflow-hidden translate-y-15 translate-x-15">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-auto object-cover object-top bg-white/10 rounded-t-lg"
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination Dashes */}
            <div className="flex gap-2 mt-12">
              {slideData.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                      ? 'w-24 bg-black' 
                      : 'w-24 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}