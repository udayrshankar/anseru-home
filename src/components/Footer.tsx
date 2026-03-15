export default function Footer() {
  const footerLinks = [
    {
      title: "How it Works",
      links: ["Process", "Agents", "Knowledge Graph"]
    },
    {
      title: "Features",
      links: ["Drafting", "Collaboration", "Analytics"]
    },
    {
      title: "Problem",
      links: ["RFP Delays", "SME Burnout", "Accuracy"]
    },
    {
      title: "About us",
      links: ["Founders", "Mission", "Company"]
    }
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-4xl font-semibold text-black mb-6 max-w-xl leading-tight">
            Accelerating trust in every deal with agentic AI for RFPs and security reviews.
          </h3>

          <button className="bg-black text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition shadow-sm">
            Talk to Founders
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8 md:my-12"></div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-16">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-semibold text-black text-sm uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-gray-500 hover:text-black transition text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social links */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h4 className="font-semibold text-black text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition">
                <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.79755 23.0192H2.02517V7.65061H6.79755V23.0192ZM4.40848 5.55421C2.88264 5.55421 1.64453 4.2898 1.64453 2.76395C1.64453 2.03091 1.93573 1.32788 2.45407 0.809543C2.97242 0.291201 3.67544 0 4.40848 0C5.14153 0 5.84455 0.291201 6.36289 0.809543C6.88123 1.32788 7.17243 2.03091 7.17243 2.76395C7.17243 4.2898 5.93433 5.55421 4.40848 5.55421ZM24.6588 23.0192H19.8971V15.538C19.8971 13.7548 19.861 11.4685 17.416 11.4685C14.9348 11.4685 14.5542 13.4054 14.5542 15.4097V23.0192H9.78676V7.65061H14.3635V9.747H14.4301C15.0672 8.53931 16.6235 7.26503 18.9451 7.26503C23.7751 7.26503 24.6629 10.4458 24.6629 14.5769V23.0192H24.6588Z" fill="black" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1276 1.08008H21.6578L13.9464 9.91617L23.0192 21.9421H15.9162L10.3488 14.6499L3.98562 21.9421H0.452163L8.69963 12.4878L0 1.08172H7.28394L12.3087 7.74579L18.1276 1.08008ZM16.8862 19.8243H18.8429L6.21519 3.08768H4.11715L16.8862 19.8243Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">© 2026 Anseru Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-black transition">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
