"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function SoloDoctorSection() {
  const credentials = [
    "BDS, MDS - Oral & Maxillofacial Surgery",
    "12+ Years of Clinical Practice",
    "Certified Implantologist & Cosmetic Specialist",
    "Member of Indian Dental Association (IDA)",
  ];

  return (
    <section
      id="dentist"
      className="scroll-mt-32 w-full bg-white py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
            Meet Your Doctor
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3">
            Passionate Care Backed by <br className="hidden sm:inline" />
            <span className="text-blue-600">Years of Clinical Excellence</span>
          </h2>
        </div>

        {/* Doctor Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Doctor Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-95 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-100">
              <Image
                src="/images/dentist.png"
                alt="Dr. Joyce Thompson"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-top"
                priority
              />

              {/* Experience Badge: মোবাইলে সুন্দরভাবে ফিট হওয়ার জন্য রেসপন্সিভ প্যাডিং */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    Dr. Joyce Thompson
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                    Chief Dental Surgeon &amp; Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Senior Dental Consultant</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                “Every smile has a unique story, and my mission is to make yours
                healthy and confident.”
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Dr. Joyce Thompson is a highly skilled and experienced dental
              surgeon, dedicated to providing exceptional dental care to her
              patients. With a passion for oral health and a deep understanding
              of dental conditions, Dr. Joyce is committed to helping her
              patients achieve a beautiful and healthy smile.
            </p>

            {/* Credentials / Key Highlights: মোবাইলে টেক্সট ভেঙে না যাওয়ার জন্য */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full pt-1 sm:pt-2">
              {credentials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start sm:items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Consultation CTA: মোবাইলে ফুল-উইডথ বাটন */}
            <div className="pt-2 sm:pt-4 w-full sm:w-auto">
              <Link
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 text-center"
              >
                Book a Consultation with Dr. Joyce
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
