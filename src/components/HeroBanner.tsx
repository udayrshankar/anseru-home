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
          <div className="space-y-6 pt-24 pb-16 md:pt-32 md:pb-32 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl font-regular text-white leading-tight">
              Win deals faster with AI agents for <br className="hidden md:block" />
              <span className="font-medium text-4xl md:text-5xl">RFPs and Security Questionnaires</span>
            </h1>
          </div>

          {/* Right side - Visual placeholder */}
          <div className="hidden md:flex h-full border-l border-white/20 items-end pb-10 px-10">
            <p className="text-md text-white/90 leading-relaxed font-regular">
              AI agents that draft accurate, context-aware responses grounded in your knowledge base. 
              Automate the grunt work, keep humans in loop, and close deals faster without compromising trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
