"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Darshan Jade",
    role: "CMO",
    image: "/team/darshan.jpg",
    description:
      "Leads growth strategy, brand positioning, and demand generation to help clients scale faster and reach the right audience.",
  },
  {
    name: "Chaitanya Gohar",
    role: "CTO",
    image: "/team/chaitanya.jpg",
    description:
      "Architects and oversees the technology behind every solution, ensuring secure, scalable, and high-performance systems.",
  },
  {
    name: "Rishabh Verma",
    role: "Content Manager",
    image: "/team/rishabh.jpg",
    description:
      "Creates compelling content that strengthens brand identity, engages audiences, and drives meaningful conversions.",
  },
  {
    name: "Anshika Goel",
    role: "Client Success Executive",
    image: "/team/anshika.jpg",
    description:
      "Acts as the primary point of contact for clients, ensuring smooth communication, timely support, and long-term success.",
  },
];

// --- DATA CONSTANTS ---
const writtenTestimonials = [
  {
    name: "Sanju Sharma",
    company: "Kumar Infratech · The Aaranyas",
    quote:
      "Qualified lead quality went up massively and we finally had a predictable flow of site visits coming in every week.",
  },
  {
    name: "Narinder Mutneja",
    company: "PapaTOXY Consultants LLP",
    quote:
      "Cost per lead dropped and the follow ups were handled without my team chasing every single enquiry manually.",
  },
  {
    name: "Jalaj Kedia",
    company: "Apni Properties",
    quote:
      "The pipeline was full enough that my problem became handling volume, not wondering where the next lead is coming from.",
  },
  {
    name: "Pulkit Gupta",
    company: "Pulkit Gupta Estates",
    quote:
      "We started getting faster confirmations on bookings as automations were talking to prospects even after office hours.",
  },
  {
    name: "B Singh",
    company: "Channel Partner",
    quote:
      "I got multiple site visits for Nobel Economic Township just within a week of starting the campaign with Sarabjeet and his Team.",
  },
  {
    name: "Mr. Rahul",
    company: "Channel Partner",
    quote:
      "We got 4 site visits just within 10 days of starting for our Bangalore project Ajmera Marina.",
  },
];

const adScreenshots: { img: string; caption: string; name: string }[] = [
  {
    img: "/ss1.jpeg",
    caption: "Yamuna Expressway Campaign",
    name: "PapaTOXY Consultants LLP",
  },
  {
    img: "/ss2.jpeg",
    caption: "Sobha Noida Sec-1 Campaign",
    name: "Pulkit Gupta Estates",
  },
  {
    img: "/ss3.jpeg",
    caption: "Emaar Serenity Hills Gurgaon",
    name: "Apni Properties",
  },
  {
    img: "/ss4.jpeg",
    caption: "Ajmera Marina, Bangalore",
    name: "Propphase Realtors",
  },
  {
    img: "/ss5.jpeg",
    caption: "The Aaranyas, Almora, Uttrakhand",
    name: "Kumar Infratech",
  },
  {
    img: "/ss6.jpeg",
    caption: "Grace Resilvia, Gurgaon",
    name: "Apni Properties",
  },
  {
    img: "/ss7.jpeg",
    caption: "Nobel Economic Township",
    name: "BSingh Realty",
  },
];

// --- COMPONENTS ---

