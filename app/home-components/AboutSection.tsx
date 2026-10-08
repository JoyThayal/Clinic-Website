"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const points = [
    "Premium Dental Services You Can Trust",
    "Award-Winning Experts in Dental Care",
    "Dedicated Experts Behind Every Smile",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Graphic Image Container */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* মোবাইলে w-full max-w-[280px] দিলে কোনো ডিভাইসেই উপচে পড়বে না */}
            <div className="relative w-full max-w-70 sm:max-w-none sm:w-105 lg:w-115 aspect-square flex items-center justify-center">
              <Image
                src="/images/about-tooth-graphic.png"
                alt="15 Years of Expertise in Dental Care"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 460px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Clean Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Header */}
            <div>
              <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3">
                <span className="text-blue-600">15 Years of Expertise</span>{" "}
                <br />
                in Dental Care
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Feature Checkpoints */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 w-full">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-50 shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <Link
                href="#services"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
