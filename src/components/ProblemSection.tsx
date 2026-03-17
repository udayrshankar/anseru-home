export default function ProblemSection() {
  const teams = [
    {
      title: <>Sales<br />Teams</>,
      description: "Responding to RFPs and RFIs requires collecting information from different teams & documents, which slows down deal cycles.",
      gradient: "gradient-a2",
      icon: (
        <svg width="180" height="200" viewBox="0 0 220 246" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M23 36H197" stroke="black" strokeWidth="2" />
          <path d="M52 94H168" stroke="black" strokeWidth="2" />
          <path d="M81 152H139" stroke="black" strokeWidth="2" />
          <path d="M110 227.4C119.609 227.4 127.4 219.609 127.4 210C127.4 200.39 119.609 192.6 110 192.6C100.39 192.6 92.5996 200.39 92.5996 210C92.5996 219.609 100.39 227.4 110 227.4Z" stroke="black" strokeWidth="2" />
          <path d="M110 36V192.6" stroke="#888888" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      title: <>Security<br />Teams</>,
      description: "Vendor security questionnaires require detailed answers about policies, compliance, and infrastructure.",
      gradient: "gradient-a3",
      icon: (
        <svg width="200" height="200" viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M142.5 178.125C162.175 178.125 178.125 162.175 178.125 142.5C178.125 122.825 162.175 106.875 142.5 106.875C122.825 106.875 106.875 122.825 106.875 142.5C106.875 162.175 122.825 178.125 142.5 178.125Z" stroke="black" strokeWidth="2.85" />
          <path d="M142.5 206.625C177.915 206.625 206.625 177.915 206.625 142.5C206.625 107.085 177.915 78.375 142.5 78.375C107.085 78.375 78.375 107.085 78.375 142.5C78.375 177.915 107.085 206.625 142.5 206.625Z" stroke="#444444" strokeWidth="2.85" />
          <path d="M142.5 235.125C193.655 235.125 235.125 193.655 235.125 142.5C235.125 91.3446 193.655 49.875 142.5 49.875C91.3446 49.875 49.875 91.3446 49.875 142.5C49.875 193.655 91.3446 235.125 142.5 235.125Z" stroke="#666666" strokeWidth="2.85" />
          <path d="M142.5 263.625C209.395 263.625 263.625 209.395 263.625 142.5C263.625 75.6045 209.395 21.375 142.5 21.375C75.6045 21.375 21.375 75.6045 21.375 142.5C21.375 209.395 75.6045 263.625 142.5 263.625Z" stroke="#888888" strokeWidth="1.425" strokeDasharray="5.7 5.7" />
          <path d="M142.5 21.375V263.625" stroke="#999999" strokeWidth="1.425" strokeDasharray="5.7 5.7" />
        </svg>
      )
    },
    {
      title: <>Compliance<br />Teams</>,
      description: "Compliance teams spend hours preparing responses for audits, vendor reviews, and regulatory forms.",
      gradient: "gradient-a4",
      icon: (
        <svg width="200" height="200" viewBox="0 0 333 333" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M266.4 66.5996H66.5996V266.4H266.4V66.5996Z" stroke="black" strokeWidth="2" />
          <path d="M133.199 66.5996V266.4" stroke="#666666" strokeWidth="1.665" />
          <path d="M199.801 66.5996V266.4" stroke="#666666" strokeWidth="1.665" />
          <path d="M66.5996 133.2H266.4" stroke="#666666" strokeWidth="1.665" />
          <path d="M66.5996 199.8H266.4" stroke="#666666" strokeWidth="1.665" />
          <path d="M66.5996 66.5996L266.4 266.4" stroke="#999999" strokeWidth="1.665" strokeDasharray="6.66 6.66" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-gray-500 capitalize tracking-wider mb-4 text-center md:text-left">Customer Problem</p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-medium text-black leading-tight">
              Built for Teams Handling <br className="hidden md:block" /> Complex Questionnaires
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-sm mx-auto md:mx-0 md:text-right">
              Sales, security, and compliance teams rely on Anseru to generate accurate responses faster.
            </p>
          </div>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {teams.map((team, idx) => (
            <div key={idx} className="overflow-hidden flex flex-col transition-shadow h-[460px] md:h-[520px]" style={{ backgroundColor: '#f8f8f8' }}>
              <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                {/* Gradient stripe on right */}
                <div
                  className={`absolute bottom-0 right-0 w-5 h-1/2 ${team.gradient}`}
                />
                <h3 className="text-xl md:text-2xl font-medium text-black mb-3">{team.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {team.description}
                </p>
                <div className="flex-1 flex items-end justify-center min-h-[150px]">
                  <div className="w-4/5">
                    {team.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}