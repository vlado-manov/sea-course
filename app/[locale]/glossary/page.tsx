"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, Hash, ExternalLink, ChevronRight } from "lucide-react";
import { glossaryTerms, glossaryCategories } from "@/lib/content/glossary";
import { cn } from "@/lib/utils";

export default function GlossaryPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale ?? "bg";
  const isBg = locale === "bg";

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLetter, setSelectedLetter] = useState<string>("all");

  const letters = useMemo(() => {
    const ls = [...new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()))].sort();
    return ["all", ...ls];
  }, []);

  const filtered = useMemo(() => {
    return glossaryTerms.filter((t) => {
      const matchesQuery =
        !query ||
        t.term.toLowerCase().includes(query.toLowerCase()) ||
        t.definition[locale as "bg" | "en"].toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selectedCategory === "all" || t.category === selectedCategory;
      const matchesLetter = selectedLetter === "all" || t.term[0].toUpperCase() === selectedLetter;
      return matchesQuery && matchesCategory && matchesLetter;
    });
  }, [glossaryTerms, query, selectedCategory, selectedLetter, locale]);

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="relative pt-16 pb-12 border-b border-border/60">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{isBg ? "Речник" : "Glossary"}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-500">
              <Hash className="h-3 w-3" />
              {glossaryTerms.length} {isBg ? "термина" : "terms"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {isBg ? "SEO & AI Речник" : "SEO & AI Glossary"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Пълен речник с всички термини от AI SEO, GEO, Structured Data и съвременния дигитален маркетинг."
              : "Complete glossary of all terms from AI SEO, GEO, Structured Data, and modern digital marketing."}
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="border-b border-border/40 bg-muted/10 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isBg ? "Търси термин..." : "Search term..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {["all", ...glossaryCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium border transition-all",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/30 text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                {cat === "all" ? (isBg ? "Всички" : "All") : cat}
              </button>
            ))}
          </div>

          {/* Letter filter */}
          <div className="flex flex-wrap gap-1">
            {letters.map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLetter(l)}
                className={cn(
                  "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                  selectedLetter === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {l === "all" ? "#" : l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms grid */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} {isBg ? "термина намерени" : "terms found"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((term) => (
              <div
                key={term.id}
                id={term.id}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-purple-500/30 hover:shadow-md hover:shadow-black/5 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-lg">{term.term}</span>
                      {term.officialLink && (
                        <a
                          href={term.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    {term.fullName && (
                      <p className="text-xs text-muted-foreground mt-0.5">{term.fullName}</p>
                    )}
                  </div>
                  <span className="text-xs font-medium bg-purple-500/10 text-purple-500 px-2 py-0.5 rounded-full shrink-0">
                    {term.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {term.definition[locale as "bg" | "en"]}
                </p>

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground mb-1.5">
                      {isBg ? "Свързани:" : "Related:"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {term.relatedTerms.slice(0, 3).map((rel) => {
                        const relTerm = glossaryTerms.find((t) => t.id === rel);
                        return relTerm ? (
                          <a
                            key={rel}
                            href={`#${rel}`}
                            onClick={() => { setQuery(""); setSelectedCategory("all"); setSelectedLetter("all"); }}
                            className="text-[11px] font-medium bg-muted/60 text-muted-foreground hover:text-primary hover:bg-primary/10 px-2 py-0.5 rounded-full transition-colors"
                          >
                            #{relTerm.term}
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              {isBg ? "Няма намерени термини." : "No terms found."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
