export type ToolCategory =
  | "analytics"
  | "technical"
  | "content"
  | "ai"
  | "ecommerce"
  | "schema"
  | "research"
  | "automation";

export type ToolPricing = "free" | "freemium" | "paid";

export interface Tool {
  slug: string;
  name: string;
  tagline: { bg: string; en: string };
  description: { bg: string; en: string };
  category: ToolCategory;
  pricing: ToolPricing;
  official: string;
  docs?: string;
  icon: string;
  featured?: boolean;
  tags: string[];
  useCases: { bg: string; en: string }[];
  pros: { bg: string; en: string }[];
  cons: { bg: string; en: string }[];
}

export const tools: Tool[] = [
  {
    slug: "google-search-console",
    name: "Google Search Console",
    tagline: { bg: "Мониторинг на видимостта в Google", en: "Monitor visibility in Google" },
    description: {
      bg: "Безплатен инструмент от Google за мониторинг на видимостта на сайта в Google Search, включително AI Overviews, Core Web Vitals, crawl errors и много повече.",
      en: "Free tool from Google for monitoring site visibility in Google Search, including AI Overviews, Core Web Vitals, crawl errors, and much more.",
    },
    category: "analytics",
    pricing: "free",
    official: "https://search.google.com/search-console",
    docs: "https://developers.google.com/search/docs/monitor-debug/search-console",
    icon: "🔍",
    featured: true,
    tags: ["Google", "Analytics", "AI Overviews", "Core Web Vitals", "Crawl"],
    useCases: [
      { bg: "Проследяване на позиции и кликове в Google", en: "Tracking positions and clicks in Google" },
      { bg: "Мониторинг на AI Overview appearances", en: "Monitoring AI Overview appearances" },
      { bg: "Проверка на индексиране и crawl грешки", en: "Checking indexing and crawl errors" },
      { bg: "Анализ на Core Web Vitals", en: "Analyzing Core Web Vitals" },
    ],
    pros: [
      { bg: "Напълно безплатен", en: "Completely free" },
      { bg: "Официални данни директно от Google", en: "Official data directly from Google" },
      { bg: "AI Overview tracking (нова функция)", en: "AI Overview tracking (new feature)" },
      { bg: "Rich Results статус", en: "Rich Results status" },
    ],
    cons: [
      { bg: "Данните са с 2-3 дни закъснение", en: "Data has 2-3 day delay" },
      { bg: "Ограничени исторически данни (16 месеца)", en: "Limited historical data (16 months)" },
      { bg: "Само за Google (не Bing, Yandex и т.н.)", en: "Google only (not Bing, Yandex, etc.)" },
    ],
  },
  {
    slug: "merchant-center",
    name: "Google Merchant Center",
    tagline: { bg: "Управление на продуктови данни за Google Shopping", en: "Manage product data for Google Shopping" },
    description: {
      bg: "Платформата на Google за управление на продуктови листинги, Shopping Ads и AI-базирано пазаруване. Задължителна за всеки ecommerce бизнес.",
      en: "Google's platform for managing product listings, Shopping Ads, and AI-based shopping. Essential for every ecommerce business.",
    },
    category: "ecommerce",
    pricing: "free",
    official: "https://merchants.google.com",
    docs: "https://support.google.com/merchants",
    icon: "🛒",
    featured: true,
    tags: ["Google Shopping", "Product Feed", "Ecommerce", "AI Shopping"],
    useCases: [
      { bg: "Управление на продуктов фийд за Google Shopping", en: "Managing product feed for Google Shopping" },
      { bg: "Shopping Ads campaigns", en: "Shopping Ads campaigns" },
      { bg: "Оптимизация за AI пазаруване", en: "Optimizing for AI shopping" },
      { bg: "Performance Max кампании", en: "Performance Max campaigns" },
    ],
    pros: [
      { bg: "Директна интеграция с Google Shopping", en: "Direct integration with Google Shopping" },
      { bg: "AI-базирани Product Insights", en: "AI-based Product Insights" },
      { bg: "Безплатни органични Shopping листинги", en: "Free organic Shopping listings" },
    ],
    cons: [
      { bg: "Сложен setup процес", en: "Complex setup process" },
      { bg: "Изисква редовна актуализация на фийда", en: "Requires regular feed updates" },
    ],
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    tagline: { bg: "Най-мощният SEO инструмент за backlink анализ", en: "The most powerful SEO tool for backlink analysis" },
    description: {
      bg: "Пълна SEO платформа с фокус върху backlink анализ, keyword research, rank tracking и competitor analysis. Един от водещите SEO инструменти в индустрията.",
      en: "Complete SEO platform focused on backlink analysis, keyword research, rank tracking, and competitor analysis. One of the leading SEO tools in the industry.",
    },
    category: "research",
    pricing: "paid",
    official: "https://ahrefs.com",
    docs: "https://help.ahrefs.com",
    icon: "📈",
    featured: true,
    tags: ["Backlinks", "Keywords", "Rank Tracking", "Competitor Analysis"],
    useCases: [
      { bg: "Backlink profile анализ", en: "Backlink profile analysis" },
      { bg: "Keyword research за AI SEO", en: "Keyword research for AI SEO" },
      { bg: "Competitor gap analysis", en: "Competitor gap analysis" },
      { bg: "Content Explorer за GEO идеи", en: "Content Explorer for GEO ideas" },
    ],
    pros: [
      { bg: "Най-голям backlink индекс в индустрията", en: "Largest backlink index in the industry" },
      { bg: "Изключително детайлен keyword анализ", en: "Exceptionally detailed keyword analysis" },
      { bg: "Site audit инструмент", en: "Site audit tool" },
    ],
    cons: [
      { bg: "Скъп — от $99/месец", en: "Expensive — from $99/month" },
      { bg: "Без безплатен план", en: "No free plan" },
    ],
  },
  {
    slug: "semrush",
    name: "Semrush",
    tagline: { bg: "Пълна SEO и маркетинг платформа", en: "Complete SEO and marketing platform" },
    description: {
      bg: "Водеща SEO и маркетинг платформа с инструменти за keyword research, competitor analysis, content optimization, local SEO и много повече.",
      en: "Leading SEO and marketing platform with tools for keyword research, competitor analysis, content optimization, local SEO, and much more.",
    },
    category: "research",
    pricing: "freemium",
    official: "https://www.semrush.com",
    docs: "https://www.semrush.com/kb",
    icon: "📊",
    featured: true,
    tags: ["Keywords", "Competitor Analysis", "Content", "Local SEO"],
    useCases: [
      { bg: "Keyword research и SERP анализ", en: "Keyword research and SERP analysis" },
      { bg: "Competitor intelligence", en: "Competitor intelligence" },
      { bg: "Content Marketing toolkit", en: "Content Marketing toolkit" },
      { bg: "Position tracking", en: "Position tracking" },
    ],
    pros: [
      { bg: "Най-пълна all-in-one SEO платформа", en: "Most complete all-in-one SEO platform" },
      { bg: "Ограничен безплатен план", en: "Limited free plan" },
      { bg: "Отличен за competitor research", en: "Excellent for competitor research" },
    ],
    cons: [
      { bg: "По-скъп от конкурентите", en: "More expensive than competitors" },
      { bg: "Overwhelming за начинаещи", en: "Overwhelming for beginners" },
    ],
  },
  {
    slug: "screaming-frog",
    name: "Screaming Frog SEO Spider",
    tagline: { bg: "Website crawler за технически SEO одит", en: "Website crawler for technical SEO audit" },
    description: {
      bg: "Най-популярният desktop crawler за технически SEO одит. Анализира URLs, мета тагове, заглавия, изображения, линкове, Schema маркап и много повече.",
      en: "The most popular desktop crawler for technical SEO audit. Analyzes URLs, meta tags, headings, images, links, Schema markup, and much more.",
    },
    category: "technical",
    pricing: "freemium",
    official: "https://www.screamingfrog.co.uk/seo-spider",
    docs: "https://www.screamingfrog.co.uk/seo-spider/user-guide",
    icon: "🐸",
    featured: true,
    tags: ["Crawler", "Technical SEO", "Audit", "Schema", "Redirects"],
    useCases: [
      { bg: "Пълен технически SEO одит", en: "Complete technical SEO audit" },
      { bg: "Проверка на Schema маркап", en: "Schema markup verification" },
      { bg: "Redirect chain анализ", en: "Redirect chain analysis" },
      { bg: "Duplicate content detection", en: "Duplicate content detection" },
    ],
    pros: [
      { bg: "Изключително мощен crawler", en: "Extremely powerful crawler" },
      { bg: "Free до 500 URLs", en: "Free up to 500 URLs" },
      { bg: "Интеграция с Google Analytics и Search Console", en: "Integration with Google Analytics and Search Console" },
    ],
    cons: [
      { bg: "Само за desktop (Windows/Mac/Linux)", en: "Desktop only (Windows/Mac/Linux)" },
      { bg: "Сложен интерфейс за начинаещи", en: "Complex interface for beginners" },
    ],
  },
  {
    slug: "pagespeed-insights",
    name: "PageSpeed Insights",
    tagline: { bg: "Измери Core Web Vitals и производителността", en: "Measure Core Web Vitals and performance" },
    description: {
      bg: "Безплатен инструмент от Google за измерване на Core Web Vitals (LCP, INP, CLS) и производителността на страниците на мобилни и десктоп устройства.",
      en: "Free tool from Google for measuring Core Web Vitals (LCP, INP, CLS) and page performance on mobile and desktop devices.",
    },
    category: "technical",
    pricing: "free",
    official: "https://pagespeed.web.dev",
    docs: "https://developers.google.com/speed/docs/insights/v5/about",
    icon: "⚡",
    tags: ["Core Web Vitals", "LCP", "INP", "CLS", "Performance"],
    useCases: [
      { bg: "Измерване на Core Web Vitals", en: "Measuring Core Web Vitals" },
      { bg: "Performance одит на страниците", en: "Page performance audit" },
      { bg: "Идентифициране на бавни ресурси", en: "Identifying slow resources" },
    ],
    pros: [
      { bg: "Напълно безплатен", en: "Completely free" },
      { bg: "Официален инструмент от Google", en: "Official tool from Google" },
      { bg: "Real-user и lab данни", en: "Real-user and lab data" },
    ],
    cons: [
      { bg: "Само за отделни страниси, не за целия сайт", en: "Single pages only, not entire site" },
    ],
  },
  {
    slug: "rich-results-test",
    name: "Rich Results Test",
    tagline: { bg: "Тествай структурирани данни за Rich Results", en: "Test structured data for Rich Results" },
    description: {
      bg: "Официален инструмент от Google за тестване дали структурираните данни на страницата са правилно имплементирани и дали отговарят на изискванията за Rich Results.",
      en: "Official tool from Google for testing whether a page's structured data is correctly implemented and meets the requirements for Rich Results.",
    },
    category: "schema",
    pricing: "free",
    official: "https://search.google.com/test/rich-results",
    docs: "https://developers.google.com/search/docs/appearance/structured-data",
    icon: "✅",
    tags: ["Schema", "Rich Results", "Structured Data", "JSON-LD"],
    useCases: [
      { bg: "Валидиране на JSON-LD Schema маркап", en: "Validating JSON-LD Schema markup" },
      { bg: "Preview на Rich Results в Google", en: "Previewing Rich Results in Google" },
      { bg: "Debug на Schema грешки", en: "Debugging Schema errors" },
    ],
    pros: [
      { bg: "Официален Google инструмент", en: "Official Google tool" },
      { bg: "Показва preview на Rich Results", en: "Shows Rich Results preview" },
    ],
    cons: [
      { bg: "Не тества всички Schema типове", en: "Doesn't test all Schema types" },
    ],
  },
  {
    slug: "schema-validator",
    name: "Schema.org Validator",
    tagline: { bg: "Официален Schema.org валидатор", en: "Official Schema.org validator" },
    description: {
      bg: "Официалният валидатор от Schema.org за тестване на структурирани данни. Поддържа JSON-LD, Microdata и RDFa формати.",
      en: "The official validator from Schema.org for testing structured data. Supports JSON-LD, Microdata, and RDFa formats.",
    },
    category: "schema",
    pricing: "free",
    official: "https://validator.schema.org",
    icon: "🔧",
    tags: ["Schema", "JSON-LD", "Microdata", "RDFa", "Validation"],
    useCases: [
      { bg: "Валидиране на Schema.org маркап", en: "Validating Schema.org markup" },
      { bg: "Тест на JSON-LD, Microdata и RDFa", en: "Testing JSON-LD, Microdata, and RDFa" },
    ],
    pros: [
      { bg: "Официален от Schema.org", en: "Official from Schema.org" },
      { bg: "Поддържа всички Schema типове", en: "Supports all Schema types" },
    ],
    cons: [
      { bg: "По-технически за начинаещи", en: "More technical for beginners" },
    ],
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: { bg: "AI асистент за SEO съдържание и стратегия", en: "AI assistant for SEO content and strategy" },
    description: {
      bg: "Водещият AI чатбот от OpenAI. Изключително полезен за SEO: генериране на съдържание, keyword изследване, schema маркап, GEO оптимизация и AI стратегии.",
      en: "The leading AI chatbot from OpenAI. Extremely useful for SEO: content generation, keyword research, schema markup, GEO optimization, and AI strategies.",
    },
    category: "ai",
    pricing: "freemium",
    official: "https://chat.openai.com",
    docs: "https://platform.openai.com/docs",
    icon: "🤖",
    featured: true,
    tags: ["AI", "Content", "ChatGPT", "OpenAI", "GEO"],
    useCases: [
      { bg: "Генериране на SEO съдържание", en: "Generating SEO content" },
      { bg: "Schema маркап генериране", en: "Schema markup generation" },
      { bg: "GEO стратегии", en: "GEO strategies" },
      { bg: "Тест за LLM цитирания", en: "Testing LLM citations" },
    ],
    pros: [
      { bg: "Най-известният AI асистент", en: "The most well-known AI assistant" },
      { bg: "Безплатен базов план", en: "Free basic plan" },
      { bg: "Отличен за съдържание и стратегия", en: "Excellent for content and strategy" },
    ],
    cons: [
      { bg: "GPT-4 изисква Plus абонамент", en: "GPT-4 requires Plus subscription" },
      { bg: "Информацията е с cutoff дата", en: "Information has a cutoff date" },
    ],
  },
  {
    slug: "gemini",
    name: "Google Gemini",
    tagline: { bg: "AI асистент от Google за SEO и GEO", en: "AI assistant from Google for SEO and GEO" },
    description: {
      bg: "AI асистентът на Google, интегриран с Google Search. Критичен инструмент за разбиране как Google AI системите интерпретират и цитират съдържание.",
      en: "Google's AI assistant, integrated with Google Search. Critical tool for understanding how Google AI systems interpret and cite content.",
    },
    category: "ai",
    pricing: "freemium",
    official: "https://gemini.google.com",
    docs: "https://ai.google.dev/gemini-api/docs",
    icon: "✨",
    tags: ["AI", "Google AI", "Gemini", "GEO", "AI Overviews"],
    useCases: [
      { bg: "Тест как Google AI вижда сайта ти", en: "Testing how Google AI sees your site" },
      { bg: "Изследване на Google AI Overviews", en: "Researching Google AI Overviews" },
      { bg: "AI-assisted keyword research", en: "AI-assisted keyword research" },
    ],
    pros: [
      { bg: "Пряко свързан с Google Search", en: "Directly connected to Google Search" },
      { bg: "Gemini 2.0 Flash е безплатен", en: "Gemini 2.0 Flash is free" },
    ],
    cons: [
      { bg: "По-слаба в сравнение с GPT-4 за код", en: "Weaker than GPT-4 for code" },
    ],
  },
  {
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: { bg: "AI търсачка — тествай GEO видимостта си", en: "AI search engine — test your GEO visibility" },
    description: {
      bg: "AI-базирана търсачка, която синтезира отговори от множество източници. Изключително важна за GEO оптимизация — проверявай дали сайтът ти се цитира.",
      en: "AI-based search engine that synthesizes answers from multiple sources. Critically important for GEO optimization — check if your site is being cited.",
    },
    category: "ai",
    pricing: "freemium",
    official: "https://www.perplexity.ai",
    icon: "🔮",
    tags: ["AI Search", "GEO", "Citations", "LLM", "Research"],
    useCases: [
      { bg: "Тест за GEO цитирания", en: "Testing GEO citations" },
      { bg: "AI-based keyword research", en: "AI-based keyword research" },
      { bg: "Competitor GEO analysis", en: "Competitor GEO analysis" },
    ],
    pros: [
      { bg: "Реални AI Search резултати", en: "Real AI Search results" },
      { bg: "Показва source citations", en: "Shows source citations" },
      { bg: "Безплатен базов план", en: "Free basic plan" },
    ],
    cons: [
      { bg: "По-малка аудитория от Google", en: "Smaller audience than Google" },
    ],
  },
  {
    slug: "claude",
    name: "Claude (Anthropic)",
    tagline: { bg: "AI асистент за дълго съдържание и SEO стратегия", en: "AI assistant for long content and SEO strategy" },
    description: {
      bg: "AI асистентът от Anthropic с изключителен контекстен прозорец. Отличен за дълги SEO статии, технически анализ и сложни GEO стратегии.",
      en: "AI assistant from Anthropic with exceptional context window. Excellent for long SEO articles, technical analysis, and complex GEO strategies.",
    },
    category: "ai",
    pricing: "freemium",
    official: "https://claude.ai",
    docs: "https://docs.anthropic.com",
    icon: "⚡",
    tags: ["AI", "Anthropic", "Long Content", "SEO Analysis", "GEO"],
    useCases: [
      { bg: "Писане на дълги SEO статии", en: "Writing long SEO articles" },
      { bg: "Технически SEO анализ", en: "Technical SEO analysis" },
      { bg: "Schema маркап генериране", en: "Schema markup generation" },
    ],
    pros: [
      { bg: "Огромен контекстен прозорец (200k токена)", en: "Huge context window (200k tokens)" },
      { bg: "Отличен за технически и дълго съдържание", en: "Excellent for technical and long content" },
    ],
    cons: [
      { bg: "Безплатният план е ограничен", en: "Free plan is limited" },
    ],
  },
  {
    slug: "n8n",
    name: "n8n",
    tagline: { bg: "Автоматизирай SEO работни потоци с AI", en: "Automate SEO workflows with AI" },
    description: {
      bg: "Open-source автоматизационна платформа за изграждане на AI-базирани SEO работни потоци: автоматичен одит, мониторинг на позиции, AI content и много повече.",
      en: "Open-source automation platform for building AI-based SEO workflows: automatic audits, position monitoring, AI content, and much more.",
    },
    category: "automation",
    pricing: "freemium",
    official: "https://n8n.io",
    docs: "https://docs.n8n.io",
    icon: "⚙️",
    tags: ["Automation", "AI Agents", "Workflow", "SEO Automation"],
    useCases: [
      { bg: "Автоматизирани SEO отчети", en: "Automated SEO reports" },
      { bg: "AI content pipelines", en: "AI content pipelines" },
      { bg: "Schema маркап автоматизация", en: "Schema markup automation" },
    ],
    pros: [
      { bg: "Open-source и self-hostable", en: "Open-source and self-hostable" },
      { bg: "Мощни AI agent интеграции", en: "Powerful AI agent integrations" },
    ],
    cons: [
      { bg: "Технически за setup", en: "Technical to set up" },
    ],
  },
  {
    slug: "ga4",
    name: "Google Analytics 4",
    tagline: { bg: "Анализ на трафик и поведение на потребителите", en: "Traffic and user behavior analysis" },
    description: {
      bg: "Следващото поколение Google Analytics с AI-базирани insights, event-based tracking и предиктивни метрики.",
      en: "The next generation Google Analytics with AI-based insights, event-based tracking, and predictive metrics.",
    },
    category: "analytics",
    pricing: "free",
    official: "https://analytics.google.com",
    docs: "https://developers.google.com/analytics",
    icon: "📱",
    tags: ["Analytics", "Traffic", "Behavior", "Conversions"],
    useCases: [
      { bg: "Анализ на органичен трафик от AI", en: "Organic traffic analysis from AI" },
      { bg: "Поведение на потребителите", en: "User behavior" },
      { bg: "Conversion tracking", en: "Conversion tracking" },
    ],
    pros: [
      { bg: "Безплатен", en: "Free" },
      { bg: "AI Insights и предикции", en: "AI Insights and predictions" },
    ],
    cons: [
      { bg: "Сложен за начинаещи", en: "Complex for beginners" },
    ],
  },
  {
    slug: "looker-studio",
    name: "Looker Studio",
    tagline: { bg: "SEO репортинг и визуализация на данни", en: "SEO reporting and data visualization" },
    description: {
      bg: "Безплатен инструмент от Google за създаване на интерактивни SEO репорти. Интегрира се с Search Console, GA4, Merchant Center и всички Google инструменти.",
      en: "Free tool from Google for creating interactive SEO reports. Integrates with Search Console, GA4, Merchant Center, and all Google tools.",
    },
    category: "analytics",
    pricing: "free",
    official: "https://lookerstudio.google.com",
    icon: "📋",
    tags: ["Reporting", "Dashboard", "Data Visualization", "SEO Reports"],
    useCases: [
      { bg: "AI SEO Dashboard създаване", en: "Creating AI SEO Dashboards" },
      { bg: "Search Console + GA4 репорти", en: "Search Console + GA4 reports" },
    ],
    pros: [
      { bg: "Безплатен", en: "Free" },
      { bg: "Лесна интеграция с Google продукти", en: "Easy integration with Google products" },
    ],
    cons: [
      { bg: "Бавен при голям обем данни", en: "Slow with large data volumes" },
    ],
  },
];

export const toolCategoryLabels = {
  bg: {
    analytics: "Анализи",
    technical: "Технически",
    content: "Съдържание",
    ai: "AI",
    ecommerce: "Ecommerce",
    schema: "Schema",
    research: "Проучване",
    automation: "Автоматизация",
  },
  en: {
    analytics: "Analytics",
    technical: "Technical",
    content: "Content",
    ai: "AI",
    ecommerce: "Ecommerce",
    schema: "Schema",
    research: "Research",
    automation: "Automation",
  },
};

export const pricingLabels = {
  bg: { free: "Безплатен", freemium: "Freemium", paid: "Платен" },
  en: { free: "Free", freemium: "Freemium", paid: "Paid" },
};

export const pricingColors = {
  free: "text-teal-500 bg-teal-500/10",
  freemium: "text-indigo-500 bg-indigo-500/10",
  paid: "text-amber-500 bg-amber-500/10",
};
