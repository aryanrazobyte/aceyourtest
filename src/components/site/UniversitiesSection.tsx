"use client";

import React from "react";

const universities = [
  {
    name: "MIT", full: "Mass. Inst. of Technology", location: "Cambridge, USA", badge: "STEM #1", badgeColor: "#B31B1B",
    svgBg: "#B31B1B",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#B31B1B" rx="16"/>
        <text x="36" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Arial,sans-serif">MASS.</text>
        <text x="36" y="42" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Arial,sans-serif">INST. OF</text>
        <text x="36" y="56" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Arial,sans-serif">TECH.</text>
      </svg>
    ),
  },
  {
    name: "Stanford", full: "Stanford University", location: "California, USA", badge: "Ivy Peer", badgeColor: "#8C1515",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#8C1515" rx="16"/>
        <polygon points="36,10 58,26 58,46 36,62 14,46 14,26" fill="none" stroke="white" strokeWidth="2.5"/>
        <text x="36" y="41" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Georgia,serif">SU</text>
      </svg>
    ),
  },
  {
    name: "Harvard", full: "Harvard University", location: "Cambridge, USA", badge: "Ivy League", badgeColor: "#A51C30",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#A51C30" rx="16"/>
        <rect x="18" y="20" width="36" height="32" rx="3" fill="none" stroke="white" strokeWidth="2"/>
        <text x="36" y="41" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Georgia,serif">VE</text>
        <text x="36" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Arial,sans-serif">HARVARDIANA</text>
      </svg>
    ),
  },
  {
    name: "Oxford", full: "University of Oxford", location: "Oxford, UK", badge: "World #1", badgeColor: "#002147",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#002147" rx="16"/>
        <ellipse cx="36" cy="36" rx="18" ry="22" fill="none" stroke="#C9A84C" strokeWidth="2.5"/>
        <line x1="36" y1="14" x2="36" y2="58" stroke="#C9A84C" strokeWidth="2"/>
        <line x1="18" y1="36" x2="54" y2="36" stroke="#C9A84C" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Cambridge", full: "Univ. of Cambridge", location: "Cambridge, UK", badge: "800+ Years", badgeColor: "#003B71",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#003B71" rx="16"/>
        <path d="M20 52 Q36 14 52 52" stroke="#C9A84C" strokeWidth="3" fill="none"/>
        <path d="M28 36 Q36 28 44 36" stroke="#C9A84C" strokeWidth="2" fill="none"/>
        <text x="36" y="63" textAnchor="middle" fill="#C9A84C" fontSize="8" fontWeight="800" fontFamily="Georgia,serif">CANTAB</text>
      </svg>
    ),
  },
  {
    name: "Wharton", full: "Wharton / UPenn", location: "Philadelphia, USA", badge: "Biz #1", badgeColor: "#011F5B",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#011F5B" rx="16"/>
        <text x="36" y="46" textAnchor="middle" fill="white" fontSize="30" fontWeight="900" fontFamily="Georgia,serif">W</text>
        <rect x="14" y="52" width="44" height="3" rx="1.5" fill="#C9A84C"/>
      </svg>
    ),
  },
  {
    name: "LBS", full: "London Business School", location: "London, UK", badge: "Finance", badgeColor: "#00285E",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#00285E" rx="16"/>
        <rect x="14" y="20" width="44" height="6" rx="3" fill="#D4AF37"/>
        <rect x="14" y="33" width="32" height="6" rx="3" fill="white"/>
        <rect x="14" y="46" width="44" height="6" rx="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: "INSEAD", full: "INSEAD", location: "Fontainebleau, FR", badge: "Global MBA", badgeColor: "#1A3668",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#1A3668" rx="16"/>
        <circle cx="36" cy="36" r="18" fill="none" stroke="white" strokeWidth="2"/>
        <line x1="36" y1="18" x2="36" y2="54" stroke="white" strokeWidth="1.5"/>
        <ellipse cx="36" cy="36" rx="10" ry="18" fill="none" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Cornell", full: "Cornell University", location: "New York, USA", badge: "Ivy League", badgeColor: "#B31B1B",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#B31B1B" rx="16"/>
        <path d="M20 20 L20 52 M20 36 L44 20 M20 36 L44 52" stroke="white" strokeWidth="3.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "NYU", full: "New York University", location: "New York, USA", badge: "Research", badgeColor: "#57068C",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#57068C" rx="16"/>
        <path d="M18 20 L36 44 L54 20" stroke="white" strokeWidth="3.5" fill="none" strokeLinejoin="round"/>
        <line x1="36" y1="44" x2="36" y2="56" stroke="white" strokeWidth="3.5"/>
      </svg>
    ),
  },
  {
    name: "NUS", full: "Natl Univ. of Singapore", location: "Singapore", badge: "Asia #1", badgeColor: "#003D7C",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#003D7C" rx="16"/>
        <path d="M20 52 L20 20 L52 52 L52 20" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "ISB", full: "Indian School of Business", location: "Hyderabad, India", badge: "India #1", badgeColor: "#004B87",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#004B87" rx="16"/>
        <rect x="16" y="28" width="40" height="28" rx="4" fill="none" stroke="white" strokeWidth="2.5"/>
        <path d="M26 28 L26 20 Q36 14 46 20 L46 28" stroke="white" strokeWidth="2.5" fill="none"/>
        <text x="36" y="47" textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Arial">ISB</text>
      </svg>
    ),
  },
  {
    name: "Kellogg", full: "Kellogg / Northwestern", location: "Illinois, USA", badge: "MBA Top 5", badgeColor: "#4E2A84",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#4E2A84" rx="16"/>
        <path d="M20 20 L20 52 M20 36 L44 20 M20 36 L44 52" stroke="white" strokeWidth="3.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Columbia", full: "Columbia University", location: "New York, USA", badge: "Ivy League", badgeColor: "#003087",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#003087" rx="16"/>
        <path d="M36 14 C22 14 14 24 14 36 C14 48 22 58 36 58 C44 58 51 53 54 46" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M44 20 C50 26 54 30 54 36" stroke="#C9A84C" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Purdue", full: "Purdue University", location: "Indiana, USA", badge: "STEM", badgeColor: "#C28E0E",
    logo: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" fill="#1A1A1A" rx="16"/>
        <rect x="16" y="20" width="26" height="32" rx="2" fill="#C28E0E"/>
        <circle cx="42" cy="36" r="13" fill="#C28E0E"/>
        <circle cx="42" cy="36" r="7" fill="#1A1A1A"/>
      </svg>
    ),
  },
];

