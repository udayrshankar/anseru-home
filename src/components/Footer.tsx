import logo from "../assets/Anseru_3 3.png"; // We can reuse the same logo or the text one if there's a specific one. The design shows standard Anseru logo with text.
import bg151 from "../assets/151.png";

export default function Footer() {
  const footerLinks = [
    {
      title: "How it Works",
      links: ["Company", "Company", "Company"]
    },
    {
      title: "Features",
      links: ["Company", "Company", "Company"]
    },
    {
      title: "Problem",
      links: ["Company", "Company", "Company"]
    },
    {
      title: "About us",
      links: ["Company", "Company", "Company"]
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ── Top Half: The Future of Response Automation ─────────────────────────── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center overflow-hidden min-h-[400px] md:min-h-[500px]">

          {/* Background Image */}
          <img
            src={bg151}
            className="absolute inset-0 w-full h-full object-cover"
            alt="AI background"
          />

          {/* Glass Feature Card */}
          <div className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-12 space-y-4 md:space-y-6 w-full max-w-[480px] flex flex-col items-center shadow-2xl">

            <div className="border border-white/40 bg-white/10 text-white px-5 py-3 md:px-6 md:py-4 rounded-md text-sm md:text-base font-medium tracking-wide w-full text-center">
              Autonomous Response Agents
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-5 py-3 md:px-6 md:py-4 rounded-md text-sm md:text-base font-medium tracking-wide w-full text-center">
              Living Knowledge Engine
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-5 py-3 md:px-6 md:py-4 rounded-md text-sm md:text-base font-medium tracking-wide w-full text-center">
              Deep Workflow Integrations
            </div>

            <div className="border border-white/40 bg-white/10 text-white px-5 py-3 md:px-6 md:py-4 rounded-md text-sm md:text-base font-medium tracking-wide w-full text-center">
              Multi-Agent Collaboration
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 flex items-center py-16 md:py-0">
          <div className="max-w-xl px-8 md:px-12 space-y-10">

            <h2 className="text-4xl md:text-[52px] font-medium leading-[1.1] text-center md:text-left whitespace-nowrap">
              <span className="text-gray-800 tracking-tight">The Future of</span> <br />
              <span className="text-blue-600 tracking-tight">Response Automation</span>
            </h2>

            <div className="border-l-[3px] border-gray-300 pl-8 md:translate-x-24 lg:translate-x-32 mt-12 md:max-w-md">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                We’re building a world where AI agents handle complex
                questionnaires, security reviews, and knowledge workflows
                automatically so teams can focus on closing deals instead
                of answering repetitive questions.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ── Bottom Half: Footer Links & Brand ──────────────────────────────────── */}
      <footer className="w-full bg-[#f4f4f4] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col">

          {/* Top section: CTA left + Links right */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 mb-16">

            {/* Left: CTA */}
            <div className="lg:w-[45%] flex flex-col items-start gap-8">
              <h3 className="text-2xl md:text-[32px] font-medium text-black leading-[1.2] max-w-md tracking-tight">
                Accelerating trust in every deal with agentic AI for RFPs and security reviews.
              </h3>
              <button className="bg-black text-white px-8 py-3.5 rounded-[5px] text-[15px] font-medium hover:bg-gray-800 transition shadow-sm">
                Talk to Founders
              </button>

              {/* Social icons */}
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-black hover:text-gray-600 transition">
                  {/* LinkedIn */}
                  <svg width="24" height="24" viewBox="0 0 27 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.79755 23.0192H2.02517V7.65061H6.79755V23.0192ZM4.40848 5.55421C2.88264 5.55421 1.64453 4.2898 1.64453 2.76395C1.64453 2.03091 1.93573 1.32788 2.45407 0.809543C2.97242 0.291201 3.67544 0 4.40848 0C5.14153 0 5.84455 0.291201 6.36289 0.809543C6.88123 1.32788 7.17243 2.03091 7.17243 2.76395C7.17243 4.2898 5.93433 5.55421 4.40848 5.55421ZM24.6588 23.0192H19.8971V15.538C19.8971 13.7548 19.861 11.4685 17.416 11.4685C14.9348 11.4685 14.5542 13.4054 14.5542 15.4097V23.0192H9.78676V7.65061H14.3635V9.747H14.4301C15.0672 8.53931 16.6235 7.26503 18.9451 7.26503C23.7751 7.26503 24.6629 10.4458 24.6629 14.5769V23.0192H24.6588Z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition">
                  {/* X (Twitter) */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1276 1.08008H21.6578L13.9464 9.91617L23.0192 21.9421H15.9162L10.3488 14.6499L3.98562 21.9421H0.452163L8.69963 12.4878L0 1.08172H7.28394L12.3087 7.74579L18.1276 1.08008ZM16.8862 19.8243H18.8429L6.21519 3.08768H4.11715L16.8862 19.8243Z" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition">
                  {/* GitHub */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Link columns */}
            <div className="lg:w-[55%] flex justify-between gap-6 md:gap-10">
              {footerLinks.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h4 className="font-medium text-black text-[15px]">{section.title}</h4>
                  <ul className="space-y-4">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a href="#" className="text-gray-500 hover:text-black transition text-[15px]">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          <div className="w-full border-t border-gray-200 mt-10"></div>

          {/* Centered Logo */}
          <div className="pt-16 pb-12 flex justify-center items-center">
            {/* Using the full text vector logo based on design screenshot showing standard Anseru typographic logo */}
            <div className="flex gap-2 items-center text-4xl font-medium tracking-tight text-[#f4435b]">
              <img src={logo} alt="Anseru Logo" className="h-10 w-auto object-contain" />
              <span style={{ background: 'linear-gradient(90deg, #1C36E4, #f4435b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.03em' }}>
                anseru
              </span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-[14px] text-gray-500">© 2026 Anseru Inc. All rights reserved.</p>
            <div className="flex gap-6 text-[14px]">
              <a href="#" className="text-gray-500 hover:text-black transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition">
                Privacy Policy
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
