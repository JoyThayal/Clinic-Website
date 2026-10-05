"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=600",
    icon: "/images/tooth.png",
    link: "#",
  },
  {
    id: 2,
    title: "Dental Implant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    icon: "/images/tooth.png",
    link: "#",
  },
  {
    id: 3,
    title: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    icon: "/images/tooth.png",
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-32 w-full bg-[#fcfdff] py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: মোবাইলে টাইটেল ও বাটন সুন্দরভাবে সাজানো */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 lg:mb-16">
          <div className="space-y-1">
            <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3">
              <span className="text-blue-600">A Wide Range of Services</span>{" "}
              <br className="hidden sm:inline" />
              for Your Best Smile
            </h2>
          </div>

          <div className="w-full sm:w-auto">
            <Link
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 whitespace-nowrap"
            >
              Explore All Services
            </Link>
          </div>
        </div>

        {/* 3 Services Cards Grid: মোবাইলে ১টি, ট্যাবলেটে ২টি ও বড় স্ক্রিনে ৩টি */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-44 sm:h-52">
                  {/* Photo Frame */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlapping Tooth Badge */}
                  <div className="absolute -bottom-5 left-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center">
                    <div className="relative w-5 h-5">
                      <Image
                        src={service.icon}
                        alt="Service Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-8 sm:pt-9 px-1.5 sm:px-2 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-5 px-1.5 sm:px-2">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
