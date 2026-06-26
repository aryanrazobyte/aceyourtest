"use client";

import React from "react";

export default function VocabSeminarSection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-start">
        <div className="w-full md:w-1/2 flex-shrink-0 md:pr-6">
          <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs sm:text-sm font-medium text-white">
            Special Vocabulary Seminar
          </span>

          <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight text-navy">
            India's Top GMAT, GRE & SAT Quant Expert
          </h2>

          <p className="mb-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
         An exceptionally driven Quant trainer with over 15 years of experience coaching students for GMAT, GRE, and SAT, he has successfully trained 10,000+ students, many through referrals. Having worked with reputed organizations like The Princeton Review and Leverage Edu, he is known for delivering outcome-focused results through adaptive teaching methods, real-life application of complex quantitative concepts, and highly engaging, collaborative classroom sessions.

  
          </p>

          <a
            href="https://youtu.be/VatvGmuqfvg?si=HeamYEgDU32ts6k3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-navy transition hover:bg-muted sm:px-6 sm:py-3.5 sm:text-base"
          >
            Watch Video <span aria-hidden>→</span>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex-1">
          <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/VatvGmuqfvg?si=HeamYEgDU32ts6k3"
              title="Vocabulary Marathon Seminar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
