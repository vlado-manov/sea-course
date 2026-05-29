import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ChevronRight, ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const guideData: Record<string, {
  title: { bg: string; en: string };
  desc: { bg: string; en: string };
  emoji: string;
  duration: number;
  sections: {
    title: { bg: string; en: string };
    content: { bg: string; en: string };
  }[];
  officialLinks?: { label: string; url: string }[];
  checklist?: { bg: string; en: string }[];
}> = {
  "merchant-center": {
    title: { bg: "Google Merchant Center: Пълно ръководство", en: "Google Merchant Center: Complete Guide" },
    desc: { bg: "Пълен наръчник за Google Merchant Center — от регистрация до AI оптимизация.", en: "Complete guide to Google Merchant Center — from registration to AI optimization." },
    emoji: "🛒",
    duration: 45,
    officialLinks: [
      { label: "Merchant Center Help", url: "https://support.google.com/merchants" },
      { label: "Merchant Center Signup", url: "https://merchants.google.com" },
      { label: "Product data specification", url: "https://support.google.com/merchants/answer/7052112" },
    ],
    sections: [
      {
        title: { bg: "1. Какво е Google Merchant Center?", en: "1. What is Google Merchant Center?" },
        content: {
          bg: "Google Merchant Center е платформата на Google, която позволява на онлайн магазините да качват продуктови данни и да ги показват в Google Shopping, Google Search, Google Images и YouTube. Merchant Center Next (новата версия) интегрира AI insights за автоматична оптимизация.",
          en: "Google Merchant Center is Google's platform that allows online stores to upload product data and display it in Google Shopping, Google Search, Google Images, and YouTube. Merchant Center Next (the new version) integrates AI insights for automatic optimization.",
        },
      },
      {
        title: { bg: "2. Настройка на Merchant Center акаунт", en: "2. Setting Up a Merchant Center Account" },
        content: {
          bg: "Стъпки за настройка:\n\n1. Отиди на merchants.google.com\n2. Влез с Google акаунта на бизнеса\n3. Попълни бизнес информацията (URL, държава, валута)\n4. Верифицирай и поискай сайта\n5. Настрой доставка и данъци\n6. Качи продуктовия фийд",
          en: "Setup steps:\n\n1. Go to merchants.google.com\n2. Sign in with your business Google account\n3. Fill in business information (URL, country, currency)\n4. Verify and claim your site\n5. Set up shipping and taxes\n6. Upload your product feed",
        },
      },
      {
        title: { bg: "3. Продуктов фийд — задължителни атрибути", en: "3. Product Feed — Required Attributes" },
        content: {
          bg: "Задължителни атрибути за всеки продукт:\n\n- **id** — уникален идентификатор\n- **title** — заглавие (оптимизирано с ключови думи)\n- **description** — детайлно описание\n- **link** — URL на продуктовата страница\n- **image_link** — URL на главната снимка\n- **price** — цена с валута\n- **availability** — in stock / out of stock\n- **condition** — new / used / refurbished\n- **brand** — марката на продукта\n- **gtin / mpn** — продуктови идентификатори",
          en: "Required attributes for each product:\n\n- **id** — unique identifier\n- **title** — headline (keyword-optimized)\n- **description** — detailed description\n- **link** — URL of the product page\n- **image_link** — URL of the main image\n- **price** — price with currency\n- **availability** — in stock / out of stock\n- **condition** — new / used / refurbished\n- **brand** — product brand\n- **gtin / mpn** — product identifiers",
        },
      },
      {
        title: { bg: "4. Оптимизация на продуктовия фийд за AI", en: "4. Optimizing the Product Feed for AI" },
        content: {
          bg: "За AI пазаруването (Google AI Shopping Mode) продуктите трябва да са оптимизирани за семантично разбиране:\n\n- Заглавие: [Марка] + [Характеристика] + [Продукт] + [Размер/Цвят]\n- Описание: Пълно, с включени ключови думи и характеристики\n- Снимки: Висококачествени, бяло/неутрален фон\n- Product Type: Задължителен за AI категоризация\n- Custom Labels: За сегментиране в кампаниите",
          en: "For AI shopping (Google AI Shopping Mode) products must be optimized for semantic understanding:\n\n- Title: [Brand] + [Feature] + [Product] + [Size/Color]\n- Description: Complete, with included keywords and specs\n- Images: High quality, white/neutral background\n- Product Type: Required for AI categorization\n- Custom Labels: For campaign segmentation",
        },
      },
      {
        title: { bg: "5. Performance Max кампании и AI", en: "5. Performance Max Campaigns and AI" },
        content: {
          bg: "Performance Max е AI-базираната кампания на Google, която автоматично оптимизира за всички Google канали. За максимален ефект:\n\n- Качи всички asset типове (заглавия, описания, изображения, видео)\n- Добави Audience Signals за по-бърза ML оптимизация\n- Настрой правилно conversion goals\n- Използвай Shopping feed за продуктови реклами",
          en: "Performance Max is Google's AI-based campaign that automatically optimizes across all Google channels. For maximum effect:\n\n- Upload all asset types (headlines, descriptions, images, video)\n- Add Audience Signals for faster ML optimization\n- Set up correct conversion goals\n- Use Shopping feed for product ads",
        },
      },
    ],
    checklist: [
      { bg: "Merchant Center акаунт е верифициран", en: "Merchant Center account is verified" },
      { bg: "Продуктовият фийд се актуализира ежедневно", en: "Product feed updates daily" },
      { bg: "Всички задължителни атрибути са попълнени", en: "All required attributes are filled in" },
      { bg: "Заглавията са оптимизирани за AI търсене", en: "Titles are optimized for AI search" },
      { bg: "Снимките отговарят на изискванията на Google", en: "Images meet Google requirements" },
      { bg: "Цените и наличността са актуални", en: "Prices and availability are current" },
      { bg: "GTIN/MPN са попълнени за всички продукти", en: "GTIN/MPN are filled for all products" },
      { bg: "Product Schema маркап е имплементиран", en: "Product Schema markup is implemented" },
    ],
  },
  "schema-org": {
    title: { bg: "Schema.org: Пълен Наръчник", en: "Schema.org: Complete Reference" },
    desc: { bg: "Всички Schema типове за SEO и AI, с примери в JSON-LD.", en: "All Schema types for SEO and AI, with JSON-LD examples." },
    emoji: "📋",
    duration: 60,
    officialLinks: [
      { label: "Schema.org", url: "https://schema.org" },
      { label: "Google Structured Data Docs", url: "https://developers.google.com/search/docs/appearance/structured-data" },
      { label: "Rich Results Test", url: "https://search.google.com/test/rich-results" },
      { label: "Schema Markup Validator", url: "https://validator.schema.org" },
    ],
    sections: [
      {
        title: { bg: "1. Какво е Schema.org маркап?", en: "1. What is Schema.org Markup?" },
        content: {
          bg: "Schema.org е споделен речник за структурирани данни, подкрепен от Google, Microsoft, Yahoo и Yandex. Той позволява на търсачките и AI системите да разберат семантичното значение на съдържанието на страницата — не само текста, но и контекста.\n\nИмплементира се чрез JSON-LD (препоръчан от Google), Microdata или RDFa.",
          en: "Schema.org is a shared structured data vocabulary supported by Google, Microsoft, Yahoo, and Yandex. It allows search engines and AI systems to understand the semantic meaning of page content — not just the text, but the context.\n\nImplemented via JSON-LD (recommended by Google), Microdata, or RDFa.",
        },
      },
      {
        title: { bg: "2. Задължителни Schema типове за AI SEO", en: "2. Essential Schema Types for AI SEO" },
        content: {
          bg: "**Article** — за статии и блог постове\n**FAQPage** — за FAQ секции (задейства AI Overviews!)\n**HowTo** — за инструкционно съдържание\n**Product** — за продуктови страниси\n**Organization** — за страницата За нас\n**BreadcrumbList** — за навигационни пътища\n**LocalBusiness** — за локален бизнес\n**Event** — за събития\n**Recipe** — за рецепти\n**Review** — за рецензии",
          en: "**Article** — for articles and blog posts\n**FAQPage** — for FAQ sections (triggers AI Overviews!)\n**HowTo** — for instructional content\n**Product** — for product pages\n**Organization** — for About page\n**BreadcrumbList** — for navigation breadcrumbs\n**LocalBusiness** — for local business\n**Event** — for events\n**Recipe** — for recipes\n**Review** — for reviews",
        },
      },
      {
        title: { bg: "3. FAQPage Schema — ключова за AI Overviews", en: "3. FAQPage Schema — Key for AI Overviews" },
        content: {
          bg: 'FAQPage Schema е един от най-ефективните типове за Google AI Overviews. Пример:\n\n```json\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [\n    {\n      "@type": "Question",\n      "name": "Какво е GEO?",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "GEO е практиката за оптимизиране на съдържание за AI системи..."\n      }\n    }\n  ]\n}\n```',
          en: 'FAQPage Schema is one of the most effective types for Google AI Overviews. Example:\n\n```json\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [\n    {\n      "@type": "Question",\n      "name": "What is GEO?",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "GEO is the practice of optimizing content for AI systems..."\n      }\n    }\n  ]\n}\n```',
        },
      },
    ],
    checklist: [
      { bg: "Article Schema на всички статии и блог постове", en: "Article Schema on all articles and blog posts" },
      { bg: "FAQPage Schema на FAQ секции", en: "FAQPage Schema on FAQ sections" },
      { bg: "BreadcrumbList Schema на всички страници", en: "BreadcrumbList Schema on all pages" },
      { bg: "Organization Schema на главната страница", en: "Organization Schema on homepage" },
      { bg: "Product Schema на продуктовите страници", en: "Product Schema on product pages" },
      { bg: "Валидиране с Rich Results Test", en: "Validated with Rich Results Test" },
    ],
  },
  "technical-seo": {
    title: { bg: "Технически SEO Одит Framework", en: "Technical SEO Audit Framework" },
    desc: { bg: "Пълен чеклист и методология за технически SEO одит.", en: "Complete checklist and methodology for technical SEO audit." },
    emoji: "🔧",
    duration: 90,
    officialLinks: [
      { label: "Google Search Console", url: "https://search.google.com/search-console" },
      { label: "PageSpeed Insights", url: "https://pagespeed.web.dev" },
      { label: "Core Web Vitals Report", url: "https://developers.google.com/speed/docs/insights/v5/about" },
      { label: "Google Lighthouse", url: "https://developer.chrome.com/docs/lighthouse" },
    ],
    sections: [
      {
        title: { bg: "1. Crawlability и Indexability", en: "1. Crawlability and Indexability" },
        content: {
          bg: "Провери:\n- robots.txt е правилно настроен\n- XML sitemap съществува и е актуален\n- Crawl budget не се изразходва за неважни URL-и\n- Canonical тагове са правилни\n- Noindex тагове са само там, където трябва\n- Google може да обходи JS съдържанието",
          en: "Check:\n- robots.txt is correctly configured\n- XML sitemap exists and is current\n- Crawl budget isn't wasted on unimportant URLs\n- Canonical tags are correct\n- Noindex tags are only where needed\n- Google can crawl JS content",
        },
      },
      {
        title: { bg: "2. Core Web Vitals", en: "2. Core Web Vitals" },
        content: {
          bg: "Цели за Core Web Vitals:\n\n- **LCP (Largest Contentful Paint)**: < 2.5 секунди\n- **INP (Interaction to Next Paint)**: < 200 милисекунди\n- **CLS (Cumulative Layout Shift)**: < 0.1\n\nОптимизация за LCP:\n- Preload hero images\n- Оптимизирай сървъра (TTFB)\n- Избягвай lazy load на above-the-fold изображения",
          en: "Core Web Vitals targets:\n\n- **LCP (Largest Contentful Paint)**: < 2.5 seconds\n- **INP (Interaction to Next Paint)**: < 200 milliseconds\n- **CLS (Cumulative Layout Shift)**: < 0.1\n\nLCP optimization:\n- Preload hero images\n- Optimize server (TTFB)\n- Avoid lazy loading above-the-fold images",
        },
      },
    ],
    checklist: [
      { bg: "robots.txt правилно конфигуриран", en: "robots.txt properly configured" },
      { bg: "XML sitemap е наличен и актуален", en: "XML sitemap exists and is current" },
      { bg: "LCP < 2.5 секунди", en: "LCP < 2.5 seconds" },
      { bg: "INP < 200ms", en: "INP < 200ms" },
      { bg: "CLS < 0.1", en: "CLS < 0.1" },
      { bg: "HTTPS на целия сайт", en: "HTTPS throughout the site" },
      { bg: "Мобилна оптимизация", en: "Mobile optimization" },
      { bg: "Structured Data имплементиран", en: "Structured Data implemented" },
    ],
  },
  "entity-seo": {
    title: { bg: "Entity SEO: Семантичен Авторитет", en: "Entity SEO: Semantic Authority" },
    desc: { bg: "Изграждане на entity-based SEO стратегия.", en: "Building an entity-based SEO strategy." },
    emoji: "🌐",
    duration: 50,
    officialLinks: [
      { label: "Google Knowledge Panel", url: "https://support.google.com/knowledgepanel" },
      { label: "Wikidata", url: "https://www.wikidata.org" },
    ],
    sections: [
      {
        title: { bg: "1. Какво са обекти (entities) в SEO?", en: "1. What are Entities in SEO?" },
        content: {
          bg: "Обектите (entities) са конкретни неща, концепции или хора, разграничени по уникалност в Google Knowledge Graph. Google разбира уеб съдържанието чрез семантични отношения между обекти, а не само чрез ключови думи.",
          en: "Entities are specific things, concepts, or people distinguished by uniqueness in Google's Knowledge Graph. Google understands web content through semantic relationships between entities, not just keywords.",
        },
      },
    ],
    checklist: [
      { bg: "Organization Schema с всички свойства", en: "Organization Schema with all properties" },
      { bg: "sameAs линкове към Wikipedia, Wikidata, социални мрежи", en: "sameAs links to Wikipedia, Wikidata, social networks" },
      { bg: "Страница За нас с пълна информация", en: "About page with complete information" },
      { bg: "Knowledge Panel заявен и верифициран", en: "Knowledge Panel claimed and verified" },
    ],
  },
  "ai-audit": {
    title: { bg: "AI SEO Одит: Пълен Чеклист", en: "AI SEO Audit: Complete Checklist" },
    desc: { bg: "Как да оцениш и подобриш AI видимостта на сайта.", en: "How to assess and improve your site's AI visibility." },
    emoji: "🤖",
    duration: 40,
    officialLinks: [
      { label: "Google AI Overviews Help", url: "https://support.google.com/websearch/answer/14901683" },
      { label: "Perplexity AI", url: "https://www.perplexity.ai" },
      { label: "ChatGPT", url: "https://chat.openai.com" },
    ],
    sections: [
      {
        title: { bg: "1. Одит на AI Overviews видимостта", en: "1. Auditing AI Overviews Visibility" },
        content: {
          bg: "В Google Search Console:\n1. Отиди в Search Results раздела\n2. Филтрирай по Search Type: Web\n3. Търси queries, при които се появяват AI Overviews\n4. Провери дали сайтът ти е цитиран\n\nРъчна проверка:\n1. Пусни ключови заявки в Google\n2. Провери дали AI Overview се появява\n3. Провери дали сайтът ти е в sources",
          en: "In Google Search Console:\n1. Go to Search Results section\n2. Filter by Search Type: Web\n3. Look for queries where AI Overviews appear\n4. Check if your site is cited\n\nManual check:\n1. Run key queries in Google\n2. Check if AI Overview appears\n3. Check if your site is in sources",
        },
      },
    ],
    checklist: [
      { bg: "Проверен за AI Overview citations в GSC", en: "Checked for AI Overview citations in GSC" },
      { bg: "Тестван в ChatGPT, Gemini, Perplexity", en: "Tested in ChatGPT, Gemini, Perplexity" },
      { bg: "E-E-A-T сигналите са оптимизирани", en: "E-E-A-T signals are optimized" },
      { bg: "FAQPage Schema имплементирана", en: "FAQPage Schema implemented" },
      { bg: "Директни отговори в началото на статиите", en: "Direct answers at the beginning of articles" },
      { bg: "Статистики с цитирани извори", en: "Statistics with cited sources" },
    ],
  },
  "geo-guide": {
    title: { bg: "GEO: Генеративна Оптимизация", en: "GEO: Generative Engine Optimization" },
    desc: { bg: "Пълното GEO ръководство за AI видимост.", en: "The complete GEO guide for AI visibility." },
    emoji: "🚀",
    duration: 55,
    officialLinks: [
      { label: "ChatGPT", url: "https://chat.openai.com" },
      { label: "Perplexity AI", url: "https://www.perplexity.ai" },
      { label: "Google Gemini", url: "https://gemini.google.com" },
    ],
    sections: [
      {
        title: { bg: "1. Принципи на GEO", en: "1. GEO Principles" },
        content: {
          bg: "GEO (Generative Engine Optimization) оптимизира съдържанието да се появява в AI-генерирани отговори. Ключови принципи:\n\n1. Answer-First: Директен отговор в първото изречение\n2. Data-Backed: Статистики с посочени извори\n3. Structured: H2/H3, bullet points, numbered lists\n4. Authoritative: E-E-A-T сигнали\n5. Comprehensive: Пълно тематично покритие",
          en: "GEO (Generative Engine Optimization) optimizes content to appear in AI-generated answers. Key principles:\n\n1. Answer-First: Direct answer in the first sentence\n2. Data-Backed: Statistics with cited sources\n3. Structured: H2/H3, bullet points, numbered lists\n4. Authoritative: E-E-A-T signals\n5. Comprehensive: Complete topical coverage",
        },
      },
    ],
    checklist: [
      { bg: "Answer-First format имплементиран", en: "Answer-First format implemented" },
      { bg: "Статистики с посочени извори", en: "Statistics with cited sources" },
      { bg: "FAQPage Schema на всички FAQ секции", en: "FAQPage Schema on all FAQ sections" },
      { bg: "Тестван в Perplexity, ChatGPT, Gemini", en: "Tested in Perplexity, ChatGPT, Gemini" },
      { bg: "E-E-A-T автор информация", en: "E-E-A-T author information" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(guideData).flatMap((slug) =>
    ["bg", "en"].map((locale) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = guideData[slug];
  if (!guide) return {};
  return {
    title: guide.title[locale as "bg" | "en"],
    description: guide.desc[locale as "bg" | "en"],
  };
}

interface GuidePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale, slug } = await params;
  const guide = guideData[slug];
  if (!guide) notFound();
  const isBg = locale === "bg";

  return (
    <div className="page-transition">
      {/* Breadcrumb */}
      <div className="border-b border-border/40 bg-muted/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href={`/${locale}`} className="hover:text-foreground">{isBg ? "Начало" : "Home"}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/${locale}/guides`} className="hover:text-foreground">{isBg ? "Ръководства" : "Guides"}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{guide.title[locale as "bg" | "en"]}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-border/40 py-10 bg-gradient-to-b from-muted/20 to-transparent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{guide.emoji}</span>
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                {guide.title[locale as "bg" | "en"]}
              </h1>
              <p className="mt-2 text-muted-foreground">{guide.desc[locale as "bg" | "en"]}</p>
              <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {guide.duration} {isBg ? "минути четене" : "min read"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Sections */}
        {guide.sections.map((section, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4">
              {section.title[locale as "bg" | "en"]}
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.content[locale as "bg" | "en"]}
            </div>
          </div>
        ))}

        {/* Checklist */}
        {guide.checklist && (
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-5 text-teal-600 dark:text-teal-400">
              {isBg ? "Чеклист" : "Checklist"}
            </h2>
            <ul className="space-y-3">
              {guide.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item[locale as "bg" | "en"]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Official links */}
        {guide.officialLinks && (
          <div className="rounded-2xl border border-border bg-muted/20 p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-primary" />
              {isBg ? "Официални ресурси" : "Official Resources"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.officialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-border/40">
          <Link
            href={`/${locale}/guides`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            {isBg ? "Обратно към ръководствата" : "Back to guides"}
          </Link>
        </div>
      </div>
    </div>
  );
}
