"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5.0,
    title: "Professional and Friendly!",
    quote:
      "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Leslie Alexander",
    role: "Satisfied Patient",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    rating: 5.0,
    title: "Highly Recommended!",
    quote:
      "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Bessie Lane",
    role: "Satisfied Patient",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    rating: 5.0,
    title: "Exceptional Service!",
    quote:
      "I had an amazing experience from the moment I stepped in. The entire staff is attentive, and the teeth whitening process was completely pain-free with great results.",
    name: "Cameron Williamson",
    role: "Satisfied Patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    rating: 5.0,
    title: "Gentle and Caring Care!",
    quote:
      "Great clinic atmosphere and friendly doctors. The whole procedure was completely painless and the staff took care of every comfort.",
    name: "Eleanor Pena",
    role: "Satisfied Patient",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount =
        sliderRef.current.clientWidth >= 768
          ? sliderRef.current.clientWidth / 2
          : sliderRef.current.clientWidth;

      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 w-full bg-[#071630] py-14 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14 lg:mb-16">
          <div>
            <span className="text-base font-bold text-slate-400 tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mt-2 sm:mt-3">
              What Our{" "}
              <span className="text-blue-500">Patients Have to Say</span>
            </h2>
          </div>

          {/* Previous & Next Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous review"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next review"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container with Snap */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs sm:text-sm font-bold text-slate-800 ml-1">
                    {item.rating.toFixed(1)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 sm:gap-4 pt-4 border-t border-slate-100">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
