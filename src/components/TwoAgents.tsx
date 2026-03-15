export default function TwoAgents() {
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase">Proven Results</p>
          <h2 className="text-4xl md:text-5xl font-medium text-black">Two Super Agents</h2>
        </div>

        {/* Agent showcase — coded replacement for the image */}
        <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row" style={{ minHeight: "420px" }}>
          
          {/* LEFT: RFP Agent — blue gradient panel */}
          <div
            className="relative flex flex-col justify-between p-8 md:w-1/2"
            style={{
              background: "linear-gradient(135deg, #2a4fd6 0%, #3a5ce5 40%, #4b6cf5 70%, #5a7aff 100%)",
              backgroundSize: "cover",
            }}
          >
            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "150px",
              }}
            />

            {/* Diamond shapes */}
            <div className="relative flex flex-wrap gap-4 w-fit">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.18)",
                    transform: "rotate(45deg)",
                    marginLeft: i === 2 ? 36 : i === 3 ? 0 : 0,
                  }}
                />
              ))}
            </div>

            {/* Bottom: title + tags */}
            <div className="relative mt-auto space-y-4">
              <h3 className="text-white text-4xl font-semibold">RFP Agent</h3>
              <div className="flex flex-wrap gap-2">
                {["80% faster drafting", "Understands complex RFPs", "Helps sales close deals"].map((tag) => (
                  <span
                    key={tag}
                    className="text-white text-sm px-3 py-1.5 rounded-full border border-white/40"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 2×2 stats grid */}
          <div className="md:w-1/2 grid grid-cols-2 border-l border-gray-200" style={{ background: "#f5f5f5" }}>
            {/* Top-left */}
            <div className="p-6 border-b border-r border-gray-200 flex flex-col justify-between">
              <h4 className="text-xl font-semibold text-black leading-snug">
                Instant, deal-ready<br />first drafts
              </h4>
              <span />
            </div>

            {/* Top-right */}
            <div className="p-6 border-b border-gray-200 flex flex-col justify-between">
              <h4 className="text-xl font-semibold text-black leading-snug">
                80% reduction in<br />drafting time
              </h4>
              <span />
            </div>

            {/* Mid-left */}
            <div className="p-6 border-b border-r border-gray-200 flex flex-col justify-end">
              <p className="text-gray-600 text-sm">80% reduction in drafting time</p>
            </div>

            {/* Mid-right */}
            <div className="p-6 border-b border-gray-200 flex flex-col justify-end">
              <p className="text-gray-600 text-sm">Handles messy formats and duplicate questions</p>
            </div>

            {/* Bottom-left */}
            <div className="p-6 border-r border-gray-200 flex flex-col justify-between">
              <h4 className="text-xl font-semibold text-black leading-snug">
                Human review<br />where it matters
              </h4>
            </div>

            

            <div className="p-6 flex flex-col justify-between">
              <span />
              <div className="flex flex-col gap-4">
                <div className="flex justify-end">
                  <button
                    className="flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-800 transition"
                  >
                    Meet KG
                    <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.4266 14.0744C16.8526 14.6484 15.9217 14.6484 15.3477 14.0744L12.8133 11.5399C12.2392 10.9658 12.2392 10.0351 12.8133 9.46104L15.3477 6.92661C15.9217 6.35253 16.8526 6.35253 17.4266 6.92661L19.9611 9.46103C20.5351 10.0351 20.5351 10.9658 19.9611 11.5399L17.4266 14.0744Z" fill="white" />
                      <path d="M5.65325 14.0744C5.07918 14.6484 4.14842 14.6484 3.57435 14.0744L1.03993 11.5399C0.465858 10.9658 0.465857 10.0351 1.03993 9.46104L3.57435 6.92661C4.14842 6.35253 5.07918 6.35253 5.65325 6.92661L8.18767 9.46103C8.76174 10.0351 8.76174 10.9658 8.18767 11.5399L5.65325 14.0744Z" fill="#a3b800" />
                      <path d="M11.54 19.961C10.9658 20.5351 10.0351 20.5351 9.46103 19.961L6.9266 17.4266C6.35254 16.8526 6.35254 15.9217 6.9266 15.3477L9.46103 12.8133C10.0351 12.2392 10.9658 12.2392 11.54 12.8133L14.0744 15.3477C14.6484 15.9217 14.6484 16.8526 14.0744 17.4266L11.54 19.961Z" fill="#a3b800" />
                      <path d="M11.54 8.18767C10.9658 8.76174 10.0351 8.76175 9.46103 8.18767L6.9266 5.65324C6.35254 5.07918 6.35254 4.14843 6.9266 3.57435L9.46103 1.03993C10.0351 0.465858 10.9658 0.465857 11.54 1.03993L14.0744 3.57435C14.6484 4.14843 14.6484 5.07918 14.0744 5.65324L11.54 8.18767Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent descriptions */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-4">
            <div className="inline-flex gap-2 p-2 bg-gray-100 rounded-lg">
              <button className="bg-black text-white px-4 py-2 rounded font-medium text-sm hover:bg-gray-800 transition">
                Meet Sud
              </button>
              <button className="px-4 py-2 rounded font-medium text-sm text-black hover:bg-gray-200 transition flex items-center gap-2">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4266 14.0744C16.8526 14.6484 15.9217 14.6484 15.3477 14.0744L12.8133 11.5399C12.2392 10.9658 12.2392 10.0351 12.8133 9.46104L15.3477 6.92661C15.9217 6.35253 16.8526 6.35253 17.4266 6.92661L19.9611 9.46103C20.5351 10.0351 20.5351 10.9658 19.9611 11.5399L17.4266 14.0744Z" fill="black" />
                  <path d="M5.65325 14.0744C5.07918 14.6484 4.14842 14.6484 3.57435 14.0744L1.03993 11.5399C0.465858 10.9658 0.465857 10.0351 1.03993 9.46104L3.57435 6.92661C4.14842 6.35253 5.07918 6.35253 5.65325 6.92661L8.18767 9.46103C8.76174 10.0351 8.76174 10.9658 8.18767 11.5399L5.65325 14.0744Z" fill="black" />
                  <path d="M11.54 19.961C10.9658 20.5351 10.0351 20.5351 9.46103 19.961L6.9266 17.4266C6.35254 16.8526 6.35254 15.9217 6.9266 15.3477L9.46103 12.8133C10.0351 12.2392 10.9658 12.2392 11.54 12.8133L14.0744 15.3477C14.6484 15.9217 14.6484 16.8526 14.0744 17.4266L11.54 19.961Z" fill="black" />
                  <path d="M11.54 8.18767C10.9658 8.76174 10.0351 8.76175 9.46103 8.18767L6.9266 5.65324C6.35254 5.07918 6.35254 4.14843 6.9266 3.57435L9.46103 1.03993C10.0351 0.465858 10.9658 0.465857 11.54 1.03993L14.0744 3.57435C14.6484 4.14843 14.6484 5.07918 14.0744 5.65324L11.54 8.18767Z" fill="black" />
                </svg>
                Meet Kg
              </button>
            </div>
            <h3 className="text-2xl font-medium text-black mt-6">RFP Agent (Sud)</h3>
            <p className="text-gray-600 leading-relaxed">
              Analyzes RFP requirements, breaks down complex questions, and generates initial responses
              by leveraging your knowledge base. Ensures no requirement is missed.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-black">Knowledge Agent (Kg)</h3>
            <p className="text-gray-600 leading-relaxed">
              Manages your living knowledge graph, continuously learning from past responses and new
              documents. Ensures responses stay accurate and up-to-date across all questionnaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}