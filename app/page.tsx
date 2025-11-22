"use client";

import React, { useState, useEffect, useRef } from "react";

// --- DATA CONSTANTS ---
const stats = [
  {
    name: "Luke Salela",
    monthly: "$180,000",
    annual: "$2,160,000",
    timeframe: "20 months",
  },
  {
    name: "Luke Kintzel",
    monthly: "$120,000",
    annual: "$1,440,000",
    timeframe: "8 months",
  },
  {
    name: "Otavio Zerbini",
    monthly: "$110,000",
    annual: "$1,320,000",
    timeframe: "10 months",
  },
  {
    name: "Thibault Doutriaux",
    monthly: "$105,000",
    annual: "$1,260,000",
    timeframe: "14 months",
  },
  {
    name: "Zander Woodford-Smith",
    monthly: "$95,000",
    annual: "$1,140,000",
    timeframe: "18 months",
  },
  {
    name: "Sam Urparni",
    monthly: "$85,000",
    annual: "$1,020,000",
    timeframe: "14 months",
  },
];

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
    name: "Project Developer",
    company: "Premium Township Client",
    quote:
      "Warm, ready-to-visit prospects instead of cold form fills. The system filters and nurtures people before they reach us.",
  },
  {
    name: "Channel Partner",
    company: "Delhi NCR",
    quote:
      "No more missed follow ups. Every single enquiry now goes through a clear journey from first click to booked visit.",
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
    null
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
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
          animation: loop-scroll 40s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- SCROLL PROGRESS BAR --- */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-cyan-500/30">
        {/* 1. OFFER / HERO */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
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
            <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
            <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-emerald-500/15 blur-[100px]" />
            <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 lg:flex lg:items-center lg:gap-16 lg:py-20">
            <div className="lg:w-1/2 space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_25px_rgba(8,145,178,0.35)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI Growth Engine For Realtors, CPs & Developers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                We Help CPs & Developers add upto{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  5 Lacs in Net Revenue
                </span>
                <span className="block mt-1">
                  Within 90 Days — without extra workload.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                We run content-driven lead generation campaigns and then nurture
                those leads on autopilot with AI Drip Flow Automations and
                AI-powered voice agents, so your calendar fills with serious
                site visits instead of cold enquiries.
              </p>

              {/* Pain vs Solution */}
              <div className="mt-2 grid gap-3 sm:grid-cols-2 text-xs sm:text-[13px]">
                <div className="rounded-2xl border border-red-500/20 bg-slate-950/60 p-4 transition-colors hover:bg-slate-900 hover:border-red-500/30">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300/90">
                    Pain
                  </p>
                  <p className="mt-1 text-slate-300">
                    Leads come in but follow ups are slow, teams are busy and
                    site visits keep getting delayed or missed.
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-colors hover:bg-slate-900 hover:border-emerald-500/50">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
                    Solution
                  </p>
                  <p className="mt-1 text-slate-200">
                    Always-on AI flows that reply in minutes, nurture, follow up
                    and auto-book qualified site visits for your team.
                  </p>
                </div>
              </div>

              {/* MAIN CTA BUTTON (Calendly) */}
              <div className="space-y-4 pt-2">
                <div className="relative inline-flex group">
                  <div className="pointer-events-none absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="animate-float relative inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold tracking-wide text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.4)] ring-1 ring-cyan-300/50 transition-all hover:bg-cyan-400 hover:scale-[1.02] focus-visible:outline-none"
                  >
                    Book Your Free AI Growth Call
                  </a>
                </div>

                <ul className="grid gap-2 text-xs text-slate-300/90 sm:grid-cols-2 pt-2">
                  {[
                    "Diagnose your current funnel, offer and lead flow.",
                    "Map our AI drip + voice stack into your model.",
                    "Build a 90-day roadmap to consistent booked Site Visits.",
                    "Done-For-You Site Visit Generation System.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-3 text-[11px] text-slate-400">
                  <div>
                    <p className="font-semibold text-slate-200">
                      25+ Client Onboarded
                    </p>
                    <p>90+ Projects Sold</p>
                  </div>
                  <div className="h-8 w-px bg-slate-800" />
                  <div>
                    <p className="font-semibold text-slate-200">
                      Value-first call
                    </p>
                    <p>No hard pitch, just strategy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. VIDEO SECTION (hero side) */}
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-3 shadow-[0_24px_70px_rgba(8,47,73,0.6)] backdrop-blur-xl transition hover:scale-[1.01] duration-500 group">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
                <p className="mb-3 pl-1 text-xs font-medium text-slate-200 flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Watch how the AI Growth Engine works (3 min)
                </p>
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700 bg-black aspect-video cursor-pointer group">
                  <video
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-75 transition-opacity duration-300"
                    src="/videos/replace-this.mp4"
                    controls
                  />
                  {/* Subtle Pulse Overlay for Video */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <div className="h-12 w-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center pl-1 shadow-lg shadow-cyan-500/40">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                </div>
                <p className="mt-3 px-1 text-[11px] text-slate-400">
                  Short breakdown of how we combine lead generation, automations
                  and AI callers into one cohesive growth system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 STATS TICKER (Uses your stats array) */}
        <div className="w-full border-b border-slate-800 bg-slate-950/50 py-3 overflow-hidden flex relative z-20">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <div className="flex animate-loop-scroll whitespace-nowrap pause-animation items-center">
            {/* Render 3 times for seamless looping */}
            {[...stats, ...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 text-xs mx-8 opacity-80 hover:opacity-100 transition-opacity">
                <span className="font-semibold text-slate-300">{stat.name}</span>
                <span className="h-1 w-1 rounded-full bg-slate-700" />
                <span className="text-emerald-400 font-mono tracking-tight bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {stat.monthly}/mo
                </span>
                <span className="text-slate-500 text-[10px] uppercase tracking-wider">
                  {stat.timeframe}
                </span>
              </div>
            ))}
          </div>
        </div>

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
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-[11px] font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-pulse"
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
              className="inline-flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 px-5 py-2 text-xs font-semibold tracking-wide text-slate-200 shadow-md transition-all hover:bg-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105"
            >
              Book My Calendly Slot
            </a>
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
                className="mt-2 inline-flex items-center justify-center rounded-full border border-cyan-500/60 bg-slate-950/60 px-4 py-2 text-xs font-medium text-cyan-200 shadow-sm transition hover:bg-slate-900 hover:border-cyan-400 hover:shadow-cyan-900/40"
              >
                Book Your Growth Call
              </a>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
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
                  video: "/videos/narinder.mp4",
                },
                {
                  name: "Jalaj Kedia, Apni Properties",
                  review:
                    "Sarabjeet, Darshan & their Team only believes in the promising and over deliver . The Quality and Quantity of  leads were so good that i couldn't handle all of them at once.",
                  video: "/videos/jalaj.mp4",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-3 hover:border-slate-700 transition-colors duration-300"
                >
                  <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-video border border-slate-800 group cursor-pointer">
                    <video className="h-full w-full opacity-80 group-hover:opacity-60 transition-all duration-300" src={item.video} controls />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="h-10 w-10 rounded-full bg-slate-900/80 flex items-center justify-center backdrop-blur text-white group-hover:scale-110 transition-transform">
                          <svg fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                       </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-300 p-1">
                    <p className="font-semibold text-slate-50">{item.name}</p>
                    <p className="mt-1 text-[11px] text-slate-400 italic">
                      "{item.review}"
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
                         <span className="text-4xl text-slate-700 font-serif leading-none">&ldquo;</span>
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
                {[
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

                  // 8th “See More” Card
                  { seeMore: true, link: CALENDLY_URL },
                ].map((item, idx) =>
                  item.seeMore ? (
                    // SEE MORE CARD
                    <a
                      key={idx}
                      href={item.link}
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
                  ) : (
                    // NORMAL CLIENT CARD
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
                  )
                )}
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
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
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

        {/* 7. WHO WE ARE (ABOUT US) */}
        <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Who We Are
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                A technical growth team behind the scenes of high-ticket brands.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                We&apos;re operators, not gurus. Our background spans
                performance marketing, funnel architecture, CRM implementation
                and applied AI for lead management. We&apos;ve built, broken and
                rebuilt systems inside agencies, coaching programs and SaaS
                companies across the globe.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                On your AI Growth Call, you&apos;ll speak directly with a
                strategist who has implemented these systems, not a commissioned
                closer reading a script.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-[11px] text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 shadow-sm">
                  Specialists in service & info businesses
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 shadow-sm">
                  Tech stack-agnostic: we plug into what you already use
                </span>
              </div>
            </div>

            <SpotlightCard className="p-6 flex flex-col gap-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Snapshot
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                <div>
                  <p className="text-slate-400 font-medium">Client verticals</p>
                  <p>Agencies, coaches, consultants, B2B services</p>
                </div>
                <div>
                  <p className="text-slate-400 font-medium">Core focus</p>
                  <p>Lead systems, automations & AI sales enablement</p>
                </div>
                <div>
                  <p className="text-slate-400 font-medium">Engagements</p>
                  <p>Done-with-you & select done-for-you builds</p>
                </div>
                <div>
                  <p className="text-slate-400 font-medium">Location</p>
                  <p>Remote, serving clients worldwide</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* 8. ARTICLES */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Articles & Playbooks
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                  Deep dives on what&apos;s working right now.
                </h2>
                <p className="mt-2 text-sm text-slate-300 max-w-xl">
                  Use these breakdowns to understand the thinking behind our
                  systems. We&apos;ll reference the most relevant ones on your
                  call.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[1, 2, 3].map((idx) => (
                <SpotlightCard key={idx} className="p-5 flex flex-col gap-3 group">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-cyan-300 group-hover:text-cyan-200">
                    Playbook
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50 group-hover:text-white transition-colors">
                    {idx === 1 &&
                      "Building an AI-assisted sales pipeline that doesn't annoy your leads"}
                    {idx === 2 &&
                      "From spreadsheet chaos to clean CRM: structuring your pipeline for scale"}
                    {idx === 3 &&
                      "Using voice agents to increase show-up rates without feeling robotic"}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Tactical breakdown with screenshots, flows and scripts you
                    can adapt to your own business.
                  </p>
                  <button className="mt-auto text-[11px] font-medium text-cyan-400 underline-offset-2 group-hover:underline text-left flex items-center gap-1">
                    Read summary (coming soon)
                  </button>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Team
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                  The people behind your growth system.
                </h2>
                <p className="mt-2 text-sm text-slate-300 max-w-xl">
                  A lean team of strategists, engineers and operators who live
                  inside funnels, CRMs and data dashboards.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Your Name", role: "Founder & Growth Architect" },
                { name: "Team Member 2", role: "Automation & CRM Engineer" },
                { name: "Team Member 3", role: "AI Conversation Designer" },
                { name: "Team Member 4", role: "Performance Strategist" },
              ].map((member) => (
                <SpotlightCard
                  key={member.name}
                  className="p-5 flex flex-col items-start gap-3"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400/80 to-emerald-400/80 flex items-center justify-center text-xs font-bold text-slate-950 shadow-lg shadow-emerald-900/20">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-50">
                      {member.name}
                    </p>
                    <p className="text-xs text-slate-400">{member.role}</p>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Works behind the scenes to ensure your systems are robust,
                    fast and actually used by your team.
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
                    <p className="font-medium text-slate-200">New Delhi, India</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Serving clients in</p>
                    <p className="font-medium text-slate-200">India, US, UK, Europe, Middle East & APAC</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Availability</p>
                    <p className="font-medium text-slate-200">By appointment via Calendly</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-0.5">Communication</p>
                    <p className="font-medium text-slate-200">Zoom, Google Meet, Slack & WhatsApp</p>
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
                    className="animate-float inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-bold tracking-wide text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-105"
                  >
                    Book Your AI Growth Call
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Your Agency Name. All rights
                reserved.
              </p>
              <p className="max-w-xl text-slate-600">
                This site is not part of or endorsed by YouTube, Google or
                Facebook. Facebook is a trademark of Meta Platforms, Inc.
                YouTube and Google are trademarks of Google LLC.
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