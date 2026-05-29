export const structuredDataContent = {
  slug: "structured-data",
  toc: [
    { id: "why-schema", text: "Защо структурираните данни са критични за AI?", level: 2 },
    { id: "analogy", text: "Аналогията: Превод vs. Предположение", level: 2 },
    { id: "how-it-works", text: "Как работят структурираните данни технически", level: 2 },
    { id: "five-types", text: "Петте най-важни Schema типа за AI SEO", level: 2 },
    { id: "json-ld-implementation", text: "JSON-LD: Как да го имплементираме", level: 2 },
    { id: "geo-schema", text: "Schema специфично за GEO и AI Overviews", level: 2 },
    { id: "testing", text: "Как да тестваме и валидираме", level: 2 },
    { id: "mistakes", text: "Най-честите грешки", level: 2 },
    { id: "tools", text: "Инструменти", level: 2 },
    { id: "checklist", text: "Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Защо структурираните данни са критични за AI? {#why-schema}

**Структурираните данни** (Schema маркап) са код, добавен към уебсайт, който обяснява на Google и AI системите точно какво представлява съдържанието — не само какво е написано, но и какво означава.

Без Schema: Google чете текста и се *опитва* да разбере дали "14:00" е час на работа, начало на събитие, или цена. С Schema: Google знае точно.

**Защо е критично за AI видимостта:**

В класическото SEO Schema помагаше за Rich Snippets (звезди, цени, рецепти в резултатите). В AI SEO Schema е много по-важна:

1. **AI Overviews използват Schema директно** — Google AI Overview чете FAQPage Schema и я включва в синтезирания отговор
2. **LLM системите са обучени на Schema данни** — структурираното съдържание е по-лесно за "разбиране" от AI
3. **Entity разпознаването зависи от Schema** — Organization и Person Schema са директен pipeline към Knowledge Graph
4. **Perplexity и ChatGPT ценят структурираните отговори** — FAQ формат + FAQPage Schema = по-лесно цитиране

Изследването на Columbia/Princeton (2024) установи, че сайтове с правилно имплементирана FAQPage Schema се цитират **2.6x по-често** в AI отговори.

---

## Аналогията: Превод vs. Предположение {#analogy}

### Страницата без Schema: Плътен текст без контекст

Представи си, че изпращаш CV на английски на японска компания, в която никой не говори английски. Текстът е там. Информацията е там. Но рекрутерът трябва да *предполага* кое е Ime, кое е образование, кое е опит.

Резултатът: неточно разбиране, пропуснати детайли, ниска увереност при вземането на решение.

**Страницата с Schema: Преведено и структурирано CV**

Същото CV, но преведено и в стандартен формат, разбираем за всички. Всяко поле е ясно обозначено. Рекрутерът знае точно какво да очаква на всяко място.

> Schema маркапът е "преводачът" между човешкия текст и машинното разбиране. Без него — Google и AI предполагат. С него — знаят.

### Друга аналогия: Опаковка на продукт

Купи хранителен продукт без опаковка — трябва да вземеш, помиришеш, вкусиш за да разбереш какво е. Купи продукт с правилна опаковка — калории, съставки, дата, алергени — всичко е ясно без допълнително изследване.

Schema е "опаковката" на уеб страницата. Казва на Google и AI: ето какво е това, ето кой го е написал, ето кога, ето за какво е.

---

## Как работят структурираните данни технически {#how-it-works}

### Три формата: Microdata, RDFa, JSON-LD

Съществуват три начина да добавиш Schema маркап:

**Microdata:** Вграден в HTML атрибутите на елементите.
**RDFa:** Подобен на Microdata, по-стар стандарт.
**JSON-LD:** JavaScript обект в \`<script>\` тага в \`<head>\` или \`<body>\`.

**Google и AI системите препоръчват JSON-LD** защото:
- Не е свързан с HTML структурата на страницата
- Лесно се добавя и обновява
- По-малко вероятност за грешки
- По-лесен за парсиране от машини

Всички примери по-долу са в JSON-LD.

### Как Google го обработва

\`\`\`
Google crawler посещава страницата
        ↓
Parsing на JSON-LD в <head>/<body>
        ↓
Валидиране спрямо schema.org стандартите
        ↓
Включване в Search Index с enriched данни
        ↓
Потенциално: Rich Results, AI Overview inclusion,
             Knowledge Graph entity building
\`\`\`

### Schema.org — общият стандарт

[Schema.org](https://schema.org) е съвместен проект на Google, Microsoft, Yahoo и Yandex. Дефинира стандартните типове и свойства, разбирани от всички търсачки и AI системи.

Всеки тип е описан с:
- **@type** — каква е структурата (Organization, Article, FAQPage...)
- **Properties** — конкретните полета (name, address, url...)

---

## Петте най-важни Schema типа за AI SEO {#five-types}

### Тип 1: Organization / LocalBusiness

**Защо е важен:** Пряко изгражда entity в Knowledge Graph. Без него Google трудно "познава" бизнеса.

**Кога да го използваш:** На главницата (index) на сайта. Задължителен за всеки бизнес сайт.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Примерна Компания ЕООД",
  "description": "Ние правим X за Y клиенти в Z",
  "url": "https://примернакомпания.bg",
  "telephone": "+359 2 123 4567",
  "email": "info@примернакомпания.bg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Примерна 1",
    "addressLocality": "София",
    "postalCode": "1000",
    "addressCountry": "BG"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/примернакомпания",
    "https://www.facebook.com/примернакомпания"
  ],
  "foundingDate": "2015"
}
\`\`\`

**Важни полета:**
- `name` — точно официалното наименование (НЕ добавяй ключови думи!)
- `description` — 150-300 знака, ясно описание на дейността
- `sameAs` — всички профили в социалните мрежи и директории
- `telephone` — в международен формат (+359...)

### Тип 2: Article / BlogPosting

**Защо е важен:** Казва на AI системите кой е авторът, кога е написана статията, и за каква тема е. Критично за E-E-A-T и LLM цитиране.

**Кога да го използваш:** На всяка статия, блог пост, урок, ръководство.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Как да оптимизираш за AI Overviews — Пълен наръчник",
  "description": "Пълен наръчник за оптимизиране на съдържанието за Google AI Overviews",
  "datePublished": "2025-01-15",
  "dateModified": "2025-06-01",
  "author": {
    "@type": "Person",
    "name": "Твоето Ime",
    "url": "https://твоятсайт.bg/за-мен"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Примерна Компания",
    "url": "https://примернакомпания.bg"
  },
  "mainEntityOfPage": "https://примернакомпания.bg/articles/ai-overviews-guide",
  "wordCount": 2500,
  "inLanguage": "bg"
}
\`\`\`

**Критично:** `dateModified` трябва да се обновява при всяка актуализация — AI системите, особено Perplexity, проверяват свежестта.

### Тип 3: FAQPage ⭐ (Най-важен за AI видимост)

**Защо е важен:** Директно дава на AI Overview и LLM системите въпрос-отговор двойки в идеален формат за синтез. Изследванията показват 2.6x по-голяма вероятност за цитиране.

**Кога да го използваш:** На всяка страница, която отговаря на въпроси. Препоръчвам на ВСЯКА важна страница.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Какво е GEO оптимизация?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO (Generative Engine Optimization) е практиката за оптимизиране на уеб съдържание, така че да се цитира от AI системи като ChatGPT, Google Gemini и Perplexity. За разлика от SEO, GEO оптимизира за AI-генерирани отговори, не за позиция в Google."
      }
    },
    {
      "@type": "Question",
      "name": "Колко дълго отнема да видиш резултати от GEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Резултатите варират: Perplexity реагира в рамките на 2-4 седмици. Google AI Overview — 4-8 седмици. ChatGPT (без Browse) — по-бавно, тъй като зависи от обучителните данни."
      }
    }
  ]
}
\`\`\`

**Правила за FAQPage:**
- Минимум 5 въпроса, максимум 15
- Всеки отговор: 50-200 думи
- Въпросите трябва да съответстват на реални заявки от потребители
- Отговорите трябва да са пълни и директни (не "виж статията ни")

### Тип 4: BreadcrumbList

**Защо е важен:** Помага на Google и AI да разберат структурата на сайта и как страниците са свързани. Критично за тематичен авторитет.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Начало",
      "item": "https://примернакомпания.bg"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Уроци",
      "item": "https://примернакомпания.bg/tutorials"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "GEO Оптимизация",
      "item": "https://примернакомпания.bg/tutorials/geo-optimization"
    }
  ]
}
\`\`\`

### Тип 5: Person (Author Schema)

**Защо е важен:** Свързва съдържанието с реален автор. Критично за E-E-A-T авторитет. AI системите предпочитат съдържание с верифицируем автор.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Твоето Ime",
  "url": "https://твоятсайт.bg/за-мен",
  "image": "https://твоятсайт.bg/images/твоята-снимка.jpg",
  "jobTitle": "AI SEO Специалист",
  "worksFor": {
    "@type": "Organization",
    "name": "Твоята Компания"
  },
  "sameAs": [
    "https://linkedin.com/in/твоят-профил",
    "https://twitter.com/твоят-профил"
  ],
  "knowsAbout": [
    "AI SEO",
    "Generative Engine Optimization",
    "Entity SEO",
    "Google AI Overviews"
  ],
  "description": "Специалист по AI SEO с X години опит в оптимизация за AI системи"
}
\`\`\`

### Бонус тип: Product (за e-commerce)

За онлайн магазини Product Schema е задължителна — виж урока за AI Commerce за детайли.

---

## JSON-LD: Как да го имплементираме {#json-ld-implementation}

### Метод 1: Директно в HTML \`<head>\`

Добавяш \`<script>\` таг с type="application/ld+json" директно в HTML-а на страницата:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Моята Страница</title>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Заглавие на статията",
    "datePublished": "2025-01-15",
    "author": {
      "@type": "Person",
      "name": "Автор"
    }
  }
  </script>
</head>
<body>...</body>
</html>
\`\`\`

### Метод 2: В Next.js (App Router)

В Next.js 13+ с App Router добавяш JSON-LD чрез \`dangerouslySetInnerHTML\` в layout или page файл:

\`\`\`tsx
// app/[locale]/tutorials/[slug]/page.tsx
export default function TutorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Заглавие",
    "datePublished": "2025-01-15"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* ... rest of page */}
    </>
  );
}
\`\`\`

### Метод 3: WordPress

При WordPress използвай плъгините **RankMath** или **Yoast SEO** — те автоматично генерират JSON-LD за повечето типове.

Допълнително: **Schema Pro** плъгин за по-детайлен контрол.

### Метод 4: Комбинирани Schema типове на една страница

Можеш да имаш множество Schema обекти на една страница — поставяш ги в отделни \`<script>\` тагове или в масив:

\`\`\`json
[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Заглавие"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [...]
  }
]
\`\`\`

---

## Schema специфично за GEO и AI Overviews {#geo-schema}

### Какво ценят AI системите най-много?

**За Google AI Overview:**
- FAQPage Schema — директно се включва в синтезирания отговор
- Article Schema с dateModified — свежестта е критична
- HowTo Schema — стъпковите ръководства се синтезират добре

**За ChatGPT и Gemini (чрез обучителни данни):**
- Organization Schema — изгражда entity разпознаване
- Person Schema — авторитет на автора
- FAQPage — лесно за синтез

**За Perplexity (реално-времево):**
- Article Schema с dateModified — свежестта е приоритет
- Всяка Schema подобрява парсирането на страницата

### HowTo Schema (за стъпкови ръководства)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Как да добавим Organization Schema",
  "description": "Стъпки за имплементация на Organization Schema в JSON-LD",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Стъпка 1: Подготви данните",
      "text": "Събери официалното наименование, адрес, телефон и URL."
    },
    {
      "@type": "HowToStep",
      "name": "Стъпка 2: Създай JSON-LD",
      "text": "Копирай шаблона и попълни с твоите данни."
    },
    {
      "@type": "HowToStep",
      "name": "Стъпка 3: Добави в <head>",
      "text": "Постави <script type='application/ld+json'> в <head> на страницата."
    },
    {
      "@type": "HowToStep",
      "name": "Стъпка 4: Валидирай",
      "text": "Тествай с Rich Results Test от Google."
    }
  ]
}
\`\`\`

---

## Как да тестваме и валидираме {#testing}

### Стъпка 1: Rich Results Test (Google)

1. Отвори [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. Въведи URL на страницата (или постави кода директно)
3. Провери: наличие на грешки, предупреждения, потенциални rich results

**Какво означават резултатите:**
- Зелен маркер: Schema е валидна, потенциален rich result
- Жълто предупреждение: Schema е валидна, но липсват препоръчани полета
- Червена грешка: Schema е невалидна, необходима е корекция

### Стъпка 2: Schema Markup Validator

1. Отвори [validator.schema.org](https://validator.schema.org)
2. Тества спрямо официалните schema.org стандарти (по-строг от Rich Results Test)
3. Показва детайлни грешки

### Стъпка 3: Проверка в Google Search Console

1. Влез в [Search Console](https://search.google.com/search-console)
2. Навигирай до: Enhancements → (FAQs, Articles, etc.)
3. Виж кои страниции са получили rich results

### Стъпка 4: Live тест с Perplexity

Питай Perplexity за тема от твоя сайт. Ако FAQ Schema е имплементирана правилно, отговорът ще включва структурирани въпрос-отговор двойки, взети директно от нея.

---

## Най-честите грешки {#mistakes}

### Грешка 1: Добавяне на ключови думи в \`name\`

\`\`\`json
❌ "name": "ПримерноСчетоводство - Счетоводни услуги Sofia - ТОП счетоводители"
✅ "name": "ПримерноСчетоводство ЕООД"
\`\`\`

`name` трябва да е точното официално наименование. Ключови думи в `description`.

### Грешка 2: Стар `dateModified`

Ако `dateModified` показва 2022 г., а сме в 2025 — AI системите третират съдържанието като остаряло. Актуализирай при всяка промяна в съдържанието.

### Грешка 3: FAQPage отговори с препратка към статията

\`\`\`json
❌ "text": "Повече информация ще намериш в нашата статия за GEO."
✅ "text": "GEO е практиката за оптимизиране на уеб съдържание за AI системи. Включва answer-first структура, статистики с извор, и FAQ секции с Schema."
\`\`\`

Отговорите трябва да са пълни и самостоятелни.

### Грешка 4: Schema без съответстващо видимо съдържание

Schema трябва да отразява реалното съдържание на страницата. Не добавяй Schema за FAQ ако на страницата няма видима FAQ секция.

### Грешка 5: Блокиране на schema.org URL-и

Понякога robots.txt блокира schema.org или validator.schema.org. Тези сайтове не обхождат твоя сайт — не е нужно да ги блокираш.

### Грешка 6: Само една Schema на целия сайт

Много сайтове имат Organization Schema само на главницата и нищо другаде. Всяка важна страница трябва да има подходяща Schema.

---

## Инструменти {#tools}

| Инструмент | Употреба | Линк |
|-----------|---------|------|
| Rich Results Test | Проверка за rich results | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| Schema Markup Validator | Валидиране спрямо schema.org | [validator.schema.org](https://validator.schema.org) |
| Google Search Console | Rich results мониторинг | [search.google.com/search-console](https://search.google.com/search-console) |
| Schema.org | Официална документация | [schema.org](https://schema.org) |
| JSON-LD Generator | Генератор на Schema код | [technicalseo.com/tools/schema-markup-generator](https://technicalseo.com/tools/schema-markup-generator) |
| Structured Data Linter | Допълнителна валидация | [linter.structured-data.org](http://linter.structured-data.org) |

---

## Пълен чеклист {#checklist}

### Задължително за всеки сайт
- [ ] Organization (или LocalBusiness) Schema на главницата
- [ ] sameAs масив с всички профили в Schema
- [ ] NAP данни идентични с GBP и сайта
- [ ] BreadcrumbList Schema на всяка вътрешна страница

### За всяка статия/урок
- [ ] Article Schema с datePublished и dateModified
- [ ] Author (Person) Schema на всяка статия
- [ ] FAQPage Schema с минимум 5 въпроса-отговора
- [ ] Отговорите са пълни (50-200 думи), не препращат другаде

### Валидиране
- [ ] Rich Results Test — 0 грешки
- [ ] Schema Markup Validator — 0 грешки
- [ ] Google Search Console — FAQs enhancement активиран
- [ ] dateModified обновен при последна актуализация

### Advanced (при нужда)
- [ ] HowTo Schema за стъпкови ръководства
- [ ] Product Schema за e-commerce (виж AI Commerce урока)
- [ ] Event Schema за онлайн/офлайн събития
- [ ] VideoObject Schema за видео съдържание`,

    en: `## Why Is Structured Data Critical for AI? {#why-schema}

**Structured data** (Schema markup) is code added to a website that explains to Google and AI systems exactly what the content represents — not just what is written, but what it means.

Without Schema: Google reads the text and *tries* to understand if "14:00" is a work hour, event start, or a price. With Schema: Google knows exactly.

**Why it's critical for AI visibility:**

1. **AI Overviews use Schema directly** — FAQPage Schema is directly included in synthesized answers
2. **LLM systems are trained on Schema data** — structured content is easier for AI to "understand"
3. **Entity recognition depends on Schema** — Organization and Person Schema are direct pipelines to Knowledge Graph
4. **Perplexity and ChatGPT value structured answers** — FAQ format + FAQPage Schema = easier citation

Columbia/Princeton research (2024) found that sites with properly implemented FAQPage Schema are cited **2.6x more often** in AI answers.

---

## The Analogy: Translation vs. Guessing {#analogy}

### Page without Schema: Dense text without context

Imagine sending a CV in English to a Japanese company where nobody speaks English. The text is there. The information is there. But the recruiter must *guess* which part is the name, which is education, which is experience.

Result: inaccurate understanding, missed details, low confidence in decisions.

### Page with Schema: Translated and structured CV

Same CV, but translated and in a standard format understandable to everyone. Every field is clearly labeled. The recruiter knows exactly what to expect in each place.

> Schema markup is the "translator" between human text and machine understanding. Without it — Google and AI guess. With it — they know.

---

## How Structured Data Works Technically {#how-it-works}

### Three formats: Microdata, RDFa, JSON-LD

**Google and AI systems recommend JSON-LD** because:
- Not tied to the HTML structure of the page
- Easy to add and update
- Less chance of errors
- Easier for machines to parse

All examples below use JSON-LD.

### Schema.org — the common standard

[Schema.org](https://schema.org) is a joint project of Google, Microsoft, Yahoo, and Yandex. It defines standard types and properties understood by all search engines and AI systems.

---

## The Five Most Important Schema Types for AI SEO {#five-types}

### Type 1: Organization / LocalBusiness

**Why:** Directly builds entity in Knowledge Graph. Without it Google struggles to "know" the business.

**When to use:** On the homepage (index) of the site. Mandatory for every business site.

Key fields: `name` (exact official name, NO keywords!), `description` (150-300 characters), `sameAs` (all social/directory profiles), `telephone` (international format).

### Type 2: Article / BlogPosting

**Why:** Tells AI systems who the author is, when it was written, and what the topic is. Critical for E-E-A-T and LLM citation.

**When to use:** On every article, blog post, tutorial, guide.

Critical: `dateModified` must be updated with every content update — AI systems, especially Perplexity, check freshness.

### Type 3: FAQPage ⭐ (Most important for AI visibility)

**Why:** Directly gives AI Overview and LLM systems question-answer pairs in the ideal format for synthesis. Research shows 2.6x higher citation likelihood.

**Rules:** Minimum 5 questions, maximum 15. Each answer: 50-200 words. Answers must be complete and direct.

### Type 4: BreadcrumbList

**Why:** Helps Google and AI understand the site structure and how pages connect. Critical for topical authority.

### Type 5: Person (Author Schema)

**Why:** Connects content to a real author. Critical for E-E-A-T authority. AI systems prefer content with verifiable authors.

Key fields: `name`, `url`, `jobTitle`, `worksFor`, `sameAs` (LinkedIn, etc.), `knowsAbout` (list of expertise topics).

---

## JSON-LD: How to Implement It {#json-ld-implementation}

Add a \`<script type="application/ld+json">\` tag in the \`<head>\` of your page. In Next.js, use \`dangerouslySetInnerHTML\`. In WordPress, use RankMath or Yoast SEO plugins.

You can have multiple Schema objects on one page — use separate \`<script>\` tags or an array.

---

## Schema Specific to GEO and AI Overviews {#geo-schema}

**For Google AI Overview:** FAQPage Schema (directly included), Article Schema with dateModified, HowTo Schema for step-by-step guides.

**For ChatGPT and Gemini (via training data):** Organization Schema (builds entity recognition), Person Schema (author authority), FAQPage (easy to synthesize).

**For Perplexity (real-time):** Article Schema with current dateModified (freshness is priority), any Schema improves page parsing.

---

## How to Test and Validate {#testing}

1. **Rich Results Test** — [search.google.com/test/rich-results](https://search.google.com/test/rich-results) — checks for rich result eligibility
2. **Schema Markup Validator** — [validator.schema.org](https://validator.schema.org) — stricter validation against schema.org standards
3. **Google Search Console** — Enhancements section shows which pages received rich results
4. **Perplexity live test** — Ask about a topic from your site; well-implemented FAQ Schema will produce structured Q&A answers

---

## Most Common Mistakes {#mistakes}

1. **Keywords in \`name\`** — name must be exact official name only; use description for keywords
2. **Stale \`dateModified\`** — update with every content change; stale dates signal outdated content to AI
3. **FAQ answers referencing the article** — answers must be complete and self-contained
4. **Schema without corresponding visible content** — Schema must reflect actual page content
5. **Only one Schema on the entire site** — every important page needs appropriate Schema

---

## Tools {#tools}

| Tool | Use | Link |
|------|-----|------|
| Rich Results Test | Rich results check | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| Schema Markup Validator | Validate against schema.org | [validator.schema.org](https://validator.schema.org) |
| Google Search Console | Rich results monitoring | [search.google.com/search-console](https://search.google.com/search-console) |
| Schema.org | Official documentation | [schema.org](https://schema.org) |

---

## Complete Checklist {#checklist}

### Mandatory for every site
- [ ] Organization (or LocalBusiness) Schema on homepage
- [ ] sameAs array with all profiles in Schema
- [ ] NAP data consistent across GBP and site
- [ ] BreadcrumbList Schema on every internal page

### For every article/tutorial
- [ ] Article Schema with datePublished and dateModified
- [ ] Author (Person) Schema on every article
- [ ] FAQPage Schema with minimum 5 question-answers
- [ ] Answers are complete (50-200 words), don't redirect elsewhere

### Validation
- [ ] Rich Results Test — 0 errors
- [ ] Schema Markup Validator — 0 errors
- [ ] dateModified updated at last update`,
  },
  faq: [
    {
      question: {
        bg: "Трябва ли да добавям Schema на всяка страница?",
        en: "Do I need to add Schema to every page?",
      },
      answer: {
        bg: "Не на всяка, но на ключовите — да. Задължително: главница (Organization Schema), всяка статия/урок (Article + FAQPage), всяка продуктова страница (Product). За по-малко важни страници (Контакти, Политика за поверителност) Schema не е приоритет. Фокусирай се първо там, където имаш ценно съдържание, което искаш AI системите да цитират.",
        en: "Not every page, but key ones — yes. Mandatory: homepage (Organization Schema), every article/tutorial (Article + FAQPage), every product page (Product). For less important pages (Contact, Privacy Policy) Schema is not a priority. Focus first where you have valuable content you want AI systems to cite.",
      },
    },
    {
      question: {
        bg: "Ще получа ли Rich Results след добавяне на Schema?",
        en: "Will I get Rich Results after adding Schema?",
      },
      answer: {
        bg: "Не е гарантирано. Schema е необходимо, но не достатъчно условие. Google решава кога да показва Rich Results въз основа на множество фактори: качество на съдържанието, авторитет на сайта, дали заявката е подходяща. FAQPage Schema е по-склонна да задейства Rich Results за информационни заявки. Article Schema рядко дава Rich Result, но подобрява AI разбирането.",
        en: "Not guaranteed. Schema is a necessary but not sufficient condition. Google decides when to show Rich Results based on multiple factors: content quality, site authority, query suitability. FAQPage Schema is more likely to trigger Rich Results for informational queries. Article Schema rarely gives Rich Results but improves AI understanding.",
      },
    },
    {
      question: {
        bg: "Може ли Schema да навреди на сайта ако е грешна?",
        en: "Can Schema harm the site if it's wrong?",
      },
      answer: {
        bg: "Невалидна Schema (грешки в синтаксиса) не наказва сайта — просто се игнорира от Google. Обаче Schema, която умишлено описва неща, несъответстващи на реалното съдържание (т.нар. spam Schema) може да доведе до Manual Penalty. Правилото: Schema трябва да отразява точно видимото съдържание на страницата.",
        en: "Invalid Schema (syntax errors) doesn't penalize the site — it's simply ignored by Google. However, Schema that deliberately describes things not matching the actual content (so-called spam Schema) can lead to a Manual Penalty. The rule: Schema must accurately reflect the visible content on the page.",
      },
    },
    {
      question: {
        bg: "Каква е разликата между Schema и Open Graph (OG) тагове?",
        en: "What's the difference between Schema and Open Graph (OG) tags?",
      },
      answer: {
        bg: "Open Graph тагове (og:title, og:description, og:image) контролират как страницата изглежда при споделяне в социалните мрежи. Schema (JSON-LD) казва на търсачките и AI системите какво е страницата. Двете са различни системи с различни цели и трябва да имаш и двете. OG таговете не влияят на AI видимостта в търсачките.",
        en: "Open Graph tags (og:title, og:description, og:image) control how the page looks when shared on social media. Schema (JSON-LD) tells search engines and AI systems what the page is. They are different systems with different purposes and you should have both. OG tags don't affect AI visibility in search engines.",
      },
    },
  ],
  officialLinks: [
    {
      label: "Schema.org — официална документация",
      url: "https://schema.org",
      desc: {
        bg: "Пълна документация на всички Schema типове и свойства",
        en: "Complete documentation of all Schema types and properties",
      },
    },
    {
      label: "Google Rich Results Test",
      url: "https://search.google.com/test/rich-results",
      desc: {
        bg: "Проверка дали страницата е eligible за Rich Results",
        en: "Check if page is eligible for Rich Results",
      },
    },
    {
      label: "Google Structured Data Documentation",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      desc: {
        bg: "Официалното Google ръководство за Structured Data",
        en: "Official Google guide to Structured Data",
      },
    },
    {
      label: "Schema Markup Validator",
      url: "https://validator.schema.org",
      desc: {
        bg: "Валидиране на Schema маркап спрямо schema.org стандартите",
        en: "Validate Schema markup against schema.org standards",
      },
    },
  ],
  relatedSlugs: ["geo-optimization", "entity-seo", "google-ai-overviews", "technical-seo-audit"],
};
