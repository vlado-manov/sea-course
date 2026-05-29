"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon, Sun, Globe, Menu, X, Search, Zap,
  BookOpen, Wrench, BookMarked, Map,
  Sparkles, FileText, ChevronDown, LayoutGrid,
  GraduationCap, Bot, ShoppingCart, Code2, TrendingUp,
  Command, Users, MessageSquare, Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CommandPalette } from "./CommandPalette";

interface NavbarProps {
  locale: string;
}

const navCategories = [
  {
    label: { bg: "Как работи AI?", en: "How does AI work?" },
    href: "/tutorials",
    icon: Sparkles,
    items: [
      { label: { bg: "Защо AI промени търсенето?", en: "Why did AI change search?" }, href: "/tutorials/ai-seo-basics", icon: Sparkles },
      { label: { bg: "Как AI избира кого да цитира?", en: "How does AI choose who to cite?" }, href: "/tutorials/llm-optimization", icon: Zap },
      { label: { bg: "Какво е GEO?", en: "What is GEO?" }, href: "/tutorials/geo-optimization", icon: TrendingUp },
      { label: { bg: "Какво е Entity SEO?", en: "What is Entity SEO?" }, href: "/tutorials/entity-seo", icon: LayoutGrid },
      { label: { bg: "Какво е AI Visibility?", en: "What is AI Visibility?" }, href: "/tutorials/ai-visibility-strategy", icon: Bot },
    ],
  },
  {
    label: { bg: "Какво да правя?", en: "What should I do?" },
    href: "/tutorials",
    icon: Map,
    items: [
      { label: { bg: "Структурирани данни (Schema)", en: "Structured Data (Schema)" }, href: "/tutorials/structured-data", icon: Code2 },
      { label: { bg: "Технически SEO одит", en: "Technical SEO Audit" }, href: "/tutorials/technical-seo-audit", icon: Wrench },
      { label: { bg: "Ecommerce & AI Commerce", en: "Ecommerce & AI Commerce" }, href: "/tutorials/ai-commerce", icon: ShoppingCart },
      { label: { bg: "AI Агенти за SEO", en: "AI Agents for SEO" }, href: "/tutorials/ai-agents-seo", icon: Bot },
      { label: { bg: "Google AI Overviews", en: "Google AI Overviews" }, href: "/tutorials/google-ai-overviews", icon: TrendingUp },
    ],
  },
  {
    label: { bg: "Инструменти", en: "Tools" },
    href: "/tools",
    icon: Wrench,
    items: [
      { label: { bg: "Google Search Console", en: "Google Search Console" }, href: "/tools/google-search-console", icon: Bot },
      { label: { bg: "Merchant Center", en: "Merchant Center" }, href: "/tools/merchant-center", icon: ShoppingCart },
      { label: { bg: "PageSpeed Insights", en: "PageSpeed Insights" }, href: "/tools/pagespeed-insights", icon: Zap },
      { label: { bg: "Schema Validator", en: "Schema Validator" }, href: "/tools/schema-validator", icon: Code2 },
      { label: { bg: "Claude AI", en: "Claude AI" }, href: "/tools/claude", icon: Sparkles },
      { label: { bg: "Всички инструменти", en: "All Tools" }, href: "/tools", icon: LayoutGrid },
    ],
  },
  {
    label: { bg: "Речник & Ресурси", en: "Glossary & Resources" },
    href: "/glossary",
    icon: BookMarked,
    items: [
      { label: { bg: "AI SEO Речник", en: "AI SEO Glossary" }, href: "/glossary", icon: BookMarked },
      { label: { bg: "AI Промпти", en: "AI Prompts" }, href: "/prompts", icon: Sparkles },
      { label: { bg: "Шаблони", en: "Templates" }, href: "/templates", icon: FileText },
      { label: { bg: "Казуси", en: "Case Studies" }, href: "/case-studies", icon: TrendingUp },
      { label: { bg: "Всички ресурси", en: "All Resources" }, href: "/resources", icon: GraduationCap },
    ],
  },
  {
    label: { bg: "Спечели клиент", en: "Win a Client" },
    href: "/clients",
    icon: Users,
    highlight: true,
    items: [
      { label: { bg: "Как да говориш с клиента?", en: "How to talk to a client?" }, href: "/clients#conversation", icon: MessageSquare },
      { label: { bg: "Как да докажеш нуждата?", en: "How to prove the need?" }, href: "/clients#urgency", icon: TrendingUp },
      { label: { bg: "Как да изградиш портфолио?", en: "How to build a portfolio?" }, href: "/clients#portfolio", icon: Award },
      { label: { bg: "Речник за убеждаване", en: "Persuasion vocabulary" }, href: "/clients#vocabulary", icon: BookMarked },
      { label: { bg: "Термини, използвани правилно", en: "Terms used correctly" }, href: "/clients#terms", icon: Sparkles },
    ],
  },
];

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<number | null>(null);
  const [isCommandOpen, setIsCommandOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const otherLocale = locale === "bg" ? "en" : "bg";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5 shrink-0 group"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm tracking-tight">
                  AI SEO{" "}
                  <span className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
                    {locale === "bg" ? "Академия" : "Academy"}
                  </span>
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">
                  GEO · AI Overviews · LLM
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navCategories.map((category, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={`/${locale}${category.href}`}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      (category as { highlight?: boolean }).highlight
                        ? "text-primary bg-primary/10 hover:bg-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      !((category as { highlight?: boolean }).highlight) && pathname.includes(category.href) && "text-foreground bg-muted/50"
                    )}
                  >
                    <category.icon className="h-3.5 w-3.5" />
                    {category.label[locale as "bg" | "en"]}
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        activeDropdown === index && "rotate-180"
                      )}
                    />
                  </Link>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-border bg-popover/95 backdrop-blur-xl shadow-xl shadow-black/10 overflow-hidden"
                      >
                        <div className="p-1.5">
                          {category.items.map((item, i) => (
                            <Link
                              key={i}
                              href={`/${locale}${item.href}`}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                            >
                              <item.icon className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                              {item.label[locale as "bg" | "en"]}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setIsCommandOpen(true)}
                className={cn(
                  "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg",
                  "text-sm text-muted-foreground border border-border/60",
                  "bg-muted/30 hover:bg-muted/60 transition-colors",
                  "group"
                )}
              >
                <Search className="h-3.5 w-3.5" />
                <span className="hidden md:inline text-xs">
                  {t("search")}
                </span>
                <kbd className="hidden md:flex items-center gap-0.5 text-[10px] bg-background/80 border border-border/60 rounded px-1.5 py-0.5 font-mono">
                  <Command className="h-2.5 w-2.5" />K
                </kbd>
              </button>

              {/* Language toggle */}
              <Link
                href={localePath}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border border-border/40"
              >
                <Globe className="h-3.5 w-3.5" />
                <span className="text-xs font-semibold uppercase">
                  {otherLocale}
                </span>
              </Link>

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
                {/* Mobile search */}
                <button
                  onClick={() => { setIsCommandOpen(true); setIsMenuOpen(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted/40 text-muted-foreground text-sm"
                >
                  <Search className="h-4 w-4" />
                  {t("searchPlaceholder")}
                </button>
                {navCategories.map((category, i) => (
                  <div key={i} className="space-y-1">
                    <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {category.label[locale as "bg" | "en"]}
                    </p>
                    {category.items.map((item, j) => (
                      <Link
                        key={j}
                        href={`/${locale}${item.href}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <item.icon className="h-4 w-4 text-primary/70" />
                        {item.label[locale as "bg" | "en"]}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CommandPalette
        locale={locale}
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  );
}
