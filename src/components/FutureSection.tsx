import aiBg from "../assets/ai-bg.png"

export default function FutureSection() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 min-h-[420px]">

        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <img
            src={aiBg}
            className="absolute inset-0 w-full h-full object-cover"
            alt="AI background"
          />

          {/* Vertical strip */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-black flex items-center justify-center">
            <p className="text-white text-md tracking-widest -rotate-90 whitespace-nowrap">
              Powered by Agentic <span className="text-yellow-400">AI.</span>
            </p>
          </div>

          {/* Glass Feature Card */}
          <div className="relative bg-white/10 rounded-md p-8 space-y-4 translate-x-60">

            <div className="border border-white/40 bg-white/10 text-white px-4 py-2 rounded-md text-sm w-fit">
              Autonomous Response Agents
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-4 py-2 rounded-md text-sm w-fit">
              Living Knowledge Engine
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-4 py-2 rounded-md text-sm w-fit">
              Deep Workflow Integrations
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-4 py-2 rounded-md text-sm w-fit">
              Multi-Agent Collaboration
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 flex items-center">
          <div className="max-w-lg px-12 space-y-6">

            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              <span className="text-gray-700">The Future of</span> <br />
              <span className="text-blue-600 whitespace-nowrap">Response Automation</span>
            </h2>

            <div className="border-l-2 border-gray-300 pl-6 translate-x-60">
              <p className="text-gray-600 leading-relaxed">
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