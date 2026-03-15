export default function DealInfrastructure() {
  return (
    <div className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 uppercase">Building Block</p>
              <h2 className="text-4xl md:text-5xl font-medium text-black">
                We are building next generation of
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-anseru-blue">
                Deal Infrastructure
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Modern sales, security, and compliance teams need infrastructure that scales with complexity. 
              Anseru is the foundational layer for deal acceleration.
            </p>

            <button className="bg-anseru-blue text-white px-8 py-3 rounded text-base font-medium hover:opacity-90 transition w-fit">
              Start Building
            </button>
          </div>

          {/* Right - Syncing animation */}
          <div className="flex justify-center items-center min-h-80">
            <div className="relative w-40 h-40">
              {/* Animated circle */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-t-anseru-blue animate-spin"></div>
              
              {/* Center circle with icon */}
              <div className="absolute inset-4 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-lg">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 7.5V52.5M52.5 30H7.5" stroke="#1C32E6" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="30" cy="30" r="22.5" stroke="#1C32E6" strokeWidth="2" />
                </svg>
              </div>

              <p className="absolute -bottom-12 left-0 right-0 text-center text-sm text-gray-600 font-medium">
                Syncing data...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
