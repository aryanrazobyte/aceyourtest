"use client";

import React from "react";

export default function VocabSeminarSection() {
  return (
    <section className="flex flex-col gap-8 px-6 py-20 md:flex-row md:items-start md:px-12 lg:px-20">
      {/* ── Left column ── */}
      <div className="w-full md:w-1/2 flex-shrink-0 md:pr-8 lg:pr-12">
        {/* Badge */}
        <span className="mb-4 inline-block rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white">
          Special Vocabulary Seminar
        </span>

        {/* Heading */}
        <h2 className="mb-4 text-4xl leading-tight lg:text-5xl font-display text-navy">
          Vocabulary Marathon Seminar
        </h2>

        {/* Description */}
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          At just 14 years old, Sandeep had already crammed the entire Oxford
          Advanced Learners Dictionary in! With an impressive vocabulary of over
          1,50,000 words, he&apos;s been teaching the GRE for 20 years! To see
          this literary whiz in action, check out this clip from the 2003 3-hour
          live Vocabulary Seminar - Vocabulary Marathon Seminar.
        </p>

        {/* CTA Button */}
        <a
          href="https://youtu.be/VatvGmuqfvg?si=HeamYEgDU32ts6k3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-navy transition hover:bg-muted hover:text-white active:scale-95"
        >
          Watch Video <span aria-hidden>→</span>
        </a>
      </div>

      {/* ── Right column — YouTube embed ── */}
      <div className="w-full md:w-1/2 flex-1">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%", minHeight: "360px" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/VatvGmuqfvg?si=HeamYEgDU32ts6k3"
            title="Vocabulary Marathon Seminar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
