"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, BookOpen, Wrench, BookMarked, Map,
  Sparkles, ArrowRight, X, Hash,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  locale: string;
  isOpen: boolean;
  onClose: () => void;
}

const allItems = [
  { type: "tutorial", label: { bg: "AI SEO Основи", en: "AI SEO Basics" }, href: "/tutorials/ai-seo-basics", icon: BookOpen },
  { type: "tutorial", label: { bg: "GEO Оптимизация", en: "GEO Optimization" }, href: "/tutorials/geo-optimization", icon: BookOpen },
  { type: "tutorial", label: { bg: "Google AI Overviews", en: "Google AI Overviews" }, href: "/tutorials/google-ai-overviews", icon: BookOpen },
  { type: "tutorial", label: { bg: "Structured Data / Schema", en: "Structured Data / Schema" }, href: "/tutorials/structured-data", icon: BookOpen },
  { type: "tutorial", label: { bg: "AI Commerce & Pазаруване", en: "AI Commerce & Shopping" }, href: "/tutorials/ai-commerce", icon: BookOpen },
  { type: "tutorial", label: { bg: "LLM Оптимизация", en: "LLM Optimization" }, href: "/tutorials/llm-optimization", icon: BookOpen },
  { type: "tutorial", label: { bg: "Entity SEO", en: "Entity SEO" }, href: "/tutorials/entity-seo", icon: BookOpen },
  { type: "guide", label: { bg: "Merchant Center Пълно Ръководство", en: "Merchant Center Complete Guide" }, href: "/guides/merchant-center", icon: Map },
  { type: "guide", label: { bg: "Schema.org Ръководство", en: "Schema.org Guide" }, href: "/guides/schema-org", icon: Map },
  { type: "guide", label: { bg: "Технически SEO Одит", en: "Technical SEO Audit" }, href: "/guides/technical-seo", icon: Map },
  { type: "tool", label: { bg: "Google Search Console", en: "Google Search Console" }, href: "/tools/google-search-console", icon: Wrench },
  { type: "tool", label: { bg: "Merchant Center", en: "Merchant Center" }, href: "/tools/merchant-center", icon: Wrench },
  { type: "tool", label: { bg: "PageSpeed Insights", en: "PageSpeed Insights" }, href: "/tools/pagespeed-insights", icon: Wrench },
  { type: "tool", label: { bg: "Screaming Frog SEO Spider", en: "Screaming Frog SEO Spider" }, href: "/tools/screaming-frog", icon: Wrench },
  { type: "tool", label: { bg: "Ahrefs", en: "Ahrefs" }, href: "/tools/ahrefs", icon: Wrench },
  { type: "tool", label: { bg: "SEMrush", en: "SEMrush" }, href: "/tools/semrush", icon: Wrench },
  { type: "glossary", label: { bg: "SEO & AI Речник", en: "SEO & AI Glossary" }, href: "/glossary", icon: BookMarked },
  { type: "glossary", label: { bg: "GEO — Генеративна Оптимизация", en: "GEO — Generative Engine Optimization" }, href: "/glossary#geo", icon: Hash },
  { type: "glossary", label: { bg: "Knowledge Graph", en: "Knowledge Graph" }, href: "/glossary#knowledge-graph", icon: Hash },
  { type: "glossary", label: { bg: "E-E-A-T", en: "E-E-A-T" }, href: "/glossary#e-e-a-t", icon: Hash },
  { type: "resource", label: { bg: "AI Промпти", en: "AI Prompts" }, href: "/prompts", icon: Sparkles },
  { type: "resource", label: { bg: "SEO Шаблони", en: "SEO Templates" }, href: "/templates", icon: Sparkles },
  { type: "resource", label: { bg: "Казуси", en: "Case Studies" }, href: "/case-studies", icon: Sparkles },
];

const typeLabels = {
  bg: { tutorial: "Урок", guide: "Ръководство", tool: "Инструмент", glossary: "Речник", resource: "Ресурс" },
  en: { tutorial: "Tutorial", guide: "Guide", tool: "Tool", glossary: "Glossary", resource: "Resource" },
};

const typeColors = {
  tutorial: "text-indigo-500 bg-indigo-500/10",
  guide: "text-teal-500 bg-teal-500/10",
  tool: "text-amber-500 bg-amber-500/10",
  glossary: "text-purple-500 bg-purple-500/10",
  resource: "text-rose-500 bg-rose-500/10",
};

export function CommandPalette({ locale, isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filtered = React.useMemo(() => {
    if (!query) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems.filter((item) =>
      item.label[locale as "bg" | "en"].toLowerCase().includes(q) ||
      item.type.includes(q)
    ).slice(0, 10);
  }, [query, locale]);

  React.useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filtered]);

  const handleSelect = (item: typeof allItems[0]) => {
    router.push(`/${locale}${item.href}`);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      handleSelect(filtered[selectedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-1/2 top-[15%] z-50 w-full max-w-xl -translate-x-1/2 rounded-2xl border border-border bg-popover shadow-2xl shadow-black/30 overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={locale === "bg" ? "Търси уроци, инструменти, термини..." : "Search tutorials, tools, terms..."}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              <kbd className="hidden sm:flex items-center text-[10px] text-muted-foreground bg-muted border border-border rounded px-1.5 py-0.5">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="py-2 max-h-80 overflow-y-auto scrollbar-thin">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  {locale === "bg" ? "Няма намерени резултати" : "No results found"}
                </div>
              ) : (
                filtered.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(item)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                      i === selectedIndex ? "bg-muted/60" : "hover:bg-muted/30"
                    )}
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="flex-1 text-sm text-foreground">
                      {item.label[locale as "bg" | "en"]}
                    </span>
                    <span className={cn(
                      "text-[10px] font-medium px-1.5 py-0.5 rounded-md",
                      typeColors[item.type as keyof typeof typeColors]
                    )}>
                      {typeLabels[locale as "bg" | "en"][item.type as keyof typeof typeLabels.bg]}
                    </span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="border-t border-border px-4 py-2 flex items-center justify-between text-[11px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="bg-muted border border-border rounded px-1">↑↓</kbd>
                  {locale === "bg" ? "навигирай" : "navigate"}
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-muted border border-border rounded px-1">↵</kbd>
                  {locale === "bg" ? "избери" : "select"}
                </span>
              </div>
              <span>{filtered.length} {locale === "bg" ? "резултата" : "results"}</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
