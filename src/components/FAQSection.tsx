import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const answerText = "Anseru is built with security-first architecture. We use enterprise-grade encryption for all data in transit and at rest. Your data is isolated and never used to train public models. We are SOC 2 Type II compliant.";

  const faqs = [
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
    { question: "How does anseru ensures data security?", answer: answerText },
  ];

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5, 10);

  const FAQItem = ({ item, index }: { item: { question: string, answer: string }; index: number }) => {
    const isOpen = openIndex === index;
    return (
      <div className="flex flex-col border border-gray-100 bg-white rounded-sm">
        <div
          className="flex items-center justify-between py-4 px-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">→</span>
            <span className="text-[15px] text-gray-800 font-normal">{item.question}</span>
          </div>
          <span className="text-gray-400 text-lg leading-none ml-4 shrink-0">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* Answer Content */}
        {isOpen && item.answer && (
          <div className="px-4 pb-4 pt-1 ml-7 mr-6 animate-in fade-in slide-in-from-top-2">
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[14px] md:text-[15px] font-medium text-gray-500 mb-3">
            FAQs
          </p>
          <h2 className="text-3xl md:text-[40px] font-semibold text-gray-900 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {leftColumn.map((q, i) => (
              <FAQItem key={i} item={q} index={i} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {rightColumn.map((q, i) => (
              <FAQItem key={i + 5} item={q} index={i + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
