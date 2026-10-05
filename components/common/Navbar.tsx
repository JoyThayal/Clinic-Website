"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctor", href: "#dentist" },
    { name: "Case Stories", href: "#cases" },
    { name: "FAQs", href: "#faqs" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* 1. Top Bar */}
      <div className="w-full bg-blue-600 text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-500/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Contact Details */}
          <div className="flex items-center gap-3 sm:gap-6 truncate">
            <a
              href="tel:0000000000"
              className="inline-flex items-center gap-1.5 hover:text-blue-100 transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-blue-200" />
              <span>(000) 000-0000</span>
            </a>

            <a
              href="mailto:example@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-blue-100 transition-colors truncate"
            >
              <Mail className="w-3.5 h-3.5 text-blue-200 shrink-0" />
              <span className="truncate">example@gmail.com</span>
            </a>

            <div className="hidden xl:flex items-center gap-1.5 text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-blue-200 shrink-0" />
              <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-2.5 h-2.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="w-full bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt="Dental Logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Dental<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="#booking"
              className="px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 whitespace-nowrap"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 3. Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 border-b border-slate-50 last:border-none"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Social Links & Location */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      aria-label={item.label}
                      className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>New Jersey</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
