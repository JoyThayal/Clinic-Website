"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseMedical,
  CalendarCheck,
  PhoneCall,
  Star,
  CheckCircle,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative w-full bg-white pt-10 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold tracking-wide">
              <BriefcaseMedical className="w-3.5 h-3.5 text-blue-600" />
              <span>Top-Notch Dental Care, Just for You</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Your <span className="text-blue-600">Best Dental Experience</span>{" "}
              <br />
              Awaits
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed font-normal">
              Modern dental care tailored for you and your family. Painless
              treatments, certified specialists, and complete oral wellness.
            </p>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
              <Link
                href="#booking-full"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/25"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>

              <a
                href="tel:0000000000"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-medium text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Call Clinic</span>
              </a>
            </div>

            {/* Trust Points (Micro Social Proof) */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Zero Wait Time</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Painless Care</span>
              </div>
            </div>
          </div>

          {/* Right Visual with Overlapping Trust Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-85 sm:max-w-100 aspect-4/5 sm:aspect-square">
              {/* Doctor / Dental Hero Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-100">
                <Image
                  src="/images/hero.png"
                  alt="Dental Hero"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  className="object-contain"
                />
              </div>

              {/* Floating Rating Badge (Top Left / Bottom Right) */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-slate-900">
                      4.9 / 5.0
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Over 1,200+ Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
