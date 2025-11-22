"use client";

import React from "react";

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

export default function Page() {
  const CALENDLY_URL = "https://calendly.com/your-agency/growth-call"; // replace with your real Calendly link

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* 1. OFFER / HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 lg:flex lg:items-center lg:gap-16 lg:py-20">
          <div className="lg:w-1/2 space-y-6">
            <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300/80">
              AI Growth Engine For Realtors, CPs & Developers
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              We Help CPs & Developers add upto 5 Lacs into their Revenue
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
               Within 90 Days without adding extra workload.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              We run Content Driven Lead Generation Campaigns and Nurture the Leads on Auto Pilot with Our AI Drip Flow Automation, which increases your Site Visit Conversions by 2X within 45 - 90 days. </p>

            {/* MAIN CTA BUTTON (Calendly) */}
            <div className="space-y-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 hover:shadow-cyan-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Book Your Free AI Growth Call
              </a>

              <ul className="grid gap-1 text-xs text-slate-300/90 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Diagnose your current funnel, offer and lead flow.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Map our AI drip + voice stack into your model.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Build a 90‑day roadmap to consistent booked Site Visits.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Done-For-You Site Visit Generation System.
                </li>
              </ul>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">25+ Client Onboarded</p>
                <p>90+ Projects Sold</p>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <p className="font-semibold text-slate-200">Value-first call</p>
                <p>No hard pitch, just strategy</p>
              </div>
            </div>
            </div>
          </div>

          {/* 2. VIDEO SECTION (hero side) */}
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl backdrop-blur">
              <p className="mb-3 text-xs font-medium text-slate-300">Watch how the AI Growth Engine works (3 min)</p>
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black aspect-video">
                {/* Replace src with your real Loom / YouTube link */}
                <video className="h-full w-full" src="/videos/replace-this.mp4" controls />
              </div>
              <p className="mt-2 text-[11px] text-slate-400">
                Short breakdown of how we combine lead generation, automations and AI callers into one cohesive growth system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STANDALONE CTA BUTTON STRIP */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-3 items-start sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Free Strategy Call</p>
            <p className="mt-1 text-sm text-slate-200">
              In 15 minutes, we&apos;ll map the exact numbers, funnel and tech stack you need to hit your next revenue goal.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-5 py-2 text-xs font-semibold tracking-wide text-slate-950 shadow-md transition hover:bg-cyan-400 hover:shadow-cyan-400/40"
          >
            Book My Calendly Slot
          </a>
        </div>
      </section>

      {/* 4. LEADS + DRIP FLOW AUTOMATION + AI VOICE CALLER AGENTS */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Lead Engine + Automation + AI Callers
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
              One unified system that turns strangers into paying clients.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              We don&apos;t just bolt on random tools. We architect a single pipeline that captures leads, nurtures them with AI‑driven messaging and books them into your site visit calendar with voice agents that sound human.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-slate-50">1. Lead Generation</h3>
              <p className="text-xs text-slate-300">
                Multi‑channel inbound campaigns (Meta, Google, etc) engineered to bring the right prospects into your CRM daily.
              </p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                <li>Offer‑aligned UGC content and targeting</li>
                <li>Specifically tailored campaigns</li>
                <li>Real‑time performance improvements</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-slate-50">2. Drip Flow Automation</h3>
              <p className="text-xs text-slate-300">
                Behaviour‑based SMS, email and DM flows that automatically follow up, nurture and resurface leads until they&apos;re ready to book.
              </p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                <li>Dynamic sequences based on engagement</li>
                <li>Pipeline stage automations & reminders</li>
                <li>No‑show recovery & reactivation flows</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-slate-50">3. AI Voice Caller Agents</h3>
              <p className="text-xs text-slate-300">
                Human‑sounding AI callers that qualify, confirm and reschedule leads so your sales team only speaks with people ready to buy.
              </p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                <li>Real‑time calendar syncing</li>
                <li>Qualification logic & objection handling</li>
                <li>Redirection to actual human sales rep</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL VIDEOS */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Client Stories</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">Video testimonials from real operators.</h2>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                Hear directly from founders and teams who plugged our system in and scaled faster with less chaos.
              </p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-cyan-500/60 bg-slate-950/60 px-4 py-2 text-xs font-medium text-cyan-200 shadow-sm transition hover:bg-slate-900 hover:border-cyan-400"
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
      className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-3"
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-video border border-slate-800">
        <video className="h-full w-full" src={item.video} controls />
      </div>
      <div className="mt-3 text-xs text-slate-300">
        <p className="font-semibold text-slate-50">{item.name}</p>
        <p className="mt-1 text-[11px] text-slate-400">"{item.review}"</p>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

    {/* 6. WRITTEN REVIEWS – slider on mobile, grid on desktop */}
<section className="border-b border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-14">
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Written Reviews
      </p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
        Recent Screenshots from Ad Accounts. 
      </h2>
      <p className="mt-2 text-sm text-slate-300">
        Real ad spends, performance dashboards and written reviews from clients using our AI-powered lead and sales systems.
      </p>
    </div>

    {/* Slider on mobile, grid on md+ */}
    <div className="mt-8">
      <div
        className="
          flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory
          md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0
        "
      >
 {[
  { img: "/ss1.jpeg", caption: "Yamuna Expressway Campaign", name: "PapaTOXY Consultants LLP" },
  { img: "/ss2.jpeg", caption: "Sobha Noida Sec-1 Campaign", name: "Pulkit Gupta Estates" },
  { img: "/ss3.jpeg", caption: "Emaar Serenity Hills Gurgaon", name: "Apni Properties" },
  { img: "/ss4.jpeg", caption: "Ajmera Marina, Bangalore", name: "Propphase Realtors" },
  { img: "/ss5.jpeg", caption: "The Aaranyas, Almora, Uttrakhand", name: "Kumar Infratech" },
  { img: "/ss6.jpeg", caption: "Grace Resilvia, Gurgaon", name: "Apni Properties" },
  { img: "/ss7.jpeg", caption: "Nobel Economic Township", name: "BSingh Realty" },

  // ⭐ 8th “See More” Card
  { seeMore: true, link: "https://calendly.com/your-link" }

].map((item, idx) =>
  item.seeMore ? (
    // ⭐ SEE MORE CARD
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
        hover:bg-slate-900/70 transition-all duration-200
      "
    >
      <p className="text-lg font-semibold text-cyan-400">See More</p>
      <p className="text-xs text-slate-400 text-center px-4">
        View more ad accounts, spends & dashboards
      </p>

      <div className="mt-2 px-4 py-1.5 text-[12px] font-medium text-cyan-300 border border-cyan-400/40 rounded-full">
        Explore →
      </div>
    </a>
  ) : (
    // ⭐ NORMAL CLIENT CARD
    <div
      key={idx}
      className="
        flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 gap-3
        min-w-[80%] snap-start md:min-w-0
      "
    >
      {/* Client Name */}
      <p className="text-xs font-bold text-cyan-400 tracking-wide">
        {item.name}
      </p>

      {/* Caption */}
      <p className="text-sm font-semibold text-slate-50">{item.caption}</p>

      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
        <img
          src={item.img}
          alt="ad screenshot"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Verified */}
      <p className="text-[11px] text-slate-400 flex items-center gap-1">
        Verified Client
        <img
          src="/metaverified.png"
          alt="verified"
          className="w-3 h-3 opacity-80"
        />
      </p>
    </div>
  )
)}

      </div>
    </div>
  </div>
</section>
{/* Drip Flow Automations Section (place this BELOW the previous section) */}
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
        Actual automation flows used to nurture, follow up and close leads using
        WhatsApp, email and SMS—designed to run 24/7 with our AI-powered systems.
      </p>
    </div>

    {/* Slider on mobile, grid on md+ */}
    <div className="mt-8">
      <div
        className="
          flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory
          md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0
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
              md:min-w-0
            "
          >
            {/* Automation Name / Title */}
            <p className="text-xs font-bold text-cyan-400 tracking-wide">
              {item.name}
            </p>

            <p className="text-sm font-semibold text-slate-50">
              {item.caption}
            </p>

            <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
              <img
                src={item.img}
                alt="drip flow automation screenshot"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-[11px] text-slate-400">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Who We Are</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">A technical growth team behind the scenes of high‑ticket brands.</h2>
            <p className="mt-3 text-sm text-slate-300">
              We&apos;re operators, not gurus. Our background spans performance marketing, funnel architecture, CRM implementation and applied AI for lead management. We&apos;ve built, broken and rebuilt systems inside agencies, coaching programs and SaaS companies across the globe.
            </p>
            <p className="mt-2 text-sm text-slate-300">
              On your AI Growth Call, you&apos;ll speak directly with a strategist who has implemented these systems, not a commissioned closer reading a script.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-slate-300">
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">Specialists in service & info businesses</span>
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1">Tech stack‑agnostic: we plug into what you already use</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-3 text-sm text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Snapshot</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-slate-400">Client verticals</p>
                <p>Agencies, coaches, consultants, B2B services</p>
              </div>
              <div>
                <p className="text-slate-400">Core focus</p>
                <p>Lead systems, automations & AI sales enablement</p>
              </div>
              <div>
                <p className="text-slate-400">Engagements</p>
                <p>Done‑with‑you & select done‑for‑you builds</p>
              </div>
              <div>
                <p className="text-slate-400">Location</p>
                <p>Remote, serving clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ARTICLES */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Articles & Playbooks</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">Deep dives on what&apos;s working right now.</h2>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                Use these breakdowns to understand the thinking behind our systems. We&apos;ll reference the most relevant ones on your call.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((idx) => (
              <article
                key={idx}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 gap-3"
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-cyan-300">Playbook</p>
                <h3 className="text-sm font-semibold text-slate-50">
                  {idx === 1 && "Building an AI‑assisted sales pipeline that doesn&apos;t annoy your leads"}
                  {idx === 2 && "From spreadsheet chaos to clean CRM: structuring your pipeline for scale"}
                  {idx === 3 && "Using voice agents to increase show‑up rates without feeling robotic"}
                </h3>
                <p className="text-xs text-slate-300">
                  Tactical breakdown with screenshots, flows and scripts you can adapt to your own business.
                </p>
                <button className="mt-auto text-[11px] font-medium text-cyan-300 underline-offset-2 hover:underline text-left">
                  Read summary (coming soon)
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TEAM */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Team</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">The people behind your growth system.</h2>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                A lean team of strategists, engineers and operators who live inside funnels, CRMs and data dashboards.
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
              <div
                key={member.name}
                className="flex flex-col items-start rounded-2xl border border-slate-800 bg-slate-900/70 p-5 gap-3"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400/60 to-emerald-400/60 flex items-center justify-center text-xs font-semibold text-slate-950">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-50">{member.name}</p>
                  <p className="text-xs text-slate-400">{member.role}</p>
                </div>
                <p className="text-[11px] text-slate-400">
                  Works behind the scenes to ensure your systems are robust, fast and actually used by your team.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LOCATION + FINAL CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Location</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">Where we operate from.</h2>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                We run a remote‑first team with core operations in India and partners across the globe. Most of our work happens online, but we&apos;re available for select in‑person intensives.
              </p>

              <div className="mt-5 grid gap-4 text-xs text-slate-300 sm:grid-cols-2 max-w-xl">
                <div>
                  <p className="text-slate-400">Primary hub</p>
                  <p>New Delhi, India</p>
                </div>
                <div>
                  <p className="text-slate-400">Serving clients in</p>
                  <p>India, US, UK, Europe, Middle East & APAC</p>
                </div>
                <div>
                  <p className="text-slate-400">Availability</p>
                  <p>By appointment via Calendly</p>
                </div>
                <div>
                  <p className="text-slate-400">Communication</p>
                  <p>Zoom, Google Meet, Slack & WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 aspect-video">
                {/* Replace src with your real embedded map link if needed */}
                <video className="h-full w-full" src="/videos/replace-this.mp4" controls />
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-slate-50">Ready to see this built for your offer?</h3>
                <p className="text-xs text-slate-300">
                  Click below, pick a slot in our Calendly and complete the short intake so we can come prepared with numbers and ideas tailored to your model.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold tracking-wide text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 hover:shadow-cyan-400/40"
                >
                  Book Your AI Growth Call
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Your Agency Name. All rights reserved.</p>
            <p className="max-w-xl">
              This site is not part of or endorsed by YouTube, Google or Facebook. Facebook is a trademark of Meta Platforms, Inc. YouTube and Google are trademarks of Google LLC.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="underline-offset-2 hover:underline">Privacy Policy</button>
              <button className="underline-offset-2 hover:underline">Terms & Conditions</button>
              <button className="underline-offset-2 hover:underline">Earnings Disclaimer</button>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