interface University {
  name: string;
  full: string;
  location: string;
  badge: string;
  badgeColor: string;
  logo: React.ReactNode;
}

function UniversityCard({ u }: { u: University }) {
  return (
    <div className="group flex w-[130px] sm:w-[150px] flex-shrink-0 flex-col items-center gap-2 sm:gap-3 rounded-2xl border border-border bg-card px-3 py-4 sm:px-4 sm:py-5 transition-all duration-250 hover:-translate-y-1 hover:border-navy hover:shadow-elevated">
      {/* SVG Logo */}
      <div className="h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-2xl">
        {u.logo}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-center text-[13px] font-extrabold leading-tight text-navy">
          {u.name}
        </span>
        <span className="text-center text-[10px] font-medium leading-tight text-muted-foreground">
          {u.full}
        </span>
        <span className="text-center text-[10px] text-gray-400">{u.location}</span>
      </div>

      {/* Badge */}
      <span
        className="mt-1 rounded-full px-3 py-0.5 text-[9px] font-bold tracking-wide"
        style={{
          backgroundColor: u.badgeColor + "18",
          color: u.badgeColor,
        }}
      >
        {u.badge}
      </span>
    </div>
  );
}

export default function UniversitiesSection() {
  const doubled = [...universities, ...universities];

  return (
    <section className="overflow-hidden section-gap text-center">

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee-left gap-5 hover:[animation-play-state:paused]">
          {doubled.map((u, i) => (
            <UniversityCard key={`${u.name}-${i}`} u={u} />
          ))}
        </div>
      </div>
    </section>
  );
}
