"use client";

import React, { useState } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";

export default function FullBookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    appointmentType: "",
    dentist: "Dr. David Brown",
    date: "",
    time: "",
    notes: "",
  });

  // ক্লিনিকের WhatsApp নম্বর (কান্ট্রি কোড সহ, '+' বা স্পেস ছাড়া)
  const CLINIC_WHATSAPP_NUMBER = "919876543210"; // তোমার ক্লায়েন্টের আসল নম্বর এখানে দেবে

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // বিস্তারিত ও গোছানো WhatsApp মেসেজ
    const message =
      ` *Comprehensive Dental Appointment Request* \n\n` +
      ` *Patient Name:* ${formData.name}\n` +
      ` *Phone Number:* ${formData.phone}\n` +
      ` *Treatment Type:* ${formData.appointmentType || "Not Specified"}\n` +
      ` *Preferred Doctor:* ${formData.dentist}\n` +
      ` *Date:* ${formData.date}\n` +
      ` *Time:* ${formData.time}\n` +
      (formData.notes.trim()
        ? ` *Special Notes:* ${formData.notes}\n\n`
        : `\n`) +
      `_Submitted via Dental Clinic Website_`;

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="booking-full"
      className="scroll-mt-24 sm:scroll-mt-28 w-full bg-[#f8fbff] py-14 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-end mb-10 sm:mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="text-base font-bold text-slate-500 tracking-widest uppercase">
              Book An Appointment
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mt-2 sm:mt-3">
              Effortless Online Booking <br className="hidden sm:inline" />
              <span className="text-blue-600">for Your Dental Visit</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
        </div>

        {/* Form & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Full Booking Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                    required
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Phone Number <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Appointment Type & Preferred Dentist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Type of Appointment <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer shadow-sm"
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="General Dentistry">
                        General Dentistry
                      </option>
                      <option value="Dental Implant">Dental Implant</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Braces Treatment">Braces Treatment</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Preferred Dentist <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="dentist"
                      value={formData.dentist}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer shadow-sm"
                      required
                    >
                      <option value="Dr. David Brown">Dr. David Brown</option>
                      <option value="Dr. Sarah Jenkins">
                        Dr. Sarah Jenkins
                      </option>
                      <option value="Dr. Michael Chang">
                        Dr. Michael Chang
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Preferred Date <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                    required
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Preferred Time <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-700 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Row 4: Special Notes */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Special Requests or Notes
                </label>
                <textarea
                  rows={4}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Enter here..."
                  className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  Book an Appointment via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clinic Hours */}
            <div className="w-full bg-blue-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-600/20 space-y-6">
              <h3 className="text-lg font-bold">Clinic Hours</h3>

              <div className="space-y-4 text-sm divide-y divide-blue-500/60 font-medium">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-blue-100">Monday to Friday</span>
                  <span className="font-semibold">09:00 - 22:00</span>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-blue-100">Saturday</span>
                  <span className="font-semibold">11:00 - 20:00</span>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-blue-100">Sunday</span>
                  <span className="font-semibold text-blue-200">Closed</span>
                </div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">
                  Your Smile, Our Priority
                </p>
                <h4 className="text-base font-bold text-slate-900">
                  24/7 Emergency
                </h4>
                <a
                  href="tel:0000000000"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  (000) 000-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
