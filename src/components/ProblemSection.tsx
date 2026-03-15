export default function ProblemSection() {
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase">Customer Problem</p>
          <h2 className="text-4xl md:text-5xl font-medium text-black">
            Built for Teams Handling Complex Questionnaires
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Sales, security, and compliance teams rely on Anseru to generate accurate responses faster.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sales Teams */}
          <div className="bg-gray-50 overflow-hidden flex flex-col">
            <div className="p-6 flex flex-col flex-1" style={{ position: "relative" }}>
              {/* Blue gradient stripe on right */}
              <div
                className="gradient-a2"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "20px",
                  height: "50%",
                }}
              />
              <h3 className="text-2xl font-medium text-black mb-3">Sales Teams</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Responding to RFPs and RFIs requires collecting information from different teams & documents,
                which slows down deal cycles.
              </p>
              <div className="mt-6 flex-1 flex items-end justify-center">
                <svg width="220" height="246" viewBox="0 0 220 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 36H197" stroke="black" strokeWidth="2" />
                  <path d="M52 94H168" stroke="black" strokeWidth="2" />
                  <path d="M81 152H139" stroke="black" strokeWidth="2" />
                  <path d="M110 227.4C119.609 227.4 127.4 219.609 127.4 210C127.4 200.39 119.609 192.6 110 192.6C100.39 192.6 92.5996 200.39 92.5996 210C92.5996 219.609 100.39 227.4 110 227.4Z" stroke="black" strokeWidth="2" />
                  <path d="M110 36V192.6" stroke="#888888" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Security Teams */}
          <div className="bg-gray-50 overflow-hidden flex flex-col">
            <div className="p-6 flex flex-col flex-1" style={{ position: "relative" }}>
              {/* Blue gradient stripe on right */}
              <div
                className="gradient-a3"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "20px",
                  height: "50%",
                }}
              />
              <h3 className="text-2xl font-medium text-black mb-3">Security Teams</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vendor security questionnaires require detailed answers about policies, compliance, and infrastructure.
              </p>
              <div className="mt-6 flex-1 flex items-end justify-center">
                <svg width="285" height="285" viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M142.5 178.125C162.175 178.125 178.125 162.175 178.125 142.5C178.125 122.825 162.175 106.875 142.5 106.875C122.825 106.875 106.875 122.825 106.875 142.5C106.875 162.175 122.825 178.125 142.5 178.125Z" stroke="black" strokeWidth="2.85" />
                  <path d="M142.5 206.625C177.915 206.625 206.625 177.915 206.625 142.5C206.625 107.085 177.915 78.375 142.5 78.375C107.085 78.375 78.375 107.085 78.375 142.5C78.375 177.915 107.085 206.625 142.5 206.625Z" stroke="#444444" strokeWidth="2.85" />
                  <path d="M142.5 235.125C193.655 235.125 235.125 193.655 235.125 142.5C235.125 91.3446 193.655 49.875 142.5 49.875C91.3446 49.875 49.875 91.3446 49.875 142.5C49.875 193.655 91.3446 235.125 142.5 235.125Z" stroke="#666666" strokeWidth="2.85" />
                  <path d="M142.5 263.625C209.395 263.625 263.625 209.395 263.625 142.5C263.625 75.6045 209.395 21.375 142.5 21.375C75.6045 21.375 21.375 75.6045 21.375 142.5C21.375 209.395 75.6045 263.625 142.5 263.625Z" stroke="#888888" strokeWidth="1.425" strokeDasharray="5.7 5.7" />
                  <path d="M142.5 21.375V263.625" stroke="#999999" strokeWidth="1.425" strokeDasharray="5.7 5.7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Compliance Teams */}
          <div className="bg-gray-50 overflow-hidden flex flex-col">
            <div className="p-6 flex flex-col flex-1" style={{ position: "relative" }}>
              {/* Blue gradient stripe on right */}
              <div
                className="gradient-a4"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "20px",
                  height: "50%",
                }}
              />
              <h3 className="text-2xl font-medium text-black mb-3">Compliance Teams</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compliance teams spend hours preparing responses for audits, vendor reviews, and regulatory forms.
              </p>
              <div className="mt-6 flex-1 flex items-end justify-center">
                <svg width="333" height="333" viewBox="0 0 333 333" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M266.4 66.5996H66.5996V266.4H266.4V66.5996Z" stroke="black" strokeWidth="2" />
                  <path d="M133.199 66.5996V266.4" stroke="#666666" strokeWidth="1.665" />
                  <path d="M199.801 66.5996V266.4" stroke="#666666" strokeWidth="1.665" />
                  <path d="M66.5996 133.2H266.4" stroke="#666666" strokeWidth="1.665" />
                  <path d="M66.5996 199.8H266.4" stroke="#666666" strokeWidth="1.665" />
                  <path d="M66.5996 66.5996L266.4 266.4" stroke="#999999" strokeWidth="1.665" strokeDasharray="6.66 6.66" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}