"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface StoryItem {
  id: number;
  title: string;
  year: string;
  category1: string;
  category2: string;
  image: string;
  link: string;
}

const storiesData: StoryItem[] = [
  {
    id: 1,
    title: "A Brighter Tomorrow: Sarah's Whitening Journey",
    year: "2024",
    category1: "Teeth Whitening",
    category2: "Dental Care",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 2,
    title: "A Beautiful Transformation: Olivia's Braces Journey",
    year: "2024",
    category1: "Braces Treatment",
    category2: "Dental Care",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
];

export default function CaseStoriesSection() {
  return (
    <section
      id="cases"
      className="scroll-mt-32 w-full bg-[#071630] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: মোবাইলে বাটন ও টাইটেল সুন্দরভাবে সাজানো */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-16">
          <div className="space-y-1">
            <span className="text-base font-bold text-slate-400 tracking-widest uppercase">
              Our Case Stories
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mt-3">
              Patient Journeys to <br className="hidden sm:inline" />
              <span className="text-blue-500">Healthier, Happier Smiles</span>
            </h2>
          </div>

          <div>
            <Link
              href="#cases"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/30 whitespace-nowrap"
            >
              Explore All Case Stories
            </Link>
          </div>
        </div>

        {/* 2 Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="group relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/11 bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-300"
            >
              {/* Background Patient Image */}
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

              {/* Card Footer Content: মোবাইলে যাতে টেক্সট ও বাটন ওভারল্যাপ না হয় */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8 flex items-end justify-between gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug drop-shadow-sm line-clamp-2">
                    {story.title}
                  </h3>

                  {/* Badges / Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium whitespace-nowrap">
                      {story.year}
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium whitespace-nowrap">
                      {story.category1}
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-medium whitespace-nowrap">
                      {story.category2}
                    </span>
                  </div>
                </div>

                {/* Circular Action Button */}
                <Link
                  href={story.link}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 group-hover:bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/40 transition-transform duration-300 group-hover:scale-105 active:scale-95"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
