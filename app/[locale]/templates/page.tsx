import Link from "next/link";
import { FileText, ChevronRight, Download, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const templates = [
  {
    id: "faq-schema-template",
    emoji: "📋",
    title: { bg: "FAQPage Schema Шаблон", en: "FAQPage Schema Template" },
    desc: { bg: "JSON-LD FAQPage Schema шаблон за Google AI Overviews", en: "JSON-LD FAQPage Schema template for Google AI Overviews" },
    category: { bg: "Schema Маркап", en: "Schema Markup" },
    format: "JSON-LD",
    color: "border-purple-500/30",
    tagColor: "text-purple-500 bg-purple-500/10",
    content: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Въпрос 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Отговор 1 — директен и изчерпателен отговор на въпроса."
      }
    },
    {
      "@type": "Question",
      "name": "Въпрос 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Отговор 2 — с конкретни факти и данни."
      }
    }
  ]
}`,
  },
  {
    id: "article-schema-template",
    emoji: "📰",
    title: { bg: "Article Schema Шаблон", en: "Article Schema Template" },
    desc: { bg: "JSON-LD Article Schema за блог статии и новини", en: "JSON-LD Article Schema for blog articles and news" },
    category: { bg: "Schema Маркап", en: "Schema Markup" },
    format: "JSON-LD",
    color: "border-indigo-500/30",
    tagColor: "text-indigo-500 bg-indigo-500/10",
    content: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заглавие на статията",
  "description": "Кратко описание",
  "image": "https://example.com/image.jpg",
  "datePublished": "2025-01-01T00:00:00+02:00",
  "dateModified": "2025-06-01T00:00:00+02:00",
  "author": {
    "@type": "Person",
    "name": "Автор",
    "url": "https://example.com/author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI SEO Академия",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aiseo.bg/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/article"
  }
}`,
  },
  {
    id: "product-schema-template",
    emoji: "🛒",
    title: { bg: "Product Schema Шаблон", en: "Product Schema Template" },
    desc: { bg: "JSON-LD Product Schema за ecommerce продуктови страници", en: "JSON-LD Product Schema for ecommerce product pages" },
    category: { bg: "Ecommerce", en: "Ecommerce" },
    format: "JSON-LD",
    color: "border-amber-500/30",
    tagColor: "text-amber-500 bg-amber-500/10",
    content: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Продукт Наименование",
  "description": "Пълно описание на продукта",
  "image": ["https://example.com/product-1.jpg"],
  "brand": {
    "@type": "Brand",
    "name": "Марка"
  },
  "sku": "PRODUCT-SKU-001",
  "gtin13": "1234567890123",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "BGN",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/product",
    "seller": {
      "@type": "Organization",
      "name": "Магазин"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`,
  },
  {
    id: "howto-schema-template",
    emoji: "📝",
    title: { bg: "HowTo Schema Шаблон", en: "HowTo Schema Template" },
    desc: { bg: "JSON-LD HowTo Schema за инструкционно съдържание", en: "JSON-LD HowTo Schema for instructional content" },
    category: { bg: "Schema Маркап", en: "Schema Markup" },
    format: "JSON-LD",
    color: "border-teal-500/30",
    tagColor: "text-teal-500 bg-teal-500/10",
    content: `{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Как да направиш X",
  "description": "Стъпка по стъпка ръководство",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Стъпка 1",
      "text": "Описание на стъпка 1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Стъпка 2",
      "text": "Описание на стъпка 2"
    }
  ]
}`,
  },
  {
    id: "geo-content-structure",
    emoji: "🚀",
    title: { bg: "GEO Структура на статия", en: "GEO Article Structure" },
    desc: { bg: "Шаблон за структура на GEO-оптимизирана статия", en: "Template for GEO-optimized article structure" },
    category: { bg: "GEO", en: "GEO" },
    format: "Markdown",
    color: "border-rose-500/30",
    tagColor: "text-rose-500 bg-rose-500/10",
    content: `# [Заглавие: Директен отговор формат]

## Какво е [ТЕМА]? {#definition}
[ДИРЕКТЕН ОТГОВОР в първите 2 изречения. Дефиниция + ключов факт.]

[СТАТИСТИКА с посочен извор] — напр. "Според изследване на [ИЗВОР], X% от..."

---

## Как работи [ТЕМА]? {#how-it-works}
[Обяснение с bullet points или numbered list]

