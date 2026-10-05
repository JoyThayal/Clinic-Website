"use client";

import React from "react";
import {
  CalendarCheck,
  Users,
  ClipboardList,
  BriefcaseMedical,
} from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Book Your Appointment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Consultation & Examination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: Users,
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Ongoing Care & Follow-Up",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: BriefcaseMedical,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-32 w-full bg-white py-14 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3">
            The Path to{" "}
            <span className="text-blue-600">Your Perfect Smile</span>
          </h2>
        </div>

        {/* 4 Steps Grid: মোবাইলে ১টি, ট্যাবলেটে ২টি ও ডেস্কটপে ৪টি */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 relative">
          {/* Connecting Line (Only visible on large desktop screens) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-200 z-0" />

          {stepsData.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-3.5 sm:space-y-4 relative z-10"
              >
                {/* Icon Wrapper with Badge */}
                <div className="relative">
                  {/* Blue Main Circle */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/25 border-4 border-white">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Number Badge (01, 02, etc.) */}
                  <div className="absolute top-0 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 pt-1 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-60 sm:max-w-60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
