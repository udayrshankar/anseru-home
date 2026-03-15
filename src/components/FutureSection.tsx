export default function FutureSection() {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Dark section */}
          <div className="bg-black text-white rounded-lg p-12 space-y-6 min-h-96 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase font-medium mb-4 text-gray-400">Powered by Agentic</p>
              <div className="text-4xl font-bold">
                <span className="text-gradient-a4">AI.</span>
              </div>
            </div>

            {/* Feature tags */}
            <div className="space-y-3">
              <div className="inline-block border border-white/20 rounded-lg px-4 py-2">
                <p className="text-sm font-medium">Autonomous Response Agents</p>
              </div>
              <div className="inline-block border border-white/20 rounded-lg px-4 py-2">
                <p className="text-sm font-medium">Living Knowledge Engine</p>
              </div>
              <div className="inline-block border border-white/20 rounded-lg px-4 py-2">
                <p className="text-sm font-medium">Deep Workflow Integrations</p>
              </div>
              <div className="inline-block border border-white/20 rounded-lg px-4 py-2">
                <p className="text-sm font-medium">Multi-Agent Collaboration</p>
              </div>
            </div>
          </div>

          {/* Right side - Text and description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium text-black">
              The Future of <span className="text-anseru-blue">Response Automation</span>
            </h2>

            <div className="border-l-4 border-gray-300 pl-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We're building a world where AI agents handle complex questionnaires, security reviews, 
                and knowledge workflows automatically so teams can focus on closing deals instead of 
                answering repetitive questions.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Accelerating trust in every deal with agentic AI for RFPs and security reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
