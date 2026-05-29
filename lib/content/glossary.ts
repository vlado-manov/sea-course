export interface GlossaryTerm {
  id: string;
  term: string;
  fullName?: string;
  category: string;
  definition: { bg: string; en: string };
  examples?: { bg: string; en: string }[];
  relatedTerms?: string[];
  officialLink?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "geo",
    term: "GEO",
    fullName: "Generative Engine Optimization",
    category: "AI SEO",
    definition: {
      bg: "Практиката за оптимизиране на уеб съдържание с цел да се появява в AI-генерирани отговори от системи като ChatGPT, Google Gemini, Perplexity и Claude. GEO е разширение на традиционното SEO, адаптирано за генеративни AI системи.",
      en: "The practice of optimizing web content to appear in AI-generated answers from systems like ChatGPT, Google Gemini, Perplexity, and Claude. GEO is an extension of traditional SEO adapted for generative AI systems.",
    },
    relatedTerms: ["ai-overview", "llm-optimization", "e-e-a-t", "knowledge-graph"],
  },
  {
    id: "ai-overview",
    term: "AI Overview",
    fullName: "Google AI-Generated Overview",
    category: "Google AI",
    definition: {
      bg: "Функция на Google Search, представена в 2024-2025 г., която показва AI-генерирано резюме в горната част на страницата с резултати. Заменя Google SGE (Search Generative Experience). AI Overviews се задействат при информационни, сложни и сравнителни заявки.",
      en: "A Google Search feature introduced in 2024-2025 that displays an AI-generated summary at the top of the search results page. Replaces Google SGE (Search Generative Experience). AI Overviews are triggered by informational, complex, and comparative queries.",
    },
    relatedTerms: ["geo", "sge", "featured-snippet"],
    officialLink: "https://support.google.com/websearch/answer/14901683",
  },
  {
    id: "e-e-a-t",
    term: "E-E-A-T",
    fullName: "Experience, Expertise, Authoritativeness, Trustworthiness",
    category: "SEO Quality",
    definition: {
      bg: "Рамката на Google за оценка на качеството на съдържанието. E-E-A-T означава Опит (Experience), Експертиза (Expertise), Авторитет (Authoritativeness) и Доверие (Trustworthiness). Критично важна концепция за AI SEO, тъй като AI системите използват E-E-A-T сигнали при избора на източници за цитиране.",
      en: "Google's framework for evaluating content quality. E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Critically important for AI SEO, as AI systems use E-E-A-T signals when selecting sources to cite.",
    },
    relatedTerms: ["geo", "entity-seo", "knowledge-graph"],
    officialLink: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
  },
  {
    id: "structured-data",
    term: "Structured Data",
    fullName: "Structured Data / Schema Markup",
    category: "Technical SEO",
    definition: {
      bg: "Стандартизиран формат за предоставяне на информация за страница и класифициране на нейното съдържание. Имплементира се чрез JSON-LD, Microdata или RDFa и позволява на търсачките и AI системите да разберат по-добре контекста на съдържанието.",
      en: "A standardized format for providing information about a page and classifying its content. Implemented via JSON-LD, Microdata, or RDFa, it allows search engines and AI systems to better understand the context of content.",
    },
    relatedTerms: ["json-ld", "schema-org", "rich-results"],
    officialLink: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
  },
  {
    id: "json-ld",
    term: "JSON-LD",
    fullName: "JavaScript Object Notation for Linked Data",
    category: "Technical SEO",
    definition: {
      bg: "Препоръчаният от Google метод за имплементация на структурирани данни (Schema.org маркап) в уеб страниците. JSON-LD се вгражда в `<script>` тагове и не засяга видимия HTML на страницата.",
      en: "Google's recommended method for implementing structured data (Schema.org markup) in web pages. JSON-LD is embedded in `<script>` tags and doesn't affect the visible HTML of the page.",
    },
    examples: [
      {
        bg: '```json\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Заглавие на статията",\n  "author": {"@type": "Person", "name": "Автор"}\n}\n```',
        en: '```json\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Article headline",\n  "author": {"@type": "Person", "name": "Author"}\n}\n```',
      },
    ],
    relatedTerms: ["structured-data", "schema-org", "rich-results"],
    officialLink: "https://json-ld.org",
  },
  {
    id: "schema-org",
    term: "Schema.org",
    fullName: "Schema.org Vocabulary",
    category: "Technical SEO",
    definition: {
      bg: "Общ речник за структурирани данни, създаден от Google, Microsoft, Yahoo и Yandex. Дефинира типове (Article, Product, FAQ, HowTo и т.н.) и свойства за описание на уеб съдържание по стандартизиран начин.",
      en: "A shared vocabulary for structured data, created by Google, Microsoft, Yahoo, and Yandex. Defines types (Article, Product, FAQ, HowTo, etc.) and properties for describing web content in a standardized way.",
    },
    relatedTerms: ["json-ld", "structured-data", "rich-results"],
    officialLink: "https://schema.org",
  },
  {
    id: "rich-results",
    term: "Rich Results",
    fullName: "Google Rich Results (Rich Snippets)",
    category: "SERP Features",
    definition: {
      bg: "Подобрени резултати в Google Search, задействани от структурирани данни. Включват звезди за рецензии, FAQ секции, стъпки от рецепти, продуктови детайли и много повече. Rich Results увеличават CTR и видимостта в SERP.",
      en: "Enhanced results in Google Search triggered by structured data. Include star ratings, FAQ sections, recipe steps, product details, and much more. Rich Results increase CTR and visibility in SERP.",
    },
    relatedTerms: ["structured-data", "schema-org", "json-ld"],
    officialLink: "https://developers.google.com/search/docs/appearance/structured-data/search-gallery",
  },
  {
    id: "knowledge-graph",
    term: "Knowledge Graph",
    fullName: "Google Knowledge Graph",
    category: "Entity SEO",
    definition: {
      bg: "Базата данни на Google с факти за хора, места, организации и концепции. Knowledge Graph захранва Knowledge Panels в Google Search и е ключова за AI разбирането на семантичните отношения между обекти. Важна за Entity SEO стратегии.",
      en: "Google's database of facts about people, places, organizations, and concepts. The Knowledge Graph powers Knowledge Panels in Google Search and is key to AI understanding of semantic relationships between entities. Important for Entity SEO strategies.",
    },
    relatedTerms: ["entity-seo", "e-e-a-t", "semantic-seo"],
  },
  {
    id: "entity-seo",
    term: "Entity SEO",
    fullName: "Entity-Based SEO Optimization",
    category: "SEO Strategy",
    definition: {
      bg: "SEO подход, фокусиран върху изграждане на семантичен авторитет чрез обекти (entities), а не само чрез ключови думи. Включва оптимизация за Knowledge Graph, структурирани данни за обекти и тематичен авторитет.",
      en: "An SEO approach focused on building semantic authority through entities rather than just keywords. Includes optimization for Knowledge Graph, entity structured data, and topical authority.",
    },
    relatedTerms: ["knowledge-graph", "semantic-seo", "topical-authority"],
  },
  {
    id: "core-web-vitals",
    term: "Core Web Vitals",
    fullName: "Google Core Web Vitals",
    category: "Technical SEO",
    definition: {
      bg: "Набор от метрики, определен от Google за измерване на потребителското изживяване. Включва LCP (Largest Contentful Paint — скорост на зареждане, цел: < 2.5s), INP (Interaction to Next Paint — интерактивност, цел: < 200ms), и CLS (Cumulative Layout Shift — визуална стабилност, цел: < 0.1).",
      en: "A set of metrics defined by Google for measuring user experience. Includes LCP (Largest Contentful Paint — loading speed, goal: < 2.5s), INP (Interaction to Next Paint — interactivity, goal: < 200ms), and CLS (Cumulative Layout Shift — visual stability, goal: < 0.1).",
    },
    relatedTerms: ["technical-seo", "page-experience"],
    officialLink: "https://web.dev/explore/metrics",
  },
  {
    id: "llm-optimization",
    term: "LLM Optimization",
    fullName: "Large Language Model Optimization",
    category: "AI SEO",
    definition: {
      bg: "Стратегии за оптимизиране на съдържание с цел да бъде цитирано, референцирано или препоръчано от Large Language Models като ChatGPT, Claude, Gemini и Perplexity. Близко до GEO, но с фокус специфично върху LLM системите.",
      en: "Strategies for optimizing content to be cited, referenced, or recommended by Large Language Models like ChatGPT, Claude, Gemini, and Perplexity. Close to GEO but specifically focused on LLM systems.",
    },
    relatedTerms: ["geo", "ai-overview", "e-e-a-t"],
  },
  {
    id: "topical-authority",
    term: "Topical Authority",
    fullName: "Topical Authority in SEO",
    category: "SEO Strategy",
    definition: {
      bg: "Концепцията за изграждане на цялостна авторитетност в дадена ниша чрез пълно и задълбочено покритие на всички аспекти на темата. Сайтове с висок Topical Authority се цитират по-часто от AI системи.",
      en: "The concept of building comprehensive authority in a niche through complete and in-depth coverage of all aspects of a topic. Sites with high Topical Authority are cited more frequently by AI systems.",
    },
    relatedTerms: ["entity-seo", "e-e-a-t", "semantic-seo"],
  },
  {
    id: "merchant-center",
    term: "Merchant Center",
    fullName: "Google Merchant Center",
    category: "AI Commerce",
    definition: {
      bg: "Платформата на Google за управление на продуктови данни, Shopping Ads и AI-базирано пазаруване. Merchant Center следващо поколение (Merchant Center Next) интегрира AI insights за оптимизиране на продуктовите листинги.",
      en: "Google's platform for managing product data, Shopping Ads, and AI-based shopping. Merchant Center Next Generation integrates AI insights for optimizing product listings.",
    },
    relatedTerms: ["agentic-commerce", "product-schema", "shopping-ads"],
    officialLink: "https://support.google.com/merchants",
  },
  {
    id: "agentic-commerce",
    term: "Agentic Commerce",
    fullName: "AI Agent-Driven Commerce",
    category: "AI Commerce",
    definition: {
      bg: "Новата форма на електронна търговия, при която AI агенти автономно търсят, сравняват, препоръчват и купуват продукти от името на потребителите. Изисква специфична оптимизация на продуктовото съдържание за AI разбиране.",
      en: "The emerging form of e-commerce where AI agents autonomously search, compare, recommend, and purchase products on behalf of users. Requires specific optimization of product content for AI understanding.",
    },
    relatedTerms: ["merchant-center", "ai-agents", "product-schema"],
  },
  {
    id: "semantic-seo",
    term: "Semantic SEO",
    fullName: "Semantic SEO Optimization",
    category: "SEO Strategy",
    definition: {
      bg: "SEO подход, фокусиран върху семантичното значение на съдържанието, а не само на ключови думи. Включва тематично клъстериране, entity маркап и изграждане на семантични мрежи от свързано съдържание.",
      en: "An SEO approach focused on the semantic meaning of content rather than just keywords. Includes topical clustering, entity markup, and building semantic networks of related content.",
    },
    relatedTerms: ["entity-seo", "knowledge-graph", "topical-authority"],
  },
  {
    id: "sge",
    term: "SGE",
    fullName: "Search Generative Experience",
    category: "Google AI",
    definition: {
      bg: "Предишното название на Google AI Overview (2023-2024). SGE беше тестова функция, която се превърна в AI Overviews след официалното пускане на I/O 2024.",
      en: "The previous name for Google AI Overview (2023-2024). SGE was a test feature that became AI Overviews after the official launch at I/O 2024.",
    },
    relatedTerms: ["ai-overview", "geo"],
  },
];

export const glossaryCategories = [...new Set(glossaryTerms.map((t) => t.category))];
