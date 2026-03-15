export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6 max-w-xl">
            Accelerating trust in every deal with agentic AI for RFPs and security reviews.
          </h3>

          <button className="bg-black text-white px-6 py-3 rounded text-base font-medium hover:bg-gray-800 transition">
            Talk to Founders
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>

        {/* Main footer content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Column 1 - How it Works */}
          <div className="space-y-4">
            <h4 className="font-medium text-black">How it Works</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
            </ul>
          </div>

          {/* Column 2 - Features */}
          <div className="space-y-4">
            <h4 className="font-medium text-black">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
            </ul>
          </div>

          {/* Column 3 - Problem */}
          <div className="space-y-4">
            <h4 className="font-medium text-black">Problem</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
            </ul>
          </div>

          {/* Column 4 - About us */}
          <div className="space-y-4">
            <h4 className="font-medium text-black">About us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition text-sm">Company</a></li>
            </ul>
          </div>

          {/* Column 5 - Social links */}
          <div className="space-y-6">
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                <svg width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.79755 23.0192H2.02517V7.65061H6.79755V23.0192ZM4.40848 5.55421C2.88264 5.55421 1.64453 4.2898 1.64453 2.76395C1.64453 2.03091 1.93573 1.32788 2.45407 0.809543C2.97242 0.291201 3.67544 0 4.40848 0C5.14153 0 5.84455 0.291201 6.36289 0.809543C6.88123 1.32788 7.17243 2.03091 7.17243 2.76395C7.17243 4.2898 5.93433 5.55421 4.40848 5.55421ZM24.6588 23.0192H19.8971V15.538C19.8971 13.7548 19.861 11.4685 17.416 11.4685C14.9348 11.4685 14.5542 13.4054 14.5542 15.4097V23.0192H9.78676V7.65061H14.3635V9.747H14.4301C15.0672 8.53931 16.6235 7.26503 18.9451 7.26503C23.7751 7.26503 24.6629 10.4458 24.6629 14.5769V23.0192H24.6588Z" fill="black" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1276 1.08008H21.6578L13.9464 9.91617L23.0192 21.9421H15.9162L10.3488 14.6499L3.98562 21.9421H0.452163L8.69963 12.4878L0 1.08172H7.28394L12.3087 7.74579L18.1276 1.08008ZM16.8862 19.8243H18.8429L6.21519 3.08768H4.11715L16.8862 19.8243Z" fill="black" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.35547 15.0258C3.78708 15.0776 4.10679 15.2752 4.3146 15.6185C4.62728 16.1336 5.78879 18.0413 7.10856 18.0413H9.11028M14.5505 14.6719C15.0767 15.3612 15.3399 15.9801 15.3399 16.5288V20.1399M9.94472 14.7601C9.38843 15.3701 9.1106 15.9498 9.11124 16.499V20.1399" stroke="black" strokeWidth="1.4387" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.5503 14.6734C15.7032 14.4337 16.7496 14.0193 17.562 13.4112C18.9508 12.3715 19.6606 10.7659 19.6606 9.18047C19.6606 8.06788 19.2386 7.02913 18.5058 6.14961C18.0982 5.65949 19.2913 2.43584 18.2315 2.92787C17.1717 3.42087 15.6179 4.07692 14.8035 3.83618C13.9317 3.57913 12.9812 3.43718 11.9875 3.43718C11.1243 3.43718 10.2937 3.54364 9.51872 3.74122C8.39269 4.02704 7.31654 3.39306 6.23272 2.92787C5.1489 2.46365 5.74069 5.81295 5.41842 6.21003C4.71825 7.07805 4.31445 8.09473 4.31445 9.18047C4.31445 10.7659 5.17288 12.3715 6.56171 13.4103C7.48727 14.1028 8.64686 14.5449 9.94457 14.7626" stroke="black" strokeWidth="1.4387" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-gray-600">© 2026 Anseru Inc. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-black transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
