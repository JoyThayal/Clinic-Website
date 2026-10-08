"use client";

import React from "react";
import Image from "next/image";

const services = [
  "General Dentistry",
  "Teeth Whitening",
  "Dental Implant",
  "Dental Sealant",
  "Root Canal",
  "Orthodontics",
  "Cosmetic Dentistry",
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full bg-blue-600 py-3.5 overflow-hidden select-none border-y border-blue-500">
      {/* Normal CSS class 'marquee-track' use kora hoyeche */}
      <div className="marquee-track">
        {/* First Loop */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
          {services.map((item, idx) => (
            <div
              key={`first-${idx}`}
              className="flex items-center gap-8 sm:gap-12"
            >
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white whitespace-nowrap">
                {item}
              </span>

              {/* Dater Image Container */}
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/images/tooth.png"
                  alt="Tooth Icon"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Loop (Seamless infinite scroll-er jonno duplicate) */}
        <div
          className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12"
          aria-hidden="true"
        >
          {services.map((item, idx) => (
            <div
              key={`second-${idx}`}
              className="flex items-center gap-8 sm:gap-12"
            >
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white whitespace-nowrap">
                {item}
              </span>

              {/* Dater Image Container */}
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/images/tooth.png"
                  alt="Tooth Icon"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
