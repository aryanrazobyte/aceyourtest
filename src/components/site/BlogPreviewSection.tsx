import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { posts as allPosts } from "../../lib/blog-data";
import { SectionHeader } from "./SectionHeader";

export default function BlogPreviewSection({ embedded = false }: { embedded?: boolean }) {
  const posts = allPosts.slice(0, 3);

  const content = (
    <>
      <SectionHeader eyebrow="From Our Blog" title="Latest articles & insights" center />

      <div className="section-gap grid gap-4 sm:gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow flex flex-col">
            <div className="aspect-[16/9] bg-gradient-to-br from-navy to-secondary relative">
              <span className="absolute top-2 left-2 rounded-md bg-white/95 text-navy px-2 py-0.5 text-xs font-semibold">{p.cat}</span>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">{p.desc}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date} · {p.read}</span>
                <Link to="/blog" className="inline-flex items-center gap-1 text-primary font-semibold">Read <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          View all posts <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );

  if (embedded) {
    return <div className="section-gap">{content}</div>;
  }

  return (
    <section className="section-y">
      <div className="container-page">{content}</div>
    </section>
  );
}
