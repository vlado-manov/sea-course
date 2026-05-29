import Link from "next/link";
import { ChevronRight, Download, BookOpen, Wrench, FileText, Sparkles, Map, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface ResourcesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === "bg";
  return {
    title: isBg ? "Ресурси за AI SEO, GEO и Structured Data" : "Resources for AI SEO, GEO, and Structured Data",
    description: isBg
      ? "Всички ресурси на едно място: уроци, ръководства, инструменти, шаблони, AI промпти и казуси."
      : "All resources in one place: tutorials, guides, tools, templates, AI prompts, and case studies.",
  };
}

const resourceSections = [
  {
    icon: BookOpen,
    title: { bg: "Уроци", en: "Tutorials" },
    desc: { bg: "50+ подробни урока за AI SEO, GEO и свързани теми", en: "50+ detailed tutorials on AI SEO, GEO, and related topics" },
    href: "/tutorials",
    count: "50+",
    color: "border-indigo-500/30 hover:border-indigo-500/50",
    iconColor: "text-indigo-500 bg-indigo-500/10",
  },
  {
    icon: Map,
    title: { bg: "Ръководства", en: "Guides" },
    desc: { bg: "Подробни ръководства за Merchant Center, Schema, GEO и техн. SEO", en: "In-depth guides for Merchant Center, Schema, GEO, and technical SEO" },
    href: "/guides",
    count: "6",
    color: "border-teal-500/30 hover:border-teal-500/50",
    iconColor: "text-teal-500 bg-teal-500/10",
  },
  {
    icon: Wrench,
    title: { bg: "Инструменти", en: "Tools" },
    desc: { bg: "Директория с всички SEO, AI и GEO инструменти с официални връзки", en: "Directory of all SEO, AI, and GEO tools with official links" },
    href: "/tools",
    count: "15+",
    color: "border-amber-500/30 hover:border-amber-500/50",
    iconColor: "text-amber-500 bg-amber-500/10",
  },
  {
    icon: Hash,
    title: { bg: "Речник", en: "Glossary" },
    desc: { bg: "Пълен речник с термини от AI SEO, GEO и цифровия маркетинг", en: "Complete glossary of AI SEO, GEO, and digital marketing terms" },
    href: "/glossary",
    count: "20+",
    color: "border-purple-500/30 hover:border-purple-500/50",
    iconColor: "text-purple-500 bg-purple-500/10",
  },
  {
    icon: Sparkles,
    title: { bg: "AI Промпти", en: "AI Prompts" },
    desc: { bg: "Готови AI промпти за SEO одит, Schema генериране и GEO анализ", en: "Ready-made AI prompts for SEO audit, Schema generation, and GEO analysis" },
    href: "/prompts",
    count: "8+",
    color: "border-violet-500/30 hover:border-violet-500/50",
    iconColor: "text-violet-500 bg-violet-500/10",
  },
  {
    icon: FileText,
    title: { bg: "Шаблони", en: "Templates" },
    desc: { bg: "Готови шаблони за Schema маркап, GEO структури и SEO одит чеклисти", en: "Ready-made templates for Schema markup, GEO structures, and SEO audit checklists" },
    href: "/templates",
    count: "6+",
    color: "border-rose-500/30 hover:border-rose-500/50",
    iconColor: "text-rose-500 bg-rose-500/10",
  },
];

const officialResources = [
  { name: "Google Search Central", url: "https://developers.google.com/search", desc: { bg: "Официална SEO документация от Google", en: "Official SEO documentation from Google" } },
  { name: "Google AI Overviews Help", url: "https://support.google.com/websearch/answer/14901683", desc: { bg: "Ръководство за Google AI Overviews", en: "Guide for Google AI Overviews" } },
  { name: "Schema.org", url: "https://schema.org", desc: { bg: "Официалната Schema.org документация", en: "Official Schema.org documentation" } },
  { name: "Google Merchant Center Help", url: "https://support.google.com/merchants", desc: { bg: "Пълна документация за Merchant Center", en: "Complete Merchant Center documentation" } },
  { name: "Web.dev — Core Web Vitals", url: "https://web.dev/explore/metrics", desc: { bg: "Core Web Vitals ръководства и инструменти", en: "Core Web Vitals guides and tools" } },
  { name: "Google Structured Data Gallery", url: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery", desc: { bg: "Всички Rich Results типове", en: "All Rich Results types" } },
  { name: "OpenAI Platform Docs", url: "https://platform.openai.com/docs", desc: { bg: "ChatGPT API документация", en: "ChatGPT API documentation" } },
  { name: "Google Gemini AI", url: "https://ai.google.dev/gemini-api/docs", desc: { bg: "Gemini API документация", en: "Gemini API documentation" } },
];

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { locale } = await params;
  const isBg = locale === "bg";

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="relative pt-16 pb-12 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "var(--color-muted-foreground)" }}>
            <Link href={`/${locale}`} className="hover:opacity-80">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: "var(--color-foreground)" }}>{isBg ? "Ресурси" : "Resources"}</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {isBg ? "Ресурси" : "Resources"}
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: "var(--color-muted-foreground)" }}>
            {isBg
              ? "Всички ресурси за AI SEO, GEO и цифровия маркетинг на едно място."
              : "All AI SEO, GEO, and digital marketing resources in one place."}
          </p>
        </div>
      </section>

      {/* Resource sections */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resourceSections.map((section) => (
              <Link
                key={section.href}
                href={`/${locale}${section.href}`}
                className={cn(
                  "group rounded-2xl border p-6 transition-all duration-200",
                  "hover:shadow-lg",
                  section.color
                )}
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("rounded-xl p-2.5", section.iconColor)}>
                    <section.icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold" style={{ color: "var(--color-muted-foreground)" }}>
                    {section.count}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:opacity-80 transition-opacity" style={{ color: "var(--color-foreground)" }}>
                  {section.title[locale as "bg" | "en"]}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {section.desc[locale as "bg" | "en"]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Official resources */}
      <section className="py-12 border-t" style={{ borderColor: "var(--color-border)", backgroundColor: "color-mix(in srgb, var(--color-muted) 20%, transparent)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-foreground">
            {isBg ? "Официални ресурси" : "Official Resources"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officialResources.map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border p-4 hover:opacity-90 transition-all"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-card)" }}
              >
                <p className="font-semibold text-sm mb-1 group-hover:opacity-70 transition-opacity" style={{ color: "var(--color-primary)" }}>
                  {res.name}
                </p>
                <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>
                  {res.desc[locale as "bg" | "en"]}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
