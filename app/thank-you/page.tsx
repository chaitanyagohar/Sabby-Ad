"use client";

import React from "react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Background Grid & Glows (Matches Home Page) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none z-0" />

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8 sm:p-12 backdrop-blur-xl shadow-2xl animate-fade-in">
        
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <svg
            className="h-10 w-10 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Headings */}
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
            // Status: Confirmed
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Your Strategy Call is Booked.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            A calendar invitation has been sent to your inbox with the Google Meet link. 
            Here is what happens next.
          </p>
        </div>

        {/* Next Steps List */}
        <div className="space-y-4 mb-10">
          {[
            {
              step: "01",
              title: "Check your inbox",
              desc: "Make sure the calendar invite landed in your primary inbox. If not, check spam and whitelist us.",
            },
            {
              step: "02",
              title: "Know your numbers",
              desc: "Come prepared with your current Cost Per Lead (CPL), monthly ad spend, and conversion rates.",
            },
            {
              step: "03",
              title: "Show up on a laptop",
              desc: "We will be screen-sharing live workflows and mapping out your funnel architecture. Mobile won't cut it.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/50 p-4 transition-colors hover:border-slate-700"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-mono font-bold text-cyan-400">
                {item.step}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Return Button */}
        <div className="text-center border-t border-slate-800/60 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}