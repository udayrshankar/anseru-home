import heroImage from "../assets/15.png";

export default function HeroBanner() {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-0">
      {/* Hero image background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/40 to-black/20 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
          {/* Left side - Text content */}
          <div className="space-y-6 pt-20 pb-16 md:pt-28 md:pb-32 text-center md:text-left md:-ml-8 lg:-ml-12">
            <h1 className="anseru-section-title text-white">
              AI Agents for RFPs and Security<br className="hidden md:block" />
              Questionnaires | Deal Intelligence<br className="hidden md:block" />
              Platform
            </h1>
          </div>

          {/* Right side - Visual placeholder */}
          <div className="hidden md:flex h-full border-l border-white/20 items-end pb-10 px-10 md:pl-16 lg:pl-24">
            <p className="anseru-section-description text-white ml-auto whitespace-pre-line">
              Win enterprise deals faster with AI agents that automate RFP<br className="hidden md:block" />
              responses and security questionnaires. Anseru turns<br className="hidden md:block" />
              scattered deal intelligence into winning proposals for sales,<br className="hidden md:block" />
              security, and compliance teams. (right)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
