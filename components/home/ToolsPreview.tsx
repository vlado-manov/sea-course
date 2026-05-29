"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolsPreviewProps {
  locale: string;
}

const tools = [
  {
    name: "Google Search Console",
    category: { bg: "Анализи", en: "Analytics" },
    desc: { bg: "Следи видимостта на сайта в Google Search", en: "Monitor your site's visibility in Google Search" },
    href: "/tools/google-search-console",
    official: "https://search.google.com/search-console",
    free: true,
    icon: "🔍",
    color: "border-blue-500/30 hover:border-blue-500/50",
  },
  {
    name: "Merchant Center",
    category: { bg: "Ecommerce", en: "Ecommerce" },
    desc: { bg: "Управлявай продуктови данни за Google Shopping", en: "Manage product data for Google Shopping" },
    href: "/tools/merchant-center",
    official: "https://merchants.google.com",
    free: true,
    icon: "🛒",
    color: "border-teal-500/30 hover:border-teal-500/50",
  },
  {
    name: "Ahrefs",
    category: { bg: "SEO", en: "SEO" },
    desc: { bg: "Backlink анализ, keyword research и конкурентен анализ", en: "Backlink analysis, keyword research, competitor analysis" },
    href: "/tools/ahrefs",
    official: "https://ahrefs.com",
    free: false,
    icon: "📈",
    color: "border-amber-500/30 hover:border-amber-500/50",
  },
  {
    name: "Screaming Frog",
    category: { bg: "Технически", en: "Technical" },
    desc: { bg: "Website crawler за технически SEO одит", en: "Website crawler for technical SEO audit" },
    href: "/tools/screaming-frog",
    official: "https://www.screamingfrog.co.uk",
    free: true,
    icon: "🐸",
    color: "border-green-500/30 hover:border-green-500/50",
  },
  {
    name: "PageSpeed Insights",
    category: { bg: "Бързина", en: "Speed" },
    desc: { bg: "Измери Core Web Vitals и производителността на страниците", en: "Measure Core Web Vitals and page performance" },
    href: "/tools/pagespeed-insights",
    official: "https://pagespeed.web.dev",
    free: true,
    icon: "⚡",
    color: "border-orange-500/30 hover:border-orange-500/50",
  },
  {
    name: "Schema Markup Validator",
    category: { bg: "Schema", en: "Schema" },
    desc: { bg: "Валидирай структурираните данни на сайта си", en: "Validate structured data on your site" },
    href: "/tools/schema-validator",
    official: "https://validator.schema.org",
    free: true,
    icon: "✅",
    color: "border-purple-500/30 hover:border-purple-500/50",
  },
  {
    name: "ChatGPT",
    category: { bg: "AI", en: "AI" },
    desc: { bg: "AI асистент за SEO съдържание и стратегия", en: "AI assistant for SEO content and strategy" },
    href: "/tools/chatgpt",
    official: "https://chat.openai.com",
    free: true,
    icon: "🤖",
    color: "border-indigo-500/30 hover:border-indigo-500/50",
  },
  {
    name: "Semrush",
    category: { bg: "SEO", en: "SEO" },
    desc: { bg: "Пълна SEO платформа за анализ и оптимизация", en: "Complete SEO platform for analysis and optimization" },
    href: "/tools/semrush",
    official: "https://www.semrush.com",
    free: false,
    icon: "📊",
    color: "border-rose-500/30 hover:border-rose-500/50",
  },
];

export function ToolsPreview({ locale }: ToolsPreviewProps) {
  const isBg = locale === "bg";

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {isBg ? "Директория с инструменти" : "Tools Directory"}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              {isBg
                ? "Всички SEO, AI и GEO инструменти с подробни ръководства и официални връзки"
                : "All SEO, AI, and GEO tools with detailed guides and official links"}
            </p>
          </div>
          <Link
            href={`/${locale}/tools`}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            {isBg ? "Всички инструменти" : "All tools"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/${locale}${tool.href}`}
                className={cn(
                  "group flex flex-col h-full rounded-2xl border bg-card p-5",
                  "hover:shadow-md hover:shadow-black/5 transition-all duration-200",
                  tool.color
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <div className="flex items-center gap-1.5">
                    {tool.free ? (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-500">
                        FREE
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500">
                        PAID
                      </span>
                    )}
                  </div>
                </div>
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1 flex-1 line-clamp-2">
                  {tool.desc[locale as "bg" | "en"]}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-full">
                    {tool.category[locale as "bg" | "en"]}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
