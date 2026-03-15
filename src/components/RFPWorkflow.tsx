export default function RFPWorkflow() {
  const steps = [
    { title: "RFP Shredding", desc: "Break RFP into sections\nIdentify key requirements\nPrepare for analysis" },
    { title: "Bid/No-Bid", desc: "Evaluate opportunity fit\nAssess win probability\nDecide to pursue" },
    { title: "Requirement Tagging", desc: "Categorize RFP questions\nTag by topic\nRoute to teams" },
    { title: "Proposal Outline", desc: "Generate proposal structure\nOrganize response sections\nDefine response flow" },
    { title: "Refine SME Collaboration", desc: "SME review inputs\nImprove response quality\nFinalize proposal draft" },
    { title: "First Winnable Draft", desc: "Generate initial responses\nUse past knowledge\nCreate first draft" },
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8 mb-16">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 uppercase">The Future of RFP Responses</p>
            <h2 className="text-4xl md:text-5xl font-medium text-black">
              From RFP to Winning Proposal
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Anseru orchestrates the entire response lifecycle with AI agents analyzing requirements, 
            generating drafts, and enabling teams to refine and deliver high-quality proposals with 
            speed and precision.
          </p>
        </div>

        {/* Workflow visualization */}
        <div className="relative">
          {/* Grid background */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1094 287" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.145686 140.414C-2.2605 93.6093 24.2076 0 149.33 0H968.878C1008.18 10.8011 1094 44.233 1094 155.844C1094 177.446 1093.04 263.02 1009.3 287H384.174" stroke="black" strokeWidth="1" />
            </svg>
          </div>

          {/* Step cards */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-start"
                style={{ paddingTop: index > 2 ? "100px" : "0px" }}
              >
                <button className="bg-black text-white px-5 py-2 rounded font-medium text-sm hover:bg-gray-800 transition whitespace-nowrap mb-4">
                  {step.title}
                </button>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
