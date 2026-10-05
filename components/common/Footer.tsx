"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaPinterestP, href: "#", label: "Pinterest" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  const companyLinks = [
    { name: "FAQs", href: "#faqs" },
    { name: "Our Doctor", href: "#dentist" },
    { name: "Contact Us", href: "#contact" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <footer className="w-full bg-white overflow-hidden">
      {/* 1. Newsletter Section */}
      <div className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
            Our Newsletter
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3 max-w-2xl mx-auto">
            Subscribe to Our Newsletter for <br className="hidden sm:inline" />
            the <span className="text-blue-600">Latest Updates and Offers</span>
          </h2>

          {/* Subscribe Form: মোবাইলে সুন্দরভাবে ফিট ও ট্যাপ করার মতো */}
          <form
            onSubmit={handleSubscribe}
            className="mt-6 sm:mt-10 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full pl-14 pr-5 py-3.5 sm:py-4 rounded-full bg-slate-50 border border-slate-200/90 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/25 whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Dark Footer */}
      <div className="w-full bg-[#071630] text-slate-300 pt-14 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-slate-800">
            {/* Column 1: Brand & Socials */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Dental Logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Dental<span className="text-blue-500">.</span>
                </span>
              </Link>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-1">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      aria-label={item.label}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Company Links */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-400">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Contact Info
              </h3>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-400">
                <p>
                  <a
                    href="tel:0000000000"
                    className="hover:text-blue-400 transition-colors"
                  >
                    (000) 000-0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:example@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    example@gmail.com
                  </a>
                </p>
                <p className="leading-relaxed">
                  2464 Royal Ln. Mesa, <br />
                  New Jersey 45463
                </p>
              </div>
            </div>

            {/* Column 4: Clinic Hours */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Clinic Hours
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                <div className="flex justify-between items-center py-0.5">
                  <span>Monday to Friday</span>
                  <span className="text-white font-medium">09:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span>Saturday</span>
                  <span className="text-white font-medium">11:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span>Sunday</span>
                  <span className="text-blue-400 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs text-slate-500">
            <p>© 2026 Dental Website. All Rights Reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="#" className="hover:text-slate-400 transition-colors">
                User Terms &amp; Conditions
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