- **Точка 1**: Обяснение
- **Точка 2**: Обяснение
- **Точка 3**: Обяснение

---

## [ТЕМА] vs [СВЪРЗАНА ТЕМА] {#comparison}
| Критерий | [ТЕМА] | [СВЪРЗАНА ТЕМА] |
|---------|--------|----------------|
| Описание | ... | ... |

---

## Стъпки за имплементация {#implementation}
1. Стъпка 1
2. Стъпка 2
3. Стъпка 3

---

## Често задавани въпроси {#faq}
**Въпрос 1?**
Директен отговор.

**Въпрос 2?**
Директен отговор.`,
  },
  {
    id: "seo-audit-template",
    emoji: "🔧",
    title: { bg: "AI SEO Одит Чеклист", en: "AI SEO Audit Checklist" },
    desc: { bg: "Пълен чеклист за AI SEO и GEO одит", en: "Complete checklist for AI SEO and GEO audit" },
    category: { bg: "Технически SEO", en: "Technical SEO" },
    format: "Checklist",
    color: "border-cyan-500/30",
    tagColor: "text-cyan-500 bg-cyan-500/10",
    content: `## AI SEO Одит Чеклист

### Технически SEO
- [ ] robots.txt правилно конфигуриран
- [ ] XML sitemap наличен и актуален
- [ ] HTTPS на целия сайт
- [ ] Core Web Vitals: LCP < 2.5s
- [ ] Core Web Vitals: INP < 200ms
- [ ] Core Web Vitals: CLS < 0.1
- [ ] Мобилна оптимизация
- [ ] Canonical тагове правилни

### Structured Data
- [ ] Article Schema на статиите
- [ ] FAQPage Schema на FAQ секции
- [ ] BreadcrumbList Schema
- [ ] Organization Schema
- [ ] Product Schema (за ecommerce)
- [ ] Валидиран с Rich Results Test

### GEO Оптимизация
- [ ] Answer-First format в статиите
- [ ] H2/H3 структура с въпросни заглавия
- [ ] Статистики с посочени извори
- [ ] FAQ секции
- [ ] E-E-A-T: Автор информация
- [ ] Тематично покритие (pillar + cluster)

### AI Visibility
- [ ] Тестван в ChatGPT за цитирания
- [ ] Тестван в Perplexity за цитирания
- [ ] Тестван в Gemini за цитирания
- [ ] GSC: проверен за AI Overview appearances`,
  },
];

interface TemplatesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TemplatesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isBg = locale === "bg";
  return {
    title: isBg ? "Шаблони за AI SEO, Schema Маркап и GEO" : "Templates for AI SEO, Schema Markup, and GEO",
    description: isBg
      ? "Безплатни шаблони за Schema маркап, GEO оптимизация, SEO одит и Merchant Center."
      : "Free templates for Schema markup, GEO optimization, SEO audit, and Merchant Center.",
  };
}

export default async function TemplatesPage({ params }: TemplatesPageProps) {
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
            <span className="text-foreground">{isBg ? "Шаблони" : "Templates"}</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {isBg ? "Шаблони" : "Templates"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isBg
              ? "Безплатни шаблони за Schema маркап, GEO структури, SEO одит чеклисти и Merchant Center оптимизация."
              : "Free templates for Schema markup, GEO structures, SEO audit checklists, and Merchant Center optimization."}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {templates.map((tmpl) => (
              <div
                key={tmpl.id}
                className={cn("rounded-2xl border bg-card p-6", tmpl.color)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tmpl.emoji}</span>
                    <div>
                      <h3 className="font-bold text-foreground">
                        {tmpl.title[locale as "bg" | "en"]}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {tmpl.desc[locale as "bg" | "en"]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", tmpl.tagColor)}>
                      {tmpl.format}
                    </span>
                  </div>
                </div>
                <pre className="bg-muted/30 rounded-xl border border-border/60 p-4 text-xs text-muted-foreground font-mono whitespace-pre-wrap overflow-x-auto max-h-56 overflow-y-auto scrollbar-thin">
                  {tmpl.content}
                </pre>
                <div className="mt-3 flex items-center justify-between">
                  <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", tmpl.tagColor)}>
                    {tmpl.category[locale as "bg" | "en"]}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {isBg ? "Копирай и адаптирай за нуждите си" : "Copy and adapt for your needs"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
