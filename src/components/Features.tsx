export default function Features() {
  const features = [
    {
      title: "Living\nKnowledge Graph",
      description: "Centralize and continuously improve your RFP knowledge.",
      color: "bg-anseru-blue",
      icon: "🔗",
    },
    {
      title: "Cross-Team\nCollaboration",
      description: "Work together across teams to deliver winning responses.",
      color: "bg-anseru-blue",
      icon: "👥",
    },
    {
      title: "Evidence & Citation\nEngine",
      description: "Every response is backed by trusted sources.",
      color: "bg-anseru-blue",
      icon: "📋",
    },
    {
      title: "Governance &\nAnalytics",
      description: "Maintain control and visibility across the entire process.",
      color: "bg-anseru-blue",
      icon: "📊",
    },
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-8 mb-16">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 uppercase">Platform Features</p>
            <h2 className="text-4xl md:text-5xl font-medium text-black">
              Powerful Capabilities for Modern Deal Teams
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-lg">
            Centralize knowledge, generate accurate responses, and collaborate seamlessly across teams.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden flex flex-col">
              {/* Color bar at top */}
              <div className={`${feature.color} h-20 w-full flex items-center justify-center`}>
                <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  {index === 0 && (
                    <path d="M32.6329 40.7918C37.1387 40.7918 40.7913 37.1392 40.7913 32.6334C40.7913 28.1277 37.1387 24.4751 32.6329 24.4751C28.1272 24.4751 24.4746 28.1277 24.4746 32.6334C24.4746 37.1392 28.1272 40.7918 32.6329 40.7918Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                  {index === 1 && (
                    <path d="M21.4171 29.3069C26.2729 29.3069 30.2092 25.3705 30.2092 20.5148C30.2092 15.659 26.2729 11.7227 21.4171 11.7227C16.5614 11.7227 12.625 15.659 12.625 20.5148C12.625 25.3705 16.5614 29.3069 21.4171 29.3069Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                  {index === 2 && (
                    <path d="M35 5H15C13.6739 5 12.4021 5.52678 11.4645 6.46447C10.5268 7.40215 10 8.67392 10 10V50C10 51.3261 10.5268 52.5979 11.4645 53.5355C12.4021 54.4732 13.6739 55 15 55H45C46.3261 55 47.5979 54.4732 48.5355 53.5355C49.4732 52.5979 50 51.3261 50 50V20L35 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                  {index === 3 && (
                    <path d="M10.5 52.5V26.25M26.25 52.5V10.5M42 52.5V36.75M57.75 52.5V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-medium text-black mb-2 whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
