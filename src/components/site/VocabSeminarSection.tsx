"use client";

import React from "react";

export default function VocabSeminarSection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-start">
        <div className="w-full md:w-1/2 flex-shrink-0 md:pr-6">
          <span className="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-xs sm:text-sm font-medium text-white">
            Special Vocabulary Seminar
          </span>

          <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight text-navy">
            Vocabulary Marathon Seminar
          </h2>

          <p className="mb-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
            At just 14 years old, Sandeep had already crammed the entire Oxford
            Advanced Learners Dictionary in! With an impressive vocabulary of over
            1,50,000 words, he&apos;s been teaching the GRE for 20 years! To see
            this literary whiz in action, check out this clip from the 2003 3-hour
            live Vocabulary Seminar - Vocabulary Marathon Seminar.
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
