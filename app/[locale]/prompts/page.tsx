"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Sparkles, ChevronRight, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const prompts = [
  {
    id: "geo-content-audit",
    category: { bg: "GEO Оптимизация", en: "GEO Optimization" },
    title: { bg: "GEO Одит на съдържание", en: "GEO Content Audit" },
    desc: { bg: "Анализирай съдържанието за GEO оптимизация", en: "Analyze content for GEO optimization" },
    prompt: {
      bg: `Анализирай следното съдържание за GEO (Generative Engine Optimization) оптимизация:

[ПОСТАВИ СЪДЪРЖАНИЕТО ТУК]

Оцени по следните критерии:
1. Директни отговори: Дали статията дава директен отговор в първото изречение?
2. Структура: H2/H3 заглавия, bullet points, numbered lists
3. Статистики: Има ли конкретни данни с посочени извори?
4. E-E-A-T: Има ли сигнали за експертиза и авторитет?
5. Тематично покритие: Колко пълно е покритието на темата?

Дай конкретни препоръки за всеки критерий.`,
      en: `Analyze the following content for GEO (Generative Engine Optimization) optimization:

[PASTE CONTENT HERE]

Evaluate by these criteria:
1. Direct answers: Does the article give a direct answer in the first sentence?
2. Structure: H2/H3 headings, bullet points, numbered lists
3. Statistics: Are there specific data points with cited sources?
4. E-E-A-T: Are there signals of expertise and authority?
5. Topical coverage: How complete is the topic coverage?

Give specific recommendations for each criterion.`,
    },
    color: "border-teal-500/30 bg-teal-500/5",
    iconColor: "text-teal-500",
  },
  {
    id: "schema-generator",
    category: { bg: "Schema Маркап", en: "Schema Markup" },
    title: { bg: "JSON-LD Schema Генератор", en: "JSON-LD Schema Generator" },
    desc: { bg: "Генерирай JSON-LD Schema маркап", en: "Generate JSON-LD Schema markup" },
    prompt: {
      bg: `Генерирай JSON-LD Schema.org маркап за следната страница:

URL: [URL]
Тип страница: [Article / Product / FAQ / HowTo / Organization / LocalBusiness]
Заглавие: [ЗАГЛАВИЕ]
Описание: [ОПИСАНИЕ]
Автор: [ИМЕ НА АВТОРА]
Дата на публикуване: [ДАТА]

Включи всички подходящи свойства и следвай официалната Schema.org документация. Валидирай дали маркапа ще се показва в Google Rich Results.`,
      en: `Generate JSON-LD Schema.org markup for the following page:

URL: [URL]
Page type: [Article / Product / FAQ / HowTo / Organization / LocalBusiness]
Title: [TITLE]
Description: [DESCRIPTION]
Author: [AUTHOR NAME]
Publication date: [DATE]

Include all relevant properties and follow the official Schema.org documentation. Validate if the markup will show in Google Rich Results.`,
    },
    color: "border-purple-500/30 bg-purple-500/5",
    iconColor: "text-purple-500",
  },
  {
    id: "faq-schema-generator",
    category: { bg: "Schema Маркап", en: "Schema Markup" },
    title: { bg: "FAQPage Schema Генератор", en: "FAQPage Schema Generator" },
    desc: { bg: "Генерирай FAQPage Schema за AI Overviews", en: "Generate FAQPage Schema for AI Overviews" },
    prompt: {
      bg: `Генерирай FAQPage Schema маркап в JSON-LD за следните въпроси и отговори:

[ПОСТАВИ ВЪПРОСИТЕ И ОТГОВОРИТЕ ТУК]

Изисквания:
- Всеки отговор трябва да е поне 2-3 изречения
- Включи ключови думи естествено в отговорите
- Форматирай за максимална съвместимост с Google AI Overviews
- Включи "@context": "https://schema.org" в началото`,
      en: `Generate FAQPage Schema markup in JSON-LD for the following questions and answers:

[PASTE QUESTIONS AND ANSWERS HERE]

Requirements:
- Each answer should be at least 2-3 sentences
- Include keywords naturally in the answers
- Format for maximum compatibility with Google AI Overviews
- Include "@context": "https://schema.org" at the start`,
    },
    color: "border-indigo-500/30 bg-indigo-500/5",
    iconColor: "text-indigo-500",
  },
  {
    id: "ai-seo-title-optimizer",
    category: { bg: "AI SEO Съдържание", en: "AI SEO Content" },
    title: { bg: "AI SEO Title Оптимизатор", en: "AI SEO Title Optimizer" },
    desc: { bg: "Оптимизирай заглавия за AI търсачки", en: "Optimize titles for AI search engines" },
    prompt: {
      bg: `Оптимизирай следното заглавие за AI SEO и GEO:

Текущо заглавие: [ЗАГЛАВИЕ]
Основна ключова дума: [КЛЮЧОВА ДУМА]
Target аудитория: [АУДИТОРИЯ]
Страница тип: [blog post / product page / landing page]

Изисквания:
- Оптимизирано за Google AI Overviews (answer-format)
- Включва основната ключова дума естествено
- До 60 символа за SEO title tag
- Версия за H1 (може да е по-дълга)
- Версия за meta description (до 155 символа)

Дай 3 варианта на заглавие с обяснение на избора.`,
      en: `Optimize the following title for AI SEO and GEO:

Current title: [TITLE]
Primary keyword: [KEYWORD]
Target audience: [AUDIENCE]
Page type: [blog post / product page / landing page]

Requirements:
- Optimized for Google AI Overviews (answer-format)
- Includes primary keyword naturally
- Up to 60 characters for SEO title tag
- Version for H1 (can be longer)
- Version for meta description (up to 155 characters)

Provide 3 title variations with explanation of choices.`,
    },
    color: "border-amber-500/30 bg-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    id: "competitor-geo-analysis",
    category: { bg: "GEO Анализ", en: "GEO Analysis" },
    title: { bg: "Конкурентен GEO Анализ", en: "Competitor GEO Analysis" },
    desc: { bg: "Анализирай GEO стратегията на конкурентите", en: "Analyze competitors' GEO strategy" },
    prompt: {
      bg: `Направи GEO анализ на следните конкурентни URL-и:

Конкурент 1: [URL]
Конкурент 2: [URL]
Конкурент 3: [URL]

Анализирай:
1. Структура на съдържанието (H2/H3, списъци, таблици)
2. Answer-First подход в уводите
3. Използване на статистики и данни
4. Schema маркап типове
5. FAQ секции и тяхната оптимизация
6. E-E-A-T сигнали

Препоръчай как да изпревариш конкурентите в AI резултатите.`,
      en: `Conduct a GEO analysis of the following competitor URLs:

Competitor 1: [URL]
Competitor 2: [URL]
Competitor 3: [URL]

Analyze:
1. Content structure (H2/H3, lists, tables)
2. Answer-First approach in introductions
3. Use of statistics and data
4. Schema markup types
5. FAQ sections and their optimization
6. E-E-A-T signals

Recommend how to outperform competitors in AI results.`,
    },
    color: "border-rose-500/30 bg-rose-500/5",
    iconColor: "text-rose-500",
  },
  {
    id: "technical-seo-checklist",
    category: { bg: "Технически SEO", en: "Technical SEO" },
    title: { bg: "Технически SEO Одит", en: "Technical SEO Audit" },
    desc: { bg: "Генерирай технически SEO одит за сайт", en: "Generate technical SEO audit for a site" },
    prompt: {
      bg: `Направи технически SEO одит на следния сайт:

URL: [САЙТ URL]

Провери и докладвай за:
1. Crawlability: robots.txt, sitemap, canonical тагове
2. Indexability: noindex тагове, crawl budget
3. Core Web Vitals: LCP, INP, CLS стойности и препоръки
4. Мобилна оптимизация
5. HTTPS и сигурност
6. Структурирани данни (Schema маркап)
7. Вътрешни линкове и архитектура
8. Скорост на зареждане

Приоритизирай проблемите по влияние върху AI видимостта.`,
      en: `Conduct a technical SEO audit of the following site:

URL: [SITE URL]

Check and report on:
1. Crawlability: robots.txt, sitemap, canonical tags
2. Indexability: noindex tags, crawl budget
3. Core Web Vitals: LCP, INP, CLS values and recommendations
4. Mobile optimization
5. HTTPS and security
6. Structured data (Schema markup)
7. Internal links and architecture
8. Loading speed

Prioritize issues by their impact on AI visibility.`,
    },
    color: "border-cyan-500/30 bg-cyan-500/5",
    iconColor: "text-cyan-500",
  },
  {
    id: "merchant-center-optimizer",
    category: { bg: "AI Commerce", en: "AI Commerce" },
    title: { bg: "Merchant Center Продукт Оптимизатор", en: "Merchant Center Product Optimizer" },
    desc: { bg: "Оптимизирай продуктови данни за AI пазаруване", en: "Optimize product data for AI shopping" },
    prompt: {
      bg: `Оптимизирай следните продуктови данни за Google Merchant Center и AI Shopping:

Продукт: [ПРОДУКТ]
Текущо заглавие: [ЗАГЛАВИЕ]
Текущо описание: [ОПИСАНИЕ]
Категория: [КАТЕГОРИЯ]
Цена: [ЦЕНА]

Генерирай:
1. Оптимизирано заглавие (max 150 символа) по формат: [Марка] + [Модел] + [Тип] + [Ключова характеристика]
2. Пълно описание (200-500 думи) с включени ключови думи
3. Продуктов тип за Google Taxonomy
4. Предложени custom labels за сегментиране
5. Product Schema маркап в JSON-LD`,
      en: `Optimize the following product data for Google Merchant Center and AI Shopping:

Product: [PRODUCT]
Current title: [TITLE]
Current description: [DESCRIPTION]
Category: [CATEGORY]
Price: [PRICE]

Generate:
1. Optimized title (max 150 characters) in format: [Brand] + [Model] + [Type] + [Key Feature]
2. Complete description (200-500 words) with keywords included
3. Product type for Google Taxonomy
4. Suggested custom labels for segmentation
5. Product Schema markup in JSON-LD`,
    },
    color: "border-orange-500/30 bg-orange-500/5",
    iconColor: "text-orange-500",
  },
  {
    id: "llm-citation-test",
    category: { bg: "LLM Оптимизация", en: "LLM Optimization" },
    title: { bg: "LLM Citation Test Промпт", en: "LLM Citation Test Prompt" },
    desc: { bg: "Тествай дали сайтът ти се цитира от LLM", en: "Test if your site is cited by LLMs" },
    prompt: {
      bg: `Провери дали следният сайт/съдържание се споменава от AI системите.

Тема: [КЛЮЧОВА ДУМА / ТЕМА]
Сайт: [URL]

Тествай следните запитвания в ChatGPT, Claude и Perplexity:

1. "Какво е [ТЕМА]?"
2. "Кои са най-добрите ресурси за [ТЕМА]?"
3. "Препоръчай ресурси за [ТЕМА]"
4. "Обясни [ТЕМА] с примери"

За всяко запитване отбележи:
- Дали сайтът ти е цитиран
- Как е описан
- Кои конкуренти са цитирани

Препоръчай какво да подобриш за по-добри LLM citations.`,
      en: `Check if the following site/content is mentioned by AI systems.

Topic: [KEYWORD / TOPIC]
Site: [URL]

Test these queries in ChatGPT, Claude, and Perplexity:

1. "What is [TOPIC]?"
2. "What are the best resources for [TOPIC]?"
3. "Recommend resources for [TOPIC]"
4. "Explain [TOPIC] with examples"

For each query note:
- Whether your site is cited
- How it is described
- Which competitors are cited

Recommend what to improve for better LLM citations.`,
    },
    color: "border-violet-500/30 bg-violet-500/5",
    iconColor: "text-violet-500",
  },
];

