"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Zap, ArrowRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  locale: string;
}

const footerLinks = {
  tutorials: [
    { label: { bg: "AI SEO Основи", en: "AI SEO Basics" }, href: "/tutorials/ai-seo-basics" },
    { label: { bg: "GEO Оптимизация", en: "GEO Optimization" }, href: "/tutorials/geo-optimization" },
    { label: { bg: "Google AI Overviews", en: "Google AI Overviews" }, href: "/tutorials/google-ai-overviews" },
    { label: { bg: "Structured Data", en: "Structured Data" }, href: "/tutorials/structured-data" },
    { label: { bg: "LLM Оптимизация", en: "LLM Optimization" }, href: "/tutorials/llm-optimization" },
    { label: { bg: "Ecommerce SEO", en: "Ecommerce SEO" }, href: "/tutorials/ecommerce-seo" },
  ],
  guides: [
    { label: { bg: "Merchant Center", en: "Merchant Center" }, href: "/guides/merchant-center" },
    { label: { bg: "Schema.org", en: "Schema.org" }, href: "/guides/schema-org" },
    { label: { bg: "Технически SEO", en: "Technical SEO" }, href: "/guides/technical-seo" },
    { label: { bg: "Entity SEO", en: "Entity SEO" }, href: "/guides/entity-seo" },
    { label: { bg: "AI Одит", en: "AI Audit" }, href: "/guides/ai-audit" },
  ],
  resources: [
    { label: { bg: "Речник", en: "Glossary" }, href: "/glossary" },
    { label: { bg: "AI Промпти", en: "AI Prompts" }, href: "/prompts" },
    { label: { bg: "Шаблони", en: "Templates" }, href: "/templates" },
    { label: { bg: "Казуси", en: "Case Studies" }, href: "/case-studies" },
    { label: { bg: "Инструменти", en: "Tools" }, href: "/tools" },
  ],
  tools: [
    { label: "Google Search Console", href: "/tools/google-search-console" },
    { label: "Merchant Center", href: "/tools/merchant-center" },
    { label: "PageSpeed Insights", href: "/tools/pagespeed-insights" },
    { label: "Ahrefs", href: "/tools/ahrefs" },
    { label: "SEMrush", href: "/tools/semrush" },
    { label: "Screaming Frog", href: "/tools/screaming-frog" },
  ],
};

const topics = [
  "AI SEO", "GEO", "Google AI Overviews", "Merchant Center",
  "Structured Data", "Entity SEO", "LLM Optimization", "AI Commerce",
  "Technical SEO", "Core Web Vitals", "AI Agents", "AI Visibility",
];

export function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/60 bg-muted/20">
      {/* Newsletter bar */}
      <div className="bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-teal-600/10 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                {t("newsletter")}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t("newsletterText")}
              </p>
            </div>
            <form className="flex w-full sm:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 sm:w-64 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("subscribe")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 group w-fit">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-sm">
                  AI SEO{" "}
                  <span className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
                    {locale === "bg" ? "Академия" : "Academy"}
                  </span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("description")}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground"
                >
                  {topic}
                </span>
              )).slice(0, 4)}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:hello@aiseo.bg" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Tutorials */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {locale === "bg" ? "Уроци" : "Tutorials"}
            </h4>
            <ul className="space-y-2">
              {footerLinks.tutorials.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label[locale as "bg" | "en"]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {locale === "bg" ? "Ръководства" : "Guides"}
            </h4>
            <ul className="space-y-2">
              {footerLinks.guides.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label[locale as "bg" | "en"]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {locale === "bg" ? "Ресурси" : "Resources"}
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label[locale as "bg" | "en"]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI SEO {locale === "bg" ? "Академия" : "Academy"}.{" "}
            {t("rights")}.
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t("privacy")}
            </Link>
            <Link href={`/${locale}/terms`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t("terms")}
            </Link>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              {locale === "bg" ? "Актуализирано" : "Updated"} 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
