"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const stats = [
    { value: "10+", label: "Skilled Doctors" },
    { value: "99%", label: "Patient Satisfaction" },
    { value: "20K+", label: "Appointments" },
  ];

  const features = [
    "Easy Online Appointment Booking",
    "Experienced and Caring Dentists",
    "Advanced Dental Equipment",
  ];

  return (
    <section
      id="why-us"
      className="scroll-mt-32 w-full bg-white py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Top Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3">
            Benefits of Our Dental Services: <br className="hidden sm:inline" />
            <span className="text-blue-600">
              Your Path to a Healthier Smile
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Combined Graphic Image */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-70 sm:max-w-none sm:w-105 lg:w-115 aspect-square">
              <Image
                src="/images/why-choose-us.png"
                alt="Dental Services Benefits"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 460px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Details & Stats */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7">
            {/* Short Paragraph */}
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* 3 Statistics Columns: মোবাইলে টেক্সট যাতে কেটে বা চেপে না যায় */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full py-3 sm:py-4 border-y border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Checkmark List */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 w-full">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start sm:items-center gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-50 shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA: মোবাইলে ফুল উইডথ বাটন */}
            <div className="pt-2 w-full sm:w-auto">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
