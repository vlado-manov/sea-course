import Link from "next/link";
import { Map, ArrowRight, Clock, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface GuidesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GuidesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === "bg";
  return {
    title: isBg ? "Ръководства за AI SEO, GEO, Schema и Merchant Center" : "Guides for AI SEO, GEO, Schema, and Merchant Center",
    description: isBg
      ? "Подробни ръководства за Merchant Center, Schema.org, GEO оптимизация, технически SEO и AI видимост."
      : "Detailed guides for Merchant Center, Schema.org, GEO optimization, Technical SEO, and AI visibility.",
  };
}

const guides = [
  {
    slug: "merchant-center",
    emoji: "🛒",
    title: { bg: "Merchant Center: Пълно ръководство", en: "Merchant Center: Complete Guide" },
    desc: {
      bg: "Стъпка по стъпка от setup до оптимизация. Продуктов фийд, Shopping Ads, AI пазаруване и Performance Max.",
      en: "Step by step from setup to optimization. Product feed, Shopping Ads, AI shopping, and Performance Max.",
    },
    duration: 45,
    topics: ["Product Feed", "Shopping Ads", "AI Shopping", "Performance Max"],
    color: "border-amber-500/30 hover:border-amber-500/50",
    tag: { bg: "Ecommerce", en: "Ecommerce" },
    tagColor: "text-amber-500 bg-amber-500/10",
  },
  {
    slug: "schema-org",
    emoji: "📋",
    title: { bg: "Schema.org: Пълен наръчник", en: "Schema.org: Complete Reference" },
    desc: {
      bg: "Всички Schema типове за SEO и AI: Article, FAQ, HowTo, Product, Organization, LocalBusiness и Rich Results.",
      en: "All Schema types for SEO and AI: Article, FAQ, HowTo, Product, Organization, LocalBusiness, and Rich Results.",
    },
    duration: 60,
    topics: ["JSON-LD", "FAQ Schema", "Article Schema", "Product Schema", "HowTo"],
    color: "border-purple-500/30 hover:border-purple-500/50",
    tag: { bg: "Structured Data", en: "Structured Data" },
    tagColor: "text-purple-500 bg-purple-500/10",
  },
  {
    slug: "technical-seo",
    emoji: "🔧",
    title: { bg: "Технически SEO: Одит Framework", en: "Technical SEO: Audit Framework" },
    desc: {
      bg: "Как да направиш пълен технически SEO одит: crawling, indexing, Core Web Vitals, сигурност и AI-оптимизация.",
      en: "How to conduct a complete technical SEO audit: crawling, indexing, Core Web Vitals, security, and AI optimization.",
    },
    duration: 90,
    topics: ["Crawling", "Indexing", "Core Web Vitals", "Site Architecture", "Redirects"],
    color: "border-cyan-500/30 hover:border-cyan-500/50",
    tag: { bg: "Технически", en: "Technical" },
    tagColor: "text-cyan-500 bg-cyan-500/10",
  },
  {
    slug: "entity-seo",
    emoji: "🌐",
    title: { bg: "Entity SEO: Семантичен Авторитет", en: "Entity SEO: Semantic Authority" },
    desc: {
      bg: "Изграждане на Entity-based SEO стратегия: Knowledge Graph, семантични обекти и тематичен авторитет за AI системи.",
      en: "Building an Entity-based SEO strategy: Knowledge Graph, semantic entities, and topical authority for AI systems.",
    },
    duration: 50,
    topics: ["Knowledge Graph", "Entities", "Topical Authority", "Semantic SEO"],
    color: "border-teal-500/30 hover:border-teal-500/50",
    tag: { bg: "Entity SEO", en: "Entity SEO" },
    tagColor: "text-teal-500 bg-teal-500/10",
  },
  {
    slug: "ai-audit",
    emoji: "🤖",
    title: { bg: "AI SEO Одит: Пълен Чеклист", en: "AI SEO Audit: Complete Checklist" },
    desc: {
      bg: "Как да оцениш и подобриш AI видимостта на сайта: GEO чеклист, Schema одит, E-E-A-T анализ и LLM проверки.",
      en: "How to assess and improve your site's AI visibility: GEO checklist, Schema audit, E-E-A-T analysis, and LLM checks.",
    },
    duration: 40,
    topics: ["AI Visibility", "GEO Audit", "Schema Audit", "E-E-A-T", "LLM Check"],
    color: "border-indigo-500/30 hover:border-indigo-500/50",
    tag: { bg: "AI SEO", en: "AI SEO" },
    tagColor: "text-indigo-500 bg-indigo-500/10",
  },
  {
    slug: "geo-guide",
    emoji: "🚀",
    title: { bg: "GEO: Генеративна Оптимизация Guide", en: "GEO: Generative Engine Optimization Guide" },
    desc: {
      bg: "Пълното GEO ръководство: как AI системите работят, как да оптимизираш съдържанието и как да измерваш резултатите.",
      en: "The complete GEO guide: how AI systems work, how to optimize content, and how to measure results.",
    },
    duration: 55,
    topics: ["GEO", "ChatGPT", "Gemini", "Perplexity", "AI Citations"],
    color: "border-rose-500/30 hover:border-rose-500/50",
    tag: { bg: "GEO", en: "GEO" },
    tagColor: "text-rose-500 bg-rose-500/10",
  },
];

export default async function GuidesPage({ params }: GuidesPageProps) {
  const { locale } = await params;
  const isBg = locale === "bg";

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="relative pt-16 pb-12 border-b border-border/60">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{isBg ? "Ръководства" : "Guides"}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-500">
              <Map className="h-3 w-3" />
              {guides.length} {isBg ? "ръководства" : "guides"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {isBg ? "Ръководства" : "Guides"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Подробни ръководства за Merchant Center, Schema.org, GEO оптимизация, технически SEO и AI видимост."
              : "Detailed guides for Merchant Center, Schema.org, GEO optimization, Technical SEO, and AI visibility."}
          </p>
        </div>
      </section>

      {/* Guides grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/${locale}/guides/${guide.slug}`}
                className={cn(
                  "group flex flex-col h-full rounded-2xl border bg-card p-6",
                  "hover:shadow-lg hover:shadow-black/5 transition-all duration-300",
                  guide.color
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{guide.emoji}</span>
                  <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", guide.tagColor)}>
                    {guide.tag[locale as "bg" | "en"]}
                  </span>
                </div>

                <h2 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  {guide.title[locale as "bg" | "en"]}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {guide.desc[locale as "bg" | "en"]}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {guide.topics.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-medium bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {guide.duration} {isBg ? "мин." : "min"}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
