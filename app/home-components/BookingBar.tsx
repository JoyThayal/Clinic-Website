"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  Calendar as CalendarIcon,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function BookingBar() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Booked:", formData);
  };

  return (
    <div
      id="booking"
      className="scroll-mt-32 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-10 md:mt-14"
    >
      <form
        onSubmit={handleBooking}
        className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl shadow-slate-200/50 border border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center"
      >
        {/* Field: Name */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <User className="w-4 h-4 text-blue-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent pt-0.5"
              required
            />
          </div>
        </div>

        {/* Field: Phone */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Phone className="w-4 h-4 text-blue-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent pt-0.5"
              required
            />
          </div>
        </div>

        {/* Field: Date */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <CalendarIcon className="w-4 h-4 text-blue-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full text-sm font-medium text-slate-800 focus:outline-none bg-transparent pt-0.5"
              required
            />
          </div>
        </div>

        {/* Field: Time */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Preferred Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full text-sm font-medium text-slate-800 focus:outline-none bg-transparent pt-0.5"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 lg:col-span-1 h-full flex items-center">
          <button
            type="submit"
            className="w-full h-full min-h-13 py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
