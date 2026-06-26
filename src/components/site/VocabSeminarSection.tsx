"use client";

import React from "react";
import { Link } from "@tanstack/react-router";

export default function VocabSeminarSection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-start">
        <div className="w-full md:w-1/2 flex-shrink-0 md:pr-6">
          <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs sm:text-sm font-medium text-white">
            Special Vocabulary Seminar
          </span>

          <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight text-navy">
            A Legacy of Clarity and Performance
          </h2>

          <p className="mb-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
            AceYourTest began over a decade ago as a small group of GMAT aspirants gathering around a whiteboard in Delhi. What started as informal mentoring quickly grew into something far more powerful - students were not only improving scores, but learning how to think clearly, solve under pressure, and perform when it mattered most.


  
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-navy transition hover:bg-muted sm:px-6 sm:py-3.5 sm:text-base"
          >
            Read more <span aria-hidden>→</span>
          </Link>
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
