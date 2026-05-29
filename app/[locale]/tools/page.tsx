"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ExternalLink, Wrench, ChevronRight } from "lucide-react";
import { tools, toolCategoryLabels, pricingLabels, pricingColors, type ToolCategory, type ToolPricing } from "@/lib/content/tools";
import { cn } from "@/lib/utils";

export default function ToolsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale ?? "bg";
  const isBg = locale === "bg";

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "all">("all");
  const [selectedPricing, setSelectedPricing] = useState<ToolPricing | "all">("all");

  const categories = useMemo(() => {
    const cats = [...new Set(tools.map((t) => t.category))] as ToolCategory[];
    return ["all" as const, ...cats];
  }, []);

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchesQuery =
        !query ||
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.tagline[locale as "bg" | "en"].toLowerCase().includes(query.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || t.category === selectedCategory;
      const matchesPricing = selectedPricing === "all" || t.pricing === selectedPricing;
      return matchesQuery && matchesCategory && matchesPricing;
    });
  }, [tools, query, selectedCategory, selectedPricing, locale]);

  const featured = tools.filter((t) => t.featured);

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="relative pt-16 pb-12 border-b border-border/60">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{isBg ? "Инструменти" : "Tools"}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
              <Wrench className="h-3 w-3" />
              {tools.length} {isBg ? "инструмента" : "tools"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {isBg ? "Директория с инструменти" : "Tools Directory"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Всички SEO, AI и GEO инструменти с подробни ръководства, официални връзки и практически примери."
              : "All SEO, AI, and GEO tools with detailed guides, official links, and practical examples."}
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-10 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
            {isBg ? "Ключови инструменти" : "Key Tools"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featured.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${locale}/tools/${tool.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/20 p-4 hover:border-primary/30 hover:bg-muted/40 transition-all text-center"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  {tool.name}
                </span>
                <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", pricingColors[tool.pricing])}>
                  {pricingLabels[locale as "bg" | "en"][tool.pricing].toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search & filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isBg ? "Търси инструменти..." : "Search tools..."}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            {/* Pricing filter */}
            <div className="flex items-center gap-1 bg-muted/30 border border-border rounded-xl p-1">
              {(["all", "free", "freemium", "paid"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPricing(p)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                    selectedPricing === p ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {p === "all" ? (isBg ? "Всички" : "All") : pricingLabels[locale as "bg" | "en"][p]}
                </button>
              ))}
            </div>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/30 text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                {cat === "all"
                  ? (isBg ? "Всички" : "All")
                  : toolCategoryLabels[locale as "bg" | "en"][cat]}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            {filtered.length} {isBg ? "инструмента намерени" : "tools found"}
          </p>

          {/* Tools grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${locale}/tools/${tool.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", pricingColors[tool.pricing])}>
                    {pricingLabels[locale as "bg" | "en"][tool.pricing].toUpperCase()}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted-foreground flex-1 line-clamp-2 leading-relaxed">
                  {tool.tagline[locale as "bg" | "en"]}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-full">
                    {toolCategoryLabels[locale as "bg" | "en"][tool.category]}
                  </span>
                  <a
                    href={tool.official}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