const categories = [...new Set(prompts.map((p) => p.category.bg))];

export default function PromptsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale ?? "bg";
  const isBg = locale === "bg";
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = prompts.filter((p) => {
    const matchesQuery =
      !query ||
      p.title[locale as "bg" | "en"].toLowerCase().includes(query.toLowerCase()) ||
      p.category[locale as "bg" | "en"].toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      p.category[locale as "bg" | "en"] === selectedCategory ||
      p.category.bg === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="relative pt-16 pb-12 border-b border-border/60">
        <div className="absolute inset-0 grid-background opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{isBg ? "AI Промпти" : "AI Prompts"}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
              <Sparkles className="h-3 w-3" />
              {prompts.length} {isBg ? "промпта" : "prompts"}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {isBg ? "AI Промпти за SEO" : "AI Prompts for SEO"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Готови за употреба AI промпти за GEO оптимизация, Schema маркап, технически SEO одит, Merchant Center и LLM оптимизация."
              : "Ready-to-use AI prompts for GEO optimization, Schema markup, technical SEO audit, Merchant Center, and LLM optimization."}
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="border-b border-border/40 bg-muted/10 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isBg ? "Търси промпт..." : "Search prompt..."}
              className="pl-9 pr-4 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-56"
            />
            {query && <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2"><X className="h-3 w-3 text-muted-foreground" /></button>}
          </div>
          <div className="flex flex-wrap gap-2">
            {["all", ...categories].map((cat) => (
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
                {cat === "all" ? (isBg ? "Всички" : "All") : (isBg ? cat : prompts.find((p) => p.category.bg === cat)?.category.en ?? cat)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prompts */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filtered.map((p) => (
              <div
                key={p.id}
                className={cn("rounded-2xl border p-6 space-y-4", p.color)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={cn("text-xs font-semibold", p.iconColor)}>
                      {p.category[locale as "bg" | "en"]}
                    </span>
                    <h3 className="font-bold text-foreground mt-1">
                      {p.title[locale as "bg" | "en"]}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {p.desc[locale as "bg" | "en"]}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(p.id, p.prompt[locale as "bg" | "en"])}
                    className={cn(
                      "shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
                      copiedId === p.id
                        ? "bg-teal-500/10 text-teal-500 border-teal-500/30"
                        : "bg-background/60 text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                    )}
                  >
                    {copiedId === p.id ? (
                      <><Check className="h-3.5 w-3.5" />{isBg ? "Копирано!" : "Copied!"}</>
                    ) : (
                      <><Copy className="h-3.5 w-3.5" />{isBg ? "Копирай" : "Copy"}</>
                    )}
                  </button>
                </div>
                <pre className="bg-background/60 rounded-xl border border-border/60 p-4 text-xs text-muted-foreground font-mono whitespace-pre-wrap overflow-x-auto max-h-48 overflow-y-auto scrollbar-thin">
                  {p.prompt[locale as "bg" | "en"]}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
