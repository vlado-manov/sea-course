export const structuredDataContent = {
  slug: "structured-data",
  toc: [
    { id: "what-is-structured-data", text: "Какво е структурирани данни — и защо роботите не разбират HTML?", level: 2 },
    { id: "why-ai-needs-schema", text: "Защо Google и AI не разбират сайта ти без допълнителни указания?", level: 2 },
    { id: "json-ld-syntax", text: "Как се пише JSON-LD — от нулата до работещ код?", level: 2 },
    { id: "article-schema", text: "Как да кажеш на Google, че имаш статия и кой я е написал?", level: 2 },
    { id: "faqpage-schema", text: "Как да се появяваш директно в Google с готови отговори?", level: 2 },
    { id: "organization-schema", text: "Как да се представиш на Google като организация?", level: 2 },
    { id: "product-schema", text: "Как да показваш цена, наличност и рейтинг директно в резултатите?", level: 2 },
    { id: "howto-schema", text: "Как да форматираш стъпкови инструкции така, че Google да ги разбере?", level: 2 },
    { id: "breadcrumb-schema", text: "Как да покажеш на Google и потребителите къде са в сайта ти?", level: 2 },
    { id: "localbusiness-schema", text: "Как да кажеш на Google точно кой си, където си и кога работиш?", level: 2 },
    { id: "rich-results", text: "Какво са Rich Results и как изглежда сайтът ти с тях?", level: 2 },
    { id: "validation-tools", text: "Как да проверяваш дали Schema маркапът ти работи?", level: 2 },
    { id: "common-mistakes", text: "Какви грешки правят повечето хора при Schema маркап?", level: 2 },
    { id: "schema-checklist", text: "Готов ли е Schema маркапът на сайта ти? Пълен чеклист", level: 2 },
  ],
  content: {
    bg: `## Какво е структурирани данни? {#what-is-structured-data}

**Структурираните данни** са код, добавен към уебсайт, който обяснява на Google и AI системите точно какво представлява съдържанието — не само думите, а тяхното значение и контекст.

Представи си, че изпращаш визитна картичка. Ако напишеш на лист хартия "Иван Петров, 0888 123 456, иванпетров@gmail.com", получателят трябва да познае кое е иметo, кое е телефонът и кое е имейлът. Но ако картичката има полета "Ime:", "Телефон:", "Имейл:" — всичко е ясно без усилие.

**Структурираните данни са "визитната картичка" на уеб страницата за роботи.**

Без структурирани данни: Google чете текст и *предполага* дали "14:00" е работно време, начало на събитие или цена. С тях: Google *знае* точно.

### Три понятия, които трябва да знаеш

**Schema.org** — стандартът. Съвместен проект на Google, Microsoft, Yahoo и Yandex. Дефинира какви типове обекти съществуват (Article, Product, FAQ, Organization...) и какви полета имат. Адрес: [schema.org](https://schema.org).

**JSON-LD** — форматът. Начинът, по който се записват структурираните данни в кода на страницата. JSON-LD е препоръчван от Google и е най-лесен за работа.

**Rich Results** — резултатът. Специалните визуални елементи, които се появяват в Google (звезди, рецепти с снимка, FAQ акордеон) когато Schema маркапът е правилен.

> **Ключов факт:** Изследването на Columbia и Princeton от 2024 г. установи, че сайтове с правилно имплементирана FAQPage Schema се цитират **2.6x по-често** в AI отговори.

---

## Защо Google и AI не разбират сайта ти без допълнителни указания? {#why-ai-needs-schema}

**Google и AI системите не "разбират" езика — те разпознават шаблони.** Структурираните данни превръщат неясния текст в машинно-четими данни с гарантирано значение.

### Аналогията: Лекарят без епикриза vs. с епикриза

Представи си, че отиваш при нов лекар. Два сценария:

**Сценарий А — без документация:** Разказваш историята си с думи. Лекарят слуша, задава въпроси, опитва се да разбере. Може да пропусне детайли. Ще отнеме 30 минути.

**Сценарий Б — с епикриза в стандартен формат:** Подаваш документ с полета: Диагноза, Лечение, Алергии, Кръвна група. Лекарят за 2 минути знае всичко важно.

**Schema маркапът е "епикризата" на уеб страницата.** Казва на Google и AI: ето какво е тази страница, кой я е написал, кога, за какво, с какви данни.

### Защо е критично специално за AI

В класическото SEO Schema помагаше за Rich Snippets. В AI SEO Schema е много по-важна:

| Система | Как използва Schema |
|---------|-------------------|
| Google AI Overview | Чете FAQPage Schema директно и я включва в синтезирания отговор |
| Google Search (Rich Results) | Показва акордеони, звезди, рецепти в SERP |
| ChatGPT & Gemini | Обучени са на структурирани данни — разпознават ги по-лесно |
| Perplexity | Реално-времево парсира Schema за по-точно разбиране |
| Knowledge Graph | Organization и Person Schema са директен pipeline към Knowledge Graph |

### Конкретен пример: Без Schema vs. С Schema

**Без Schema — Google вижда:**
\`\`\`
Как да направим GEO оптимизация
GEO или Generative Engine Optimization е...
Стъпка 1: Напиши директни отговори
Въпрос: Колко отнема GEO? Отговор: 4-8 седмици
\`\`\`
Google трябва да *предположи* дали това е статия, урок, FAQ...

**С Schema — Google знае:**
\`\`\`json
{
  "@type": "Article",
  "headline": "Как да направим GEO оптимизация",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "2025-01-15"
}
+ FAQPage с въпросите и отговорите изрично маркирани
\`\`\`

---

## Как се пише JSON-LD — от нулата до работещ код? {#json-ld-syntax}

**JSON-LD** е форматът, препоръчван от Google за структурирани данни. Поставя се в \`<script>\` таг в \`<head>\` или \`<body>\` на страницата. Не е свързан с HTML структурата.

### Стъпка 1: Разбери структурата

Всеки JSON-LD блок има три задължителни части:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заглавие на статията"
}
\`\`\`

- **\`@context\`** — Винаги \`"https://schema.org"\`. Казва: "Използвам Schema.org речника."
- **\`@type\`** — Какъв е обектът: Article, FAQPage, Organization, Product...
- **Полетата** — Конкретните данни: headline, name, description, url...

### Стъпка 2: Как се поставя в HTML

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Моята страница</title>

  <!-- Тук поставяш JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Как работи GEO оптимизацията",
    "datePublished": "2025-01-15",
    "author": {
      "@type": "Person",
      "name": "Иван Петров"
    }
  }
  </script>

</head>
<body>
  <!-- Нормалното съдържание на страницата -->
</body>
</html>
\`\`\`

### Стъпка 3: Вложени обекти

Полетата могат да съдържат цели обекти (обект в обект):

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "Иван Петров",
    "url": "https://example.bg/за-мен"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Моята Компания",
    "url": "https://example.bg"
  }
}
\`\`\`

Забележи: \`author\` не е просто текст — е цял Person обект вътре в Article обекта.

### Стъпка 4: Масиви (списъци)

Когато поле съдържа множество стойности, използва се масив (квадратни скоби):

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "sameAs": [
    "https://linkedin.com/in/ivanpetrov",
    "https://twitter.com/ivanpetrov",
    "https://facebook.com/ivanpetrov"
  ],
  "knowsAbout": ["SEO", "GEO", "AI маркетинг"]
}
\`\`\`

### Стъпка 5: Множество Schema обекти на една страница

Можеш да имаш няколко \`<script type="application/ld+json">\` блока, или един блок с масив:

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
    "mainEntity": []
  }
]
\`\`\`

### Как да добавиш в Next.js (App Router)

\`\`\`tsx
// app/tutorials/[slug]/page.tsx
export default function TutorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Заглавие на урока",
    "datePublished": "2025-01-15"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* останалото съдържание */}
    </>
  );
}
\`\`\`

### Как да добавиш в WordPress

При WordPress използвай плъгините **RankMath** или **Yoast SEO** — автоматично генерират JSON-LD за статии, продукти и FAQ. За по-детайлен контрол: **Schema Pro** плъгин.

---

## Как да кажеш на Google, че имаш статия и кой я е написал? {#article-schema}

**Article Schema** казва на Google и AI системите: тази страница е статия/урок/блог пост, ето кой я е написал, кога, и за каква тема е. Без нея AI третира съдържанието ти като "неизвестен документ без контекст."

### Защо е важна

- **E-E-A-T авторитет** — свързва съдържанието с реален автор
- **Свежест** — \`dateModified\` показва кога е обновена (Perplexity го проверява)
- **LLM цитиране** — AI системите са обучени да разпознават Article Schema
- **Rich Results** — потенциал за Article rich snippet в Google News

### Задължителни vs. препоръчителни полета

| Поле | Тип | Задължително? |
|------|-----|--------------|
| \`@type\` | Article / BlogPosting / NewsArticle | Да |
| \`headline\` | Текст (до 110 знака) | Да |
| \`datePublished\` | ISO дата (ГГГГ-ММ-ДД) | Да |
| \`author\` | Person обект | Да |
| \`dateModified\` | ISO дата | Препоръчително |
| \`description\` | Текст | Препоръчително |
| \`image\` | URL на снимка | Препоръчително |
| \`publisher\` | Organization обект | Препоръчително |
| \`mainEntityOfPage\` | URL на страницата | Препоръчително |
| \`wordCount\` | Число | По избор |
| \`inLanguage\` | Код на езика (bg, en) | По избор |

### Пълен JSON-LD пример (копируем)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Как да оптимизираш за AI Overviews — Пълен наръчник 2025",
  "description": "Пълно ръководство за оптимизиране на съдържанието за Google AI Overviews с конкретни техники и примери.",
  "datePublished": "2025-01-15",
  "dateModified": "2025-06-01",
  "author": {
    "@type": "Person",
    "name": "Иван Петров",
    "url": "https://example.bg/за-мен",
    "image": "https://example.bg/images/ivan-petrov.jpg",
    "sameAs": [
      "https://linkedin.com/in/ivanpetrov"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI SEO Academy",
    "url": "https://example.bg",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.bg/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.bg/tutorials/ai-overviews"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://example.bg/images/ai-overviews-guide.jpg",
    "width": 1200,
    "height": 630
  },
  "wordCount": 3500,
  "inLanguage": "bg",
  "about": {
    "@type": "Thing",
    "name": "Google AI Overviews"
  }
}
\`\`\`

### BlogPosting vs. Article — кога да използваш кое

| Тип | Кога да го използваш |
|-----|---------------------|
| \`Article\` | Информационни статии, уроци, ръководства |
| \`BlogPosting\` | Блог постове, новини, мнения |
| \`NewsArticle\` | Новинарски статии с актуална информация |
| \`TechArticle\` | Технически ръководства, документация |

> **Критично:** \`dateModified\` трябва да се обновява при всяка значима промяна в съдържанието. Perplexity и Google проверяват свежестта — стар \`dateModified\` = остаряло съдържание в очите на AI.

---

## Как да се появяваш директно в Google с готови отговори? {#faqpage-schema}

**FAQPage Schema** е най-мощният инструмент за AI видимост. Дава на Google AI Overview и LLM системите въпрос-отговор двойки в идеален формат за синтез — готови да бъдат включени директно в AI отговора.

### Защо е най-важната Schema за AI

Изследването на Columbia и Princeton (2024) установи, че FAQPage Schema увеличава вероятността за цитиране в AI с **2.6x**. Причината: AI системите са обучени да разпознават и синтезират Q&A формати. FAQPage е буквално "предварително оформен отговор" за AI.

### Как AI Overview я използва

\`\`\`
Потребителят пита: "Колко отнема GEO оптимизацията?"
        ↓
Google AI Overview сканира FAQPage Schema на топ сайтове
        ↓
Намира: Question: "Колко отнема GEO?" → Answer: "4-8 седмици..."
        ↓
Включва тази Q&A двойка директно в AI Overview отговора
        ↓
Твоят сайт се цитира като source bubble
\`\`\`

### Задължителни vs. препоръчителни полета

| Поле | Тип | Задължително? |
|------|-----|--------------|
| \`@type\` | FAQPage | Да |
| \`mainEntity\` | Масив от Question обекти | Да |
| \`Question.@type\` | Question | Да |
| \`Question.name\` | Текст на въпроса | Да |
| \`Question.acceptedAnswer\` | Answer обект | Да |
| \`Answer.@type\` | Answer | Да |
| \`Answer.text\` | Текст на отговора | Да |

### Пълен JSON-LD пример (копируем)

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
        "text": "GEO (Generative Engine Optimization) е практиката за оптимизиране на уеб съдържание, така че да се цитира от AI системи като ChatGPT, Google Gemini и Perplexity. За разлика от SEO, GEO оптимизира за AI-генерирани отговори, не за позиция в Google. Ключовите техники включват answer-first структура, статистики с извор, и FAQPage Schema маркап."
      }
    },
    {
      "@type": "Question",
      "name": "Колко дълго отнема да видиш резултати от GEO оптимизация?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Резултатите варират по платформа: Perplexity реагира в рамките на 2-4 седмици след публикуване. Google AI Overview — 4-8 седмици. ChatGPT и Claude (без Browse функция) — по-бавно, тъй като зависи от следващите обучителни цикли на модела. Средно: виждаш измерими промени в рамките на 1-3 месеца."
      }
    },
    {
      "@type": "Question",
      "name": "Трябва ли ми Schema маркап за GEO оптимизация?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FAQPage Schema е силно препоръчителна за GEO — увеличава вероятността за цитиране в AI с 2.6x. Article Schema е задължителна за всяка статия. Без Schema AI системите могат да прочетат съдържанието, но структурираните данни им помагат значително да разберат контекста и да цитират точните части."
      }
    },
    {
      "@type": "Question",
      "name": "Каква е разликата между GEO и класическото SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Класическото SEO оптимизира за класиране в Google (позиция #1-10 в сините връзки). GEO оптимизира за цитиране в AI-генерирани отговори. SEO мери позиция и CTR; GEO мери AI citation rate. Двете не се изключват — добрата SEO позиция (топ 20) е почти задължителна предпоставка за AI цитиране."
      }
    },
    {
      "@type": "Question",
      "name": "Как да проверя дали съдържанието ми е цитирано в AI системи?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ръчно тестване: питай ChatGPT, Perplexity и Gemini въпроси от твоята ниша и виж дали цитират твоя сайт. Google Search Console показва AI Overview appearances. Инструменти като SE Ranking и Semrush предлагат автоматизирано AI tracking за конкретни ключови думи."
      }
    }
  ]
}
\`\`\`

### Правила за добри FAQPage отговори

**Дължина:** 50-200 думи на отговор. По-кратко — недостатъчно информативно. По-дълго — AI трудно го синтезира.

**Самостоятелност:** Всеки отговор трябва да е пълен без контекст от другите. AI извлича Q&A двойки поотделно.

**Без препратки:** Никога:
\`\`\`
❌ "Повече информация ще намериш в нашата статия за GEO."
✅ "GEO е практиката за оптимизиране на уеб съдържание за AI системи.
   Включва answer-first структура, статистики с извор, и FAQ секции с Schema."
\`\`\`

**Брой въпроси:** Минимум 5, максимум 15. Под 5 — малко данни. Над 15 — Google рядко показва всички като Rich Results.

**Реалистични въпроси:** Използвай реални въпроси от потребители — проверявай Google Suggest, People Also Ask, и форуми.

---

## Как да се представиш на Google като организация? {#organization-schema}

**Organization Schema** е "дигиталният паспорт" на бизнеса. Казва на Google и AI системите кой е бизнесът, какво прави, как да го намерят и кои са официалните му профили. Без нея Google трудно изгражда Knowledge Panel за бизнеса.

### Защо е важна за AI видимост

- Директен pipeline към **Knowledge Graph** — основата на entity разпознаването
- Без Organization Schema AI системите не могат да "свържат" споменаванията на бизнеса от различни сайтове
- **sameAs** полето е критично — свързва официалния сайт с всички профили в интернет

### Задължителни vs. препоръчителни полета

| Поле | Тип | Задължително? |
|------|-----|--------------|
| \`@type\` | Organization | Да |
| \`name\` | Официалното наименование | Да |
| \`url\` | Главен URL | Да |
| \`description\` | 150-300 знака | Препоръчително |
| \`telephone\` | Международен формат | Препоръчително |
| \`email\` | Официален имейл | Препоръчително |
| \`address\` | PostalAddress обект | Препоръчително |
| \`sameAs\` | Масив от URL-и | Препоръчително |
| \`foundingDate\` | Година | По избор |
| \`logo\` | ImageObject | По избор |
| \`numberOfEmployees\` | QuantitativeValue | По избор |

### Пълен JSON-LD пример (копируем)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Примерна Компания ЕООД",
  "url": "https://примернакомпания.bg",
  "description": "Счетоводни и данъчни консултации за малки и средни бизнеси в България. Специализирани в ЕООД регистрация, данъчно планиране и ДДС оптимизация.",
  "telephone": "+359 2 123 4567",
  "email": "info@примернакомпания.bg",
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "бул. Витоша 100",
    "addressLocality": "София",
    "postalCode": "1463",
    "addressCountry": "BG"
  },
  "logo": {
    "@type": "ImageObject",
    "url": "https://примернакомпания.bg/logo.png",
    "width": 200,
    "height": 60
  },
  "sameAs": [
    "https://www.linkedin.com/company/примернакомпания",
    "https://www.facebook.com/примернакомпания",
    "https://twitter.com/примернакомпания",
    "https://www.instagram.com/примернакомпания"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+359 2 123 4567",
    "contactType": "customer service",
    "availableLanguage": ["Bulgarian", "English"]
  }
}
\`\`\`

### Критично правило за \`name\`

\`\`\`
❌ "name": "Примерна Компания - Счетоводни услуги София - ТОП счетоводители"
✅ "name": "Примерна Компания ЕООД"
\`\`\`

\`name\` = точното официално наименование на бизнеса. Без ключови думи, без описание. Ключовите думи отиват в \`description\`.

### \`sameAs\` — защо е критично

\`sameAs\` свързва официалния уебсайт с всички профили в интернет. Когато AI вижда споменаване на "Примерна Компания" в статия, проверява \`sameAs\` за да потвърди дали е същата компания. Без \`sameAs\` — разпокъсана идентичност.

Добавяй в \`sameAs\`:
- LinkedIn компания
- Facebook страница
- Instagram профил
- Google Business Profile URL
- Wikidata (ако има)
- Всяка бизнес директория (Firmi.bg, Businessdirectory.bg)

---

## Как да показваш цена, наличност и рейтинг директно в резултатите? {#product-schema}

**Product Schema** е задължителна за онлайн магазини. Казва на Google точно какъв е продуктът, колко струва, дали е наличен и какви са оценките. Без нея продуктите ти са невидими за Google Shopping AI.

### Защо е важна

- **Google Shopping** — без Product Schema продуктът не се появява в Shopping Tab
- **Merchant Center** — Product Schema + Merchant Center feed = пълна ecommerce видимост
- **AI пазаруване** — AI агентите (ChatGPT Shopping, Gemini Shopping) четат Product Schema
- **Rich Results** — цена, наличност и звезди директно в Google резултатите

### Задължителни vs. препоръчителни полета

| Поле | Тип | Задължително за Rich Results? |
|------|-----|------------------------------|
| \`@type\` | Product | Да |
| \`name\` | Текст | Да |
| \`description\` | Текст | Препоръчително |
| \`image\` | URL или ImageObject | Да |
| \`offers\` | Offer обект | Да (за цена) |
| \`offers.price\` | Число | Да |
| \`offers.priceCurrency\` | Валутен код (BGN, EUR) | Да |
| \`offers.availability\` | schema.org/InStock etc. | Препоръчително |
| \`aggregateRating\` | AggregateRating обект | Препоръчително |
| \`brand\` | Brand обект | Препоръчително |
| \`sku\` | Текст | По избор |
| \`gtin13\` | EAN баркод | По избор |

### Пълен JSON-LD пример (копируем)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Безжични слушалки ProSound X3",
  "description": "Безжични Bluetooth слушалки с активно шумопотискане, 30 часа батерия и Hi-Fi звук. Подходящи за работа от вкъщи и пътуване.",
  "image": [
    "https://магазин.bg/images/prosound-x3-front.jpg",
    "https://магазин.bg/images/prosound-x3-side.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "ProSound"
  },
  "sku": "PSX3-BLK-001",
  "gtin13": "5901234123457",
  "offers": {
    "@type": "Offer",
    "url": "https://магазин.bg/products/prosound-x3",
    "price": "189.99",
    "priceCurrency": "BGN",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "priceValidUntil": "2025-12-31",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "BGN"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "BG"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "businessDays": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        "cutoffTime": "17:00:00",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 3,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "234",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Мария К."
      },
      "reviewBody": "Отлично качество на звука, батерията трае наистина 30 часа."
    }
  ]
}
\`\`\`

### Availability стойности

| Стойност | Значение |
|---------|---------|
| \`schema.org/InStock\` | В наличност |
| \`schema.org/OutOfStock\` | Изчерпан |
| \`schema.org/PreOrder\` | Предварителна поръчка |
| \`schema.org/Discontinued\` | Спрян от производство |
| \`schema.org/LimitedAvailability\` | Ограничено количество |

> **Важно:** Google изисква \`offers\` с цена за Product Rich Results. Без него — получаваш само базов rich result, без цена и наличност.

---

## Как да форматираш стъпкови инструкции така, че Google да ги разбере? {#howto-schema}

**HowTo Schema** е идеална за ръководства "как да направиш X". Казва на Google и AI, че страницата съдържа стъпкови инструкции. Google може да показва стъпките директно в SERP — без потребителят да кликва.

### Защо е важна

- **AI Overview** — стъпковите ръководства с HowTo Schema се включват по-лесно в AI синтезирани отговори
- **Rich Results** — Google показва стъпките в SERP (image carousel за мобилни)
- **Voice Search** — AI асистентите (Google Assistant, Siri) четат HowTo за гласови инструкции

### Задължителни vs. препоръчителни полета

| Поле | Тип | Задължително? |
|------|-----|--------------|
| \`@type\` | HowTo | Да |
| \`name\` | Заглавие на ръководството | Да |
| \`step\` | Масив от HowToStep обекти | Да |
| \`step.@type\` | HowToStep | Да |
| \`step.name\` | Кратко заглавие на стъпката | Да |
| \`step.text\` | Описание на стъпката | Да |
| \`description\` | Общо описание | Препоръчително |
| \`totalTime\` | ISO 8601 продължителност | Препоръчително |
| \`estimatedCost\` | MonetaryAmount | По избор |
| \`step.image\` | Снимка за стъпката | По избор |
| \`tool\` | Масив от HowToTool | По избор |
| \`supply\` | Масив от HowToSupply | По избор |

### Пълен JSON-LD пример (копируем)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Как да добавиш Organization Schema към уебсайт",
  "description": "Стъпково ръководство за имплементация на Organization Schema с JSON-LD в HTML страница.",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "BGN",
    "value": "0"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Текстов редактор (VS Code или Notepad++)"
    },
    {
      "@type": "HowToTool",
      "name": "Google Rich Results Test"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Събери официалните данни на бизнеса",
      "text": "Подготви: официалното наименование, точния адрес, телефон в международен формат (+359...), имейл, и URL-ите на всички социални профили (LinkedIn, Facebook, Instagram)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Копирай шаблона и попълни с твоите данни",
      "text": "Копирай JSON-LD шаблона за Organization Schema. Замени placeholder данните с реалните данни на бизнеса. Провери, че name е точното официално наименование без допълнителни ключови думи."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Постави JSON-LD в <head> на главницата",
      "text": "Отвори HTML файла на главницата (index.html или equivalent). В секцията <head>, добави: <script type='application/ld+json'> следван от JSON кода и </script>. Ако ползваш WordPress — добави чрез плъгин или functions.php."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Валидирай с Rich Results Test",
      "text": "Отвори search.google.com/test/rich-results. Въведи URL на главницата. Провери за грешки (червено) и предупреждения (жълто). Нулеви грешки = Schema е валидна."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Изчакай и провери в Search Console",
      "text": "Google обработва новата Schema в рамките на 1-4 седмици. Провери в Google Search Console → Enhancements за да видиш дали е разпозната."
    }
  ]
}
\`\`\`

### Форматиране на \`totalTime\`

HowTo Schema използва ISO 8601 формат за времетраене:

| Код | Значение |
|-----|---------|
| \`PT30M\` | 30 минути |
| \`PT1H\` | 1 час |
| \`PT1H30M\` | 1 час и 30 минути |
| \`P1D\` | 1 ден |

---

## Как да покажеш на Google и потребителите къде са в сайта ти? {#breadcrumb-schema}

**BreadcrumbList Schema** показва на Google и AI системите как страницата се вписва в йерархията на сайта. Помага за разбиране на тематичния авторитет и показва пътя "Начало → Категория → Страница" директно в Google резултатите.

### Защо е важна

- **Тематичен авторитет** — показва на AI, че страницата е част от по-голяма тематична структура
- **Rich Results** — Google показва breadcrumb пътя вместо URL в резултатите
- **Потребителско изживяване** — помага на потребителите да разберат структурата на сайта

### Пълен JSON-LD пример (копируем)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Начало",
      "item": "https://example.bg"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Уроци",
      "item": "https://example.bg/tutorials"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Структурирани Данни",
      "item": "https://example.bg/tutorials/structured-data"
    }
  ]
}
\`\`\`

### Правила за BreadcrumbList

- **position** — започва от 1, нараства с 1
- **item** — пълният URL на всяко ниво (включително главницата)
- **Последната стъпка** — може да няма \`item\` (текущата страница)
- Breadcrumb в Schema трябва да съответства на видимия breadcrumb на страницата

### Пример: Ecommerce breadcrumb

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Начало",
      "item": "https://магазин.bg"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Електроника",
      "item": "https://магазин.bg/elektronika"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Слушалки",
      "item": "https://магазин.bg/elektronika/slushalki"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "ProSound X3 Безжични слушалки",
      "item": "https://магазин.bg/elektronika/slushalki/prosound-x3"
    }
  ]
}
\`\`\`

---

## Как да кажеш на Google точно кой си, където си и кога работиш? {#localbusiness-schema}

**LocalBusiness Schema** е разширение на Organization Schema специално за физически бизнеси с местоположение. Добавя работно време, специфичен тип бизнес (RestaurantRestaurant, DentalClinic, LegalService...) и геолокация. Критична за Local SEO и Google Maps.

### Защо е важна

- **Google Maps** — LocalBusiness Schema подпомага разпознаването в Google Maps
- **Local AI Overviews** — "Зъболекар до мен" задейства локализирани AI отговори
- **Knowledge Panel** — помага за изграждане на местен Knowledge Panel
- **NAP консистентност** — Name, Address, Phone трябва да са идентични навсякъде

### Специфични типове LocalBusiness

\`\`\`
LocalBusiness (общ)
├── FoodEstablishment
│   ├── Restaurant
│   ├── Bakery
│   └── CafeOrCoffeeShop
├── MedicalOrganization
│   ├── DentalClinic
│   ├── MedicalClinic
│   └── Pharmacy
├── LegalService
│   ├── Attorney
│   └── Notary
├── FinancialService
│   └── AccountingService
└── Store
    ├── ClothingStore
    └── ElectronicsStore
\`\`\`

### Пълен JSON-LD пример (копируем)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Дентален Център Здраве",
  "description": "Модерна зъболекарска клиника в центъра на София. Специализирани в имплантология, ортодонтия и естетична стоматология.",
  "url": "https://денталцентър.bg",
  "telephone": "+359 2 987 6543",
  "email": "info@денталцентър.bg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Граф Игнатиев 45",
    "addressLocality": "София",
    "postalCode": "1000",
    "addressCountry": "BG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.6977,
    "longitude": 23.3219
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "BGN",
  "paymentAccepted": "Кредитна карта, Кеш",
  "hasMap": "https://maps.google.com/?cid=1234567890",
  "sameAs": [
    "https://www.facebook.com/dentalcentar",
    "https://www.instagram.com/dentalcentar",
    "https://g.co/kgs/dentalcentar"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "187"
  },
  "medicalSpecialty": [
    "Implantology",
    "Orthodontics",
    "Aesthetic Dentistry"
  ]
}
\`\`\`

### Работно време — специални случаи

**За почивни дни:**
\`\`\`json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": "PublicHolidays",
  "opens": "00:00",
  "closes": "00:00"
}
\`\`\`

**За 24/7 работно време:**
\`\`\`json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
  "opens": "00:00",
  "closes": "23:59"
}
\`\`\`

> **NAP правило:** Name, Address, Phone в Schema трябва да са **идентични** с Google Business Profile, Firmi.bg, и всички директории. Дори малки разлики (бул. vs boulevard) объркват AI системите.

---

## Какво са Rich Results и как изглежда сайтът ти с тях? {#rich-results}

**Rich Results** са специалните визуални елементи, които Google показва в резултатите от търсенето когато Schema маркапът е правилно имплементиран. Не са гарантирани — Google решава кога да ги показва.

### Видове Rich Results по Schema тип

| Schema тип | Rich Result | Изглед |
|-----------|------------|--------|
| FAQPage | FAQ акордеон | Въпроси, разгъващи се под резултата |
| Product | Product snippet | Цена, наличност, звезди в SERP |
| Article | Article snippet | Снимка, автор, дата в News/Discover |
| HowTo | HowTo snippet | Стъпки с изображения в мобилен SERP |
| Recipe | Recipe card | Снимка, рейтинг, калории |
| LocalBusiness | Knowledge Panel | Информационен панел вдясно |
| BreadcrumbList | Breadcrumb path | Пътека вместо URL под заглавието |
| Event | Event snippet | Дата, място, цена на събитие |
| JobPosting | Job listing | Работни оферти с детайли |

### Как изглежда FAQ Rich Result

\`\`\`
[Заглавие на страницата]                           example.bg
Описание на страницата...

▼ Какво е GEO оптимизация?
  GEO е практиката за оптимизиране на съдържание за AI системи...

▼ Колко отнема GEO оптимизацията?
  Perplexity — 2-4 седмици, Google AI Overview — 4-8 седмици...

▼ Трябва ли Schema маркап за GEO?
  FAQPage Schema увеличава AI цитирането с 2.6x...
\`\`\`

### Условия за получаване на Rich Results

Google не дава Rich Results автоматично. Изисква:

1. **Валидна Schema** — без грешки в Rich Results Test
2. **Съответствие с видимото съдържание** — Schema трябва да отразява реалния текст
3. **Авторитет на сайта** — нов или нискокачествен сайт рядко получава Rich Results
4. **Подходяща заявка** — Rich Results се показват само за подходящи заявки
5. **E-E-A-T** — за здраве, финанси и право Google е по-строг

### Rich Results vs. AI Visibility — разликата

\`\`\`
Rich Results = визуален ефект в Google SERP
AI Visibility = цитиране в AI-генерирани отговори

Schema помага и за двете — но по различен начин.
Rich Results: Google валидира Schema и решава да показва специален формат
AI Visibility: AI системите четат Schema за по-добро разбиране при цитиране
\`\`\`

---

## Как да проверяваш дали Schema маркапът ти работи? {#validation-tools}

Валидирането е задължително след всяка Schema имплементация. Невалидна Schema се игнорира от Google.

### Инструмент 1: Google Rich Results Test (Задължителен)

**URL:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

**Какво прави:** Проверява дали страницата е eligible за Google Rich Results. Симулира как Google Googlebot вижда страницата.

**Стъпки:**
\`\`\`
1. Отвори search.google.com/test/rich-results
2. Избери "URL" и въведи адреса на страницата
   (Или "Code snippet" за да тестваш директно JSON-LD)
3. Натисни "Test URL" / "Test code"
4. Провери резултатите:
   - Detected items: кои Schema типове са намерени
   - Errors (червено): Schema е невалидна — трябва корекция
   - Warnings (жълто): Schema е валидна, но липсват препоръчани полета
   - Valid items (зелено): Schema е коректна и eligible за Rich Results
\`\`\`

**Важно:** Само защото е "Valid" не означава, че ще получиш Rich Results. Google все пак решава.

### Инструмент 2: Schema Markup Validator (По-строг)

**URL:** [validator.schema.org](https://validator.schema.org)

**Какво прави:** Валидира Schema спрямо официалните schema.org стандарти. По-строг от Rich Results Test — хваща грешки, които Google Test понякога пропуска.

**Стъпки:**
\`\`\`
1. Отвори validator.schema.org
2. Въведи URL или постави HTML/JSON-LD код
3. Натисни "Run test"
4. Провери:
   - Errors: задължително за поправяне
   - Warnings: препоръчително за поправяне
   - Properties: показва всички разпознати полета
\`\`\`

### Инструмент 3: Google Search Console (Мониторинг)

**URL:** [search.google.com/search-console](https://search.google.com/search-console)

**Какво прави:** Показва кои страниции са получили Rich Results в реалното Google търсене.

**Стъпки:**
\`\`\`
1. Влез в Search Console
2. Избери сайта
3. Навигирай до: Enhancements (в лявото меню)
4. Виж списъка: FAQs, Articles, Products, HowTo...
5. Кликни на тип за да видиш:
   - Valid: страниции с активни Rich Results
   - Valid with warnings: Rich Results, но с пропуснати полета
   - Error: проблеми, блокиращи Rich Results
\`\`\`

### Инструмент 4: JSON-LD валидатор (За синтаксис)

**URL:** [jsonlint.com](https://jsonlint.com) или [jsonformatter.org](https://jsonformatter.org)

**Какво прави:** Проверява дали JSON синтаксисът е правилен (затворени скоби, запетаи...). Ако JSON е невалиден — нито Rich Results Test ще го прочете правилно.

**Стъпки:**
\`\`\`
1. Копирай JSON-LD кода
2. Постави в jsonlint.com
3. Натисни "Validate JSON"
4. "JSON is valid" = синтаксисът е правилен
5. Ако има грешки — показва точния ред
\`\`\`

### Инструмент 5: Perplexity тест (За AI видимост)

**URL:** [perplexity.ai](https://perplexity.ai)

**Какво прави:** Реален тест дали AI система цитира твоя сайт.

**Стъпки:**
\`\`\`
1. Питай Perplexity въпрос от FAQ секцията на твоя сайт
   Пример: "Какво е GEO оптимизация?" (ако имаш статия за GEO)
2. Провери отговора:
   - Дали текстът прилича на твоите FAQPage отговори?
   - Дали твоят сайт е цитиран в Sources?
3. Ако не си цитиран — провери Schema валидацията и SEO позицията
\`\`\`

### Обобщена таблица с инструменти

| Инструмент | Употреба | Цена |
|-----------|---------|------|
| Rich Results Test | Елигибилност за Rich Results | Безплатен |
| Schema Markup Validator | Строга Schema валидация | Безплатен |
| Google Search Console | Мониторинг на активни Rich Results | Безплатен |
| JSON Lint | Проверка на JSON синтаксис | Безплатен |
| Perplexity | Реален тест за AI цитиране | Freemium |
| SE Ranking | Автоматизирано Schema и AI tracking | ~$55/мес |

---

## Какви грешки правят повечето хора при Schema маркап? {#common-mistakes}

### Грешка 1: Ключови думи в \`name\` полето

\`\`\`json
❌ "name": "Примерно Счетоводство - Счетоводни услуги Sofia - ТОП счетоводители 2025"
✅ "name": "Примерно Счетоводство ЕООД"
\`\`\`

**Защо е грешка:** \`name\` трябва да е точното официално наименование. Ключови думи в \`name\` са спам сигнал и могат да доведат до Manual Penalty. Слагай ключови думи в \`description\`.

---

### Грешка 2: Стар \`dateModified\`

\`\`\`json
❌ "dateModified": "2022-03-15"  // Не е обновена от 3 години!
✅ "dateModified": "2025-06-01"  // Отразява последната актуализация
\`\`\`

**Защо е грешка:** Perplexity и Google AI Overview третират старото \`dateModified\` като остаряло съдържание. При time-sensitive теми (технологии, AI, здраве) това е критично. Обновявай при всяка значима промяна в съдържанието.

---

### Грешка 3: FAQPage отговори с препратки

\`\`\`json
❌ "text": "За повече информация прочети нашата статия за GEO оптимизацията."
✅ "text": "GEO е практиката за оптимизиране на уеб съдържание за AI системи.
   Ключовите техники включват answer-first структура, статистики с извор,
   FAQPage Schema маркап, и тематично покритие. Времето за резултати е 4-8 седмици."
\`\`\`

**Защо е грешка:** AI системите извличат Q&A двойки поотделно. Отговор с "виж нашата статия" е безполезен извън контекст.

---

### Грешка 4: Schema без съответстващо видимо съдържание

\`\`\`
❌ FAQPage Schema с 10 въпроса, но страницата няма видима FAQ секция
✅ FAQPage Schema отразява реалните въпроси и отговори, видими на страницата
\`\`\`

**Защо е грешка:** Google изисква Schema да отразява видимото съдържание. Несъответствие = Manual Penalty риск.

---

### Грешка 5: Невалиден JSON синтаксис

\`\`\`json
❌ {
  "@context": "https://schema.org",
  "@type": "Article"
  "headline": "Заглавие"   // Липсва запетая след Article!
}

✅ {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заглавие"
}
\`\`\`

**Защо е грешка:** Невалиден JSON = Schema се игнорира изцяло. Валидирай с JSON Lint преди да публикуваш.

---

### Грешка 6: Само Organization Schema на целия сайт

\`\`\`
❌ Organization Schema само на главницата, нищо друго
✅ Organization на главницата + Article на всяка статия + FAQPage на ключовите страници
\`\`\`

**Защо е грешка:** Всяка важна страница се нуждае от подходяща Schema. Единичната Schema на главницата не помага на статиите и продуктовите страниции.

---

### Грешка 7: Некоректен \`@type\`

\`\`\`json
❌ "@type": "Blog"          // Не съществува в schema.org
❌ "@type": "WebContent"    // Не съществува
✅ "@type": "BlogPosting"   // Правилният тип за блог пост
✅ "@type": "Article"       // За статии и уроци
\`\`\`

**Защо е грешка:** Несъществуващи \`@type\` стойности се игнорират. Проверявай на schema.org за правилните типове.

---

### Грешка 8: Непълни \`sameAs\` данни

\`\`\`json
❌ "sameAs": ["https://linkedin.com"]   // Само началната страница, не профилът!
✅ "sameAs": ["https://linkedin.com/company/моятакомпания"]   // Конкретният профил
\`\`\`

**Защо е грешка:** \`sameAs\` трябва да сочи към конкретния профил, не към началната страница на платформата.

---

## Готов ли е Schema маркапът на сайта ти? Пълен чеклист {#schema-checklist}

### Задължително за всеки сайт (Направи сега)

- [ ] **Organization Schema на главницата** — с \`name\`, \`url\`, \`description\`, \`telephone\`, \`address\`
- [ ] **\`sameAs\` масив** — LinkedIn, Facebook, Instagram, всички директории
- [ ] **NAP консистентност** — Name, Address, Phone идентични в Schema, GBP и сайта
- [ ] **BreadcrumbList Schema** — на всяка вътрешна страница (не главницата)
- [ ] **Валидация с Rich Results Test** — 0 грешки

### За всяка статия / урок / блог пост

- [ ] **Article Schema** — с \`headline\`, \`datePublished\`, \`dateModified\`, \`author\`
- [ ] **Author (Person) Schema** — с \`name\`, \`url\`, \`sameAs\` (LinkedIn минимум)
- [ ] **FAQPage Schema** — минимум 5 въпроса-отговора (50-200 думи/отговор)
- [ ] **Отговорите са пълни** — не препращат към статията, самостоятелни
- [ ] **\`dateModified\` е актуален** — обновен при последната промяна

### За ecommerce сайтове

- [ ] **Product Schema** — на всяка продуктова страница с \`offers\`, \`price\`, \`availability\`
- [ ] **AggregateRating** — ако имаш реални рецензии
- [ ] **BreadcrumbList** — за всяка продуктова страница

### За локален бизнес

- [ ] **LocalBusiness Schema** (или специфичен тип: DentalClinic, Restaurant...)
- [ ] **\`openingHoursSpecification\`** — коректни работни часове
- [ ] **\`geo\`** — GPS координати
- [ ] **\`aggregateRating\`** — ако имаш Google Reviews

### За стъпкови ръководства

- [ ] **HowTo Schema** — с минимум 3 стъпки
- [ ] **\`totalTime\`** — в ISO 8601 формат
- [ ] **Всяка стъпка има \`name\` и \`text\`**

### Валидиране (след всяка промяна)

- [ ] **JSON Lint** — 0 JSON синтаксис грешки
- [ ] **Rich Results Test** — 0 errors, минимум warnings
- [ ] **Schema Markup Validator** — 0 errors
- [ ] **Search Console → Enhancements** — проверен след 1-2 седмици

### Мониторинг (месечно)

- [ ] **Search Console** — нови грешки в Enhancements?
- [ ] **\`dateModified\`** — обновен за всички актуализирани статии
- [ ] **Perplexity тест** — цитиран ли съм за ключовите въпроси?
- [ ] **Нови Schema типове** — добавени ли са за нови типове съдържание?`,

    en: `## What Is Structured Data? {#what-is-structured-data}

**Structured data** is code added to a website that explains to Google and AI systems exactly what the content represents — not just the words, but their meaning and context.

Imagine sending a business card. If you write on a sheet of paper "John Smith, 555-0123, john@email.com", the recipient must guess which is the name, which is the phone, and which is the email. But if the card has labeled fields — "Name:", "Phone:", "Email:" — everything is clear without effort.

**Structured data is the "business card" of a web page for robots.**

Without structured data: Google reads the text and *guesses* whether "14:00" is opening hours, an event start time, or a price. With it: Google *knows* exactly.

### Three Concepts You Must Know

**Schema.org** — the standard. A joint project of Google, Microsoft, Yahoo, and Yandex. Defines what types of objects exist (Article, Product, FAQ, Organization...) and what fields they have. Address: [schema.org](https://schema.org).

**JSON-LD** — the format. The way structured data is written in the page's code. JSON-LD is recommended by Google and is the easiest to work with.

**Rich Results** — the outcome. The special visual elements that appear in Google (stars, recipe cards, FAQ accordions) when Schema markup is correct.

> **Key fact:** The 2024 Columbia and Princeton research found that sites with properly implemented FAQPage Schema are cited **2.6x more often** in AI answers.

---

## Why Can't Google and AI Understand Your Site Without Extra Instructions? {#why-ai-needs-schema}

**Google and AI systems don't "understand" language — they recognize patterns.** Structured data converts ambiguous text into machine-readable data with guaranteed meaning.

### The Analogy: Doctor Without a Medical Record vs. With One

Imagine visiting a new doctor. Two scenarios:

**Scenario A — without documentation:** You tell your history in words. The doctor listens, asks questions, tries to understand. May miss details. Takes 30 minutes.

**Scenario B — with a structured medical record:** You hand over a document with fields: Diagnosis, Treatment, Allergies, Blood Type. The doctor knows everything important in 2 minutes.

**Schema markup is the "medical record" of a web page.** It tells Google and AI: here's what this page is, who wrote it, when, what it's about, and with what data.

### Why It's Especially Critical for AI

In classic SEO, Schema helped with Rich Snippets. In AI SEO, Schema is much more important:

| System | How It Uses Schema |
|--------|-------------------|
| Google AI Overview | Reads FAQPage Schema directly and includes it in the synthesized answer |
| Google Search (Rich Results) | Shows accordions, stars, recipes in SERP |
| ChatGPT & Gemini | Trained on structured data — recognize it more easily |
| Perplexity | Real-time parses Schema for more accurate understanding |
| Knowledge Graph | Organization and Person Schema are direct pipelines to Knowledge Graph |

### Concrete Example: Without Schema vs. With Schema

**Without Schema — Google sees:**
\`\`\`
How to do GEO optimization
GEO or Generative Engine Optimization is...
Step 1: Write direct answers
Question: How long does GEO take? Answer: 4-8 weeks
\`\`\`
Google must *guess* whether this is an article, tutorial, FAQ...

**With Schema — Google knows:**
\`\`\`json
{
  "@type": "Article",
  "headline": "How to do GEO optimization",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "2025-01-15"
}
+ FAQPage with questions and answers explicitly marked
\`\`\`

---

## How Do You Write JSON-LD — From Zero to Working Code? {#json-ld-syntax}

**JSON-LD** is the format recommended by Google for structured data. It's placed in a \`<script>\` tag in the \`<head>\` or \`<body>\` of the page. It's not tied to the HTML structure.

### Step 1: Understand the Structure

Every JSON-LD block has three mandatory parts:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article title"
}
\`\`\`

- **\`@context\`** — Always \`"https://schema.org"\`. Says: "I'm using the Schema.org vocabulary."
- **\`@type\`** — What the object is: Article, FAQPage, Organization, Product...
- **The fields** — The actual data: headline, name, description, url...

### Step 2: How to Place It in HTML

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My page</title>

  <!-- Place JSON-LD here -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How GEO optimization works",
    "datePublished": "2025-01-15",
    "author": {
      "@type": "Person",
      "name": "John Smith"
    }
  }
  </script>

</head>
<body>
  <!-- Normal page content -->
</body>
</html>
\`\`\`

### Step 3: Nested Objects

Fields can contain entire objects (object within object):

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "John Smith",
    "url": "https://example.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "My Company",
    "url": "https://example.com"
  }
}
\`\`\`

Note: \`author\` is not just text — it's a full Person object inside the Article object.

### Step 4: Arrays (Lists)

When a field contains multiple values, use an array (square brackets):

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "sameAs": [
    "https://linkedin.com/in/johnsmith",
    "https://twitter.com/johnsmith",
    "https://facebook.com/johnsmith"
  ],
  "knowsAbout": ["SEO", "GEO", "AI Marketing"]
}
\`\`\`

### Step 5: Multiple Schema Objects on One Page

You can have multiple \`<script type="application/ld+json">\` blocks, or one block with an array:

\`\`\`json
[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Title"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  }
]
\`\`\`

### How to Add in Next.js (App Router)

\`\`\`tsx
// app/tutorials/[slug]/page.tsx
export default function TutorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tutorial title",
    "datePublished": "2025-01-15"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* rest of content */}
    </>
  );
}
\`\`\`

### How to Add in WordPress

Use the **RankMath** or **Yoast SEO** plugins — they automatically generate JSON-LD for articles, products, and FAQ. For more detailed control: **Schema Pro** plugin.

---

## How Do You Tell Google You Have an Article and Who Wrote It? {#article-schema}

**Article Schema** tells Google and AI systems: this page is an article/tutorial/blog post, here's who wrote it, when, and what it's about. Without it, AI treats your content as "unknown document without context."

### Why It Matters

- **E-E-A-T authority** — connects content to a real author
- **Freshness** — \`dateModified\` shows when it was updated (Perplexity checks this)
- **LLM citation** — AI systems are trained to recognize Article Schema
- **Rich Results** — potential for Article rich snippet in Google News/Discover

### Required vs. Recommended Fields

| Field | Type | Required? |
|-------|------|-----------|
| \`@type\` | Article / BlogPosting / NewsArticle | Yes |
| \`headline\` | Text (up to 110 chars) | Yes |
| \`datePublished\` | ISO date (YYYY-MM-DD) | Yes |
| \`author\` | Person object | Yes |
| \`dateModified\` | ISO date | Recommended |
| \`description\` | Text | Recommended |
| \`image\` | Image URL | Recommended |
| \`publisher\` | Organization object | Recommended |
| \`mainEntityOfPage\` | Page URL | Recommended |
| \`wordCount\` | Number | Optional |
| \`inLanguage\` | Language code (en, bg) | Optional |

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Optimize for AI Overviews — Complete Guide 2025",
  "description": "Complete guide to optimizing content for Google AI Overviews with specific techniques and examples.",
  "datePublished": "2025-01-15",
  "dateModified": "2025-06-01",
  "author": {
    "@type": "Person",
    "name": "John Smith",
    "url": "https://example.com/about",
    "image": "https://example.com/images/john-smith.jpg",
    "sameAs": [
      "https://linkedin.com/in/johnsmith"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI SEO Academy",
    "url": "https://example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/tutorials/ai-overviews"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/images/ai-overviews-guide.jpg",
    "width": 1200,
    "height": 630
  },
  "wordCount": 3500,
  "inLanguage": "en",
  "about": {
    "@type": "Thing",
    "name": "Google AI Overviews"
  }
}
\`\`\`

### BlogPosting vs. Article — When to Use Which

| Type | When to Use |
|------|------------|
| \`Article\` | Informational articles, tutorials, guides |
| \`BlogPosting\` | Blog posts, opinions, news |
| \`NewsArticle\` | Breaking news, time-sensitive articles |
| \`TechArticle\` | Technical guides, documentation |

> **Critical:** \`dateModified\` must be updated with every significant content change. Perplexity and Google check freshness — a stale \`dateModified\` = outdated content in AI's eyes.

---

## How Do You Appear Directly in Google With Ready-Made Answers? {#faqpage-schema}

**FAQPage Schema** is the most powerful tool for AI visibility. It gives Google AI Overview and LLM systems question-answer pairs in the ideal format for synthesis — ready to be included directly in the AI answer.

### Why It's the Most Important Schema for AI

The 2024 Columbia and Princeton study found that FAQPage Schema increases AI citation likelihood by **2.6x**. The reason: AI systems are trained to recognize and synthesize Q&A formats. FAQPage is literally a "pre-formatted answer" for AI.

### How AI Overview Uses It

\`\`\`
User asks: "How long does GEO optimization take?"
        ↓
Google AI Overview scans FAQPage Schema of top sites
        ↓
Finds: Question: "How long does GEO take?" → Answer: "4-8 weeks..."
        ↓
Includes this Q&A pair directly in the AI Overview answer
        ↓
Your site is cited as a source bubble
\`\`\`

### Required vs. Recommended Fields

| Field | Type | Required? |
|-------|------|-----------|
| \`@type\` | FAQPage | Yes |
| \`mainEntity\` | Array of Question objects | Yes |
| \`Question.@type\` | Question | Yes |
| \`Question.name\` | Question text | Yes |
| \`Question.acceptedAnswer\` | Answer object | Yes |
| \`Answer.@type\` | Answer | Yes |
| \`Answer.text\` | Answer text | Yes |

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is GEO optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO (Generative Engine Optimization) is the practice of optimizing web content to be cited by AI systems like ChatGPT, Google Gemini, and Perplexity. Unlike SEO, GEO optimizes for AI-generated answers, not Google ranking positions. Key techniques include answer-first structure, statistics with cited sources, and FAQPage Schema markup."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from GEO optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Results vary by platform: Perplexity responds within 2-4 weeks of publishing. Google AI Overview — 4-8 weeks. ChatGPT and Claude (without Browse) — slower, as it depends on the model's next training cycles. On average, you see measurable changes within 1-3 months."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need Schema markup for GEO optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FAQPage Schema is strongly recommended for GEO — it increases AI citation likelihood by 2.6x. Article Schema is mandatory for every article. Without Schema, AI systems can still read the content, but structured data significantly helps them understand context and cite the precise parts."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between GEO and classic SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Classic SEO optimizes for ranking in Google (position #1-10 in blue links). GEO optimizes for citation in AI-generated answers. SEO measures position and CTR; GEO measures AI citation rate. They are complementary — good SEO position (top 20) is nearly a prerequisite for AI citation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I check if my content is cited in AI systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manual testing: ask ChatGPT, Perplexity, and Gemini questions from your niche and see if they cite your site. Google Search Console shows AI Overview appearances. Tools like SE Ranking and Semrush offer automated AI tracking for specific keywords."
      }
    }
  ]
}
\`\`\`

### Rules for Good FAQPage Answers

**Length:** 50-200 words per answer. Shorter — not informative enough. Longer — AI struggles to synthesize it.

**Self-contained:** Every answer must be complete without context from others. AI extracts Q&A pairs individually.

**No references:** Never:
\`\`\`
❌ "Find more information in our GEO article."
✅ "GEO is the practice of optimizing web content for AI systems.
   It includes answer-first structure, statistics with sources, and FAQ sections with Schema."
\`\`\`

**Number of questions:** Minimum 5, maximum 15. Under 5 — too little data. Over 15 — Google rarely shows all as Rich Results.

**Realistic questions:** Use real user questions — check Google Suggest, People Also Ask, and forums.

---

## How Do You Introduce Your Organization to Google? {#organization-schema}

**Organization Schema** is the "digital passport" of a business. It tells Google and AI systems who the business is, what it does, how to find it, and which are its official profiles. Without it, Google struggles to build a Knowledge Panel for the business.

### Why It Matters for AI Visibility

- Direct pipeline to the **Knowledge Graph** — the foundation of entity recognition
- Without Organization Schema, AI systems cannot "connect" mentions of the business from different sites
- The **sameAs** field is critical — it links the official site to all profiles on the internet

### Required vs. Recommended Fields

| Field | Type | Required? |
|-------|------|-----------|
| \`@type\` | Organization | Yes |
| \`name\` | Official name | Yes |
| \`url\` | Main URL | Yes |
| \`description\` | 150-300 characters | Recommended |
| \`telephone\` | International format | Recommended |
| \`email\` | Official email | Recommended |
| \`address\` | PostalAddress object | Recommended |
| \`sameAs\` | Array of URLs | Recommended |
| \`foundingDate\` | Year | Optional |
| \`logo\` | ImageObject | Optional |

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example Company LLC",
  "url": "https://example.com",
  "description": "Accounting and tax consulting for small and medium businesses. Specialized in LLC registration, tax planning, and VAT optimization.",
  "telephone": "+1-555-123-4567",
  "email": "info@example.com",
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "New York",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "logo": {
    "@type": "ImageObject",
    "url": "https://example.com/logo.png",
    "width": 200,
    "height": 60
  },
  "sameAs": [
    "https://www.linkedin.com/company/example-company",
    "https://www.facebook.com/examplecompany",
    "https://twitter.com/examplecompany",
    "https://www.instagram.com/examplecompany"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  }
}
\`\`\`

### Critical Rule for \`name\`

\`\`\`
❌ "name": "Example Company - Best Accounting Services NYC - Top CPA 2025"
✅ "name": "Example Company LLC"
\`\`\`

\`name\` = the exact official business name. No keywords, no description. Keywords go in \`description\`.

### \`sameAs\` — Why It's Critical

\`sameAs\` links the official website to all profiles on the internet. When AI sees a mention of "Example Company" in an article, it checks \`sameAs\` to confirm it's the same company. Without \`sameAs\` — fragmented identity.

Add to \`sameAs\`: LinkedIn company, Facebook page, Instagram profile, Google Business Profile URL, Wikidata (if applicable), any business directories.

---

## How Do You Show Price, Availability, and Ratings Directly in Results? {#product-schema}

**Product Schema** is mandatory for online stores. It tells Google exactly what the product is, how much it costs, whether it's in stock, and what the ratings are. Without it, your products are invisible to Google Shopping AI.

### Why It Matters

- **Google Shopping** — without Product Schema, the product doesn't appear in the Shopping Tab
- **Merchant Center** — Product Schema + Merchant Center feed = full ecommerce visibility
- **AI shopping** — AI agents (ChatGPT Shopping, Gemini Shopping) read Product Schema
- **Rich Results** — price, availability, and stars directly in Google results

### Required vs. Recommended Fields

| Field | Type | Required for Rich Results? |
|-------|------|--------------------------|
| \`@type\` | Product | Yes |
| \`name\` | Text | Yes |
| \`description\` | Text | Recommended |
| \`image\` | URL or ImageObject | Yes |
| \`offers\` | Offer object | Yes (for price) |
| \`offers.price\` | Number | Yes |
| \`offers.priceCurrency\` | Currency code (USD, EUR) | Yes |
| \`offers.availability\` | schema.org/InStock etc. | Recommended |
| \`aggregateRating\` | AggregateRating object | Recommended |
| \`brand\` | Brand object | Recommended |
| \`sku\` | Text | Optional |
| \`gtin13\` | EAN barcode | Optional |

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ProSound X3 Wireless Headphones",
  "description": "Wireless Bluetooth headphones with active noise cancellation, 30-hour battery, and Hi-Fi sound. Perfect for working from home and travel.",
  "image": [
    "https://store.example.com/images/prosound-x3-front.jpg",
    "https://store.example.com/images/prosound-x3-side.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "ProSound"
  },
  "sku": "PSX3-BLK-001",
  "gtin13": "5901234123457",
  "offers": {
    "@type": "Offer",
    "url": "https://store.example.com/products/prosound-x3",
    "price": "129.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "priceValidUntil": "2025-12-31",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 5,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "234",
    "bestRating": "5",
    "worstRating": "1"
  }
}
\`\`\`

### Availability Values

| Value | Meaning |
|-------|---------|
| \`schema.org/InStock\` | In stock |
| \`schema.org/OutOfStock\` | Out of stock |
| \`schema.org/PreOrder\` | Pre-order |
| \`schema.org/Discontinued\` | Discontinued |
| \`schema.org/LimitedAvailability\` | Limited stock |

> **Important:** Google requires \`offers\` with a price for Product Rich Results. Without it — you get only a basic rich result, without price and availability.

---

## How Do You Format Step-by-Step Instructions So Google Understands Them? {#howto-schema}

**HowTo Schema** is ideal for "how to do X" guides. It tells Google and AI that the page contains step-by-step instructions. Google can show the steps directly in SERP — without the user clicking.

### Why It Matters

- **AI Overview** — step-by-step guides with HowTo Schema are more easily included in AI synthesized answers
- **Rich Results** — Google shows steps in SERP (image carousel for mobile)
- **Voice Search** — AI assistants (Google Assistant, Siri) read HowTo for voice instructions

### Required vs. Recommended Fields

| Field | Type | Required? |
|-------|------|-----------|
| \`@type\` | HowTo | Yes |
| \`name\` | Guide title | Yes |
| \`step\` | Array of HowToStep objects | Yes |
| \`step.@type\` | HowToStep | Yes |
| \`step.name\` | Short step title | Yes |
| \`step.text\` | Step description | Yes |
| \`description\` | General description | Recommended |
| \`totalTime\` | ISO 8601 duration | Recommended |
| \`estimatedCost\` | MonetaryAmount | Optional |
| \`step.image\` | Step image | Optional |
| \`tool\` | Array of HowToTool | Optional |

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add Organization Schema to a Website",
  "description": "Step-by-step guide for implementing Organization Schema with JSON-LD in an HTML page.",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Text editor (VS Code or Notepad++)"
    },
    {
      "@type": "HowToTool",
      "name": "Google Rich Results Test"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Gather official business data",
      "text": "Prepare: the official business name, exact address, phone in international format (+1...), email, and URLs of all social profiles (LinkedIn, Facebook, Instagram)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Copy the template and fill in your data",
      "text": "Copy the JSON-LD template for Organization Schema. Replace the placeholder data with the real business data. Verify that name is the exact official name without additional keywords."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Place JSON-LD in <head> of the homepage",
      "text": "Open the homepage HTML file (index.html or equivalent). In the <head> section, add: <script type='application/ld+json'> followed by the JSON code and </script>. If using WordPress — add via plugin or functions.php."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Validate with Rich Results Test",
      "text": "Open search.google.com/test/rich-results. Enter the homepage URL. Check for errors (red) and warnings (yellow). Zero errors = Schema is valid."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Wait and check in Search Console",
      "text": "Google processes new Schema within 1-4 weeks. Check in Google Search Console → Enhancements to see if it's been recognized."
    }
  ]
}
\`\`\`

### \`totalTime\` Formatting

HowTo Schema uses ISO 8601 duration format:

| Code | Meaning |
|------|---------|
| \`PT30M\` | 30 minutes |
| \`PT1H\` | 1 hour |
| \`PT1H30M\` | 1 hour 30 minutes |
| \`P1D\` | 1 day |

---

## How Do You Show Google and Users Where They Are on Your Site? {#breadcrumb-schema}

**BreadcrumbList Schema** shows Google and AI systems how the page fits into the site's hierarchy. It helps with understanding topical authority and shows the "Home → Category → Page" path directly in Google results.

### Why It Matters

- **Topical authority** — shows AI that the page is part of a larger thematic structure
- **Rich Results** — Google shows the breadcrumb path instead of URL in results
- **User experience** — helps users understand site structure

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tutorials",
      "item": "https://example.com/tutorials"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Structured Data",
      "item": "https://example.com/tutorials/structured-data"
    }
  ]
}
\`\`\`

### Rules for BreadcrumbList

- **position** — starts at 1, increments by 1
- **item** — the full URL of each level (including homepage)
- **Last step** — may omit \`item\` (the current page)
- Breadcrumb in Schema must match the visible breadcrumb on the page

---

## How Do You Tell Google Exactly Who You Are, Where You Are, and When You're Open? {#localbusiness-schema}

**LocalBusiness Schema** is an extension of Organization Schema specifically for physical businesses with a location. It adds opening hours, specific business type (Restaurant, DentalClinic, LegalService...), and geolocation. Critical for Local SEO and Google Maps.

### Why It Matters

- **Google Maps** — LocalBusiness Schema supports recognition in Google Maps
- **Local AI Overviews** — "Dentist near me" triggers localized AI answers
- **Knowledge Panel** — helps build a local Knowledge Panel
- **NAP consistency** — Name, Address, Phone must be identical everywhere

### Specific LocalBusiness Types

\`\`\`
LocalBusiness (general)
├── FoodEstablishment
│   ├── Restaurant
│   ├── Bakery
│   └── CafeOrCoffeeShop
├── MedicalOrganization
│   ├── DentalClinic
│   ├── MedicalClinic
│   └── Pharmacy
├── LegalService
│   ├── Attorney
│   └── Notary
├── FinancialService
│   └── AccountingService
└── Store
    ├── ClothingStore
    └── ElectronicsStore
\`\`\`

### Complete JSON-LD Example (Copy-Paste Ready)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Bright Smile Dental Center",
  "description": "Modern dental clinic in downtown. Specialized in implantology, orthodontics, and aesthetic dentistry.",
  "url": "https://brightsmile.example.com",
  "telephone": "+1-555-987-6543",
  "email": "info@brightsmile.example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "456 Oak Avenue",
    "addressLocality": "Chicago",
    "postalCode": "60601",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.8781,
    "longitude": -87.6298
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card, Cash",
  "hasMap": "https://maps.google.com/?cid=1234567890",
  "sameAs": [
    "https://www.facebook.com/brightsmile",
    "https://www.instagram.com/brightsmile",
    "https://g.co/kgs/brightsmile"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "187"
  }
}
\`\`\`

> **NAP rule:** Name, Address, Phone in Schema must be **identical** to Google Business Profile and all directories. Even minor differences (St. vs Street) confuse AI systems.

---

## What Are Rich Results and How Does Your Site Look With Them? {#rich-results}

**Rich Results** are the special visual elements Google shows in search results when Schema markup is correctly implemented. They are not guaranteed — Google decides when to show them.

### Types of Rich Results by Schema Type

| Schema Type | Rich Result | Appearance |
|------------|------------|------------|
| FAQPage | FAQ accordion | Questions expanding below result |
| Product | Product snippet | Price, availability, stars in SERP |
| Article | Article snippet | Image, author, date in News/Discover |
| HowTo | HowTo snippet | Steps with images in mobile SERP |
| Recipe | Recipe card | Image, rating, calories |
| LocalBusiness | Knowledge Panel | Info panel on the right |
| BreadcrumbList | Breadcrumb path | Path instead of URL below the title |
| Event | Event snippet | Date, location, price of event |
| JobPosting | Job listing | Job listings with details |

### What a FAQ Rich Result Looks Like

\`\`\`
[Page Title]                                      example.com
Page description...

▼ What is GEO optimization?
  GEO is the practice of optimizing content for AI systems...

▼ How long does GEO optimization take?
  Perplexity — 2-4 weeks, Google AI Overview — 4-8 weeks...

▼ Do I need Schema markup for GEO?
  FAQPage Schema increases AI citation by 2.6x...
\`\`\`

### Requirements for Rich Results

Google doesn't give Rich Results automatically. It requires:

1. **Valid Schema** — zero errors in Rich Results Test
2. **Match with visible content** — Schema must reflect actual text
3. **Site authority** — new or low-quality sites rarely get Rich Results
4. **Appropriate query** — Rich Results only shown for relevant queries
5. **E-E-A-T** — Google is stricter for health, finance, and legal topics

### Rich Results vs. AI Visibility — the Difference

\`\`\`
Rich Results = visual effect in Google SERP
AI Visibility = citation in AI-generated answers

Schema helps with both — but in different ways.
Rich Results: Google validates Schema and decides to show special format
AI Visibility: AI systems read Schema for better understanding when citing
\`\`\`

---

## How Do You Check Whether Your Schema Markup Is Working? {#validation-tools}

Validation is mandatory after every Schema implementation. Invalid Schema is ignored by Google.

### Tool 1: Google Rich Results Test (Mandatory)

**URL:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

**What it does:** Checks if the page is eligible for Google Rich Results. Simulates how Googlebot sees the page.

**Steps:**
\`\`\`
1. Open search.google.com/test/rich-results
2. Choose "URL" and enter the page address
   (Or "Code snippet" to test JSON-LD directly)
3. Click "Test URL" / "Test code"
4. Check the results:
   - Detected items: which Schema types were found
   - Errors (red): Schema is invalid — needs fixing
   - Warnings (yellow): Schema is valid, but recommended fields are missing
   - Valid items (green): Schema is correct and eligible for Rich Results
\`\`\`

**Note:** Just because it's "Valid" doesn't mean you'll get Rich Results. Google still decides.

### Tool 2: Schema Markup Validator (Stricter)

**URL:** [validator.schema.org](https://validator.schema.org)

**What it does:** Validates Schema against official schema.org standards. Stricter than Rich Results Test — catches errors that Google Test sometimes misses.

**Steps:**
\`\`\`
1. Open validator.schema.org
2. Enter URL or paste HTML/JSON-LD code
3. Click "Run test"
4. Check:
   - Errors: mandatory to fix
   - Warnings: recommended to fix
   - Properties: shows all recognized fields
\`\`\`

### Tool 3: Google Search Console (Monitoring)

**URL:** [search.google.com/search-console](https://search.google.com/search-console)

**What it does:** Shows which pages have received Rich Results in actual Google search.

**Steps:**
\`\`\`
1. Log into Search Console
2. Select your site
3. Navigate to: Enhancements (in the left menu)
4. See the list: FAQs, Articles, Products, HowTo...
5. Click on a type to see:
   - Valid: pages with active Rich Results
   - Valid with warnings: Rich Results, but with missing fields
   - Error: issues blocking Rich Results
\`\`\`

### Tool 4: JSON-LD Validator (For Syntax)

**URL:** [jsonlint.com](https://jsonlint.com) or [jsonformatter.org](https://jsonformatter.org)

**What it does:** Checks whether JSON syntax is correct (closed brackets, commas...). If JSON is invalid — Rich Results Test won't read it correctly either.

### Tool 5: Perplexity Test (For AI Visibility)

**URL:** [perplexity.ai](https://perplexity.ai)

**What it does:** Real test of whether an AI system cites your site.

**Steps:**
\`\`\`
1. Ask Perplexity a question from your site's FAQ section
   Example: "What is GEO optimization?" (if you have an article on GEO)
2. Check the answer:
   - Does the text resemble your FAQPage answers?
   - Is your site cited in the Sources?
3. If not cited — check Schema validation and SEO position
\`\`\`

### Summary Table of Tools

| Tool | Use | Price |
|------|-----|-------|
| Rich Results Test | Eligibility for Rich Results | Free |
| Schema Markup Validator | Strict Schema validation | Free |
| Google Search Console | Active Rich Results monitoring | Free |
| JSON Lint | JSON syntax check | Free |
| Perplexity | Real AI citation test | Freemium |
| SE Ranking | Automated Schema and AI tracking | ~$55/mo |

---

## What Mistakes Do Most People Make With Schema Markup? {#common-mistakes}

### Mistake 1: Keywords in the \`name\` Field

\`\`\`json
❌ "name": "Example Accounting - Best Accounting Services NYC - Top CPA 2025"
✅ "name": "Example Accounting LLC"
\`\`\`

**Why it's wrong:** \`name\` must be the exact official name. Keywords in \`name\` are a spam signal and can lead to a Manual Penalty. Put keywords in \`description\`.

---

### Mistake 2: Stale \`dateModified\`

\`\`\`json
❌ "dateModified": "2022-03-15"  // Not updated in 3 years!
✅ "dateModified": "2025-06-01"  // Reflects the last actual update
\`\`\`

**Why it's wrong:** Perplexity and Google AI Overview treat old \`dateModified\` as outdated content. For time-sensitive topics (technology, AI, health) this is critical. Update with every significant content change.

---

### Mistake 3: FAQ Answers That Reference the Article

\`\`\`json
❌ "text": "For more information, read our GEO optimization article."
✅ "text": "GEO is the practice of optimizing web content for AI systems.
   Key techniques include answer-first structure, statistics with sources,
   FAQPage Schema markup, and topical coverage. Time to results: 4-8 weeks."
\`\`\`

**Why it's wrong:** AI systems extract Q&A pairs individually. An answer saying "see our article" is useless out of context.

---

### Mistake 4: Schema Without Corresponding Visible Content

\`\`\`
❌ FAQPage Schema with 10 questions, but the page has no visible FAQ section
✅ FAQPage Schema reflects actual questions and answers visible on the page
\`\`\`

**Why it's wrong:** Google requires Schema to reflect visible content. Mismatch = Manual Penalty risk.

---

### Mistake 5: Invalid JSON Syntax

\`\`\`json
❌ {
  "@context": "https://schema.org",
  "@type": "Article"
  "headline": "Title"   // Missing comma after Article!
}

✅ {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Title"
}
\`\`\`

**Why it's wrong:** Invalid JSON = Schema is completely ignored. Validate with JSON Lint before publishing.

---

### Mistake 6: Only Organization Schema on the Entire Site

\`\`\`
❌ Organization Schema only on the homepage, nothing elsewhere
✅ Organization on homepage + Article on every article + FAQPage on key pages
\`\`\`

**Why it's wrong:** Every important page needs appropriate Schema. A single Schema on the homepage doesn't help articles and product pages.

---

### Mistake 7: Incorrect \`@type\`

\`\`\`json
❌ "@type": "Blog"          // Doesn't exist in schema.org
❌ "@type": "WebContent"    // Doesn't exist
✅ "@type": "BlogPosting"   // Correct type for blog posts
✅ "@type": "Article"       // For articles and tutorials
\`\`\`

**Why it's wrong:** Non-existent \`@type\` values are ignored. Check schema.org for correct types.

---

### Mistake 8: Incomplete \`sameAs\` Data

\`\`\`json
❌ "sameAs": ["https://linkedin.com"]   // Only the homepage, not the profile!
✅ "sameAs": ["https://linkedin.com/company/mycompany"]   // The specific profile
\`\`\`

**Why it's wrong:** \`sameAs\` must point to the specific profile, not the platform's homepage.

---

## Is Your Site's Schema Markup Ready? Complete Checklist {#schema-checklist}

### Mandatory for Every Site (Do This Now)

- [ ] **Organization Schema on homepage** — with \`name\`, \`url\`, \`description\`, \`telephone\`, \`address\`
- [ ] **\`sameAs\` array** — LinkedIn, Facebook, Instagram, all directories
- [ ] **NAP consistency** — Name, Address, Phone identical in Schema, GBP, and site
- [ ] **BreadcrumbList Schema** — on every internal page (not homepage)
- [ ] **Validation with Rich Results Test** — 0 errors

### For Every Article / Tutorial / Blog Post

- [ ] **Article Schema** — with \`headline\`, \`datePublished\`, \`dateModified\`, \`author\`
- [ ] **Author (Person) Schema** — with \`name\`, \`url\`, \`sameAs\` (LinkedIn minimum)
- [ ] **FAQPage Schema** — minimum 5 question-answers (50-200 words/answer)
- [ ] **Answers are complete** — don't reference the article, self-contained
- [ ] **\`dateModified\` is current** — updated at last content change

### For Ecommerce Sites

- [ ] **Product Schema** — on every product page with \`offers\`, \`price\`, \`availability\`
- [ ] **AggregateRating** — if you have real reviews
- [ ] **BreadcrumbList** — for every product page

### For Local Businesses

- [ ] **LocalBusiness Schema** (or specific type: DentalClinic, Restaurant...)
- [ ] **\`openingHoursSpecification\`** — correct opening hours
- [ ] **\`geo\`** — GPS coordinates
- [ ] **\`aggregateRating\`** — if you have Google Reviews

### For Step-by-Step Guides

- [ ] **HowTo Schema** — with minimum 3 steps
- [ ] **\`totalTime\`** — in ISO 8601 format
- [ ] **Every step has \`name\` and \`text\`**

### Validation (After Every Change)

- [ ] **JSON Lint** — 0 JSON syntax errors
- [ ] **Rich Results Test** — 0 errors, minimum warnings
- [ ] **Schema Markup Validator** — 0 errors
- [ ] **Search Console → Enhancements** — checked after 1-2 weeks

### Monitoring (Monthly)

- [ ] **Search Console** — any new errors in Enhancements?
- [ ] **\`dateModified\`** — updated for all revised articles
- [ ] **Perplexity test** — am I cited for key questions?
- [ ] **New Schema types** — added for new content types?`,
  },
  faq: [
    {
      question: {
        bg: "Трябва ли да добавям Schema на всяка страница?",
        en: "Do I need to add Schema to every page?",
      },
      answer: {
        bg: "Не на всяка, но на ключовите — задължително. Приоритизирай: главницата (Organization Schema), всяка статия и урок (Article + FAQPage), всяка продуктова страница (Product Schema). По-малко важните страниции (Контакти, Политика за поверителност) не са приоритет. Фокусирай се там, където имаш ценно съдържание, което искаш AI системите да цитират.",
        en: "Not every page, but key ones — absolutely. Prioritize: homepage (Organization Schema), every article and tutorial (Article + FAQPage), every product page (Product Schema). Less important pages (Contact, Privacy Policy) are not a priority. Focus where you have valuable content you want AI systems to cite.",
      },
    },
    {
      question: {
        bg: "Ще получа ли Rich Results веднага след добавяне на Schema?",
        en: "Will I get Rich Results immediately after adding Schema?",
      },
      answer: {
        bg: "Не е гарантирано и не е незабавно. Schema е необходимо, но не достатъчно условие. Google решава кога да показва Rich Results въз основа на: качество на съдържанието, авторитет на сайта, и подходяща заявка. FAQPage Schema е по-склонна да задейства Rich Results за информационни заявки. Article Schema рядко дава видим Rich Result в SERP, но подобрява AI разбирането значително. Изчаквай 1-4 седмици за обработка.",
        en: "Not guaranteed and not immediate. Schema is a necessary but not sufficient condition. Google decides when to show Rich Results based on: content quality, site authority, and query suitability. FAQPage Schema is more likely to trigger Rich Results for informational queries. Article Schema rarely gives a visible Rich Result in SERP, but significantly improves AI understanding. Expect 1-4 weeks for processing.",
      },
    },
    {
      question: {
        bg: "Може ли Schema да навреди на сайта ако е грешна?",
        en: "Can Schema harm the site if it's wrong?",
      },
      answer: {
        bg: "Невалидна Schema (грешки в JSON синтаксиса) не наказва сайта — просто се игнорира от Google. Обаче Schema, която умишлено описва неща, несъответстващи на реалното съдържание (т.нар. 'spam Schema' или 'misleading Schema') може да доведе до Manual Penalty от Google. Правилото е просто: Schema трябва да отразява точно видимото съдържание на страницата. Не добавяй FAQPage Schema ако страницата няма FAQ секция.",
        en: "Invalid Schema (JSON syntax errors) doesn't penalize the site — it's simply ignored by Google. However, Schema that deliberately describes things not matching actual content ('spam Schema' or 'misleading Schema') can lead to a Manual Penalty from Google. The rule is simple: Schema must accurately reflect the visible content on the page. Don't add FAQPage Schema if the page has no FAQ section.",
      },
    },
    {
      question: {
        bg: "Каква е разликата между Schema.org и Open Graph (OG) тагове?",
        en: "What's the difference between Schema.org and Open Graph (OG) tags?",
      },
      answer: {
        bg: "Open Graph тагове (og:title, og:description, og:image) контролират как страницата изглежда при споделяне в социалните мрежи (Facebook, LinkedIn, Twitter). Schema.org (JSON-LD) казва на търсачките и AI системите какво е страницата семантично. Двете са различни системи с различни цели — трябва да имаш и двете. OG таговете не влияят на AI видимостта в търсачките. Schema.org не влияе на споделянето в социалните мрежи.",
        en: "Open Graph tags (og:title, og:description, og:image) control how the page looks when shared on social media (Facebook, LinkedIn, Twitter). Schema.org (JSON-LD) tells search engines and AI systems what the page is semantically. They are different systems with different purposes — you should have both. OG tags don't affect AI visibility in search engines. Schema.org doesn't affect social media sharing.",
      },
    },
    {
      question: {
        bg: "Колко FAQPage въпроса трябва да имам за да получа Rich Results?",
        en: "How many FAQPage questions do I need to get Rich Results?",
      },
      answer: {
        bg: "Google изисква минимум 2 въпроса за да покаже FAQ Rich Results. На практика препоръчвам минимум 5 въпроса за по-добри резултати и по-пълно AI покритие. Максимум: Google показва до 3-4 въпроса в SERP (останалите са скрити), но всички се четат от AI. Оптималният диапазон е 5-10 въпроса. Над 15 — не добавя значителна стойност.",
        en: "Google requires a minimum of 2 questions to show FAQ Rich Results. In practice, I recommend at least 5 questions for better results and more complete AI coverage. Maximum: Google shows up to 3-4 questions in SERP (the rest are hidden), but all are read by AI. The optimal range is 5-10 questions. Over 15 — doesn't add significant value.",
      },
    },
    {
      question: {
        bg: "JSON-LD трябва ли да е в <head> или може в <body>?",
        en: "Does JSON-LD have to be in <head> or can it be in <body>?",
      },
      answer: {
        bg: "JSON-LD може да е и в <head> и в <body> — Google обработва и двете. Традиционно се препоръчва в <head> за по-бързо парсиране. В практиката на SPA и React/Next.js приложения JSON-LD често се рендерира в <body> и Google го обработва без проблем. Важното: Schema трябва да е в rendered HTML-а (не само в JavaScript, без рендериране) — Google трябва да може да я прочете при crawler посещение.",
        en: "JSON-LD can be in both <head> and <body> — Google processes both. Traditionally recommended in <head> for faster parsing. In practice with SPAs and React/Next.js apps, JSON-LD is often rendered in <body> and Google processes it without issues. The important thing: Schema must be in the rendered HTML (not just in JavaScript without rendering) — Google must be able to read it during a crawler visit.",
      },
    },
  ],
  officialLinks: [
    {
      label: "Schema.org — официална документация",
      url: "https://schema.org",
      desc: {
        bg: "Пълна документация на всички Schema типове, свойства и примери",
        en: "Complete documentation of all Schema types, properties, and examples",
      },
    },
    {
      label: "Google Rich Results Test",
      url: "https://search.google.com/test/rich-results",
      desc: {
        bg: "Проверка дали страницата е eligible за Rich Results",
        en: "Check if the page is eligible for Rich Results",
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
    {
      label: "Google Search Console",
      url: "https://search.google.com/search-console",
      desc: {
        bg: "Мониторинг на Rich Results и Schema грешки",
        en: "Monitor Rich Results and Schema errors",
      },
    },
  ],
  relatedSlugs: ["geo-optimization", "entity-seo", "google-ai-overviews", "technical-seo-audit"],
};
