import { geoOptimizationContent } from "./fullContent/geo-optimization";
import { llmOptimizationContent } from "./fullContent/llm-optimization";

export interface TutorialContent {
  slug: string;
  toc: { id: string; text: string; level: number }[];
  content: { bg: string; en: string };
  faq?: { question: { bg: string; en: string }; answer: { bg: string; en: string } }[];
  relatedSlugs?: string[];
  officialLinks?: { label: string; url: string; desc?: { bg: string; en: string } }[];
}

export const tutorialContents: Record<string, TutorialContent> = {
  "geo-optimization": geoOptimizationContent,
  "llm-optimization": llmOptimizationContent,
  "ai-seo-basics": {
    slug: "ai-seo-basics",
    toc: [
      { id: "what-is-ai-seo", text: "Какво е AI SEO?", level: 2 },
      { id: "how-ai-search-works", text: "Как работи AI търсенето", level: 2 },
      { id: "geo-introduction", text: "Въведение в GEO", level: 2 },
      { id: "ai-overviews-explained", text: "Google AI Overviews", level: 2 },
      { id: "key-differences", text: "Разлики от класическото SEO", level: 2 },
      { id: "optimization-principles", text: "Принципи за оптимизация", level: 2 },
      { id: "getting-started", text: "Как да започнеш", level: 2 },
      { id: "tools-checklist", text: "Инструменти и чеклист", level: 2 },
    ],
    content: {
      bg: `## Какво е AI SEO? {#what-is-ai-seo}

AI SEO е практиката за оптимизиране на уебсайтове и съдържание за AI-базирани търсачки и генеративни AI системи. Докато традиционното SEO се фокусираше върху класиране в Google Blue Links (стандартните сини връзки), AI SEO обхваща:

- **Google AI Overviews** — AI-генерираните резюмета в горната част на Google
- **Generative Engine Optimization (GEO)** — оптимизация за ChatGPT, Gemini, Claude, Perplexity
- **AI Agents** — автономни AI агенти, които търсят и купуват вместо хора
- **LLM Optimization** — съдържание, цитирано от Large Language Models

### Защо AI SEO е важно сега?

През 2025 г. над **40% от Google търсенията** вече включват AI Overviews. ChatGPT има над 100 милиона активни потребители, а Perplexity обработва милиони AI-базирани търсения дневно. Ако не оптимизираш за AI системите, губиш огромна аудитория.

> **Важно:** AI SEO не замества традиционното SEO — то го разширява. Силната SEO основа е все още необходима за AI видимост.

---

## Как работи AI търсенето {#how-ai-search-works}

AI търсачките работят фундаментално различно от традиционните. Разбирането на процеса е ключово за оптимизацията.

### Традиционното търсене (Google Classic)

\`\`\`
Потребител → Заявка → Алгоритъм → Индекс → 10 сини връзки
\`\`\`

### AI-базираното търсене

\`\`\`
Потребител → Заявка → LLM обработка → Синтез на множество източници → Генериран отговор + Citations
\`\`\`

**Ключови разлики:**

| Фактор | Класическо SEO | AI SEO |
|--------|---------------|---------|
| Цел | Класиране #1 | Цитиране в AI отговора |
| Формат | Заглавие + мета описание | Пълен синтезиран отговор |
| Сигнали | PageRank, backlinks | Авторитет, E-E-A-T, структура |
| Съдържание | Keyword density | Семантично покритие |
| Структура | H1/H2 + ключови думи | Директни отговори, списъци, факти |

### Как AI системите избират източници

AI системите като ChatGPT, Gemini и Perplexity избират съдържание за цитиране въз основа на:

1. **Авторитет на домейна** — Established сайтове с висок DA получават предимство
2. **E-E-A-T сигнали** — Experience, Expertise, Authoritativeness, Trustworthiness
3. **Фактическа точност** — AI системите проверяват фактите кръстосано
4. **Структура на съдържанието** — Добре структурирани отговори се синтезират по-лесно
5. **Актуалност** — Съдържанието трябва да е актуално и точно

---

## Въведение в GEO {#geo-introduction}

**Generative Engine Optimization (GEO)** е новата дисциплина за оптимизиране на съдържанието за да се появява в AI-генерирани отговори.

### Основни принципи на GEO

**1. Директни, точни отговори**

AI системите обичат съдържание, което директно отговаря на въпроси. Формат "въпрос → отговор" работи изключително добре:

\`\`\`
❌ Традиционен подход:
"В тази статия ще разгледаме различните аспекти на SEO оптимизацията..."

✅ GEO подход:
"GEO (Generative Engine Optimization) е практиката за оптимизиране на
съдържание да се появява в AI-генерирани отговори от ChatGPT, Gemini и Perplexity."
\`\`\`

**2. Статистики и данни с цитиране на источника**

Според изследванията, съдържанието с конкретни статистики се цитира 3x по-често от AI системи.

**3. Структурирани данни и Schema маркап**

Schema.org маркапа помага на AI системите да разберат контекста на съдържанието.

**4. Тематичен авторитет**

AI системите предпочитат специализирани ресурси с дълбоко покритие на тема пред generalist сайтове.

---

## Google AI Overviews {#ai-overviews-explained}

Google AI Overviews (formerly SGE — Search Generative Experience) е функция, която показва AI-генерирано резюме в горната част на Google резултатите.

### Как се задействат AI Overviews

AI Overviews се появяват при:
- Информационни заявки ("Как да...", "Какво е...")
- Сложни въпроси, изискващи синтез на информация
- Сравнителни заявки ("X vs Y")
- Дефиниционни заявки

### Стратегии за видимост в AI Overviews

\`\`\`json
// Пример: Структура на съдържание за AI Overview
{
  "format": "Direct Answer",
  "structure": {
    "opening": "Директен отговор в първото изречение",
    "body": "3-5 ключови точки с кратко обяснение",
    "examples": "Конкретни примери и случаи",
    "data": "Статистики и факти с източници"
  }
}
\`\`\`

---

## Разлики от класическото SEO {#key-differences}

### Промяна в метриките

Традиционните SEO метрики (позиция, CTR) се допълват с нови AI метрики:

- **AI Citation Rate** — колко пъти съдържанието ти е цитирано от AI
- **AI Visibility Score** — обща видимост в AI системите
- **Featured in AI Overview** — дали се появяваш в Google AI Overviews
- **LLM Mention Rate** — честота на споменаване в LLM отговори

### Нова оптимизационна рамка

Мисли за AI SEO като **пирамида на видимостта**:

1. 🔵 **Ниво 1** — Технически SEO (основа)
2. 🟢 **Ниво 2** — E-E-A-T и авторитет
3. 🟡 **Ниво 3** — Структурирани данни
4. 🟠 **Ниво 4** — GEO оптимизация
5. 🔴 **Ниво 5** — LLM и AI Agents оптимизация

---

## Принципи за оптимизация {#optimization-principles}

### Принцип 1: Answer-First Writing

Винаги поставяй директния отговор в началото. AI системите "четат" страниците като потребители — искат бързи отговори.

### Принцип 2: Structured Clarity

Използвай H2/H3 заглавия, bullet points и numbered lists. Структурираното съдържание се парсира по-лесно от AI.

### Принцип 3: Data-Backed Claims

Подкрепяй всяко твърдение с данни, статистики или цитати от авторитетни източници.

### Принцип 4: Semantic Depth

Покривай темата изчерпателно — AI системите предпочитат пълно тематично покритие.

### Принцип 5: Technical Foundation

Бързи страници, чист код, proper Schema маркап, и добра crawlability са фундамент.

---

## Как да започнеш {#getting-started}

### Стъпка 1: SEO одит с AI фокус

Провери текущото си съдържание с:
- Google Search Console за AI Overview appearances
- Perplexity/ChatGPT за текущи цитирания
- Schema markup validator

### Стъпка 2: Идентифицирай AI-friendly съдържание

Намери страниците си, които:
- Отговарят на информационни въпроси
- Имат добра структура
- Съдържат статистики и факти

### Стъпка 3: Оптимизирай за директни отговори

Пренапиши въведенията на ключовите статии така, че да дават директен отговор в първите 2 изречения.

### Стъпка 4: Добави Schema маркап

Минимум: FAQPage, Article, HowTo за instructional съдържание.

### Стъпка 5: Мониторинг и итерация

Следи AI visibility в инструменти като Search Console, Perplexity и Gemini.

---

## Инструменти и чеклист {#tools-checklist}

### Основни инструменти

| Инструмент | Употреба | Цена |
|-----------|---------|------|
| Google Search Console | AI Overview видимост | Безплатен |
| Perplexity | Тест за GEO цитирания | Freemium |
| ChatGPT | Тест за LLM оптимизация | Freemium |
| Rich Results Test | Schema валидация | Безплатен |
| PageSpeed Insights | Core Web Vitals | Безплатен |

### AI SEO Чеклист

- [ ] Директен отговор в първото изречение на всяка статия
- [ ] H2/H3 структура с answer-format заглавия
- [ ] FAQ секция с Schema маркап
- [ ] Статистики с посочен извор
- [ ] Schema.org Article маркап
- [ ] Core Web Vitals > 75 за всички метрики
- [ ] Вътрешни линкове към свързани теми
- [ ] Мобилна оптимизация
- [ ] HTTPS и сигурен сайт`,
      en: `## What is AI SEO? {#what-is-ai-seo}

AI SEO is the practice of optimizing websites and content for AI-based search engines and generative AI systems. While traditional SEO focused on ranking in Google Blue Links, AI SEO encompasses:

- **Google AI Overviews** — AI-generated summaries at the top of Google
- **Generative Engine Optimization (GEO)** — optimization for ChatGPT, Gemini, Claude, Perplexity
- **AI Agents** — autonomous AI agents that search and purchase on behalf of users
- **LLM Optimization** — content cited by Large Language Models

### Why AI SEO Matters Now

In 2025, over **40% of Google searches** now include AI Overviews. ChatGPT has over 100 million active users, and Perplexity processes millions of AI-based searches daily. If you're not optimizing for AI systems, you're missing a massive audience.

> **Important:** AI SEO doesn't replace traditional SEO — it extends it. A strong SEO foundation is still necessary for AI visibility.

---

## How AI Search Works {#how-ai-search-works}

AI search engines work fundamentally differently from traditional ones. Understanding this process is key to optimization.

### Traditional Search (Google Classic)

\`\`\`
User → Query → Algorithm → Index → 10 blue links
\`\`\`

### AI-Based Search

\`\`\`
User → Query → LLM Processing → Synthesis of multiple sources → Generated answer + Citations
\`\`\`

**Key Differences:**

| Factor | Classic SEO | AI SEO |
|--------|------------|--------|
| Goal | Rank #1 | Be cited in AI answer |
| Format | Title + meta description | Full synthesized answer |
| Signals | PageRank, backlinks | Authority, E-E-A-T, structure |
| Content | Keyword density | Semantic coverage |
| Structure | H1/H2 + keywords | Direct answers, lists, facts |

### How AI Systems Choose Sources

AI systems like ChatGPT, Gemini, and Perplexity choose content for citation based on:

1. **Domain authority** — Established high-DA sites get preference
2. **E-E-A-T signals** — Experience, Expertise, Authoritativeness, Trustworthiness
3. **Factual accuracy** — AI systems cross-check facts
4. **Content structure** — Well-structured answers are easier to synthesize
5. **Freshness** — Content must be current and accurate

---

## Introduction to GEO {#geo-introduction}

**Generative Engine Optimization (GEO)** is the emerging discipline of optimizing content to appear in AI-generated answers.

### Core GEO Principles

**1. Direct, Accurate Answers**

AI systems love content that directly answers questions. The "question → answer" format works extremely well:

\`\`\`
❌ Traditional approach:
"In this article, we will examine various aspects of SEO optimization..."

✅ GEO approach:
"GEO (Generative Engine Optimization) is the practice of optimizing
content to appear in AI-generated answers from ChatGPT, Gemini, and Perplexity."
\`\`\`

**2. Statistics and Data with Source Attribution**

Research shows content with specific statistics is cited 3x more often by AI systems.

**3. Structured Data and Schema Markup**

Schema.org markup helps AI systems understand the context of your content.

**4. Topical Authority**

AI systems prefer specialized resources with deep topic coverage over generalist sites.

---

## Google AI Overviews {#ai-overviews-explained}

Google AI Overviews (formerly SGE — Search Generative Experience) is a feature that shows an AI-generated summary at the top of Google results.

### When AI Overviews Trigger

AI Overviews appear for:
- Informational queries ("How to...", "What is...")
- Complex questions requiring information synthesis
- Comparative queries ("X vs Y")
- Definitional queries

### Strategies for AI Overview Visibility

\`\`\`json
// Example: Content structure for AI Overview
{
  "format": "Direct Answer",
  "structure": {
    "opening": "Direct answer in the first sentence",
    "body": "3-5 key points with brief explanation",
    "examples": "Concrete examples and cases",
    "data": "Statistics and facts with sources"
  }
}
\`\`\`

---

## Differences from Classic SEO {#key-differences}

### Metric Changes

Traditional SEO metrics (position, CTR) are supplemented with new AI metrics:

- **AI Citation Rate** — how often your content is cited by AI
- **AI Visibility Score** — overall visibility in AI systems
- **Featured in AI Overview** — whether you appear in Google AI Overviews
- **LLM Mention Rate** — frequency of mentions in LLM responses

### New Optimization Framework

Think of AI SEO as a **visibility pyramid**:

1. 🔵 **Level 1** — Technical SEO (foundation)
2. 🟢 **Level 2** — E-E-A-T and authority
3. 🟡 **Level 3** — Structured data
4. 🟠 **Level 4** — GEO optimization
5. 🔴 **Level 5** — LLM and AI Agents optimization

---

## Optimization Principles {#optimization-principles}

### Principle 1: Answer-First Writing

Always put the direct answer at the beginning. AI systems "read" pages like users — they want quick answers.

### Principle 2: Structured Clarity

Use H2/H3 headings, bullet points, and numbered lists. Structured content is easier for AI to parse.

### Principle 3: Data-Backed Claims

Support every claim with data, statistics, or citations from authoritative sources.

### Principle 4: Semantic Depth

Cover the topic comprehensively — AI systems prefer complete topical coverage.

### Principle 5: Technical Foundation

Fast pages, clean code, proper Schema markup, and good crawlability are fundamental.

---

## Getting Started {#getting-started}

### Step 1: SEO Audit with AI Focus

Check your current content with:
- Google Search Console for AI Overview appearances
- Perplexity/ChatGPT for current citations
- Schema markup validator

### Step 2: Identify AI-Friendly Content

Find your pages that:
- Answer informational questions
- Have good structure
- Contain statistics and facts

### Step 3: Optimize for Direct Answers

Rewrite the intros of key articles to give a direct answer in the first 2 sentences.

### Step 4: Add Schema Markup

Minimum: FAQPage, Article, HowTo for instructional content.

### Step 5: Monitor and Iterate

Track AI visibility in tools like Search Console, Perplexity, and Gemini.

---

## Tools and Checklist {#tools-checklist}

### Essential Tools

| Tool | Use | Price |
|------|-----|-------|
| Google Search Console | AI Overview visibility | Free |
| Perplexity | Test GEO citations | Freemium |
| ChatGPT | Test LLM optimization | Freemium |
| Rich Results Test | Schema validation | Free |
| PageSpeed Insights | Core Web Vitals | Free |

### AI SEO Checklist

- [ ] Direct answer in the first sentence of every article
- [ ] H2/H3 structure with answer-format headings
- [ ] FAQ section with Schema markup
- [ ] Statistics with cited source
- [ ] Schema.org Article markup
- [ ] Core Web Vitals > 75 for all metrics
- [ ] Internal links to related topics
- [ ] Mobile optimization
- [ ] HTTPS and secure site`,
    },
    faq: [
      {
        question: { bg: "Какво е разликата между SEO и GEO?", en: "What is the difference between SEO and GEO?" },
        answer: {
          bg: "SEO (Search Engine Optimization) оптимизира за традиционни търсачки като Google Blue Links. GEO (Generative Engine Optimization) оптимизира за AI-генерирани отговори в ChatGPT, Gemini, Perplexity и Google AI Overviews.",
          en: "SEO (Search Engine Optimization) optimizes for traditional search engines like Google Blue Links. GEO (Generative Engine Optimization) optimizes for AI-generated answers in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
        },
      },
      {
        question: { bg: "Трябва ли да спра класическото SEO и да се фокусирам само върху AI SEO?", en: "Should I stop classic SEO and focus only on AI SEO?" },
        answer: {
          bg: "Не. Класическото SEO е фундамент за AI SEO. Силната техническа SEO основа, добрите backlinks и E-E-A-T сигналите са важни за AI видимостта. Разширявай, не заменяй.",
          en: "No. Classic SEO is the foundation for AI SEO. A strong technical SEO base, good backlinks, and E-E-A-T signals are important for AI visibility. Extend it, don't replace it.",
        },
      },
      {
        question: { bg: "Колко бързо мога да видя резултати от AI SEO оптимизацията?", en: "How quickly can I see results from AI SEO optimization?" },
        answer: {
          bg: "AI SEO резултатите варират. При Google AI Overviews можеш да видиш промени за 2-4 седмици след оптимизация. При ChatGPT/Gemini цитирания процесът е по-дълъг — 1-3 месеца в зависимост от авторитета на сайта.",
          en: "AI SEO results vary. With Google AI Overviews, you can see changes in 2-4 weeks after optimization. With ChatGPT/Gemini citations, the process is longer — 1-3 months depending on site authority.",
        },
      },
    ],
    relatedSlugs: ["geo-optimization", "google-ai-overviews", "structured-data", "llm-optimization"],
    officialLinks: [
      { label: "Google Search Central", url: "https://developers.google.com/search", desc: { bg: "Официална документация за SEO от Google", en: "Official SEO documentation from Google" } },
      { label: "Google AI Overviews Help", url: "https://support.google.com/websearch/answer/14901683", desc: { bg: "Google AI Overviews официална помощ", en: "Google AI Overviews official help" } },
      { label: "Schema.org", url: "https://schema.org", desc: { bg: "Официалната Schema.org документация", en: "Official Schema.org documentation" } },
    ],
  },
};
