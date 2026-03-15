import aiBg from "../assets/ai-bg.png"

export default function FutureSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">

        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">

          {/* Background Image */}
          <img
            src={aiBg}
            className="absolute inset-0 w-full h-full object-cover"
            alt="AI background"
          />

          {/* Vertical strip - Hidden on small mobile or made smaller */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-28 bg-black flex items-center justify-center z-10">
            <p className="text-white text-xs md:text-md tracking-widest -rotate-90 whitespace-nowrap">
              Powered by Agentic <span className="text-yellow-400">AI.</span>
            </p>
          </div>

          {/* Glass Feature Card */}
          <div className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8 space-y-3 md:space-y-4 md:translate-x-20 lg:translate-x-40">

            <div className="border border-white/40 bg-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm w-fit">
              Autonomous Response Agents
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm w-fit">
              Living Knowledge Engine
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm w-fit">
              Deep Workflow Integrations
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm w-fit">
              Multi-Agent Collaboration
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 flex items-center py-16 md:py-0">
          <div className="max-w-lg px-8 md:px-12 space-y-6">

            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-center md:text-left">
              <span className="text-gray-700">The Future of</span> <br />
              <span className="text-blue-600">Response Automation</span>
            </h2>

            <div className="border-l-2 border-gray-300 pl-6 md:translate-x-20 lg:translate-x-40">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We’re building a world where AI agents handle complex
                questionnaires, security reviews, and knowledge workflows
                automatically so teams can focus on closing deals instead
                of answering repetitive questions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
