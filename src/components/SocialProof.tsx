export default function SocialProof() {
  const logos = [
    { name: "Superhuman", src: "https://api.builder.io/api/v1/image/assets/TEMP/d4b42bd6ed4e032868adf4cb20f9c19881a97504" },
    { name: "Sirion", src: "https://api.builder.io/api/v1/image/assets/TEMP/6c1ea805c2f6bc0ae21e858275662112a496da17" },
    { name: "ActivTrak", src: "https://api.builder.io/api/v1/image/assets/TEMP/29be8c74b1526db41a8dcea9b994d231c827ea8c" },
    { name: "Logo 4", src: "https://api.builder.io/api/v1/image/assets/TEMP/d57b6362234fc67f5dd5a6010e02340710f11bdf" },
    { name: "Logo 5", src: "https://api.builder.io/api/v1/image/assets/TEMP/6c1ea805c2f6bc0ae21e858275662112a496da17" },
  ];

  return (
    <div className="w-full py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Scroll container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 items-center justify-center flex-wrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-24 px-8 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white transition"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
