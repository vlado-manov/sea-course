import Link from "next/link";
import { TrendingUp, ChevronRight, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const caseStudies = [
  {
    id: "ecommerce-geo-2025",
    emoji: "🛒",
    title: { bg: "Ecommerce: +340% AI видимост с GEO", en: "Ecommerce: +340% AI Visibility with GEO" },
    desc: {
      bg: "Как онлайн магазин за електроника увеличи видимостта си в ChatGPT, Gemini и Perplexity с 340% за 6 месеца чрез GEO стратегия.",
      en: "How an electronics online store increased AI visibility in ChatGPT, Gemini, and Perplexity by 340% in 6 months through a GEO strategy.",
    },
    results: [
      { metric: "+340%", label: { bg: "AI видимост", en: "AI Visibility" } },
      { metric: "+180%", label: { bg: "Органичен трафик", en: "Organic Traffic" } },
      { metric: "+95%", label: { bg: "Конверсии", en: "Conversions" } },
    ],
    duration: 20,
    tags: ["GEO", "Ecommerce", "AI Visibility"],
    color: "border-teal-500/30",
    tagColor: "text-teal-500 bg-teal-500/10",
  },
  {
    id: "schema-rich-results",
    emoji: "📊",
    title: { bg: "Schema Маркап: +250% Rich Results CTR", en: "Schema Markup: +250% Rich Results CTR" },
    desc: {
      bg: "Как имплементирането на FAQPage, HowTo и Article Schema за B2B SaaS компания доведе до 250% увеличение на CTR.",
      en: "How implementing FAQPage, HowTo, and Article Schema for a B2B SaaS company led to a 250% CTR increase.",
    },
    results: [
      { metric: "+250%", label: { bg: "Rich Results CTR", en: "Rich Results CTR" } },
      { metric: "+120%", label: { bg: "Featured Snippets", en: "Featured Snippets" } },
      { metric: "+85%", label: { bg: "AI Overview appearances", en: "AI Overview appearances" } },
    ],
    duration: 18,
    tags: ["Schema", "Rich Results", "AI Overviews"],
    color: "border-purple-500/30",
    tagColor: "text-purple-500 bg-purple-500/10",
  },
  {
    id: "merchant-center-ai-shopping",
    emoji: "🤖",
    title: { bg: "Merchant Center: AI Shopping оптимизация", en: "Merchant Center: AI Shopping Optimization" },
    desc: {
      bg: "Оптимизация на продуктов фийд за Google AI Shopping Mode — как да се появяваш в AI-генерирани пазаруващи препоръки.",
      en: "Optimizing product feed for Google AI Shopping Mode — how to appear in AI-generated shopping recommendations.",
    },
    results: [
      { metric: "+420%", label: { bg: "AI Shopping visibility", en: "AI Shopping visibility" } },
      { metric: "+210%", label: { bg: "Shopping clicks", en: "Shopping clicks" } },
      { metric: "+155%", label: { bg: "ROAS", en: "ROAS" } },
    ],
    duration: 22,
    tags: ["Merchant Center", "AI Shopping", "Product Feed"],
    color: "border-amber-500/30",
    tagColor: "text-amber-500 bg-amber-500/10",
  },
  {
    id: "technical-seo-cwv",
    emoji: "⚡",
    title: { bg: "Core Web Vitals: От Poor към Good за 30 дни", en: "Core Web Vitals: From Poor to Good in 30 Days" },
    desc: {
      bg: "Как оптимизацията на Core Web Vitals за news portal доведе до подобрение на LCP от 5.2s до 1.8s и 45% увеличение на органичния трафик.",
      en: "How Core Web Vitals optimization for a news portal improved LCP from 5.2s to 1.8s and led to a 45% organic traffic increase.",
    },
    results: [
      { metric: "5.2s → 1.8s", label: { bg: "LCP подобрение", en: "LCP improvement" } },
      { metric: "+45%", label: { bg: "Органичен трафик", en: "Organic Traffic" } },
      { metric: "-68%", label: { bg: "Bounce rate", en: "Bounce rate" } },
    ],
    duration: 15,
    tags: ["Core Web Vitals", "Technical SEO", "Performance"],
    color: "border-cyan-500/30",
    tagColor: "text-cyan-500 bg-cyan-500/10",
  },
];

interface CaseStudiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CaseStudiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === "bg";
  return {
    title: isBg ? "Казуси: AI SEO, GEO и Structured Data резултати" : "Case Studies: AI SEO, GEO and Structured Data results",
    description: isBg
      ? "Реални казуси с резултати от AI SEO, GEO оптимизация, Schema маркап и Merchant Center оптимизация."
      : "Real case studies with results from AI SEO, GEO optimization, Schema markup, and Merchant Center optimization.",
  };
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { locale } = await params;
  const isBg = locale === "bg";

  return (
    <div className="page-transition">
      <section className="relative pt-16 pb-12 border-b border-border/60">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{isBg ? "Казуси" : "Case Studies"}</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {isBg ? "Казуси" : "Case Studies"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Реални резултати от AI SEO, GEO оптимизация и Structured Data имплементации."
              : "Real results from AI SEO, GEO optimization, and Structured Data implementations."}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className={cn("rounded-2xl border bg-card p-6 sm:p-8", cs.color)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cs.emoji}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span key={tag} className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", cs.tagColor)}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="font-bold text-xl text-foreground mb-2">
                  {cs.title[locale as "bg" | "en"]}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cs.desc[locale as "bg" | "en"]}
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {cs.results.map((r, i) => (
                    <div key={i} className="rounded-xl bg-muted/30 border border-border/40 p-3 text-center">
                      <p className="text-xl font-bold text-foreground">{r.metric}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{r.label[locale as "bg" | "en"]}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {cs.duration} {isBg ? "мин. четене" : "min read"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
