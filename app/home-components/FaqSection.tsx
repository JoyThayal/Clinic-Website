"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, MessageCircle, PhoneCall } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide comprehensive dental care including teeth whitening, dental implants, root canal therapy, braces & aligners, cosmetic smile designing, and routine preventive cleanings.",
  },
  {
    id: 2,
    question: "Do I need to make an appointment?",
    answer:
      "Yes, we recommend booking an appointment in advance to minimize waiting times and ensure dedicated attention. However, we also accommodate sudden dental emergencies.",
  },
  {
    id: 3,
    question: "Do you accept walk-in appointments?",
    answer:
      "We do welcome walk-ins based on chair availability, but priority is given to scheduled patients and urgent emergency cases.",
  },
  {
    id: 4,
    question: "Can I book an emergency dental appointment?",
    answer:
      "Absolutely. We offer 24/7 on-call emergency dental services for severe toothaches, broken teeth, bleeding, or dental trauma.",
  },
  {
    id: 5,
    question: "Do you offer online consultations?",
    answer:
      "Yes, preliminary video consultations and follow-up guidance are available through our portal for remote patients.",
  },
  {
    id: 6,
    question: "What is the cost of a dental consultation?",
    answer:
      "Initial general consultations start at a nominal fee, and diagnostic X-rays or detailed treatment plans are explained transparently before any procedure begins.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="scroll-mt-32 w-full bg-[#071630] py-14 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-base font-bold text-slate-400 tracking-widest uppercase">
            FAQS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mt-2 sm:mt-3">
            Dental Care FAQ: <br className="hidden sm:inline" />
            <span className="text-blue-500">Your Questions Answered</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Accordion List */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-3.5">
            {faqsData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen
                      ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 text-left font-semibold text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    <span className="pr-1">{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 shrink-0" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-blue-100 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Support Cards */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            {/* Card 1: Have different questions? */}
            <div className="bg-blue-600 text-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-blue-600/25 space-y-4 sm:space-y-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-bold">
                  You have different questions?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                  Our team will answer all of your questions. We ensure a quick
                  response.
                </p>
              </div>
              <Link
                href="#booking"
                className="inline-block w-full py-3 text-center rounded-full bg-white text-blue-600 font-semibold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Card 2: 24/7 Emergency */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-md flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-400">
                  Your Smile, Our Priority
                </p>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  24/7 Emergency
                </h4>
                <a
                  href="tel:0000000000"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  (000) 000-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