// 1. Spotlight Card Component for UX Glow Effect
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-transform duration-300 hover:scale-[1.01] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.08), transparent 40%)`,
        }}
      />
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};

// 2. Main Page Component
export default function Page() {
  const CALENDLY_URL = "https://calendly.com/your-agency/growth-call"; // replace with real link

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % writtenTestimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* --- CSS & STYLES --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 2s ease-in infinite;
        }
          @keyframes smallfloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0px); }
        }
        .animate-smallfloat {
          animation: smallfloat 6s ease-in infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* --- SCROLL PROGRESS BAR --- */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-cyan-500/30">
        {/* 1. OFFER / HERO (Centered and Enlarged) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pb-16 pt-24 lg:pb-32 lg:pt-36">
          {/* Engineering Grid Background */}
          <div
            className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-10 right-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
            <div className="absolute top-1/2 left-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 flex flex-col items-center text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_25px_rgba(8,145,178,0.35)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI Growth Engine For Realtors, CPs & Developers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              We Help CPs & Developers add upto{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                5 Lacs in Net Revenue
              </span>
              <span className="block mt-2">
                Within 90 Days — without extra workload.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
              We run content-driven lead generation campaigns and then nurture
              those leads on autopilot with AI Drip Flow Automations and
              AI-powered voice agents, so your calendar fills with serious site
              visits instead of cold enquiries.
            </p>

            {/* MAIN CTA BUTTON (Calendly) */}
            <div className="space-y-6 pt-6 flex flex-col items-center">
              <div className="relative inline-flex group">
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="animate-float inline-flex items-center justify-center rounded-full bg-cyan-500 px-12 py-5 text-lg font-bold tracking-wide text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-400 hover:scale-105"
                >
                  Book Your Free AI Growth Call
                </a>
              </div>

              <ul className="grid gap-x-8 gap-y-3 text-sm text-slate-300/90 sm:grid-cols-2 text-left max-w-2xl mx-auto">
                {[
                  "Diagnose your current funnel, offer and lead flow.",
                  "Map our AI drip + voice stack into your model.",
                  "Build a 90-day roadmap to consistent booked Site Visits.",
                  "Done-For-You Site Visit Generation System.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
                <div className="text-center">
                  <p className="font-semibold text-slate-200">
                    25+ Client Onboarded
                  </p>
                  <p>90+ Projects Sold</p>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div className="text-center">
                  <p className="font-semibold text-slate-200">
                    Value-first call
                  </p>
                  <p>No hard pitch, just strategy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile sticky CTA */}
        <div className="fixed bottom-0 inset-x-0 z-50 border-t border-cyan-500/30 bg-slate-950/90 backdrop-blur-lg md:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="text-[11px] leading-tight text-slate-200">
              <p className="font-semibold text-cyan-50">
                Ready to fill your site visits?
              </p>
              <p className="text-slate-400">Tap to book your free AI call.</p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-500 px-7 py-3 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-pulse"
            >
              Book Call
            </a>
          </div>
        </div>

        {/* 3. STANDALONE CTA BUTTON STRIP */}
        <section className="border-b border-slate-800 bg-slate-950/80">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-3 items-start sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Free Strategy Call
              </p>
              <p className="mt-1 text-sm text-slate-200">
                In 15 minutes, we&apos;ll map the exact numbers, funnel and tech
                stack you need to hit your next revenue goal.
              </p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="animate-smallfloat inline-flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 px-5 py-2 text-xs font-semibold tracking-wide text-slate-200 shadow-xl shadow-gray-500/30 transition-all hover:bg-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105"
            >
              Book My Calendly Slot
            </a>
          </div>
        </section>

        {/* Pain + System Fix Section */}
        <section className="border-b border-slate-800 bg-slate-950 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="max-w-xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                The Real Estate Growth Problem
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                Why most CPs & Developers struggle to scale consistently.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* PAIN CARD */}
              <div className="rounded-2xl border border-red-500/20 bg-slate-900/70 p-6 shadow-[0_0_40px_rgba(220,38,38,0.08)] hover:bg-slate-900 transition-all duration-300">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-400">
                  Core Problems
                </p>

                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400"></span>
                    No predictable stream of qualified leads coming daily.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400"></span>
                    Follow-ups are inconsistent and slow — leads go cold fast.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400"></span>
                    Teams manually chase enquiries and miss 40–60% of
                    opportunities.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400"></span>
                    No structured lifecycle: leads come in but do not convert.
                  </li>
                </ul>
              </div>

              {/* SOLUTION CARD */}
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6 shadow-[0_0_50px_rgba(16,185,129,0.12)] hover:bg-slate-900 transition-all duration-300">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  Our System Fixes This
                </p>

                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Content-driven Lead Generation campaigns bring daily
                    qualified leads.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    AI-powered Drip Flow automations reply instantly — 24/7.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Behaviour-based nurturing moves leads through their buying
                    journey.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    AI voice callers pre-qualify & auto-book site visits for
                    your team.
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-10 text-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="animate-float inline-flex items-center justify-center rounded-full bg-cyan-500 px-10 py-4 text-base font-bold text-slate-950 shadow-xl shadow-xl shadow-cyan-500/30 hover:bg-cyan-400 hover:scale-105 transition-all"
              >
                Fix My Lead Flow →
              </a>
            </div>
          </div>
        </section>

        {/* 4. LEADS + DRIP FLOW AUTOMATION + AI VOICE CALLER AGENTS */}
        <section className="border-b border-slate-800 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="mx-auto max-w-6xl px-4 py-16 relative z-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Lead Engine + Automation + AI Callers
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                One unified system that turns strangers into paying clients.
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                We don&apos;t just bolt on random tools. We architect a single
                pipeline that captures leads, nurtures them with AI-driven
                messaging and books them into your site visit calendar with
                voice agents that sound human.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "1. Lead Generation",
                  desc: "Multi-channel inbound campaigns (Meta, Google, etc) engineered to bring the right prospects into your CRM daily.",
                  list: [
                    "Offer-aligned UGC content and targeting",
                    "Specifically tailored campaigns",
                    "Real-time performance improvements",
                  ],
                },
                {
                  title: "2. Drip Flow Automation",
                  desc: "Behaviour-based SMS, email and DM flows that automatically follow up, nurture and resurface leads until they're ready to book.",
                  list: [
                    "Dynamic sequences based on engagement",
                    "Pipeline stage automations & reminders",
                    "No-show recovery & reactivation flows",
                  ],
                },
                {
                  title: "3. AI Voice Caller Agents",
                  desc: "Human-sounding AI callers that qualify, confirm and reschedule leads so your sales team only speaks with people ready to buy.",
                  list: [
                    "Real-time calendar syncing",
                    "Qualification logic & objection handling",
                    "Redirection to actual human sales rep",
                  ],
                },
              ].map((item, idx) => (
                <SpotlightCard key={idx} className="p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-slate-50 border-l-2 border-cyan-500 pl-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="mt-auto space-y-1.5 text-[11px] text-slate-400">
                    {item.list.map((li, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-0.5">•</span> {li}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIAL VIDEOS */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Client Stories
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                  Video testimonials from real operators.
                </h2>
                <p className="mt-2 text-sm text-slate-300 max-w-xl">
                  Hear directly from founders and teams who plugged our system
                  in and scaled faster with less chaos.
                </p>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="animate-float mt-2 inline-flex items-center justify-center rounded-full border border-cyan-500/60 bg-slate-950/60 px-4 py-2 text-xs font-medium text-cyan-200 shadow-xl shadow-cyan-800/30 transition hover:bg-slate-900 hover:border-cyan-400 hover:shadow-cyan-900/40"
              >
                Book Your Growth Call
              </a>
            </div>

            <div className="mt-8 max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Sanju Sharma, Aaranyas, Kumar Infratech",
                  review:
                    "We achieved a lead qualification rate of 90-95% for our luxury villa project in Almora, Uttarakhand.",
                  video: "/sanju.mp4",
                },
                {
                  name: "Narinder Mutneja, PapaTOXY Consultants LLP",
                  review:
                    "Me and my team are working with drootle for our multiple residential & commercial projects in Noida . Our Cost per Lead and Lead quality has never been this better, we are looking forward to work with them in a longer run.",
                  video: "/papatoxy.mp4",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-3 hover:border-slate-700 transition-colors duration-300"
                >
                  <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-video border border-slate-800 group cursor-pointer">
                    <video
                      className="h-full w-full opacity-80 group-hover:opacity-60 transition-all duration-300"
                      src={item.video}
                      controls
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-10 w-10 rounded-full bg-slate-900/80 flex items-center justify-center backdrop-blur text-white group-hover:scale-110 transition-transform">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 ml-0.5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-300 p-1">
                    <p className="font-semibold text-slate-50">{item.name}</p>
                    <p className="mt-1 text-[11px] text-slate-400 italic">
                      {item.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5.5 WRITTEN TESTIMONIALS – VERTICAL AUTO SLIDER (FIXED) */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Written Testimonials
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                  What our clients say in writing.
                </h2>
              </div>
            </div>

            <div className="mt-8 mx-auto max-w-3xl">
              <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-sm">
                <div
                  className="h-full w-full"
                  style={{
                    transform: `translateY(-${activeTestimonial * 100}%)`,
                    transition: "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {writtenTestimonials.map((t, idx) => (
                    <div
                      key={t.name + idx}
                      className="h-full w-full flex flex-col justify-center items-center text-center px-4 md:px-12 gap-3"
                    >
                      <div className="mb-2">
                        <span className="text-4xl text-slate-700 font-serif leading-none">
                          &ldquo;
                        </span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-slate-100 leading-relaxed">
                        {t.quote}
                      </p>
                      <div className="mt-2 flex flex-col items-center">
                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                          {t.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {t.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute right-6 bottom-6 flex flex-col gap-1.5 z-10">
                  {writtenTestimonials.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-1.5 rounded-full transition-all duration-300 ${
                        idx === activeTestimonial
                          ? "h-4 bg-cyan-400"
                          : "h-1.5 bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. WRITTEN REVIEWS – slider on mobile, grid on desktop */}
        <section
          className="border-b border-slate-800 bg-slate-950"
          id="ad-screenshots"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Written Reviews
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                Recent Screenshots from Ad Accounts.
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Real ad spends, performance dashboards and written reviews from
                clients using our AI-powered lead and sales systems.
              </p>
            </div>

            <div className="mt-8">
              <div
                className="
          flex gap-4 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory
          md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0 scrollbar-hide
        "
              >
                {adScreenshots.map((item, idx) => (
                  <div
                    key={idx}
                    className="
        flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 gap-3
        min-w-[80%] snap-start md:min-w-0 hover:border-slate-700 transition-colors
      "
                  >
                    {/* Client Name */}
                    <p className="text-[10px] font-bold text-cyan-400 tracking-wide uppercase">
                      {item.name}
                    </p>

                    {/* Caption */}
                    <p className="text-sm font-semibold text-slate-50">
                      {item.caption}
                    </p>

                    {/* Image */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: item.img,
                          alt: item.caption,
                        })
                      }
                      className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
                    >
                      <img
                        src={item.img}
                        alt="ad screenshot"
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* Verified */}
                    <p className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-auto">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Verified Client
                    </p>
                  </div>
                ))}

                {/* SEE MORE CARD */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex flex-col justify-center items-center gap-3
        min-w-[80%] snap-start md:min-w-0
        rounded-2xl border border-slate-800 bg-slate-900/40
        p-4 backdrop-blur-md cursor-pointer
        hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02]
        group
      "
                >
                  <p className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300">
                    See More
                  </p>
                  <p className="text-xs text-slate-400 text-center px-4">
                    View more ad accounts, spends & dashboards
                  </p>

                  <div className="mt-2 px-4 py-1.5 text-[12px] font-medium text-cyan-300 border border-cyan-400/40 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                    Explore →
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Drip Flow Automations Section */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Drip Flow Automations
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                Screenshots from Drip Flow Sequences.
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Actual automation flows used to nurture, follow up and close
                leads using WhatsApp, email and SMS—designed to run 24/7 with
                our AI-powered systems.
              </p>
            </div>

            <div className="mt-8">
              <div
                className="
          flex gap-4 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory
          md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0 scrollbar-hide
        "
              >
                {[
                  {
                    img: "/drip1.jpeg",
                    caption: "90-Day Nurture Flow",
                    name: "Cold to Qualified Lead Journey",
                  },
                  {
                    img: "/drip2.jpeg",
                    caption: "WhatsApp Follow-Up Flow",
                    name: "Instant Response & Re-engagement",
                  },
                  {
                    img: "/drip3.jpeg",
                    caption: "Retargeting & Revival Flow",
                    name: "Old Lead Revival Automation",
                  },
                  {
                    img: "/drip4.jpeg",
                    caption: "Booking Confirmation Flow",
                    name: "Auto-Reminders & No-Show Reducer",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="
              flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 gap-3
              min-w-[80%] snap-start
              md:min-w-0 hover:bg-slate-900 transition-colors
            "
                  >
                    {/* Automation Name / Title */}
                    <p className="text-[10px] font-bold text-emerald-400 tracking-wide uppercase">
                      {item.name}
                    </p>

                    <p className="text-sm font-semibold text-slate-50">
                      {item.caption}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: item.img,
                          alt: item.caption,
                        })
                      }
                      className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
                    >
                      <img
                        src={item.img}
                        alt="drip flow automation screenshot"
                        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-slate-950/80 rounded-full p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>

                    <p className="text-[10px] text-slate-500 mt-auto">
                      Automation Snapshot · Live Workflow
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. TEAM & FOUNDER SECTION */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            {/* ABOUT THE FOUNDER BLOCK */}
            <div className="mb-20 grid gap-12 lg:grid-cols-2 items-center">
              {/* Text Side */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                    About The Founder
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-50">
                    Sarabjeet Singh
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed text-base">
                  As the Founder & CEO of{" "}
                  <span className="font-semibold text-white">Drootle</span>,
                  Sarabjeet Singh helps real estate developers and channel
                  partners scale their businesses through performance-driven
                  outbound marketing, AI-powered automation, and high-converting
                  lead generation systems. His focus is on building predictable
                  revenue pipelines while helping brands establish a strong and
                  visible market presence.
                </p>

                <p className="text-slate-300 leading-relaxed text-base">
                  Beyond growing businesses, Sarabjeet is passionate about
                  mastering the skills that drive modern companies forward—from
                  consumer psychology, paid advertising, CRMs, and content
                  strategy to sales, negotiation, recruitment, leadership, and
                  service delivery. Every campaign and client engagement becomes
                  an opportunity to learn, refine, and build systems that create
                  measurable business growth.
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs text-slate-300 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    Founder & CEO • Drootle
                  </span>
                </div>
              </div>

              {/* Artistic Photo Composition Side */}
              <div className="relative w-full h-[400px] sm:h-[450px] group cursor-default">
                {/* Large Background Photo */}
                <div className="absolute inset-0 md:inset-4 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-cyan-950/40 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  {/* Replace this src with Sarabjeet's wide/action photo */}
                  <img
                    src="/sabby2.jpeg"
                    alt="Sarabjeet Singh - Action"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Floating Portrait Photo */}
                <div className="absolute -bottom-6 -left-4 sm:left-4 w-40 h-56 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-4 border-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-2 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] z-20">
                  {/* Replace this src with Sarabjeet's portrait photo */}
                  <img
                    src="/sabby1.jpeg"
                    alt="Sarabjeet Singh - Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 -right-6 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50 pointer-events-none" />
                <div className="absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50 pointer-events-none" />
              </div>
            </div>

            {/* TEAM CARDS */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-t border-slate-800 pt-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  The Core Team
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                  The operators behind your growth system.
                </h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <SpotlightCard
                  key={member.name}
                  className="p-5 flex flex-col items-start gap-4"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover border border-white/10"
                  />

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-400">{member.role}</p>
                  </div>

                  <p className="text-sm leading-6 text-slate-400">
                    {member.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* 10. LOCATION + FINAL CTA */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14 space-y-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Location
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                  Where we operate from.
                </h2>
                <p className="mt-2 text-sm text-slate-300 max-w-xl">
                  We run a remote-first team with core operations in India and
                  partners across the globe. Most of our work happens online,
                  but we&apos;re available for select in-person intensives.
                </p>

                <div className="mt-5 grid gap-4 text-xs text-slate-300 sm:grid-cols-2 max-w-xl">
                  <div>
                    <p className="text-slate-500 mb-0.5">Primary hub</p>
                    <p className="font-medium text-slate-200">
                      New Delhi, India
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Serving clients in</p>
                    <p className="font-medium text-slate-200 leading-relaxed">
                      India, US, UK, Europe, Middle East, APAC, Thailand,
                      Singapore, Malaysia
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Availability</p>
                    <p className="font-medium text-slate-200">
                      By appointment via Calendly
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Communication</p>
                    <p className="font-medium text-slate-200">
                      Zoom, Google Meet, Slack & WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 aspect-video group relative">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  <video
                    className="h-full w-full object-cover"
                    src="/videos/replace-this.mp4"
                    controls
                  />
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 flex flex-col gap-4 text-center">
                  <h3 className="text-sm font-semibold text-slate-50">
                    Ready to see this built for your offer?
                  </h3>
                  <p className="text-xs text-slate-400 px-4">
                    Click below, pick a slot in our Calendly and complete the
                    short intake so we can come prepared with numbers and ideas
                    tailored to your model.
                  </p>
                  <div className="pt-2">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="animate-float inline-flex items-center justify-center rounded-full bg-cyan-500 px-10 py-4 text-base font-bold tracking-wide text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-400 hover:scale-105"
                    >
                      Book Your AI Growth Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Drootle Marketing Solutions. All
                rights reserved.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="underline-offset-2 hover:text-slate-300 transition-colors">
                  Privacy Policy
                </button>
                <button className="underline-offset-2 hover:text-slate-300 transition-colors">
                  Terms & Conditions
                </button>
                <button className="underline-offset-2 hover:text-slate-300 transition-colors">
                  Earnings Disclaimer
                </button>
              </div>
            </footer>
          </div>
        </section>
      </main>

      {/* Global Image Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800 hover:border-cyan-500 transition-colors"
            onClick={() => setLightbox(null)}
          >
            Close ✕
          </button>
          <div
            className="max-h-[90vh] max-w-[95vw] overflow-hidden rounded-xl border border-slate-800 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
