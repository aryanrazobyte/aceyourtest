"use client";

import React from "react";

const students = [
  {
    name: "Shloka Vasudeva",
    school: "LBS & INSEAD",
    badge: "blue",
    initials: "SV",
    quote: "Every question Sandeep gives has a purpose to develop your thought process.",
  },
  {
    name: "Nayantara Mehta",
    school: "MIT Sloan",
    badge: "red",
    initials: "NM",
    quote: "Thanks to Sandeep sir and team TOP for helping me constantly through this journey.",
  },
  {
    name: "Pawan Gupta",
    school: "MIT Sloan",
    badge: "red",
    initials: "PG",
    quote: "Sandeep's Millionaire Maker Seminar is the greatest investment I have made in my life.",
  },
  {
    name: "Arjun Sharma",
    school: "Harvard HBS",
    badge: "red",
    initials: "AS",
    quote: "The mock GMAT sessions were incredibly realistic and boosted my confidence.",
  },
  {
    name: "Priya Nair",
    school: "Wharton",
    badge: "green",
    initials: "PN",
    quote: "I improved my score by 80 points in just two months with this program.",
  },
  {
    name: "Rohit Mehta",
    school: "Stanford GSB",
    badge: "green",
    initials: "RM",
    quote: "Personalized feedback on my essays made all the difference in my applications.",
  },
  {
    name: "Anika Bose",
    school: "Kellogg",
    badge: "blue",
    initials: "AB",
    quote: "Team TOP helped me craft a narrative that truly stood out to the admissions committee.",
  },
  {
    name: "Vikram Rao",
    school: "INSEAD",
    badge: "blue",
    initials: "VR",
    quote: "Strategy sessions helped me understand exactly which schools to target.",
  },
];

const badgeMap: Record<string, string> = {
  red: "bg-red-50 text-red-800",
  blue: "bg-blue-50 text-blue-800",
  green: "bg-green-50 text-green-800",
};

const avatarBgMap: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
};

const avatarBorderMap: Record<string, string> = {
  red: "bg-red-50",
  blue: "bg-blue-50",
  green: "bg-green-50",
};

interface Student {
  name: string;
  school: string;
  badge: string;
  initials: string;
  quote: string;
}

function StudentCard({ s }: { s: Student }) {
  return (
    <div className="flex w-[360px] flex-shrink-0 overflow-hidden rounded-xl border border-border bg-card">
      {/* Left Half — Avatar / Image area */}
      <div className={`flex w-[40%] flex-shrink-0 flex-col items-center justify-center gap-2 p-4 ${avatarBorderMap[s.badge]}`}>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold ${avatarBgMap[s.badge]}`}
        >
          {s.initials}
        </div>
        <span className="text-center text-[10px] font-medium text-muted-foreground leading-tight">
          {s.school}
        </span>
      </div>

      {/* Right Half — Text content */}
      <div className="flex w-[60%] flex-col justify-center gap-2 p-4">
        <p className="text-[14px] md:text-[15px] font-semibold leading-tight text-navy">{s.name}</p>
        <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeMap[s.badge]}`}>{s.school}</span>
        <p className="text-[12px] md:text-[13px] italic leading-relaxed text-muted-foreground">&ldquo;{s.quote}&rdquo;</p>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Student[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((s, i) => (
          <StudentCard key={`${s.name}-${i}`} s={s} />
        ))}
      </div>
    </div>
  );
}

export default function BSchoolSection() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* ── Left column ── */}
      <div className="w-full md:w-1/2 flex-shrink-0 md:pr-8 lg:pr-12">
        <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight text-navy">
          Which <span className="text-red-600">TOP B-School/University</span> do you see yourself in?
        </h2>

        <p className="mb-3 text-base leading-relaxed text-muted-foreground">
          Harvard, Stanford, Wharton, Booth, Kellogg, MIT-Sloan, LBS, INSEAD,
          ISB… these are the BEST out there. You must target these schools
          exclusively. You may keep a few safe options but these are the real
          deal!!
        </p>

        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          We have students regularly selected to each of these schools. Across
          the globe, no other institute has better results in terms of scores
          and admits.
        </p>

        <ul className="mb-6 space-y-3">
          {[
            "These schools expect Top 1% scores",
            "Your GMAT/GRE drives both admits and money",
            "A high score de-risks your profile",
            "Admissions is not holistic until your score clears the bar",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-600">
                <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                  <path
                    d="M5 10l3.5 3.5L15 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <button className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-navy transition hover:bg-muted active:scale-95 sm:px-6 sm:py-3.5 sm:text-base">
          Book a Personalised Diagnostic + Strategy Call{" "}
          <span aria-hidden>›</span>
        </button>
      </div>

      {/* ── Right column — two marquee rows ── */}
      <div className="flex flex-1 flex-col gap-4 overflow-hidden md:w-1/2">
        <MarqueeRow items={students.slice(0, 4)} direction="left" />
        <MarqueeRow items={students.slice(4)} direction="right" />
      </div>
      </div>
    </section>
  );
}
